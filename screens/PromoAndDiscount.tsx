import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageSourcePropType } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';
import { Image } from 'react-native';
import { COLORS, icons } from '../constants';
import { banners } from '../data';
import BannerItem from '../components/BannerItem';

const PromoAndDiscount = () => {
  const { colors, dark } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();

  /**
   * render header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back as ImageSourcePropType}
              resizeMode='contain'
              style={[styles.backIcon, {
                tintColor: dark ? COLORS.white : COLORS.black
              }]} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, {
            color: dark ? COLORS.white : COLORS.black
          }]}>Promo & Discount</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.moreCircle as ImageSourcePropType}
            resizeMode='contain'
            style={[styles.moreIcon, {
              tintColor: dark ? COLORS.secondaryWhite : COLORS.black
            }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={banners}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <BannerItem
                discount={item.discount}
                discountName={item.discountName}
                bottomTitle={item.bottomTitle}
                bottomSubtitle={item.bottomSubtitle}
                primaryColor={item.primaryColor}
                secondaryColor={item.secondaryColor}
              />
            )}
          />
        </ScrollView>
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
    justifyContent: "space-between",
    paddingBottom: 16
  },
  scrollView: {
    backgroundColor: COLORS.tertiaryWhite
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  backIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
    marginRight: 16
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Urbanist Bold",
    color: COLORS.black
  },
  moreIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
})

export default PromoAndDiscount