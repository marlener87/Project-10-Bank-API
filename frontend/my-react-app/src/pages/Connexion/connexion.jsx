//import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../composants/Footer/footer";
import Navigation from "../../composants/Navigation/navigation";
import './connexion.scss';

const Connexion = () => {
    return (
        <>
        <Navigation />

        <main className="main bgDark mainSignIn">
            <section className="contentSignIn">
                <FontAwesomeIcon icon="fa-solid fa-circle-user" className="iconSignIn" />
                {/*<i className="fa fa-user-circle iconSignIn"></i>*/}
                <h1 className="titleSignIn">Sign In</h1>

                <form>
                    <div className="inputWrapperSignIn">
                        <label htmlFor="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className="inputWrapperSignIn">
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className="inputRememberSignIn">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="./user.html" className="buttonSignIn">Sign In</a>
                </form>
            </section>
        </main>

        <Footer />
        </>
    );
};


export default Connexion;

/*<!-- <button class="sign-in-button">Sign In</button> -->*/