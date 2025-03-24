import { View, Text, StyleSheet, TextInput, ScrollView, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { Image } from 'react-native';
import { COLORS, SIZES, icons } from '../constants';
import Button from '../components/Button';

type Nav = {
  navigate: (value: string) => void
}

const PayBillsElectricityCustomerId = () => {
  const { colors, dark } = useTheme();
  const { navigate } = useNavigation<Nav>();
  const [value, setValue] = useState<string>('');

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Electricity" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={icons.electricity as ImageSourcePropType}
                resizeMode='contain'
                style={styles.icon}
              />
            </View>
            <Text style={[styles.title, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Pay Electricity Bill</Text>
            <View style={{ marginVertical: 12 }}>
              <Text style={[styles.subtitle, {
                color: dark ? COLORS.greyscale300 : COLORS.greyScale800
              }]}>Pay electricity bills safely, conveniently & easily.</Text>
              <Text style={[styles.subtitle, {
                color: dark ? COLORS.greyscale300 : COLORS.greyScale800
              }]}>You can pay anytime and anywhere!</Text>
            </View>
            <View style={[styles.separateLine, {
              backgroundColor: dark ? COLORS.greyscale900 : COLORS.grayscale200
            }]} />
          </View>
          <Text style={[styles.idText, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Customer ID</Text>
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder='37173838939'
            style={[styles.idInput, {
              backgroundColor: dark ? COLORS.dark2 : "#FAFAFA",
              color: dark ? COLORS.white : COLORS.greyscale900,
            }]}
            placeholderTextColor={dark ? COLORS.white : COLORS.greyscale900}
          />
          <Button
            title="Continue"
            filled
            style={styles.continueBtn}
            onPress={() => navigate("PayBillsElectricityReviewSummary")}
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
  iconContainer: {
    height: 124,
    width: 124,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "rgba(255, 211, 0, .12)"
  },
  icon: {
    height: 60,
    width: 60,
    tintColor: "#FFD300"
  },
  viewContainer: {
    alignItems: "center",
    marginTop: 32
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    textAlign: "center",
    marginTop: 32
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.greyScale800,
    textAlign: "center",
  },
  separateLine: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.grayscale200,
    marginVertical: 16
  },
  idText: {
    fontSize: 20,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    marginBottom: 12
  },
  idInput: {
    width: SIZES.width - 32,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FAFAFA",
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.greyscale900,
    paddingHorizontal: 12
  },
  continueBtn: {
    marginVertical: 22
  }
})

export default PayBillsElectricityCustomerId