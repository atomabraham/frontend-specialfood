import { Link } from 'react-router-dom'
import '../../Styles/FirstBlockHome.css'

function FirstBlockHome(){
    return(
    <div className='FirstBlockHome'>
        <div className='blockOpacity'>
            <p className='nameSpecialFood'>ok</p>
            <p className='nameSpecialFood2'>SPECIAL FOOD</p>
            <p className='devise'>Le gout de la saveur à domicile</p>
            <p className='textSpecialFood'>Lorem ipsum dolor sit amet conse <br/> adipisicing elit. Excepturi minus ut <br/>mollitia error molestiae quia.</p>
            <Link to='/menu' className='callToAction'>Consulter nos menus</Link>
        </div>
    </div>
    )
}

export default FirstBlockHome