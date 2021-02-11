import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  SafeContainer: {
    backgroundColor: theme[0].bg,
    flex: 1,
  },
  Container: {
    backgroundColor: theme[0].bg,
    flex: 1,
  },
  ScrollView: {
    backgroundColor: theme[0].bg,
  },
  SupContainer: {
    backgroundColor: theme[0].bg,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  TitleArea: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Title: {
    color: theme[0].primary,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
  },
  TitleImg: {
    width: 30,
    height: 30,
    top: -4,
    marginRight: 16,
  },
  FooterText: {
    color: theme[0].bg,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    letterSpacing: 8,
    textAlign: 'center',
  },
  MiddleContainer: {
    backgroundColor: theme[0].primary,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  MiddleTitle: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
  },
  MiddleDescription: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: 12,
  },
  ConstateText: {
    color: '#32ff7e',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  ScrollVertical: {
    top: -32,
  },
  CardArea: {
    backgroundColor: theme[0].primary,
    paddingBottom: 32,
  },
  CardContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    width: 290,
    height: 180,
    borderRadius: 5,
    elevation: 5,
    marginHorizontal: 8,
  },
  CardTitleArea: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardTitle: {
    color: theme[0].primary,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'capitalize',
  },
  CardImg: {
    width: 40,
    height: 40,
  },
  CardDescription: {
    color: theme[0].subtext,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
