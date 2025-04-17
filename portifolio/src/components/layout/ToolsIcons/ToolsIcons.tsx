import React from "react";
import styles from './ToolsIcons.module.css';

type ToolsIcons = {
    name: string,
    color: string,
    icon: React.ElementType
}

const ToolsIcons: React.FC<ToolsIcons> = ({ name, color, icon: Icon}) => {

    return (
        <div className={styles.iconContainer}>
            <Icon style={{color: `${color}`}}/>
            <p className={styles.projectName}>{name}</p>
        </div>
    )
}

export default ToolsIcons;