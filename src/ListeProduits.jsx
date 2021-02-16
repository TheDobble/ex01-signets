import './ListeProduits.scss'
import Produit from './Produit'
import tabProduits from './data/produits.json';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function ListeProduits(props) {
    return(
        <div>
            <div className="ListeProduits">
                <ul>
                    {
                       tabProduits.map((prd) =>
                       
                        <Produit 
                                key={prd.id}
                                id={prd.id} 
                                nom={prd.nom} 
                                date={prd.datemodif}/>
                       )
                    }
                </ul>
                    <AddCircleOutlineIcon/>
            </div>


        </div>

    );

}