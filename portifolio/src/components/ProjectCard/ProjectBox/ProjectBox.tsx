import React from "react";
import styles from './ProjectBox.module.css';

type ProjectBox = {
    name: string,
    description: string,
}

const ProjectBox: React.FC<ProjectBox> = ({ name, description }) => {

    return (
        <div className={styles.projectContainer}>
            <img src="./././././public/project.png" alt="project image" className={styles.projectIMG} />
            <div className={styles.projectText}>
                <h4>{name}</h4>
                <p>{description}</p>
                <a href="https://github.com/GenissonEmilio/Pizza-project.git" target="_blank" >Ver mais	&rarr;</a>
            </div>
        </div>
    )
}

export default ProjectBox;