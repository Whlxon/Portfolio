import { useNavigate } from "react-router-dom"
import "./hiring.css";


export function Hiring(){
    const navigate = useNavigate();

    return(
        <>
            <div className="hiring">
                <button className="logoB" onClick={()=>{navigate('/')}}><img className="logo" src="/logo/logo.png" alt="" /></button>

                <div className="acmenu">
                    <table>
                        <td>
                            <button className="projet" onClick={()=>{navigate('/')}}>Projects</button>
                            <button className="skillB" onClick={()=>{navigate('/skills')}}>Skills</button>
                            <button className="hire" onClick={()=>{navigate('/hiring')}}>Hiring ? </button>
                            <button className="contact" onClick={()=>{navigate('/notAvailable')}}>Contact me</button>
                        </td>          
                    </table>
                </div>


            </div>
        </>
    )
}