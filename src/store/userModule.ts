import { IRegress, IUser } from "../interfaces";

const userModule = {
    state: () => ({
        users: [] as IUser[],
      }),
      mutations: {
        SET_USERS(state: { users: IUser[]; }, payload: IUser[]) {
          state.users = payload;
        },
      },
      actions: {
        async fetchUsers( { commit }: any) {
          const response = await fetch("https://reqres.in/api/users?page=2");
          const usersFromServer = (await response.json()) as IRegress;
        //   this.users = users.data;
          commit("SET_USERS", usersFromServer.data);
        },
      },
      getters: {
        $GetAllUsers(state: { users: IUser[]; }) {
            return state.users
        }
      },
}

export default userModule;