import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null, // Menyimpan detail pengguna seperti role dan profileImageUrl
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user; // Menyimpan data user
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;