import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo logo">
                    Food Shop
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/dontsul/react-shop"
                            target="_blanc"
                            className="link-repo "
                        >
                            Repo
                            <AiFillGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export { Header };
