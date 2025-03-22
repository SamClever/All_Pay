import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { Image } from 'react-native';
import { COLORS, SIZES, illustrations } from '../constants';
import Button from '../components/Button';

type Nav = {
    navigate: (value: string) => void
}

const SendMoneySuccessful = () => {
    const { navigate } = useNavigation<Nav>();
    const { colors, dark } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Image
                source={dark ? illustrations.successPaymentTypeDark : illustrations.successPaymentType}
                resizeMode='contain'
                style={styles.successImage}
            />
            <Text style={[styles.title, {
                color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Successful Sent!</Text>
            <View>
                <Text style={[styles.subtitle, {
                    color: dark ? COLORS.grayscale400 : COLORS.greyscale900
                }]}>Your money has been successfully sent to </Text>
                <Text style={[styles.subtitle, {
                    color: dark ? COLORS.grayscale400 : COLORS.greyscale900
                }]}>Christian Dawson</Text>
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
        fontSize: 32,
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
        marginTop: 6
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
        width: SIZES.width - 32,
    }
})

export default SendMoneySuccessful