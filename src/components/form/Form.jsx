import { useState } from "react";
import "./index.scss";
import { MOCK } from '../../MOCK/moc';
import { Link, useNavigate } from "react-router-dom";

const Form = ({
  h3 = "Olá, bem vindo!",
  action = "Login",
  metodo = "GET",
  linkto = "/signup",
  doing = "cadastre-se",
  dohave = "Não possui uma conta?",
}) => {
  const [user, setUser] = useState({ username: null, password: null });
  const navigate = useNavigate();

  const sendLogin = async (event) => {
    event.preventDefault();

    const data = {
      username: user.username,
      password: user.password,
    };

    if(metodo == 'GET'){

      if (user.username == MOCK.user & user.password == MOCK.password){
        alert(`Bem vindo ${user.username}`)
        MOCK.logged = true
        navigate("/");
      }else{
        alert('Confira os Dados')
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "", input.style.border = '1px solid red')
        );
      }
      
    }else if(metodo == 'POST'){
      MOCK.user = user.username
      MOCK.password = user.password

      alert('Conta Criada com sucesso')

      navigate("/login");
    }
    console.log(MOCK)

    console.log(data);

    
  };

  return (
    <div className=".form">
      <form onSubmit={sendLogin} action="" method={metodo}>
        <h3>{h3}</h3>
        <label htmlFor="">Username</label>
        <input
          type="text"
          required
          placeholder="@username"
          autoComplete="@username"
          onChange={(e) => {
            let username = e.target.value;
            setUser({ ...user, username: username });
          }}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          required
          placeholder="*******"
          onChange={(e) => {
            let password = e.target.value;
            setUser({ ...user, password: password });
          }}
        />

        <button type="submit">{action}</button>

        <div style={{ textAlign: "center" }}>
          <p>{dohave}</p>
          <Link to={linkto}>{doing}</Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
