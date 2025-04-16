import React from "react";
import { TypeAnimation } from "react-type-animation";
import MenuOptions from "../components/layout/MenuOptions/MenuOptions";
import { FaReact, FaNodeJs } from "react-icons/fa";
import '../App.css';
import ToolsIcons from "../components/layout/ToolsIcons/ToolsIcons";

const Home: React.FC = () => {

    return (
        <div style={{ paddingLeft: '10px'}}>
            <h1 style={{ fontSize: '2rem' }}>
                Olá, eu sou Genisson Emilio
            </h1>

            <TypeAnimation 
                    sequence={[
                        'Desenvolvedor Full-Stack',
                        1000,
                        '',
                        500,
                        'Criador de soluções em softwere',
                        1000,
                        '',
                        500,
                        'Apaixonado por tecnologia',
                        1000,
                        '',
                        500
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2rem', display: 'inline-block', color: '#3B82F6' }}
                />
                <p>
                    Bem vindo! Sou um desenvolvedor de softwere com experiência em desenvolvimento web. Comecei minha jornada em programação em 2021 e sou apaixonado por aprender a usar novas tecnologias. Estou sempre em busca de aprender novas tecnologia e aprender novas habilidades. 
                </p>

                <div>
                    <MenuOptions name="Sobre mim"/>
                    <h3>Um pouco sobre mim</h3>
                    <p>Meu foco é em desenvolvimento usando tecnologias web como JavaScript, TypeScript, ReactJS entre outras tecnologias.
                        <br />

                        Atualmente estou cursando Bacharelado em Sistemas de informação pelo:
                        <span className="textLink">
                            <a href="https://www.ifs.edu.br" target="_blank">IFS - Instituto Federal de Sergipe / SE - Brasil.</a>
                        </span>

                        <br />

                        As tecnologias que mais uso no desenvolvimento:
                    </p>
                    <div className="iconBox">
                        <ToolsIcons name="React JS" color="blue" icon={FaReact}/>
                        <ToolsIcons name="Node JS" color="green" icon={FaNodeJs}/>
                    </div>
                </div>
        </div>
    )
}

export default Home;