import request from "../../../chat_front/src/util/request";

export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username: username,
            password: password,
        }
    })
}

export function register(user) {
    return request({
        url: '/user/register',
        method: 'post',
        data: user
    })
}


export function query(user) {
    return request({
        url: '/user/query',
        method: 'post',
        data: user
    })
}

export function addRef(user) {
    return request({
        url: '/user/add/ref',
        method: 'post',
        data: user
    })
}

export function queryRef(user) {
    return request({
        url: '/user/query/ref',
        method: 'post',
        data: user
    })
}