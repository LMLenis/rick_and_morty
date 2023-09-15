import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import styledCard from './Card.module.css';
import { useLocation } from 'react-router-dom';

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   const location = useLocation();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, status, species, gender, image, onClose});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className ={styledCard.container}> 
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
            (<button onClick={handleFavorite}>🤍</button>)
         }
         { 
         location.pathname !=='/favorites' &&
         <button onClick={() => onClose(id)}>X</button>
         }
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img className= {styledCard.characterImage}src= {image} alt='' />
      
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps)(Card);
