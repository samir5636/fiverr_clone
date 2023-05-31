export const getCurrentUserFromLocalStorage = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        return JSON.parse(currentUser);
    }
    return null;
};