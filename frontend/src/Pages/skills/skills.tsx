import { useNavigate } from "react-router-dom";
import "./skills.css";

export function Skills(){
    const navigate = useNavigate();

    return(
        <>
            <div className="skills">
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

                <h1 className="skillsTitle">My Skills</h1>
                <h2 className="skillsSubTitle">There is no limit when your imagination take control of your projects</h2>

                <h3 className='skillsFram'>FrameWorks</h3>

                <table className="tableSkill">
                    <tr>
                        <td>
                            <div className="cardskill">
                                <td>
                                    <img className="" src="/logo/logo-react.png" alt="" />
                                </td>
                                <td>
                                    <div className="cardskillSubTitle">React</div>
                                </td>
                                <div className="cardskillDescription">React is a free and open-front-end JavaScript library used for building user interfaces, especially for single-page applications.</div>
                                <div> Level: Expert</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <td>
                                    <img className="" src="/logo/logo_nodejs.png" alt="" />
                                </td>
                                <td>
                                    <div className="cardskillSubTitle">NodeJS</div>
                                </td>
                                <div className="cardskillDescription">Node.js is a open-source JavaScript runtime that runs on Windows, Mac and Linux. It lets you execute server-side development with JavaScript langage.</div>
                                <div> Level: Expert</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <td>
                                    <img className="" src="/logo/logo-sequelize.png" alt="" />
                                </td>
                                <td>
                                    <div className="cardskillSubTitle">Sequelize</div>
                                </td>
                                <div className="cardskillDescription">Sequelize is a promise-based ORM library for Node.js and TypeScript that lets developers interact with SQL databases.</div>
                                <div> Level: Medium</div>
                            </div>
                        </td>
                    </tr>
                </table>

                <h3 className='skillsFram'>Programmation Language</h3>

                <table className="tableSkill">
                    <tr>
                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-C.png" alt="" />
                                <div className="cardskillSubTitle">C</div>
                                <div className="cardskillDescription">C is a powerful and lowest level language that allow user to build games and os</div>
                                <div> Level: Low</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-Csharp.png" alt="" />
                                <div className="cardskillSubTitle">C#</div>
                                <div className="cardskillDescription">C# ("C-Sharp") is a high level language that allow users to build game and Software<br/>(Based on C)</div>
                                <div> Level: Low</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-Cplusplus.png" alt="" />
                                <div className="cardskillSubTitle">C++</div>
                                <div className="cardskillDescription">C++ is another high level language that allow users to build games and software<br/>(also based on C)</div>
                                <div> Level: Low</div>
                            </div>
                        </td>
                    
                    </tr>

                    <tr>
                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-java.png" alt="" />
                                <div className="cardskillSubTitle">Java</div>
                                <div className="cardskillDescription">Java is a high level and beginner friendly programming language with an object-oriented side</div>
                                <div> Level: Medium</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-python.png" alt="" />
                                <div className="cardskillSubTitle">Python</div>
                                <div className="cardskillDescription">Python is a high level and the best programming language for learning programmation, really easy to use</div>
                                <div> Level: Expert</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-typescript.png" alt="" />
                                <div className="cardskillSubTitle">TypeScript</div>
                                <div className="cardskillDescription">TypeScript is a high level non beginner friendly programming language which is use for Website</div>
                                <div> Level: Expert</div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-shell.png" alt="" />
                                <div className="cardskillSubTitle">Shell</div>
                                <div className="cardskillDescription"></div>
                                <div> Level: Medium</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-htmlAcss.png" alt="" />
                                <div className="cardskillSubTitle">HTML / CSS</div>
                                <div className="cardskillDescription"></div>
                                <div> Level: Expert</div>
                            </div>
                        </td>

                        <td>
                            <div className="cardskill">
                                <img className="" src="/logo/logo-SQL.png" alt="" />
                                <div className="cardskillSubTitle">SQL</div>
                                <div className="cardskillDescription"></div>
                                <div> Level: Medium</div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="cardskill">
                                <img className="" src="/" alt="" />
                                <div className="cardskillSubTitle"></div>
                                <div className="cardskillDescription">Maybe More in the Future ?!</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}