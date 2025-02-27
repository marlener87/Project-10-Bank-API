//import React from 'react';
import './cardHome.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardHome = ({title,icon = "fa-solid fa-circle-user", children }) => {
    return (
        <div className="cardItem">
            {/*<FontAwesomeIcon icon={icon} className="iconItem" />*/}
            {/* Si icon est une chaîne (FontAwesome), on l'affiche avec FontAwesomeIcon */}
            {icon.startsWith('fa-') ? (
                <FontAwesomeIcon icon={icon} className="iconItem" />
            ) : (
                // Si icon est une image (URL), on l'affiche en tant qu'image
                <img src={icon} alt="Icon" className="iconItem" />
            )}
            <h3 className="titleItem">{title}</h3>
            {children}
        </div>
    );
};

export default CardHome;