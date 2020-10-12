import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import themes from './themes/index';
import Routes from './routes';
import moment from 'moment';
import 'moment/min/locales';

const App = () => {
  const deviceTheme = 'light';
  const theme = themes[deviceTheme] || themes.light;
  const barTheme = `${theme.bg}-content`;
  const barColor = `${theme.bg}`;
  moment.locale('pt-br');

  return (
    <>
      <StatusBar barStyle={barTheme} backgroundColor={barColor} />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
