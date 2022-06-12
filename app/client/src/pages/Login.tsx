import { useState } from 'react';

import '../assets/scss/login.scss'
import { Link } from 'react-router-dom';
import decoration from "../assets/images/login-decoration.svg"

import { FaUser } from 'react-icons/fa'
import { HiOutlineKey } from 'react-icons/hi'

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("USERNAME = ", username)
    console.log("PASSWORD = ", pwd)
  }


  return (
    <div className="login-page">
      <div className="left-side">
        <h1>
          <div>Tech  JS</div>
          E-Learning
        </h1>
        <div className="decoration">
          <img src={decoration} alt="" />
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <h3>E-Learning | Connexion</h3>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="input-bloc">
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <FaUser className='icon' />
            </div>
            <div className="input-bloc">
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
              <HiOutlineKey className='icon' />
            </div>
            <div className="pwd-forget-container">
              <Link to="/reset-password" className='pwd-forget'>Mot de passe oublié ?</Link>
            </div>
            <button className='btn'>Se connecter</button>
          </form>
          <div className="divider"></div>
          <p>Vous n'avez pas de compte ?</p>
          <button className='btn sec'>S'inscrire</button>
        </div>
      </div>
    </div>
  )
}

export default Login;