import '../../Styles/SecondBlockHome.css'
import image1 from '../../Assets/vue-laterale-pommes-terre-viande-sauce-tomate-roquette-salade-grecque-soupe-table_141793-2866.avif'
import { Link } from 'react-router-dom'
import 'animate.css'
//

function SecondBlockHome(){
    return(
        <div className="secondBlockHome">
            <div className="colLeft animate__animated animate__backInLeft">
                <p className="title">Qui sommes-nous ?</p>
                <p className='about'>Lorem ipsum dolor sit amet conse <br/> adipisicing elit. Excepturi minus ut <br/>mollitia error molestiae quia...</p>
                <Link to='' className='moreAbout'>En savoir plus</Link>
            </div>
            <div className='colRight animate__animated animate__backInRight'>
                <img src={image1} className='imageAbout' alt='SpecialFood'/>
            </div>
        </div>
    )
}

export default SecondBlockHome