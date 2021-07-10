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
    backgroundColor: theme[0].primary,
  },
  SupContainer: {
    backgroundColor: theme[0].bg,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 48,
  },
  TitleArea: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 32,
    marginTop: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Title: {
    color: theme[0].primary,
    fontSize: 18,
    fontFamily: 'Product Sans Bold',
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
    fontFamily: 'Product Sans Bold',
    textTransform: 'uppercase',
    letterSpacing: 8,
    textAlign: 'center'
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
    fontFamily: 'Product Sans Bold',
    textTransform: 'capitalize',
  },
  MiddleDescription: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Product Sans Regular',
    marginTop: 12,
  },
  ConstateText: {
    color: '#32ff7e',
    fontSize: 14,
    fontFamily: 'Product Sans Bold',
  },
  ScrollVertical: {
    top: -64,
  },
  CardArea: {
    backgroundColor: theme[0].primary,
    paddingBottom: 32,
    flex: 1,
  },
  CardContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    width: 290,
    minHeight: 180,
    borderRadius: 5,
    elevation: 5,
    marginHorizontal: 8,
    alignItems: 'center',
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
    fontSize: 16,
    fontFamily: 'Product Sans Bold',
    textTransform: 'capitalize',
    marginVertical: 12
  },
  CardImg: {
    width: 64,
    height: 64,
  },
  CardDescription: {
    color: theme[0].subtext,
    fontSize: 14,
    fontFamily: 'Product Sans Regular',
    textAlign: 'center'
  },
});

export default styles;
