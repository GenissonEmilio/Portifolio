import React from "react";

const ContactForm: React.FC = () => {

    return (
        <div>
            <form action="https://formsubmit.co/officegenisson@gmail.com" method="post">
                <div>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Seu nome" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Seu email" />
                </div>
                <div>
                    <label htmlFor="message">Mensagem</label>
                    <input id="message" type="text" placeholder="Sua mensagem" />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;