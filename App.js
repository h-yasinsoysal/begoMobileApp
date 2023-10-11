import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Components/Login/Login';
import Product from './src/Components/Product/Product';
import SubProduct from './src/Components/SubProduct/SubProduct';
import ListProducts from './src/Components/ListProducts/ListProducts';
import ProductDetail from './src/Components/ProductDetail/ProductDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="SubProduct" component={SubProduct} />
        <Stack.Screen name="ListProducts" component={ListProducts} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});

export default App;
