import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../redux/authSlice";
import './navigation.scss';

const Navigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Récupère l'état d'authentification depuis Redux
    const user = useSelector(state => state.auth.user); 
    console.log(user);
    
    const token = useSelector(state => state.auth.token);
    console.log(token);
    

    // Fonction de déconnection
    const handleLogout = () => {
        dispatch(logout()); // Met à jour Redux
        navigate('/'); // Redirige vers la page d'accueil
    };

    return (
        <nav className="mainNav">
            <Link to={'/'} className="logoNav">
                <img
                     className="imageNav"
                     src={logo}
                     alt="Argent Bank Logo"
                />
            </Link>

            <div>
                {user.firstName ? (
                    // Si l'utilisateur est connecté, afficher son prénom et 'SignOut'
                    <Link to={'/'} className='itemNav' onClick={handleLogout}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-user" className="icon" />
                        {user.firstName} {/* Affiche le prénom */}
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className="icon" />
                        Sign Out
                    </Link>    
                ) : (
                    // Sinon, afficher 'Sign In'
                    <Link to="/login" className="itemNav">
                        <FontAwesomeIcon icon="fa-solid fa-circle-user" className="icon" />
                        Sign In
                    </Link>
                )
                }
            </div>
        </nav>
    )
}

export default Navigation;