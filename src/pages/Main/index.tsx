import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {
  SafeContainer,
  ScrollView,
  Container,
  SupContainer,
  MiddleContainer,
  MiddleTitle,
  MiddleDescription,
  ConstateText,
  TitleArea,
  Title,
  TitleImg,
  CardArea,
  CardContainer,
  CardTitleArea,
  CardTitle,
  CardImg,
  CardDescription,
  ScrollVertical,
  FooterText,
} from './styles';

const Login: React.FC = () => {
  const {t} = useTranslation();
  const {
    technologies: {data: technologies},
  }: any = useSelector((state) => state);

  return (
    <SafeContainer>
      <ScrollView>
        <Container>
          <SupContainer>
            <TitleArea>
              <TitleImg
                source={require('../../assets/img/constate.png')}
                resizeMode={'cover'}
              />
              <Title>{t('hi dev')}!</Title>
            </TitleArea>
            <MiddleContainer>
              <MiddleTitle>{t('theTemplate')}</MiddleTitle>
              <MiddleDescription>{t('middleDescription')}</MiddleDescription>
              <MiddleDescription>
                {t('middleInitial2')}
                <ConstateText>Constate</ConstateText>
                {t('middleDescription2')}
              </MiddleDescription>
            </MiddleContainer>
            <TitleArea>
              <Title>{t('technologies')}</Title>
            </TitleArea>
          </SupContainer>
          <CardArea>
            <ScrollVertical>
              {technologies.map((tec: any, index: number) => (
                <CardContainer key={index}>
                  <CardTitleArea>
                    <CardTitle>{tec.title}</CardTitle>
                    <CardImg source={tec.logo} resizeMode={'cover'} />
                  </CardTitleArea>
                  <CardDescription>{t(tec.description)}</CardDescription>
                </CardContainer>
              ))}
            </ScrollVertical>
            <FooterText>CONSTATE</FooterText>
          </CardArea>
        </Container>
      </ScrollView>
    </SafeContainer>
  );
};

export default Login;
