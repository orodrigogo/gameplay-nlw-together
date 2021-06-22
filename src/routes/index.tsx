import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { user } = useAuth();

  return(
    <NavigationContainer>
     { user.id ? <AuthRoutes /> : <SignIn /> }
    </NavigationContainer>
  )
}