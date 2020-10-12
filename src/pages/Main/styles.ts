import styled, {DefaultTheme} from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const bg = (themes: DefaultTheme) => themes.bg;
const primary = (themes: DefaultTheme) => themes.primary;
const subtext = (themes: DefaultTheme) => themes.subtext;

export const SafeContainer = styled.SafeAreaView`
  background-color: ${bg};
  flex: 1;
`;
export const Container = styled.View`
  background-color: ${bg};
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {padding: 0},
  showsVerticalScrollIndicator: false,
})`
  background-color: ${bg};
`;

export const SupContainer = styled.View`
  background-color: ${bg};
  padding: 16px 24px 32px;
`;

export const TitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 16px 0px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${primary};
  font-size: 18px;
  font-family: 'Poppins-Bold';
  text-transform: capitalize;
`;

export const TitleImg = styled.Image`
  width: 30px;
  height: 30px;
  top: -4px;
  margin-right: 16px;
`;

export const FooterText = styled.Text`
  color: ${bg};
  font-size: 18px;
  font-family: 'Poppins-Bold';
  text-transform: uppercase;
  letter-spacing: 8px;
  text-align: center;
`;

//Middle

export const MiddleContainer = styled(RectButton).attrs({
  rippleColor: '#262626',
})`
  background-color: ${primary};
  width: 100%;
  border-radius: 5px;
  padding: 16px 18px;
`;

export const MiddleTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Poppins-Bold';
  text-transform: capitalize;
`;

export const MiddleDescription = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins-Medium';
  margin-top: 12px;
`;

export const ConstateText = styled.Text`
  color: #32ff7e;
  font-size: 14px;
  font-family: 'Poppins-Bold';
`;

// Scroll Vertical

export const ScrollVertical = styled.ScrollView.attrs({
  contentContainerStyle: {paddingHorizontal: 16},
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  top: -32px;
`;

export const CardArea = styled.View`
  background-color: ${primary};
  padding-bottom: 32px;
`;

export const CardContainer = styled(RectButton).attrs({
  rippleColor: '#e1e1e1',
})`
  background-color: #fff;
  padding: 16px;
  width: 290px;
  height: 180px;
  border-radius: 5px;
  elevation: 5;
  margin: 0 8px;
`;

export const CardTitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.Text`
  color: ${primary};
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  text-transform: capitalize;
`;

export const CardImg = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CardDescription = styled.Text`
  color: ${subtext};
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
