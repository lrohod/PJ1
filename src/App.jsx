import React, { useState } from 'react';
import './style.css';
import { supabase } from '../utils/supabase'

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Função para registrar um usuário
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert('Erro no cadastro: ' + error.message);
    } else {
      alert('Usuário cadastrado com sucesso!');
    }
  };

  // Função para fazer login
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert('Erro no login: ' + error.message);
    } else {
      alert('Login realizado com sucesso!');
    }
  };
  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Formulário de Login */}
          <form className="sign-in-form">
            <h2 className="title">Entrar</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <input type="submit" value="Entrar" className="btn solid" />
            <p className="social-text">Entre com o Google</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>

          {/* Formulário de Cadastro */}
          <form className="sign-up-form">
            <h2 className="title">Cadastro</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Usuário" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Senha" />
            </div>
            <input type="submit" className="btn" value="Cadastre-se" />
            <p className="social-text">Cadastre-se com o Google</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Painéis de alternância */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo por aqui?</h3>
            <p>Informa-se, defenda-se, consuma com consciência.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(true)}>
              Cadastre-se
            </button>
          </div>
          <img src="/src/img/undraw_judge_katerina_limpitsouni_ny-1-q.svg" className="image" alt="Cadastro" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Já tem uma conta?</h3>
            <p>Informa-se, defenda-se, consuma com consciência.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(false)}>
              Entrar
            </button>
          </div>
          <img src="\src\img\undraw_undraw_undraw_undraw_businessman_e7v0_qrld_-1-_hvmv_-1-_ik9c.svg" className="image" alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default App;
