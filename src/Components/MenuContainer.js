import '../Styles/MenuContainer.css'
import menuImage from '../Assets/sandwich-sans-limites-pb.jpg'
import menuImage1 from '../Assets/vue-laterale-pommes-terre-viande-sauce-tomate-roquette-salade-grecque-soupe-table_141793-2866.avif'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";

function MenuContainer(){
    //let count=10
    /*function MyComponent(){
        const [items, setItems] = useState([]);

        useEffect(()=>{
            axios.get('http://localhost:8000/api/menus/')
        })
    }*/
    /*
    const {skills, getSkills, deleteSkill}=useContext(SkillContext);
    useEffect(() => {
       
        getSkills();
    }, []);

    skills.map((skill) => {
       console.log(skill.name) 
    })
    */
    const [menus, setMenus] = useState([]);

    useEffect(() => {
      fetchMenus();
    }, []);
  
    const fetchMenus = async () => {
      await axios.get(`http://localhost:8000/api/menus/`).then(({ data }) => {
        setMenus(data);
      });
    };
    return(
        <div className='menuContainer' id='menuContainer'>
                
            
            <div className='row' id='row'>
            {menus.map((menu) => (
                <div className='col' id='col'>
                    <img src={menuImage} className='menuImage' alt='specialfood'/>
                    <h2>{menu.name}</h2>
                    <p>{(menu.description).substr(0,50)} ...</p>
                    <h3>{menu.price} XAF</h3>
                    <Link to='/detail' className='aCommand'>Commander</Link>
                </div>
            
        ))}
                {/*<div className='col' id='col'>
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
                
                
                </div>*/}
            {/*<div className='row' id='row'>
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
                
            </div>*/}
            
        </div>
        </div>
    )
}

export default MenuContainer