import { useDispatch, useSelector } from 'react-redux';
import './popup.scss';
import { closePopup } from '../../redux/popupSlice';
import { useState } from 'react';
import { setUser } from '../../redux/authSlice';
import { useEffect } from 'react';
import { useRef } from 'react';
import axios from 'axios';

// Popup de modification des données
const PopUp = () => {
    const dispatch = useDispatch();
    const firstNameInputRef = useRef(null); // Fait référence à l'input du prénom
    // useSelector : permet d'accéder à une partie du state global du store Redux dans un composant fonctionnel
    const isOpen = useSelector((state) => state.popup.isOpen);
    const user = useSelector((state) => state.auth.user); // Récupérer l'utilisateur depuis authSlice

    // États locaux pour le formulaire
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");

    // Mettre à jour les valeurs locales lorsque la popup s'ouvre
    useEffect(() => {
        //console.log("Popup ouverte :", isOpen);
        // Vérifie si la popup est ouverte
        if(isOpen) {
            // Réinitialise les champs du formulaire avec les données actuelles de l'utilisateur
            setFirstName("");  // Réinitialiser à vide
            setLastName("");   // Réinitialiser à vide
            setTimeout(() => firstNameInputRef.current?.focus(), 0); // Met le focus sur l'input
        }
    }, [isOpen]); // Ce useEffect s'exécute à chaque changement de isOpen ou de user

    // Fermer la popup en cliquant hors de la boîte 
    const handleClose = (e) => {
        if (!e || e.target.classList.contains("popup-overlay")) {
            // Ferme la popup en dispatchant l'action Redux appropriée
            dispatch(closePopup());
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem('token');
        
        try {
            const response = await axios.put(
                'http://localhost:3001/api/v1/user/profile', 
                {"firstName": firstName,
                "lastName": lastName},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response);

            if (response.status === 200) {
                const updatedUser = response.data.body; // Récupérer les nouvelles valeurs
                dispatch(setUser(updatedUser)); // Mettre à jour Redux avec les nouvelles données
            }
            
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
            console.error(error);   // Affichage de l'erreur dans la console pour le débogage
        };

        dispatch(closePopup()); // Ferme la  après modification
    };


    if (!isOpen) return null; // Si la popup est fermée, ne rien afficher

    return (
        <div className={`popup-overlay ${isOpen ? "active" : ""}`} aria-hidden={!isOpen} onClick={handleClose}>
            <div className="popup-content">
                <h2>Modifier vos données</h2>
                <form onSubmit={handleSubmit} className='formPopup'>
                    <label>Prénom :</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        ref={firstNameInputRef} 
                    />
                    <label>Nom :</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />

                    <div className="containBtnPopup">
                        <button className="btnPopup" type="submit">Enregistrer</button>
                        <button className="btnPopup" type="button" onClick={() => dispatch(closePopup())}>Annuler</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )

}

export default PopUp;