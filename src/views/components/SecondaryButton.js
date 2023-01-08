import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';

const SecondaryButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>Add To Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SecondaryButton;
