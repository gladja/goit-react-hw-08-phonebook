export const selectLogIn = state => state.register.isLoggedIn;
export const selectIsLoading = state => state.register.isLoading;
export const selectUserName = state => state.register.profile.name;
export const selectUserMail = state => state.register.profile.email;
