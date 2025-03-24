import { View, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import Header from '../components/Header';
import { COLORS, SIZES, illustrations } from '../constants';
import Button from '../components/Button';

type Nav = {
  navigate: (value: string) => void
}

const VerifyYourIdentity = () => {
  const { navigate } = useNavigation<Nav>();
  const { colors, dark } = useTheme();

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title=" " />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Let’s Verify Your Identity</Text>
          <Text style={[styles.subtitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>We want to confirm your identity before you can use our service.</Text>
          <View style={styles.identityContainer}>
            <Image
              source={dark ? illustrations.identityDark as ImageSourcePropType : illustrations.identity as ImageSourcePropType}
              resizeMode='cover'
              style={styles.identityImage}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Verify Identity"
          filled
          style={styles.button}
          onPress={() => navigate("ProofAndResidency")}
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
    padding: 16,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 28,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    textAlign: "center",
    marginVertical: 22
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.greyscale900,
    textAlign: "center",
    paddingHorizontal: 3
  },
  button: {
    marginTop: 12,
    width: SIZES.width - 32,
    borderRadius: 32
  },
  bottomContainer: {
    position: "absolute",
    bottom: 28,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  identityContainer: {
    marginVertical: 72,
    alignItems: "center"
  },
  identityImage: {
    height: 350,
    width: 363
  }
})

export default VerifyYourIdentity