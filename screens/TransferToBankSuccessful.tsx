import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, SIZES, illustrations } from '../constants';
import { Image } from 'react-native';
import Button from '../components/Button';

type Nav = {
  navigate: (value: string) => void
}

const TransferToBankSuccessful = () => {
  const { navigate } = useNavigation<Nav>();
  const { dark, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={dark ? illustrations.bankSuccessDark as ImageSourcePropType : illustrations.bankSuccess as ImageSourcePropType}
        resizeMode='contain'
        style={styles.successImage}
      />
      <Text style={[styles.title, {
        color: dark ? COLORS.white : COLORS.greyscale900
      }]}>Your $1,000 is on its way</Text>
      <View>
        <Text style={[styles.subtitle, {
          color: dark ? COLORS.white : COLORS.greyscale900
        }]}>Estimated arrival: 3 business days</Text>
        <Text style={[styles.subtitle, {
          color: dark ? COLORS.white : COLORS.greyscale900
        }]}>You are transfering money to: Bank of America</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="OK"
          style={styles.sendBtn}
          onPress={() => navigate("Home")}
          filled
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  successImage: {
    width: 340,
    height: 242
  },
  title: {
    fontSize: 28,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    marginVertical: 22,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.greyscale900,
    textAlign: 'center',
    marginTop: 6,
    marginHorizontal: 64,
    marginBottom: 12
  },
  bottomContainer: {
    position: "absolute",
    bottom: 28,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  sendBtn: {
    width: SIZES.width - 32
  }
})

export default TransferToBankSuccessful