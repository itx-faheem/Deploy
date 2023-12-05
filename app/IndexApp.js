import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, SIZES, icons, images } from '../constants';

import { ScreenHeaderBtn, Welcome, NearbyJobCard, Nearbyjobs, Popularjobs } from '../components';

const Stack = createNativeStackNavigator();

const Home = ({ route }) => {

  const { index } = route.params || {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        flex:1,padding:SIZES.medium
      }} >
        <Welcome />
        <Popularjobs/>
        <Nearbyjobs />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const HomeScreenWithHeader = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenWithHeader;
