import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import SecondaryButton from '../components/SecondaryButton';

const DetailScreen = ({navigation, route}) => {
  const item = route.params;
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
          Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={styles.iconContainer}>
              <Icon
                name="favorite-border"
                style={{color: COLORS.primary}}
                size={25}
              />
            </View>
          </View>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            est enim placeat delectus, porro totam error labore molestias fuga
            laboriosam ab cumque, sed reiciendis ullam unde deserunt id dolorum.
            Cumque est aspernatur voluptates alias cupiditate porro.
            Reprehenderit quaerat temporibus, nobis facere, sed animi.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            <SecondaryButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailScreen;
