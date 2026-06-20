import {Link} from 'react-router-dom';

function Header({ cartCount }){
    return (
        <header>
            <h1>Key Shop</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/prob1">Student Analysis</Link></li>
                    <li>cart({cartCount}) </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;