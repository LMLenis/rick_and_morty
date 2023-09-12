import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styledNav from './Nav.module.css'

const Nav = ({ onSearch, randomize, logout }) => {

    return(
        <nav className={styledNav.container}>
            <SearchBar onSearch = {onSearch}/>
            <button className={styledNav.button} onClick = {randomize}>ADD RANDOM</button>
            <button className={styledNav.button} onClick = {logout}>LOG OUT</button>
            <button className={styledNav.button}><Link to='/about'>ABOUT</Link></button>
            <button className={styledNav.button}><Link to='/home' >HOME</Link></button>
            <button className={styledNav.button}><Link to='/favorites' >FAVORITES</Link></button>
        </nav>
    )
}

export default Nav;