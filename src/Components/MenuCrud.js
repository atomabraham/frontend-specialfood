// Fichier de creation de la logique aui va communiaquer avec le back 
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL="http://127.0.0.1:8000/api/V1/";

const SkillContext=createContext();
// 

const initialForm = {
    name:"",
    price:"",
    description:"",
}

export const SkillProvider = ({children})=>{

    const [formValues, setFormValues] = useState(initialForm);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onChange=(e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    };
    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };
    // Parameter to show skill while we want to edit 

    const getSkill=async(id) => {
        const response = await axios.get("skills/"+id);
        const apiSkill = response.data.data
        setSkill(apiSkill);
        setFormValues({
            name:apiSkill.name,
            slug:apiSkill.slug
        })
    }
    // Parameter to create and store skill 
    
    const storeSkill=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("skills", formValues);
            setFormValues(initialForm);
            navigate("/skills");
        }catch(e){
            if(e.response.status===422){
                setErrors(e.response.data.errors);
            }
        }
    }
    // Parameter to update skill 

    const updateSkill = async(e) =>{
        e.preventDefault();
        try{
            await axios.put("skills/"+skill.id, formValues);
            // getSkills();
            setFormValues(initialForm);

            navigate("/skills");

        }catch(e){
            if(e.response.status===422){
                setErrors(e.response.data.errors);
            }


        }
    }
    // Parameter to delete skill 

    const deleteSkill = async(id) => {
        // Alert button to confirm the delete action 
        if(!window.confirm("Are you sure")){
            return;
        }
        await axios.delete("skills/"+id);
        getSkills();
    }
    return (
    <SkillContext.Provider value={{
        skill, 
        skills, 
        getSkill,
        getSkills, 
        onChange, 
        formValues, 
        storeSkill,
        errors,
        setErrors,
        updateSkill,
        deleteSkill
    }}>
        {children}
    </SkillContext.Provider>
    )}


export default SkillContext;