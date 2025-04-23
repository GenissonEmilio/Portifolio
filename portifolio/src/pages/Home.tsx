import { TypeAnimation } from "react-type-animation";
import MenuOptions from "../components/layout/MenuOptions/MenuOptions";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import '../App.css';
import ToolsIcons from "../components/layout/ToolsIcons/ToolsIcons";
import ProjectBox from "../components/ProjectCard/ProjectBox/ProjectBox";
import ContactForm from "../components/forms/ContactForm";

const Home: React.FC = () => {

    return (
        <div id="home" style={{ padding: '70px 20px 0 20px' }}>
            <h1 style={{ fontSize: '1.5rem', whiteSpace: 'nowrap' }}>
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
                    style={{ fontSize: '1.5rem', display: 'inline-block', color: '#3B82F6' }}
                />
                <p>
                    Bem vindo! Sou um desenvolvedor de softwere com experiência em desenvolvimento web. Comecei minha jornada em programação em 2021 e sou apaixonado por aprender a usar novas tecnologias. Estou sempre em busca de aprender novas tecnologia e aprender novas habilidades. 
                </p>

                <div id="sobre">
                    <MenuOptions name="Sobre mim"/>
                    <h3>Um pouco sobre mim</h3>
                    <p>Meu foco é em desenvolvimento usando tecnologias web como JavaScript, TypeScript, ReactJS entre outras tecnologias.
                        <br />

                        Atualmente estou cursando Bacharelado em Sistemas de informação pelo:
                        <span className="textLink">
                            <a href="https://www.ifs.edu.br" target="_blank">IFS - Instituto Federal de Sergipe / SE - Brasil.</a>
                        </span>
                    </p>

                    <h3 style={{ paddingTop: '10px'}}>Tecnologias e Ferramentas</h3>
                    <p>As tecnologias que mais utilizo no desenvolvimento:</p>
                    <div className="iconBox">
                        <ToolsIcons name="React JS" color="blue" icon={FaReact}/>
                        <ToolsIcons name="Node JS" color="green" icon={FaNodeJs}/>
                        <ToolsIcons name="HTML" color="#E34F26" icon={FaHtml5}/>
                        <ToolsIcons name="CSS3" color="#1572B6" icon={FaCss3Alt}/>
                    </div>
                </div>

                <div id="projetos">
                    <MenuOptions name="Projetos" />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>O que eu Fiz</h3>

                    <div className="projectGrid">
                        <div className="projectContent">
                            <ProjectBox name="Pizza RPG" description="Um projeto feito 100% em javascript, html e css, com intuito de treinar todos os conceitos basicos de javascript." link="https://github.com/GenissonEmilio/Pizza-project.git" />
                        </div>
                        <div className="projectContent">
                            <ProjectBox name="Portifolio" description="Um portifolio feito em React e typeScript visando treinar e criar um local para disponibilidade dos meus projetos futuros." link="https://github.com/GenissonEmilio/Portifolio.git" />
                        </div>
                        <div className="projectContent">
                            <ProjectBox name="Teste" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum corporis quidem vel, similique assumenda tenetur, ipsam nostrum doloremque deserunt eos perferendis nemo sint. Aliquam praesentium architecto nobis voluptates quibusdam." link="https://github.com/GenissonEmilio/Pizza-project.git" />
                        </div>
                        
                    </div>
                    

                </div>

                <div id="contato" style={{ paddingBottom: '50px' }}>
                    <MenuOptions name="Contato" />
                    <h3>Me contate</h3>
                    <p style={{ paddingBottom: '50px' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum corporis quidem vel, similique assumenda tenetur, ipsam nostrum doloremque deserunt eos perferendis nemo sint. Aliquam praesentium architecto nobis voluptates quibusdam.</p>

                    <div className="contatoContainer">
                        <div style={{ width: '400px'}}>
                            <ContactForm />
                        </div>
                    
                        <div className="imagemContato">
                            <img src="/generalIMG.png" alt="imagem geral" className="projectGeneralIMG" />
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Home;
