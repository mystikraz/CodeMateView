
import { AuthenticationService } from './authorizationService';
export const userService = {
    getUsers
}

async function getUsers(data) {
    debugger
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
        debugger
        this.$store.commit("SET_USERS", res.data);
        this.$store.commit(
            "SET_USERS_PAGINATION",
            JSON.parse(res.headers.pagination)
        );
    } catch (error) {
        debugger
        console.log(error);
    }
}