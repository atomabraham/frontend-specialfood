import Banner from '../Banner'
import Footer from '../Footer'
import BodyMore from './BodyMore'
import '../../Styles/More.css'
import MenuContainer from '../MenuContainer'
import BodyMore2 from './BodyMore2'

//affichage des details complet de chaque produits

function More(){
    return (
    <div className='more'>
        <Banner/>
        <BodyMore/>
        <Footer/>
    </div>
    
    )
}

export default More