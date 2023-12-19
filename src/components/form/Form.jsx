import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Form = ({h3='Olá, bem vindo!' , action='Login', metodo = 'GET', linkto='/signup', doing = 'cadastre-se', dohave = 'Não possui uma conta?'}) => {
    
    const [user, setUser] = useState({username: null, password: null})


    return (
    <div className='.form'>
        <form action="" method={metodo}>
            <h3>{h3}</h3>
                <label htmlFor="">Username</label>
                <input type="text" required placeholder='@username' autoComplete='@username' onChange={(e) => {
                    let username = e.target.value
                    setUser({...user, username: username})
                }}/>

                <label htmlFor="">Password</label>
                <input type="password" autoComplete='current-password' required placeholder='*******' onChange={(e) => {
                    let password = e.target.value
                    setUser({...user, password: password})
                    console.log(password)
                }}/>

                <Link to={'/'}><button type='submit'>{action}</button></Link>
                
                <div style={{textAlign: 'center'}}>
                    <p>{dohave}</p>
                    <a href={linkto}>{doing}</a>
                </div>
        </form>
    </div>
  )
}

export default Form