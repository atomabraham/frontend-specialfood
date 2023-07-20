//page d'acceuil du site
import React from 'react'

import SecondBanner from '../SecondBanner'
import FirstBlockHome from './FirstBlockHome'

function Home() {
   return(
    <React.Fragment>
        <SecondBanner/>
        <FirstBlockHome/>
    </React.Fragment>
   ) 
}

export default Home