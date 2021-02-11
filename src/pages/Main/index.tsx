import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AppStore} from '../../store/types';
import styles from './styles';

const Login: React.FC = () => {
  const {t} = useTranslation();
  const {
    technologies: {data: technologies},
    theme: {theme},
  } = useSelector((state: AppStore) => state);

  return (
    <SafeAreaView style={[styles.SafeContainer, {backgroundColor: theme.bg}]}>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={{padding: 0}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <View style={styles.SupContainer}>
            <View style={styles.TitleArea}>
              <Image
                style={styles.TitleImg}
                source={require('../../assets/img/constate.png')}
                resizeMode={'cover'}
              />
              <Text style={styles.Title}>{t('hi dev')}!</Text>
            </View>
            <RectButton rippleColor={'#262626'} style={styles.MiddleContainer}>
              <Text style={styles.MiddleTitle}>{t('theTemplate')}</Text>
              <Text style={styles.MiddleDescription}>
                {t('middleDescription')}
              </Text>
              <Text style={styles.MiddleDescription}>
                {t('middleInitial2')}
                <Text style={styles.ConstateText}>Constate</Text>
                {t('middleDescription2')}
              </Text>
            </RectButton>
            <View style={styles.TitleArea}>
              <Text style={styles.Title}>{t('technologies')}</Text>
            </View>
          </View>
          <View style={styles.CardArea}>
            <ScrollView
              style={styles.ScrollVertical}
              contentContainerStyle={{paddingHorizontal: 16}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {technologies.map((tec: any, index: number) => (
                <RectButton
                  style={styles.CardContainer}
                  key={index}
                  rippleColor={'#e1e1e1'}>
                  <View style={styles.CardTitleArea}>
                    <Text style={styles.CardTitle}>{tec.title}</Text>
                    <Image
                      style={styles.CardImg}
                      source={tec.logo}
                      resizeMode={'cover'}
                    />
                  </View>
                  <Text style={styles.CardDescription}>
                    {t(tec.description)}
                  </Text>
                </RectButton>
              ))}
            </ScrollView>
            <Text style={styles.FooterText}>CONSTATE</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
