import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.scss'
import Home from './pages/Home/home.jsx'
import Connexion from './pages/Connexion/connexion.jsx'
import Profil from './pages/Profil/profil.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import PrivateRoute from './composants/privateRoute.jsx'

library.add(fas);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>     
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Connexion />}></Route>
                    <Route 
                        path='/profil' 
                        element={
                            <PrivateRoute>
                                <Profil />
                            </PrivateRoute>
                        }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>    
    </StrictMode>,
)