import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setToken, setUser } from './authSlice';  // Importer le slice du auth
import popupReducer from './popupSlice';  // Importer le slice du popup
import axios from "axios";

// Initialise Redux avec les reducers nécessaires
const store = configureStore({
    reducer: {
        auth: authReducer, // Gère l'authentification (token, utilisateur)
        popup: popupReducer, // gère l'affichage les popups
    }
});

// Vérifier si un token est présent au démarrage et charger les infos utilisateur
// Si un token existe dans sessionStorage, on le récupère, sinon token sera null et l'utilisateur sera considéré comme déconnecté
const token = sessionStorage.getItem('token');
if (token) {
    store.dispatch(setToken(token)); // Mettre le token dans Redux

    axios.post(
        'http://localhost:3001/api/v1/user/profile', 
        {}, 
        { headers: { Authorization: `Bearer ${token}` } } // Envoie le token pour s’authentifier
    )
    .then(response => {
        if (response.status === 200) {
            store.dispatch(setUser(response.data.body)); // Charge l'utilisateur
        }
    })
    .catch(error => {
        console.error("Erreur lors de la récupération du profil :", error);
        sessionStorage.removeItem('token'); // Supprime le token si invalide
    });
}


export default store;