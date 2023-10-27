export const selectLogIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectUserName = state => state.auth.profile.name;
export const selectUserMail = state => state.auth.profile.email;
