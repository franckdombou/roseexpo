export const LoginAction = (username, password) => {
    const token = username + password
    return ({
        type: "LOGIN",
        //  payload:token
        payload: true
    })
}

export const logOutAction = () => {
    return ({
        type: "LOGOUT",
        payload: false
    })
}

export const changeName = (username) => {
    return ({
        type: "CHANGE_NAME",
        payload: username
    })
}