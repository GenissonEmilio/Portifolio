import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Mobile.module.css";
import { Link } from "react-router-dom";

const Mobile: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <div>
            <button className={styles.hamburguer} onClick={() => setOpen(!isOpen)}>
                <FaBars />
            </button>

            {shouldRender && (
                <div className={`${styles.menu} ${isOpen? styles.menuOpen : styles.menuClose}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setOpen(!isOpen)}>Home</Link></li>
                        <li><Link to="/sobre" onClick={() => setOpen(!isOpen)}>Sobre</Link></li>
                        <li><Link to="/projetos" onClick={() => setOpen(!isOpen)}>Projetos</Link></li>
                        <li><Link to="/contato" onClick={() => setOpen(!isOpen)}>Contatos</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Mobile;