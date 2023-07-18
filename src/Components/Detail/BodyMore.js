import '../../Styles/BodyMore.css'
import Sandwich from '../../Assets/84770f_7693c2f2d0f940b1be3720f66dc42189.webp'
import Sandwich2 from '../../Assets/sandwich-roti-boeuf.jpg'
import Sandwich3 from '../../Assets/istock-139875736.jpg'
import Sandwich4 from '../../Assets/vue-laterale-pommes-terre-viande-sauce-tomate-roquette-salade-grecque-soupe-table_141793-2866.avif'
import Sandwich5 from '../../Assets/i136025-pizza-legere.webp'

import { Link } from 'react-router-dom'

// creation du composant aui contient les details complet d'un produit


function BodyMore(){
    let nameProduct="Sandwich"
    let price=5000


    return (
        <div className="BodyMore">
            <p className='title1'>{nameProduct}</p>
            <div className='rowTitle'>
                <div>
                    <h2 draggable='true' className='title2'>{nameProduct} | <span contentEditable className='price'>{price} XAF</span> </h2>
                </div>
                {/*<div>
                    <Link to='/detail/commande' className='linkCommand'>Passer ma commande</Link>
                </div>*/}
            </div>
            <div className='blockImage'>
                <img src={Sandwich} className='image' alt='Sandwich'/>
                <div className='blockImage2'>
                    <img src={Sandwich2} className='image2' alt='Sandwich'/>
                    <img src={Sandwich3} className='image2' alt='Sandwich'/>
                    <img src={Sandwich4} className='image2' alt='Sandwich'/>
                    <img src={Sandwich5} className='image2' alt='Sandwich'/>
                </div>
            </div>
            <div className='blockDescription'>
                <p>Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et </p>
            </div>
            <div className='detail'>
                <p>Temp de livraison: 30 min Max</p>
                <p>Temp de livraison: 30 min Max</p>
            </div>
            
        </div>
    )
}

export default BodyMore