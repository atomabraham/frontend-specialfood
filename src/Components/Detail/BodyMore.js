import '../../Styles/BodyMore.css'
import Sandwich from '../../Assets/84770f_7693c2f2d0f940b1be3720f66dc42189.webp'
import Sandwich2 from '../../Assets/sandwich-roti-boeuf.jpg'
import Sandwich3 from '../../Assets/istock-139875736.jpg'
import Sandwich4 from '../../Assets/vue-laterale-pommes-terre-viande-sauce-tomate-roquette-salade-grecque-soupe-table_141793-2866.avif'
import Sandwich5 from '../../Assets/i136025-pizza-legere.webp'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//importation pour le modal
import '../../Styles/modalCommand.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// creation du composant aui contient les details complet d'un produit


function BodyMore(){
    let nameProduct="Sandwich"
    let price=5000
    //le modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                {/*<Link to='/detail/commande' variant="primary" onClick={handleShow} className='linkCommand'>Passer ma commande</Link>*/}
                <button variant="primary" onClick={handleShow} className='linkCommand'>Passer ma commande</button>
            </div>
            {/*modal*/}
            <Modal className='blocModal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Ma commande</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='nameGroup'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nom *</Form.Label>
                            <Form.Control type="text" placeholder="Votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3 secondName" controlId="exampleForm.ControlInput1">
                            <Form.Label>Prénom *</Form.Label>
                            <Form.Control type="text" placeholder="Votre prénom" />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Votre email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Téléphone *</Form.Label>
                            <Form.Control type="email" placeholder="Votre numéro de téléphone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Addresse *</Form.Label>
                            <Form.Control type="email" placeholder="Votre addresse de localisation" />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Select aria-label="Default select example">
                            <option>Moyen de payement *</option>
                            <option value="1">A la livraison</option>
                            <option value="2">Mobile Money</option>
                            <option value="3">Via carte bancaire</option>
                        </Form.Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button className='resetButton' variant="secondary" onClick={handleClose}>
                    Annuler
                </Button>
                <Button className='confirmButton' variant="primary" onClick={handleClose}>
                    Confirmer
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

        
    )
}

export default BodyMore