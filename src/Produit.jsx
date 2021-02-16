import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss'
import SubjectIcon from '@material-ui/icons/Subject';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Produit(props) {
    /**
     * Ajoute l'article au panier
     */
    
    function ajouterArticle() {
        const [panier, setPanier] = props.etatPanier;
        if(panier[props.id]){
            panier[props.id].qte++;
        }
        else{
            panier[props.id] = {prix: props.prix, qte : 1}
        }
        //Maintenant il faut changer l'état du panier
        const nouveauPanier = Object.assign({}, panier);
        setPanier(nouveauPanier);
        console.log(panier);
    }

    return(
       <li className="Produit">
           <SubjectIcon></SubjectIcon>
           <div className="image">
               <img src={'images_produits/' + props.id + '.webp'} alt={props.nom}/>
           </div>   
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="Red">Modifié le : {props.date}</p>
                <MoreVertIcon/>
            </div>
          
       </li>
    );

}