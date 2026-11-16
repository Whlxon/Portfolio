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
                
                <div className="cvSection">
                    <tr>
                        <td>
                            <img className="cvMe" src="/me.png" alt="" />
                        </td>   
                        <td>
                            <h1 className="cvName">Cyril Houppertz</h1>
                        </td>
                    </tr>

                    <h2 className="cvSubTitle">Formation:</h2>
                    <h3 className="cvYear">- 2017 - 2020</h3>
                    <p className="cvText">As a 12 years old student I start beeing interest in how computer work and create my first project. <br />
                                        At this moment I started by making my first project in scratch. I made a PacMan, Snake and a line Story Game.</p>

                    <h3 className="cvYear">- 2020 - 2024</h3>
                    <p className="cvText">As a 15 years old student after making projects in scractch I started to think about making something better. <br />
                                        And it's a this age that I started to learn python</p>
                    
                    <h3 className="cvYear">- 2024 - 2025</h3>
                    <p className="cvText">As a 18 years old student after turning arround in python by making my first game, my first desktop app and some mini-games <br />
                                        I started to learn other languages, I started C by programming Arduino Uno and making tiny manual projects.</p>

                    <h3 className="cvYear">- 2025 - 2028</h3>
                    <p className="cvText">As a 19 year old student I choose for my future the IT bachelor web application oriented, I started in the first years to study algorithm,
                        <br />boolean and recursive mathematics, data structure and data base (SQL) and typescript as a backend FrameWork, nodeJS.
                        <br />
                        <br />In my second year of bachelor I started to learn for the second time the C language and typescript with the famous frontend FrameWorks React.
                    </p>
                    
                    <h2 className="cvSubTitle">Project:</h2>
                    <p className="cvText">
                        
                    </p>

                    <h2 className="cvSubTitle">Soft Skills:</h2>
                    <table className="cvSoftSkillsTab">
                        <tr>
                            <td>
                                <h3 className="cvSoftSkills">
                                    Patient
                                </h3>
                            </td>
                            <td>
                                <h3 className="cvSoftSkills">
                                    Efficient
                                </h3>
                            </td>
                            <td>
                                <h3 className="cvSoftSkills">
                                    Ambitious
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="cvSoftSkills">
                                    Problem Solver
                                </h3>
                            </td>
                            <td>
                                <h3 className="cvSoftSkills">
                                    Work Ethic
                                </h3>
                            </td>
                            <td>
                                <h3 className="cvSoftSkills">
                                    Collaboration
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="cvSoftSkills">

                                </h3>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </>
    )
}