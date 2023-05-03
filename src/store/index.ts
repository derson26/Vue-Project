import { createStore } from "vuex";
import userModule from './userModule';
import favoriteModule from './favoriteModule';

const store = createStore({
  modules: {
    userModule,
    favoriteModule,
  }
});

export default store;
