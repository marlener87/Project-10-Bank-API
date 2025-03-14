import { useSelector } from "react-redux";
import CardProfil from "../../composants/CardProfil/cardProfil";
import Footer from "../../composants/Footer/footer";
import Navigation from "../../composants/Navigation/navigation";
import './profil.scss';

const Profil = () => {
    const user = useSelector(state => state.auth.user);

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
                    <h1 className="titleProfil">Welcome back!</h1>
                )}
                
                <button className="editButtonProfil">Edit Name</button>
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