import Banner from "../Banner"
import FirstContainer from "../FirstContainer"
import Footer from "../Footer"
import MenuContainer from "../MenuContainer"

//j'assemble tous les elements de ma page menu


function Menu(){
    return(
        <div className='menu'>
            <Banner />
            <FirstContainer />
            <MenuContainer />
            <Footer />
        </div>    
    )
}

export default Menu