import './tech.css';
import arrowTwo from '../../image/arrowtwo.png';
import callMe from '../../image/callMe.gif';
function Technologies({texte}){
    return(
      <button className='Technologie'>
        <img className="arrowTwo" src={arrowTwo} alt={arrowTwo} />
        {texte}
      </button>
    );
  }

export default function Technologie(){
    return(
    <div className='Tech'>
        <div className='TechDroite'>
          <p className='TechDroiteHaut'>
            These are the COOOOOLLEST developpement tools that I use for my experiences. 
          </p>
          <p className='TechDroiteBas'>
          I use them for IA models, website developpement, and creative design.
          </p>
          <div className='giiiif'>
            <span className='gifContent'>
              <img className="gif"src={callMe} alt={callMe}/>
              <p className='callMeTexte'>CALL ME</p>
              <img className="gif"src={callMe} alt={callMe}/>
              <p className='callMeTexte'>CALL ME</p>
            </span>
          </div>
          
        </div>
        <div className='TechGauche'>
            <Technologies texte={"TENSORFLOW"} />
            <Technologies texte={"REACT JS"} />
            <Technologies texte={"SPRING BOOT"} />
            <Technologies texte={"UI/UX DESIGN"} />
        </div>
    </div>
    )
}