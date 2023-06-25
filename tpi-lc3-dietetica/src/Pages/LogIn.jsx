import './Form.css';
import { useForm } from '../Hooks/useForm';
import { useState } from 'react';
import firebaseApp from '../firebase/credentials';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
const auth = getAuth(firebaseApp);


const initialForm = { email: "", password: ""}

const LogIn = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  
  const validationsForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

      if (!form.email.trim()){
        errors.email = 'Debe ingresar su email'
      }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El email es incorrecto"
      }

      if (!form.password.trim()){
        errors.password = 'Contraseña inválida'
      }
    return errors;
  }

  const{form, errors, handleChange, handleSubmit} = useForm(initialForm, validationsForm);

  async function submitHandler(e){
    e.preventDefault()
    const login = await signInWithEmailAndPassword(auth,form.email, form.password);
    if(login){
      navigate("/");
    }
  }
   
    return (
    <>
      {/* onSubmit={handleSubmit} */}
      <div className="form-container">
        <h2>Iniciá sesión</h2>
        <form  onSubmit={submitHandler} >
          <div className="form-elements">
            <label id="email">Email</label>
            <input type= "email" name= "email" value={form.email} onChange={handleChange} required></input>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <label id="password">Contraseña</label>
            <input type= "password" name= "password" value={form.password} onChange={handleChange} required/>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" >Iniciar sesión</button>
          <h3>{isLogin ? 'Logeando...' : ''} </h3>
          <p>¿No tenes cuenta aún? <a href='/CreateAccount' className='link-form'>Crear cuenta</a></p>
        </form>
      </div>
      
    </>
  )
}

export default LogIn
