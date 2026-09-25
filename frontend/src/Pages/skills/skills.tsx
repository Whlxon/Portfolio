import { useNavigate } from "react-router-dom";

export function Skills(){
    const navigate = useNavigate();

    return(
        <>
            <div className="skills">
                <button className="logoB" onClick={()=>{navigate('/')}}><img className="logo" src="public/logo.png" alt="" /></button>
                <div className="acmenu">
                    <table>
                        <td>
                        <button className="projet" onClick={()=>{navigate('/')}}>Projects</button>
                        <button className="skillB" onClick={()=>{navigate('/skills')}}>Skills</button>
                        <button className="hire" onClick={()=>{navigate('/notAvailable')}}>Hiring ? </button>
                        <button className="contact" onClick={()=>{navigate('/notAvailable')}}>Contact me</button>
                        </td>          
                    </table>
                </div>

            </div>
        </>
    )
}