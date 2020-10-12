import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import Main from '../pages/Main';

enableScreens();
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Routes;
