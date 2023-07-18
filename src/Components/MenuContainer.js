import '../Styles/MenuContainer.css'
import menuImage from '../Assets/sandwich-sans-limites-pb.jpg'
import menuImage1 from '../Assets/vue-laterale-pommes-terre-viande-sauce-tomate-roquette-salade-grecque-soupe-table_141793-2866.avif'
import { Link } from 'react-router-dom'

function MenuContainer(){
    //let count=10

    return(
        <div className='menuContainer' id='menuContainer'>
            <div className='row' id='row'>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                
                
            </div>
            <div className='row' id='row'>
                <div className='col' id='col'>
                    <img src={menuImage1} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage1} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage1} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                
            </div>
            <div className='row' id='row'>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
            </div>
            <div className='row' id='row'>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>sandwich</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</p>
                    <h3>5000 XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default MenuContainer