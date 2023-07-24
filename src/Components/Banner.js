import React from 'react'
import '../Styles/Banner.css'
import { Link } from 'react-router-dom'

//creation de la banniere du site 
function Banner(){
    function Test(){
        alert("Hello")
    }
    return (
    <div className="banner" id='banner' onScroll={Test}>
        <Link to='/' className='buttonMenu' id='buttonMenu1'>ACCEUIL</Link>
        <Link to='/menu' className='buttonMenu' id='buttonMenu2'>NOS MENUS</Link>
        <Link to='/' className='buttonMenu' id='buttonMenu3'>NOUS CONTACTER</Link>
    </div>
    )
    
    
}

export default Banner