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
                
                <tr>
                    <td>
                        <img className="cvMe" src="/me.png" alt="" />
                    </td>   
                    <td>
                        <h1 className="cvName">Cyril Houppertz</h1>
                    </td>
                </tr>

                <h2 className="cvSubTitle">Experience:</h2>
                <h3 className="cvYear">- 2017</h3>
                <p className="cvText">As a 13 years old student I start beeing interest in how computer work and create my first project.</p>

            </div>
        </>
    )
}