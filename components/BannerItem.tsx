import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES } from '../constants';

interface BannerItemProps {
    discount: string;
    discountName: string;
    bottomTitle: string;
    bottomSubtitle: string;
    primaryColor: string;
    secondaryColor: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ 
    discount, 
    discountName, 
    bottomSubtitle, 
    bottomTitle,
    primaryColor,
    secondaryColor
}) => {
  return (
    <LinearGradient 
      colors={[primaryColor, secondaryColor]}
      style={styles.bannerContainer}>
      <View style={styles.bannerTopContainer}>
        <View>
          <Text style={styles.bannerDiscount}>{discount} OFF</Text>
          <Text style={styles.bannerDiscountName}>{discountName}</Text>
        </View>
        <Text style={styles.bannerDiscountNum}>{discount}</Text>
      </View>
      <View style={styles.bannerBottomContainer}>
        <Text style={styles.bannerBottomTitle}>{bottomTitle}</Text>
        <Text style={styles.bannerBottomSubtitle}>{bottomSubtitle}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    bannerContainer: {
        width: SIZES.width - 32,
        height: 172,
        borderRadius: 32,
        marginBottom: 4,
        paddingTop: 12
      },
      bannerTopContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 28,
      },
      bannerDiscount: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: COLORS.white,
        marginBottom: 4
      },
      bannerDiscountName: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.white,
        
      },
      bannerDiscountNum: {
        fontSize: 46,
        fontFamily: "Urbanist Bold",
        color: COLORS.white
      },
      bannerBottomContainer: {
        marginTop: 8
      },
      bannerBottomTitle: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.white,
        paddingHorizontal: 28,
      },
      bannerBottomSubtitle: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.white,
        marginTop: 4,
        paddingHorizontal: 28,
      },
});

export default BannerItem;
