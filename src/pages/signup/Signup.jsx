import React from 'react'
import Form from '../../components/form/Form'
import './index.scss'

const Signup = () => {
  return (
    <div className='signup'>
        <Form h3='Cadastre-se já!' action='Criar Conta' metodo='POST' linkto='/login' doing='Acesse sua conta' dohave='Ja possui uma conta?'/>
    </div>
  )
}

export default Signup