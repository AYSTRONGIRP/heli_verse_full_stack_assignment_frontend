import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    avatar: "",
    domain: "",
    available: false
};

const user_info_slice = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: {
        setEmail: (state, action) => {
            return { ...state, email: action.payload };
        },
        setId: (state, action) => {
            return { ...state, id: action.payload };
        },
        setFirstName: (state, action) => {
            return { ...state, first_name: action.payload };
        },
        setLastName: (state, action) => {
            return { ...state, last_name: action.payload };
        },
        setGender: (state, action) => {
            return { ...state, gender: action.payload };
        },
        setAvatar: (state, action) => {
            return { ...state, avatar: action.payload };
        },
        setDomain: (state, action) => {
            return { ...state, domain: action.payload };
        },
        setAvailable: (state, action) => {
            return { ...state, available: action.payload };
        },
        clear: () => {
            return initialState;
        }
    }
});

export const {
    setEmail,
    setId,
    setFirstName,
    setLastName,
    setGender,
    setAvatar,
    setDomain,
    setAvailable,
    clear
} = user_info_slice.actions;

export default user_info_slice.reducer;
