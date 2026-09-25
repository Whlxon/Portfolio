import { useNavigate } from "react-router-dom"
import "../../App.css"


export function Home() {
  
  const navigate = useNavigate();

  const scrollVersPro= () => {
    // Recherche l'élément par son ID HTML
    const element = document.getElementById('mon-id-html');
    if (element) {
      // Défilement fluide vers l'élément
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="home" id="ho">
        <button className="logoB" onClick={()=>{navigate('/')}}><img className="logo" src="public/logo.png" alt="" /></button>
        <div className="acmenu">
          <table>
            <td>
              <button className="projet" onClick={()=>{scrollVersPro()}}>Projects</button>
              <button className="skillB" onClick={()=>{navigate('/skills')}}>Skills</button>
              <button className="hire" onClick={()=>{navigate('/notAvailable')}}>Hiring ? </button>
              <button className="contact" onClick={()=>{navigate('/notAvailable')}}>Contact me</button>
            </td>          
          </table>
        </div>

        <h1 className="acTitle">Portfolio</h1>
        <div className="acCredit">Credit to Faded_Gallery on unsplash for illustrations</div>
        <h2 className="acSubTitle">Informatic Technology Web Application Oriented</h2>
      </div>

      <div className="projets" id="pro" >

        <a href="https://www.youtube.com/watch?v=QDia3e12czc"><h1 className="proTitle" >My Projects</h1></a>

        <table>
          <tr>
            <td>
              <div className="cards">
                <img className="" src="../../public/tictactoe.png" alt="" />
                <div className="cardsSubTitle">TicTacToe</div>
                <div className="cardsDescription">Language: Python</div>
              </div>
            </td>

            <td>
              <div className="cards">
                <img className="" src="../../public/GeoKnow.png" alt="" />
                <div className="cardsSubTitle">GeoKnow</div>
                <div className="cardsDescription">Language: TypeScript</div>
              </div>
            </td>

            <td>
              <div className="cards">
                <img className="" src="../../public/belgacais.png" alt="" />
                <div className="cardsSubTitle">Belgacai (Co-Creator)</div>
                <div className="cardsDescription">Language: HTML/PHP</div>
              </div>
            </td>
           
          </tr>
          <tr>
            <td>
              <div className="cards">
                <img className="" src="../../public/motizou.png" alt="" />
                <div className="cardsSubTitle">Motizou</div>
                <div className="cardsDescription">Language: TypeScript</div>
              </div>
            </td>

            <td>
              <div className="cards">
                <img className="" src="../../public/Enigmatic.png" alt="" />
                <div className="cardsSubTitle">Enigmatic-Game</div>
                <div className="cardsDescription">Language: Python</div>
              </div>
            </td>

            <td>
              <div className="cards">
                <img className="" src="../../public/protfolio.png" alt="" />
                <div className="cardsSubTitle">My Portfolio</div>
                <div className="cardsDescription">Language: TypeScript</div>
              </div>
            </td>
          </tr>
        </table>
        


      </div>
    </>
  )
}