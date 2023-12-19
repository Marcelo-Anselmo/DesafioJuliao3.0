import './index.scss'
import { Link } from 'react-router-dom'

const Form = ({h3='Olá, bem vindo!' , action='Login', metodo = 'GET', linkto='/signup', doing = 'cadastre-se', dohave = 'Não possui uma conta?'}) => {
  
    return (
    <div className='.form'>
        <form action="" method={metodo}>
            <h3>{h3}</h3>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='@username'/>

                <label htmlFor="">Password</label>
                <input type="password" placeholder='*******'/>

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