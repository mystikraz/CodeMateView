import { AuthenticationService } from '../services/authorizationService';

export const state = () => ({
    loggedIn: false,
    userName: "",
    users: [],
    pagination: {},
})

export const actions = {
    async getusers({ commit }, data) {
        const currentUser = AuthenticationService.currentUser;
        const config = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + currentUser?.token.value,
            },
        };
        const body = {
            pageNumber: data?.pageNumber,
            pageSize: data?.pageSize,
            minAge: data?.minAge,
            maxAge: data?.maxAge,
            gender: data?.gender,
            orderby: data?.orderby,
            likers: data?.likers,
            likees: data?.likees,
        };
        try {
            const res = await this.$axios.get(`/users`, {
                params: body,
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + currentUser?.token.value,
                },
            });
            commit("SET_USERS", res.data);
            commit(
                "SET_USERS_PAGINATION",
                JSON.parse(res.headers.pagination)
            );
        } catch (error) {
            console.log(error);
        }
    }
}

export const mutations = {
    SET_LOGGEDIN(state, loggedIn) {
        state.loggedIn = loggedIn
    },
    SET_USERNAME(state, userName) {
        state.userName = userName
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USERS_PAGINATION(state, pagination) {
        state.pagination = pagination
    },
    SET_CURRENT_PAGE(state, currentPage) {
        state.pagination.currentPage = currentPage
    }
}