import './tech.css';
import arrowTwo from '../../image/arrowtwo.png';
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
          
        </div>
        <div className='TechGauche'>
            <Technologies texte={"Figma"} />
            <Technologies texte={"ADOBE XD"} />
            <Technologies texte={"REACT JS"} />
            <Technologies texte={"GRASP"} />
            
        </div>
    </div>
    )
}