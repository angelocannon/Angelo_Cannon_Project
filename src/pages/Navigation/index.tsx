import { Link, useLocation } from 'react-router-dom';
import './index.css';

export default function Navigation() {
    const location = useLocation();

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">The Lord of the Rings API Viewer</h1>
                <p className="subtitle">Explore the world of Middle Earth through movies, characters, and quotes.</p>
            </header>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/movies" className={`nav-link ${location.pathname === '/movies' ? 'active' : ''}`}>Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/characters" className={`nav-link ${location.pathname === '/characters' ? 'active' : ''}`}>Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/quotes" className={`nav-link ${location.pathname === '/quotes' ? 'active' : ''}`}>Quotes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}