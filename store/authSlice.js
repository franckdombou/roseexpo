import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: "",
    name: "",
    genre:"",
    dateNaissance:[],
    interet:[],
    categorieRose:"",
    position:"",
    phoneNumber:"",
    photo:[]
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {

            state.email = action.payload.email;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.name = action.payload.userName; 

            state.interet = action.payload.interet;
            state.genre = action.payload.genre;
            state.dateNaissance = action.payload.dateNaissance;

            state.phoneNumber = action.payload.phoneNumber;
            state.position = action.payload.position;
            state.photo = action.payload.photo;
            state.categorieRose = action.payload.categorieRose;

        },
        setSignOut: (state) => {
            state.email = null;
            state.name = null;
            state.isLoggedIn = false;
        },
        
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectName = (state) => state.userAuth.userName;
export const selectGenre = (state) => state.userAuth.genre;
export const selectDateNaissance = (state) => state.userAuth.dateNaissance;
export const selectInteret = (state) => state.userAuth.interet;
export const selectPosition = (state) => state.userAuth.position;
export const selectPhoneNumber = (state) => state.userAuth.phoneNumber;
export const selectPhoto = (state) => state.userAuth.photo;


export default authSlice.reducer;