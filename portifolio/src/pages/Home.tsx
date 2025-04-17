import { TypeAnimation } from "react-type-animation";
import MenuOptions from "../components/layout/MenuOptions/MenuOptions";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import '../App.css';
import ToolsIcons from "../components/layout/ToolsIcons/ToolsIcons";

const Home: React.FC = () => {

    return (
        <div id="home" style={{ paddingLeft: '10px', paddingTop: '70px' }}>
            <h1 style={{ fontSize: '2rem', whiteSpace: 'nowrap' }}>
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam libero laudantium magni necessitatibus ipsam iste officiis, quia excepturi exercitationem? Ratione unde ipsum aut illo, vero asperiores minus aliquid molestiae tempora! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda odio fugiat temporibus fuga explicabo aut consequatur. Labore dicta quam dolorum nisi iste debitis. Ea impedit blanditiis at aspernatur error nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, veniam voluptatibus nam illo asperiores voluptatem laborum, debitis totam autem quis eaque, cupiditate beatae est consectetur expedita maiores eius mollitia perferendis?</p>

                </div>

                <div id="contato">
                    <MenuOptions name="Contato" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex quos dicta qui ut? Quia voluptates molestiae eos esse tenetur voluptatum dignissimos dolore cumque! Iure consequatur pariatur ipsam numquam similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptates numquam obcaecati quis eaque minus nam perferendis itaque vitae sed. Aperiam enim, voluptates aspernatur eos totam exercitationem quia odio adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus odio consequatur inventore quod sunt, alias aliquam, minus voluptatibus deleniti mollitia iste cupiditate dolor at molestiae explicabo incidunt tempora delectus!</p>
                    
                </div>
        </div>
    )
}

export default Home;