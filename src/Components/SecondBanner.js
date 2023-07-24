import React from 'react'
import '../Styles/SecondBanner.css'
import { Link } from 'react-router-dom'

//creation de la banniere du site 
function SecondBanner(){
    function Test(){
        alert("Hello")
    }
    return (
    <div className="banner2" id='banner2' onScroll={Test}>
        <Link to='/' className='buttonMenu2' id='buttonMenu12'>ACCEUIL</Link>
        <Link to='/menu' className='buttonMenu2' id='buttonMenu22'>NOS MENUS</Link>
        <Link to='/' className='buttonMenu2' id='buttonMenu32'>NOUS CONTACTER</Link>
    </div>
    )
    
    
}

export default SecondBanner