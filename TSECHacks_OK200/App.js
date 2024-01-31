import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import welcome from './screens/welcome';
import login from './screens/login';
import Posts from './screens/Posts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="posts">
        <Stack.Screen name="App Name" component={welcome} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="posts" component={Posts} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
