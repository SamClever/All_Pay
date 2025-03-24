import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, icons } from '../constants';

// Define the shape of the props 
interface ContactFavouriteCardProps {
    name: string;
    email: string;
    image: string;
    onPress: () => void;
}

const ContactFavouriteCard: React.FC<ContactFavouriteCardProps> = ({
    name,
    email,
    image,
    onPress
}) => {
    const { dark } = useTheme();

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    source={image as ImageSourcePropType}
                    resizeMode='contain'
                    style={styles.avatar}
                />
                <View>
                    <Text style={[styles.username, {
                        color: dark ? COLORS.white : COLORS.greyscale900,
                    }]}>{name}</Text>
                    <Text style={[styles.useremail, {
                        color: dark ? COLORS.grayscale400 : COLORS.grayscale700
                    }]}>{email}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image
                    source={icons.star as ImageSourcePropType}
                    resizeMode='contain'
                    style={[styles.starIcon, {
                        tintColor: "orange"
                    }]}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 16
    },
    username: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginBottom: 6
    },
    useremail: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.grayscale700
    },
    starIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.greyscale900
    }
});

export default ContactFavouriteCard;