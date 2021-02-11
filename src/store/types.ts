import {TypesTheme} from './ducks/theme/types';
import {TypesTechnologies} from './ducks/technologies/types';
import {TypesUser} from './ducks/user/types';

export interface AppStore {
  theme: TypesTheme;
  technologies: TypesTechnologies;
  user: TypesUser;
}
