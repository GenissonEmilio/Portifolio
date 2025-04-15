import React from "react";
import { TypeAnimation } from "react-type-animation";

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
                <p style={{ font: '20px Arvo serif', fontWeight: '400', fontStyle: 'normal', color: '#333333'}}>
                    Bem vindo! Sou um desenvolvedor de softwere com experiência em desenvolvimento web. Comecei minha jornada em programação em 2021 e sou apaixonado por aprender a usar novas tecnologias. Estou sempre em busca de aprender novas tecnologia e aprender novas habilidades. 
                </p>
        </div>
    )
}

export default Home;