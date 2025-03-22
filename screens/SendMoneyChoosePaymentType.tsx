import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import Header from '../components/Header';
import { COLORS, SIZES, icons, illustrations } from '../constants';
import { Image } from 'react-native';
import Button from '../components/Button';

type Nav = {
    navigate: (value: string) => void
}

const SendMoneyChoosePaymentType = () => {
    const { navigate } = useNavigation<Nav>();
    const { colors, dark } = useTheme();
    const [selectedPaymentType, setSelectedPaymentType] = useState<any>(null);

    const handleSelection = (type: any) => {
        setSelectedPaymentType(type)
    };

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Header title=" " />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.view}>
                        <Text style={[styles.title, {
                            color: dark ? COLORS.white : COLORS.greyscale900
                        }]}>Choose a Payment Type</Text>
                        <Text style={[styles.subtitle, {
                            color: dark ? COLORS.grayscale400 : COLORS.greyscale900
                        }]}>We will save this for all payments to Christian Dawson. You can change this on the review screen.</Text>
                    </View>
                    <View style={[styles.separateLine, {
                        backgroundColor: dark ? COLORS.grayscale700 : COLORS.grayscale200
                    }]} />
                    <View>
                        <TouchableOpacity
                            style={[
                                styles.paymentTypeItemContainer,
                                selectedPaymentType === 'goodsServices' && { borderColor: COLORS.primary, borderWidth: 3 },
                                { borderColor: dark ? COLORS.grayscale700 : COLORS.grayscale200 }
                            ]}
                            onPress={() => handleSelection('goodsServices')}>
                            <View style={styles.checkBoxContainer}>
                                {selectedPaymentType === 'goodsServices' && (
                                    <Image
                                        source={icons.checkBox as ImageSourcePropType}
                                        resizeMode='cover'
                                        style={styles.checkBoxIcon}
                                    />
                                )}
                            </View>
                            <Image
                                source={dark ? illustrations.servicesDark as ImageSourcePropType : illustrations.services as ImageSourcePropType}
                                resizeMode='cover'
                                style={styles.paymentImage}
                            />
                            <View style={styles.viewContainer}>
                                <Text style={[styles.paymentTitle, {
                                    color: dark ? COLORS.white : COLORS.black
                                }]}>For goods and</Text>
                                <Text style={[styles.paymentTitle, {
                                    color: dark ? COLORS.white : COLORS.black
                                }]}>services</Text>
                                <Text style={[styles.paymentSubtitle, {
                                    color: dark ? COLORS.grayscale400 : COLORS.greyScale800,
                                }]}>
                                    Get a full refund if an eligible item gets lost or damaged. Seller pays a small fee.
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.paymentTypeItemContainer,
                                selectedPaymentType === 'friendsFamily' && { borderColor: COLORS.primary, borderWidth: 3 },
                                { borderColor: dark ? COLORS.grayscale700 : COLORS.grayscale200 }
                            ]}
                            onPress={() => handleSelection('friendsFamily')}>
                            <View style={styles.checkBoxContainer}>
                                {
                                    selectedPaymentType === 'friendsFamily' && (
                                        <Image
                                            source={icons.checkBox as ImageSourcePropType}
                                            resizeMode='cover'
                                            style={styles.checkBoxIcon}
                                        />
                                    )
                                }
                            </View>
                            <Image
                                source={dark ? illustrations.friendsDark : illustrations.friends}
                                resizeMode='cover'
                                style={styles.paymentImage}
                            />
                            <View style={styles.viewContainer}>
                                <Text style={[styles.paymentTitle, {
                                    color: dark ? COLORS.white : COLORS.black
                                }]}>For Friends and</Text>
                                <Text style={[styles.paymentTitle, {
                                    color: dark ? COLORS.white : COLORS.black
                                }]}>Family</Text>
                                <Text style={[styles.paymentSubtitle, {
                                    color: dark ? COLORS.grayscale400 : COLORS.greyScale800,
                                }]}>
                                    Purchase protection doesn’t apply for this payment.
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <Button
                    title="Continue"
                    style={styles.sendBtn}
                    onPress={() => navigate("SendMoneyReviewSummary")}
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
    },
    title: {
        fontSize: 28,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        fontFamily: "Urbanist Regular",
        color: COLORS.greyscale900,
        marginVertical: 16,
        textAlign: "center",
        marginHorizontal: 16,
    },
    view: {
        marginVertical: 12
    },
    separateLine: {
        width: "100%",
        height: 1,
        backgroundColor: COLORS.grayscale200
    },
    paymentTypeItemContainer: {
        flexDirection: "row",
        width: "100%",
        height: 164,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: COLORS.grayscale200,
        marginTop: 24,
        padding: 16
    },
    paymentImage: {
        height: 44,
        width: 60,
        marginRight: 12,
        marginTop: 12,
    },
    paymentTitle: {
        fontSize: 22,
        fontFamily: "Urbanist Bold",
        color: COLORS.black
    },
    paymentSubtitle: {
        fontSize: 16,
        fontFamily: "Urbanist Medium",
        color: COLORS.greyScale800,
        marginVertical: 12
    },
    viewContainer: {
        flex: 1,
        marginRight: 12
    },
    checkBoxContainer: {
        position: "absolute",
        top: 16,
        right: 16,
        width: 24,
        height: 24,
        alignItems: "center",
    },
    checkBoxIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
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

export default SendMoneyChoosePaymentType