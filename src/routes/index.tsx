import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';

import i18n from '../config/i18n';
import StackNavigation from './stack';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

export default function Routes() {
  const {
    theme: {theme},
  }: any = useSelector((state) => state);

  return (
    <>
      <StatusBar
        barStyle={`${theme.bar}-content` as any}
        backgroundColor={theme.bg}
      />
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </I18nextProvider>
    </>
  );
}
