//import React from 'react';
import './cardProfil.scss';

const CardProfil = ({ titleCardProfil, risingProfil, descriptionProfil }) => {
    return (
        <section className="accountProfil">
            <div className="accountContentWrapperProfil">
                <h3 className="accountTitleProfil">{titleCardProfil}</h3>
                <p className="accountAmountProfil">{risingProfil}</p>
                <p className="accountAmountDescriptionProfil">{descriptionProfil}</p>
            </div>
            <div className="accountContentWrapperProfil buttonProfil">
                <button className="transactionButtonProfil">View transactions</button>
            </div>
      </section>
    );
};

export default CardProfil;