import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="Service">Service</Link>

            </nav>
        </header>
    )

}
export default Header