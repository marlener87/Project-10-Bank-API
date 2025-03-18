import { useDispatch, useSelector } from 'react-redux';
import './popup.scss';
import { closePopup } from '../../redux/popupSlice';
import { useState } from 'react';
import { setUser } from '../../redux/authSlice';

const PopUp = () => {
    const dispatch = useDispatch();
    // useSelector : permet d'accéder à une partie du state global du store Redux dans un composant fonctionnel
    const isOpen = useSelector((state) => state.popup.isOpen);
    const user = useSelector((state) => state.auth.user); // Récupérer l'utilisateur depuis authSlice

    // États locaux pour le formulaire
    const [firstName, setFirstName] = useState(user.firstName || "")
    const [lastName, setLastName] = useState(user.lastName || "")

    // Fermer la popup en cliquant hors de la boîte 
    const handleClose = (e) => {
        if (e.target.classList.contains("popup-overlay")) {
            dispatch(closePopup());
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser({ ...user, firstName, lastName }));
        dispatch(closePopup()); // Ferme la  après modification
    }

    if (!isOpen) return null; // Si la popup est fermée, ne rien afficher

    return (
        <div className={`popup-overlay ${isOpen ? "active" : ""}`} aria-hidden={!isOpen} onClick={handleClose}>
            <div className="popup-content">
                <h2>Modifier vos données</h2>
                <form onSubmit={handleSubmit} className='formPopup'>
                    <label>Prénom :</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <label>Nom :</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />


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