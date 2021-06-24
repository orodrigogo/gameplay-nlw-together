import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './app.routes';

export function Routes(){
  const { user } = useAuth();

  return(
    <NavigationContainer>
     { user.id ? <AppRoutes /> : <SignIn /> }
    </NavigationContainer>
  )
}