import React from 'react'
import '../Styles/SecondBanner.css'
import { Link } from 'react-router-dom'

//creation de la banniere du site 
function SecondBanner(){
    function Test(){
        alert("Hello")
    }
    return (
    <div className="banner" id='banner' onScroll={Test}>
        <Link to='/' className='buttonMenu' id='buttonMenu1'>Acceuil</Link>
        <Link to='/menu' className='buttonMenu' id='buttonMenu2'>Nos Menus</Link>
        <Link to='/' className='buttonMenu' id='buttonMenu3'>Nous contacter</Link>
    </div>
    )
    
    
}

export default SecondBanner