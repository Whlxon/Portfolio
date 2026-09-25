import { useNavigate } from "react-router-dom"


export function NotAvailable() {
    const navigate = useNavigate();

    return(
        <>
            <div className="notAv">

                <button className="logoB" onClick={()=>{navigate('/')}}><img className="logo" src="public/logo.png" alt="" /></button>
                <div className="acmenu">
                    <table>
                        <tr>
                            <td className="acButtons">
                                <button className="projet" onClick={()=>{navigate('/')}}>Projects</button>
                                <button className="skillB" onClick={()=>{navigate('/skills')}}>Skills </button>
                                <button className="hire" onClick={()=>{navigate('/notAvailable')}}>Hiring ? </button>
                                <button className="contact" onClick={()=>{navigate('/notAvailable')}}>Contact me</button>
                            </td>
                        </tr>        
                    </table>
                </div>

                <h1 className="notTitle">You felt in a endless hole !</h1>
                <h2 className="notSubtitle">naaaaah joking, this page is in work, come later !</h2>
                
            </div>
        </>
    )
}