import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import "../styles/utility.css";
import Button from "../components/Button";
import Card from "../components/Card"
import "../styles/header.css";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import "../styles/hero.css";
import "../styles/solution.css"


export default function Home() {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);

        useEffect(() => {
            const body = document.body;
            if (showMobileMenu) {
                body.style.overflow = "hidden";
                body.style.position = "fixed";
                body.style.width = "100%";
            } else {
                body.style.overflow = "auto";
                body.style.position = "static";
            }

            return () => {
                body.style.overflow = "auto";
                body.style.position = "static";
            };
        }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Rhcp" width={220} height={80} />
            <div className="desktop-only">
                <ul className="flex gap-1">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#solution">Soluções</a>
                    </li>
                    <li>
                        <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#pricing">Preços</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="desktop-only">
                <div className="flex items-center">
                    <a className="reverse-color ml-lg" href="">Login</a>
                    <Button text="Cadastre-se" />
            </div>
            </div>
            <div className="mobile-menu">
                {showMobileMenu ?
                    <div className="mobile-menu-content">
                        <div className="container flex">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#solution">Soluções</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Depoimentos</a>
                                </li>
                                <li>
                                    <a href="#pricing">Preços</a>
                                </li>
                                <li>
                                    <a href="#contact">Contato</a>
                                </li>
                                <li>
                                    <a className="reverse-color" href="#">Login</a>
                                </li>
                            </ul>
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                            </span>
                        </div>
                    </div>
                    :
                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                        <img src={Menu} alt="ícone menu" width={24} height={24} />
                    </span>
                }
            </div>
                
                </nav>
            </header>
            
            <section id="hero">
            <span className="desktop-only">
                <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
            </span>
            <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
            <div className="container content">
                <h1>Os melhores hambúrguers apimentados do oeste do Paraná direto em sua residência!</h1>
                <p>Entregamos 24 horas por dia! Cadastre-se para participar de promoções imperdíveis!</p>
                <p>10% de desconto para quem pedir entre às 06:00 e 09:00 da manhã!</p>
                <div className="flex gap-1">
                    <span><Button text="Cadastre-se" /></span>
                    <span className="desktop-only">
                        <Button text="Veja mais" secondary />
                    </span>
                </div>
            </div>

            </section>
            <section id="solution">
                <div className="container content">
                    <h2>
                        Vai encarar?
                    </h2>
                    <p>
                        Se você não tem medo do calor, venha saborear nossos hamburgueres apimentados e descubra o verdadeiro sabor da ousadia!
                    </p>
                    <div className="card-container even-columns">
                        <Card title={"🌶️ Fogo do Oeste"} description={"Hambúrguer de carne bovina, cheddar, jalapeños e molho especial apimentado. Acompanha batatas fritas."}/>
                        <Card title={"🌶️ Desafio da Pimenta"} description={"Hambúrguer de frango com molho de pimenta habanero, cebola roxa e rúcula. Acompanha molho de iogurte."}/>
                        <Card title={"🌶️ Burguer Verde Picante"} description={"Hambúrguer vegetariano de grão-de-bico e quinoa, com abacate, tomate e maionese de pimenta."}/>
                    </div>
                </div>
            </section>
        </>
    )
}