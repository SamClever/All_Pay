import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, ImageSourcePropType } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { AnalyticsMonthV2, AnalyticsQuarterV2, AnalyticsYearToYearV2, AnalyticsYearV2 } from '../tabs';
import { COLORS, SIZES, icons, images } from '../constants';
import { Image } from 'react-native';

const renderScene = SceneMap({
  first: AnalyticsMonthV2,
  second: AnalyticsQuarterV2,
  third: AnalyticsYearV2,
  fourth: AnalyticsYearToYearV2
});

type Nav = {
  navigate: (value: string) => void
}

interface Route {
  key: string;
  title: string;
}

const StatisticsVersion2 = () => {
  const { navigate } = useNavigation<Nav>();
  const { colors, dark } = useTheme();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Month' },
    { key: 'second', title: 'Quarter' },
    { key: 'third', title: 'Year' },
    { key: 'fourth', title: 'YTY' }
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary,
      }}
      activeColor={COLORS.primary}
      inactiveColor={dark ? COLORS.white : COLORS.greyscale900}
      style={{
        backgroundColor: dark ? COLORS.dark1 : COLORS.white,
      }}
      renderLabel={({ route, focused }: { route: Route; focused: boolean }) => (
        <Text style={[{
          color: focused ? COLORS.primary : 'gray',
          fontSize: 16,
          fontFamily: "Urbanist Bold"
        }]}>
          {route.title}
        </Text>
      )}
    />
  );

  /**
   * render header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Image
            source={images.logo as ImageSourcePropType}
            resizeMode='contain'
            style={styles.headerLogo}
          />
          <Text style={[styles.headerTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Analytics</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => navigate("InvoiceSettings")}>
            <Image
              source={icons.moreCircle as ImageSourcePropType}
              resizeMode='contain'
              style={[styles.searchIcon, {
                tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    marginBottom: 12
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerLogo: {
    height: 24,
    width: 24,
    tintColor: COLORS.primary
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
    marginLeft: 12
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  moreCircleIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
    marginLeft: 12
  },
})

export default StatisticsVersion2