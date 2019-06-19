const USER = "USER"

export function getUserFromStorage() {
    localStorage.getItem(USER);
}

export function deleteUserFromStorage(){
    localStorage.removeItem(USER);
}

export function saveUserToStorage(user) {
    localStorage.setItem(USER, user)
}