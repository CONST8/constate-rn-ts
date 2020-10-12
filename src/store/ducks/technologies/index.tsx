const INITIAL_STATE = {
  data: [
    {
      title: 'Typescript',
      description: 'typescript-desc',
      logo: require('../../../assets/img/typescript.png'),
    },
    {
      title: 'Redux',
      description: 'redux-desc',
      logo: require('../../../assets/img/redux.png'),
    },
    {
      title: 'Redux-Sagas',
      description: 'reduxSagas-desc',
      logo: require('../../../assets/img/redux-sagas.png'),
    },
    {
      title: 'Axios',
      description: 'axios-desc',
      logo: require('../../../assets/img/axios.png'),
    },
    {
      title: 'React-Navigation',
      description: 'navigation-desc',
      logo: require('../../../assets/img/navigation.png'),
    },
    {
      title: 'Styled-Components',
      description: 'styledComponents-desc',
      logo: require('../../../assets/img/styled-components.png'),
    },
    {
      title: 'i18n',
      description: 'i18n-desc',
      logo: require('../../../assets/img/i18n.png'),
    },
  ],
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
