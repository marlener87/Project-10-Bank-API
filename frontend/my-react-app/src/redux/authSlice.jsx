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
        token: sessionStorage.getItem('token') || localStorage.getItem('token') ||  null, // Récupérer le token au chargement
    },

    reducers: {
        // Met à jour l'état de l'utilisateur dans le store Redux
        setUser: (state, action) => { // 'state' représente l'état actuel du slice Redux (auth) ; 'action' contient les données envoyées lors de l'appel à 'setUser', ces données sont stockées dans 'action.payload'

            // On filtre les champs vides pour ne pas écraser les anciens
            // transforme l'objet en tableau de paires clé/valeur ; garde seulement les champs non vides ; reconstruit un objet propre
            const cleanPayload = Object.fromEntries(
            Object.entries(action.payload).filter(([_, value]) => value !== "")
            );
            
            // Fusion propre : on garde les anciennes infos, sauf celles à mettre à jour
            state.user = { ...state.user, ...cleanPayload };
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