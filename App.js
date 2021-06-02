import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/BottomTabNav';

export default function App() {
    return (
          <NavigationContainer>
              <BottomTabNav/>
          </NavigationContainer>
    );
}