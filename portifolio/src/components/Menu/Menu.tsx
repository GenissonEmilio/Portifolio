import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { useState } from "react";

const myName: string = "<Genisson Emilio/>";

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tongleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.menu}>
            <div className={styles.name}>
                <Link to="/">{myName}</Link>
            </div>

            <button className={styles.hamburguer} onClick={tongleMenu}>☰</button>

            <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;