import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { Image } from 'react-native';
import { COLORS, SIZES, icons, images } from '../constants';
import Button from '../components/Button';

type Nav = {
    navigate: (value: string) => void
}

const UserAllPay = () => {
    const { navigate } = useNavigation<Nav>();
    const { colors, dark } = useTheme();

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <TouchableOpacity
                    style={styles.backIconContainer}>
                    <Image
                        source={icons.back as ImageSourcePropType}
                        resizeMode='contain'
                        style={[styles.backIcon, {
                            tintColor: dark ? COLORS.white : COLORS.greyscale900
                        }]}
                    />
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <Image
                        source={images.user3}
                        resizeMode='contain'
                        style={styles.avatar}
                    />
                    <Text style={[styles.name, {
                        color: dark ? COLORS.white : COLORS.greyscale900
                    }]}>Jenny Wilson</Text>
                    <Text style={styles.userlink}>https://allpay.domain/JennyWilson</Text>
                    <Text style={[styles.useremail, {
                        color: dark ? COLORS.grayscale200 : COLORS.greyscale900
                    }]}>jenny_wilson@yourdomain.com</Text>
                    <Text style={[styles.username, {
                        color: dark ? COLORS.grayscale200 : COLORS.greyscale900,
                    }]}>@jenny_wilson</Text>
                </View>
            </View>
            
            <View style={styles.bottomContainer}>
                <Button
                    title="Send Money"
                    style={styles.sendBtn}
                    onPress={() => navigate("SendMoneyTypeAmount")}
                    filled
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
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.greyscale900
    },
    backIconContainer: {
        position: "absolute",
        top: 6,
        left: 16
    },
    avatarContainer: {
        alignItems: "center",
    },
    avatar: {
        height: 160,
        width: 160,
        borderRadius: 999
    },
    name: {
        fontSize: 32,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginVertical: 12
    },
    userlink: {
        fontSize: 16,
        fontFamily: "Urbanist Medium",
        color: COLORS.primary,
        marginVertical: 8
    },
    useremail: {
        fontSize: 16,
        fontFamily: "Urbanist Regular",
        color: COLORS.greyscale900
    },
    username: {
        fontSize: 16,
        fontFamily: "Urbanist Regular",
        color: COLORS.greyscale900,
        marginTop: 8
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

export default UserAllPay