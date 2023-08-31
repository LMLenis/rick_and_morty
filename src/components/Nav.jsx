import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, randomize, logout }) => {

    return(
        <nav>
            <SearchBar onSearch = {onSearch}/>
            <button onClick = {randomize}>ADD RANDOM</button>
            <button onClick = {logout}>LOG OUT</button>
            <button><Link to='/about'>ABOUT</Link></button>
            <button><Link to='/home' >HOME</Link></button>
            <button><Link to='/favorites' >FAVORITES</Link></button>
        </nav>
    )
}

export default Nav;