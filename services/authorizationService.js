
export const AuthenticationService = {
    login,
    logout,
    changePassword,
    forgetPassword,
    resetPassword,
    confirmEmail,
    currentUser: getToken(),
    authHeader:authHeader
    // get currentUserValue() { return currentUserSubject.value }
};
async function login(data) {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    try {
        const result = await this.$axios.post("/v1/login", this.form, config);
        if (result.code === 200 && result.data !== null) {
            localStorage.setItem("currentUser", JSON.stringify(result.data));
            console.log(result);
            return true;
        } else {
            console.log(result);
            console.log(result.data.message);
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
function changePassword(data) {
    return fetch('/api/v1/changePassword', {
        method: 'post',
        headers: authHeader(),
        body: JSON.stringify(data),
    }).then((Response) => Response.json())
        .then((result) => {
            return result;
        })
}
function forgetPassword(data) {
    return fetch('/api/v1/forgotpassword', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((Response) => Response.json())
        .then((result) => {
            return result;
        })
}
function resetPassword(data) {
    return fetch('/api/v1/resetpassword', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((Response) => Response.json())
        .then((result) => {
            return result;
        })
}
function confirmEmail(userId, code) {
    return fetch('/api/v1/confirmEmail?code=' + code + '&&userId=' + userId + '', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((Response) => Response.json())
        .then((result) => {
            return result;
        })
}
function logout() {
    localStorage.removeItem('currentUser');
    // currentUserSubject.next(null);
}

function authHeader() {
    const currentUser = getToken();
    if (currentUser && currentUser.token) {
        return {
            "Authorization": `Bearer ${currentUser.token.value}`,
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        };
    } else {
        return {};
    }
}
function getToken() {
    if (process.browser) {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}