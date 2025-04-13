import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import styles from "./Mobile.module.css";
import { Link } from "react-router-dom";

const Mobile: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [rotating, setRotating] = useState(false);

    const handleClick = () => {
        setRotating(true);
        setTimeout(() => {
            setOpen(!isOpen);
            setRotating(false);
        }, 250);
    };

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
            <button className={styles.hamburguer} onClick={handleClick}>
                <span className={`${styles.icon} ${rotating ? styles.rotate : ""}`}>
                    {isOpen ? <FaXmark /> : <FaBars />}
                </span>
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