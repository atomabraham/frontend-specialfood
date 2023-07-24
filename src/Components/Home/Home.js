//page d'acceuil du site
import React from 'react'

import SecondBanner from '../SecondBanner'
import Footer from '../Footer'
import FirstBlockHome from './FirstBlockHome'
import SecondBlockHome from './SecondBlockHome'
function Home() {
   return(
    <React.Fragment>
        <SecondBanner/>
        <FirstBlockHome/>
        <SecondBlockHome/>
        <Footer/>
    </React.Fragment>
   ) 
}

export default Home