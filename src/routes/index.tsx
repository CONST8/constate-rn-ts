import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';

import i18n from '../config/i18n';
import StackNavigation from './stack';

export default function Routes() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </I18nextProvider>
  );
}
