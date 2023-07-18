import '../../Styles/BodyMore.css'

// creation du composant aui contient les details complet d'un produit


function BodyMore2(){
    let nameProduct="Sandwich"


    return (
        <div className="BodyMore2">
            <div className='rowTitle'>
                <p className='title'>{nameProduct}</p>
            </div>
        </div>
    )
}

export default BodyMore2