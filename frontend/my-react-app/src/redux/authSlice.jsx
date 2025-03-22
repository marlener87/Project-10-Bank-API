import { createSlice } from "@reduxjs/toolkit";

// SliceRedux pour la gestion de l'authentification
const auth = createSlice({
    name: 'auth',
    initialState: {
        // Information de l'utilisateur
        user: {
            firstName: null,
            lastName: null,
            email: null
        },
        //token: null
        token: sessionStorage.getItem('token') || localStorage.getItem('token') ||  null, // Récupérer le token au chargement
    },

    reducers: {
        // Met à jour l'état de l'utilisateur dans le store Redux
        setUser: (state, action) => { // 'state' représente l'état actuel du slice Redux (auth) ; 'action' contient les données envoyées lors de l'appel à 'setUser', ces données sont stockées dans 'action.payload'
            //state.user = action.payload;
            state.user = { ...state.user, ...action.payload }; // on crée une copie de 'state.user' pour conserver les anciennes valeurs ; ensuite on fusionne cette copie avec 'action.payload' qui contient les nouvelles données ; si 'action.payload' contient une ou plusieurs propriétés, elles remplacent celles existantes tout en gardant les autres inchangées
        },
        // Met à jour et stocke le token d'authentification
        setToken: (state, action) => {
            state.token = action.payload;
            sessionStorage.setItem('token', action.payload); // Stocker le token
        },
        // Réinitialise l'état utilisateur et supprime le token
        logout: state => {
            state.token = null;
            state.user = {
                firstName: null,
                lastName: null,
                email: null
            };
            sessionStorage.removeItem('token'); // Supprimer le token à la déconnexion
        }
    }
});

export const {
    setUser,
    setToken,
    logout
} = auth.actions;

export default auth.reducer;