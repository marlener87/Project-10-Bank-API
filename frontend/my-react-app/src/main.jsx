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

library.add(fas);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Connexion />}></Route>
                    <Route path='/profil' element={<Profil />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>    
    </StrictMode>,
)



/*
{
  headers: {
     Authorization: "Bearer " + token,
  },
}



// datas
  const prenom = response.data.body.firstName;
  const nom = response.data.body.lastName;

  */