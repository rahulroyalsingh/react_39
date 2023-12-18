import { Link, NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <div>     
            <ul className="navbar">
            <li><NavLink className="nav-bar-link" to ="/" >About</NavLink></li>     
            <li> <NavLink className="nav-bar-link" to ="/">Home</NavLink></li>
            <li><NavLink className="nav-bar-link" to ="/">Contact</NavLink></li>
            
            </ul>
        </div>)

}
export default NavBar; 