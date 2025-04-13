//import React from 'react';
import './home.scss';
import Navigation from "../../composants/Navigation/navigation";
import CardHome from "../../composants/CardHome/cardHome";
import Footer from '../../composants/Footer/footer';
import iconChat from '/assets/icon-chat.png';
import iconSecurity from '/assets/icon-security.png'

const Home = () => {
    return (
        <>
        <Navigation />

        <main>
            <div className="headerHome">
                <section className="contentHeader">
                    {/*<h2 className="sr-only">Promoted Content</h2>*/}
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p><br />
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div> 

            <section className='cardContent'>
                <CardHome 
                    title={'You are our #1 priority'} 
                    icon={iconChat}>
                    <p className='pSection'>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                </CardHome>
                <CardHome 
                    title={'More savings means higher rates'}
                    icon={'/assets/icon-money.png'}>
                    <p className='pSection'>The more you save with us, the higher your interest rate will be!</p>
                </CardHome>
                <CardHome 
                    title={'Security you can trust'}
                    icon={iconSecurity}>
                    <p className='pSection'>We use top of the line encryption to make sure your data and money is always safe.</p>
                </CardHome>
            </section>
        </main>

        <Footer />
        </>
    );
};

export default Home;