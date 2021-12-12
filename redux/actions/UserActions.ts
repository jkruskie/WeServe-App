export function setUserToken(userToken: string) {
    return {
        type: 'setUserToken',
        value: userToken
    }
}

export function setUserId(userId: string) {
    return {
        type: 'setUserId',
        value: userId
    }
}

export function setUserType(userType: string) {
    return {
        type: 'setUserType',
        value: userType
    }
}