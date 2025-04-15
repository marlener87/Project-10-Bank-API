import { useDispatch, useSelector } from "react-redux";
import CardProfil from "../../composants/CardProfil/cardProfil";
import Footer from "../../composants/Footer/footer";
import Navigation from "../../composants/Navigation/navigation";
import './profil.scss';
import { openPopup } from "../../redux/popupSlice";
import PopUp from "../../composants/PopUp/popup";
import { useEffect } from "react";

const Profil = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Données utilisateur chargées :", user);
    }, [user]);

    return (
        <>
        <Navigation />

        <main className="main bgDark mainProfil">
            <div className="headerProfil">
                {user.firstName && user.lastName ? (
                    <h1 className="titleProfil">Welcome back<br />
                        {user.firstName} {user.lastName} !
                    </h1>
                ) : (
                    <h1 className="titleProfil">Welcome back !</h1>
                )}
                
                <button className="editButtonProfil" onClick={() => dispatch(openPopup())}>Edit Name</button>
                <PopUp />
            </div>

            <CardProfil titleCardProfil={'Argent Bank Checking (x8349)'} risingProfil={'$2,082.79'} descriptionProfil={'Available Balance'} />
            <CardProfil titleCardProfil={'Argent Bank Savings (x6712)'} risingProfil={'$10,928.42'} descriptionProfil={'Available Balance'} />
            <CardProfil titleCardProfil={'Argent Bank Credit Card (x8349)'} risingProfil={'$184.30'} descriptionProfil={'Current Balance'} />
            
        </main>

        <Footer />
        </>
    );
};

export default Profil;