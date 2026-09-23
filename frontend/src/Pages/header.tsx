import { useNavigate } from "react-router-dom"
import "../App.css";

export function Header() {
    const navigate = useNavigate();

    return(
        <>
            <div className="contLogo">
                <button className="logoB" onClick={()=>{navigate('/')}}><img className="logo" src="public/logo.png" alt="" /></button>
            </div>
            
            <div className="acmenu">
                
                <table>
                    
                    <th>

                        <button className="projet" onClick={()=>{navigate('/project')}}>Projets </button>
                        
                        <button className="skills" onClick={()=>{navigate('/skills')}}>Compétence </button>
                        
                        <button className="hire" onClick={()=>{navigate('/hiring')}}>M'embaucher ? </button>
                        
                        <button className="contact" onClick={()=>{navigate('/contact')}}>Me contacter</button>
                    </th>
                    
                </table>
            </div>
        </>
    )
}