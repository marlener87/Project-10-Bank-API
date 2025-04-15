import { useEffect, useState } from 'react';
// Importation de la bibliothèque Axios pour les requêtes HTTP
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './login.scss';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // Déclaration des états pour l'email, le mot de passe et les messages d'erreur
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // Sert à envoyer des actions au store Redux afin de modifier l'état global de l'application
    const dispatch = useDispatch();
    // Sert à gérer la navigation entre différentes pages dans une application React
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            navigate('/profil'); // Redirige vers le dashboard si déjà connecté
        }
    }, [navigate]);


    // Fonction qui s'exécute lors de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setError(''); // Réinitialisation du message d'erreur

        try {
            // Envoi de la requête POST à l'API avec Axios
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email: username,   // corps de la requête : username
                password    // corps de le requête : password
            });

            // Si la requête réussit (code 200 OK)
            if (response.status === 200) {
                const data = response.data; // Récupération des données de la réponse
                const token = data.body.token;

                // Stocker le token dans Redux et localStorage
                dispatch(setToken(token));
                sessionStorage.setItem('token', token); // Stocker le token d'authentification dans le sessionStorage

                const userResponse = await axios.post(
                    'http://localhost:3001/api/v1/user/profile', 
                    {},
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                if (userResponse.status === 200) {
                    const userData = userResponse.data.body;
                    dispatch(setUser(userData)); // Met à jour Redux avec les infos de l'utilisateur
                }

                // Petite pause avant la redirection pour afficher le token
                setTimeout(() => {
                    //window.location.href = '/profil';
                    navigate('/profil');
                }, 500);
            }
        } catch (error) {
            if (error.response) {
                // Erreur provenant de l'API (ex: 401 Unauthorized)
                setError('Identifiants incorrects');
            } else {
                // Erreur réseau ou autre
                setError('Erreur réseau');
            }
            console.error(error);   // Affichage de l'erreur dans la console pour le débogage
        }
    };

    return (
        <main className="main bgDark mainSignIn">
            <section className="contentSignIn">
                <FontAwesomeIcon icon="fa-solid fa-circle-user" className="iconSignIn" />
                <h1 className="titleSignIn">Sign In</h1>

                <form onSubmit={handleSubmit}>
                    <div className="inputWrapperSignIn">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
                    <div className="inputWrapperSignIn">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div className="inputRememberSignIn">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className="buttonSignIn">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;
