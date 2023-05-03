import { IUser } from "../interfaces";

const existUser = (user:IUser, userList: IUser[]) => userList.some( u => u.id === user.id);
const findUserIndex = (user:IUser, userList: IUser[]) => userList.indexOf(user);

const favoriteModule = {
    state: () => ({
        favorites: [] as IUser[],
      }),
      mutations: {
        SET_FAVORITE(state: { favorites: IUser[]; }, payload: IUser): void {
          const exist_user = existUser(payload, state.favorites);
          exist_user ? state.favorites : state.favorites.push(payload);
          
        },
        REMOVE_FAVORITE(state: { favorites: IUser[] }, payload: IUser) {
            const exist_user = existUser(payload, state.favorites);
            return exist_user ? state.favorites.splice( findUserIndex(payload, state.favorites), 1) :  state.favorites;
        },

      },
      actions: {
        actionAddToFavorite({commit}: any, payload:IUser ): void{
            commit("SET_FAVORITE", payload);  
        },

        actionRemoveFromFavorite({commit}: any, payload:IUser ): void{
            commit("REMOVE_FAVORITE", payload);  
        },
        actionFindUser({commit}: any, payload:IUser) {
          commit("FIND_USER", payload); 
        }
      },
      getters: {
        $GetAllFavoriteUsers(state: { favorites: IUser[]; }) {
            return state.favorites
        },
        $favoriteSize(state: { favorites: IUser[]; }) {
          return state.favorites.length
        },
        $findUser: (state: { favorites: IUser[] }) => (user: IUser) =>{
          return existUser( user, state.favorites);
        }
      },
}

export default favoriteModule;