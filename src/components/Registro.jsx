import React from 'react'
import { useState } from "react";

const Formulario = ()=>{
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState(false)
}

export default function Registro() {
  return (
    <div className='formulario'>
      <h1>Formulario de Registro</h1>
      <form>
        <input type="email" id='correo_form' placeholder='Correo electrónico'/>
        <input type="password" id='password1_fomr' placeholder='Contraseña'/>
        <input type="password" id='password2_form' placeholder='Confirmar contraseña'/>
      </form>
    </div>
  )
}
