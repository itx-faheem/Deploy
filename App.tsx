import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexApp from './app/IndexApp';
import { COLORS, SIZES, icons, images } from './constants';
import { NearbyJobCard, Nearbyjobs, ScreenHeaderBtn, Welcome } from './components'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <IndexApp/>
    </NavigationContainer>
  );
};

export default App;




{/* <Stack.Navigator>
  <IndexApp />
</Stack.Navigator> */}


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
