import { useState } from 'react';
import Link from 'next/link';

function Formulario(props) {

    const [x, setx] = useState('password');

    const Click = () => {
        if (x === "password") {
            setx("text");
        } else {
           setx("password");
        }
    }

    return (
        <div className={props.classe}>
            <div>
                <h2>{props.title}</h2>
                
                <span>
                    <h3>Email</h3>
                    <input required placeholder="seuemail@dominio.com" type="email" />
                </span>

                <span>
                    <h3>Senha</h3>
                    <input required placeholder="sua_senha.123" type={x} id="myInput" />
                </span>
                <section>
                    <p>Mostrar Senha</p>
                    <input id='check' type="checkbox" onClick={Click} />
                </section>
                <button onClick={() => alert("=D")}>Fazer Login</button> 
                    
                <Link href={props.link} style={{
                    fontWeight: 'bold',
                    color: '#6a9b5c',
                    fontSize: '20px',
                    marginTop: '45px',
                    textShadow: '1px 1px #757575'
                }}
                >{props.down_text}</Link>
            </div>

            <style jsx>
                {`

                div {
                    font-family: monospace;
                    height: 560px;
                    width: 390px;
                    border-radius: 10px;
                    background-color: #FFFFFF;
                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                }

                div h2 {
                    color: #48793c;
                    margin-top: 40px;
                    padding-bottom: 50px;
                    font-size: 50px;
                }

                span {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    height: 15%;
                    margin-bottom: 20px;
                }

                span h3 {
                    margin-bottom: 20px;
                    font-size: 18px;
                }

                span input {
                    align-self: center;
                    font-size: 19px;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                }              

                div button {
                    font-weight: bold;
                    font-size: 16px;
                    margin-top: 40px;
                    width: 60%;
                    height: 40px;
                    background-color: #48793b;
                    color: white;
                    border: none;
                    border-radius: 20px;
                    transition: all 0.3s;
                }

                div button:hover{
                   transform: scale(1.05);
                   cursor: pointer;
                }

                section {
                    display: flex;
                }
                section p {
                    margin-right: 10px;
                }
                
                @media screen and (max-width: 400px) {
                    div {
                        transform: scale(0.88);
                    }

                }
                `}
            </style>
        </div>
    );

}
export default Formulario;