import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, SIZES, icons } from '../constants';

interface BankItemProps {
    icon: any;
    bankName: string;
    type: string;
    lastCardNumber: string;
    selected: boolean;
    onSelect: () => void;
}

const BankItem: React.FC<BankItemProps> = ({
    icon,
    bankName,
    type,
    lastCardNumber,
    selected,
    onSelect
}) => {
    const { dark } = useTheme();

    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={[styles.container, {
                borderBottomColor: dark ? COLORS.greyscale900 : COLORS.grayscale200
            }]}>
                <View style={styles.leftContainer}>
                    <Image
                        source={icon}
                        resizeMode='contain'
                        style={styles.icon}
                    />
                    <View>
                        <Text style={[styles.bankName, {
                            color: dark ? COLORS.white : COLORS.greyscale900
                        }]}>{bankName}</Text>
                        <Text style={[styles.type, {
                            color: dark ? COLORS.grayscale400 : COLORS.greyScale800
                        }]}>{type} ●●●● {lastCardNumber}</Text>
                    </View>
                </View>
                {selected && (
                    <Image
                        source={icons.check3 as ImageSourcePropType}
                        resizeMode='contain'
                        style={styles.checkIcon}
                    />
                )}
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grayscale200
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 60,
        width: 60,
        marginRight: 16
    },
    bankName: {
        fontSize: 20,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginBottom: 6
    },
    type: {
        fontSize: 16,
        fontFamily: "Urbanist Medium",
        color: COLORS.greyScale800
    },
    checkIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.primary
    }
});

export default BankItem;