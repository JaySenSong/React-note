import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type UserProperty = {
  name: string
  status : 'admin' | 'user' | 'visitor'  
}

const initialState = {
    name: '',
    status: 'visitor'
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action: PayloadAction<UserProperty>) {
      return {...state, ...action.payload};
    },
    setLogout() => initialState;
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
