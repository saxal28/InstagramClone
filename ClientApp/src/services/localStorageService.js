const USER = "USER"

export function getUserFromStorage() {
    const user = localStorage.getItem(USER)
    return JSON.parse(user)
}

export function deleteUserFromStorage(){
    localStorage.removeItem(USER);
}

export function saveUserToStorage(user) {
    let stringified = JSON.stringify(user)
    localStorage.setItem(USER, stringified)
}