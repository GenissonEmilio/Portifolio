import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
    const myName: string = "<Genisson Emilio/>";

    return (
        <nav>
            <div className={styles.name}>
                <Link to="/">{myName}</Link>
            </div>

            <ul className={`${styles.links}`}>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;