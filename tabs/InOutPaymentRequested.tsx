import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS } from '../constants';
import { inOutPaymentRequested } from '../data';
import InOutPaymentRequestedCard from '../components/InOutPaymentRequestedCard';

const InOutPaymentRequested = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { dark } = useTheme();

  return (
    <View style={[styles.container, { 
      backgroundColor: dark ? COLORS.dark1 : COLORS.secondaryWhite }]}>
      <ScrollView style={{ marginVertical: 12 }}>
        <FlatList
          data={inOutPaymentRequested}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <InOutPaymentRequestedCard
              name={item.name}
              image={item.image}
              date={item.date}
              time={item.time}
              price={item.price}
              type={item.type}
              status={item.status}
              onPress={() => navigation.navigate("InOutPaymentViewEReceipt")}
            />
          )}
        />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryWhite
  }
})


export default InOutPaymentRequested