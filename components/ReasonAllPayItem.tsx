import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, SIZES } from '../constants';

interface ReasonAllPayItemProps {
  reason: string;
  isChecked: boolean;
  onToggle: (reason: string) => void;
}

const ReasonAllPayItem: React.FC<ReasonAllPayItemProps> = ({ reason, isChecked, onToggle }) => {
  const { dark } = useTheme();

  return (
    <TouchableOpacity style={[styles.container, {
      borderColor: dark ? COLORS.dark2 : COLORS.grayscale200,
      backgroundColor: dark ? COLORS.dark2 : COLORS.white
    }]} onPress={() => onToggle(reason)}>
      <CheckBox
          boxType="square"
          value={isChecked}
          onValueChange={() => onToggle(reason)}
          style={[styles.checkbox, { 
            borderColor: COLORS.primary
          }]}
          onTintColor={isChecked ? COLORS.primary : dark ? COLORS.primary : "gray"}
          onFillColor={isChecked ? COLORS.primary : dark ? COLORS.primary : "gray"}
          onCheckColor={COLORS.white}
        />
      <Text style={[styles.reasonText, {
        color: dark ? COLORS.white : COLORS.greyscale900,
      }]}>{reason}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 72,
    width: SIZES.width - 32,
    borderRadius: 20,
    borderColor: COLORS.grayscale200,
    borderWidth: 1,
    marginVertical: 6,
    paddingHorizontal: 16
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
    height: 20,
    width: 20
  },
  reasonText: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
  },
});

export default ReasonAllPayItem