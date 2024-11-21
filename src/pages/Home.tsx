import "../styles/utility.css"
import "../styles/header.css";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg"
import Check from "../assets/check.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import {useEffect, useState } from "react";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import RyanGosling from "..//assets/images/RyanGosling.jpg";
import Zeca from "../assets/images/Zeca.jpg";
import Dianho from "../assets/images/Dianho.jpg"
import Marcio from "../assets/images/MM.jpg"
import "../styles/hero.css";
import "../styles/solution.css"
import "../styles/pricing.css"
import "../styles/footer.css"
import Footer from "../components/Footer";
import ContactForm from "../components/Contato";


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
                    <Button func={() => console.log("teste")}text="Cadastre-se"/>
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
                    <span><Button func={() => console.log("teste")} text="Cadastre-se"/></span>
                    <span className="desktop-only">
                        <Button func={() => console.log("teste")} text="Veja mais" secondary />
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
            <section id="testimonials">
            <header>
                <span>
                    <p className="desktop-only">
                        Conselho de quem conhece
                    </p>
                    <h2>
                        Cada visita importa!
                    </h2>
                </span>
                <p>
                    Está com duvida se a nossa hamburgueria realmente tem todas essas qualidades? Veja o conselho de quem já nos visitou e aprovou!
                </p>
            </header>
            <section className="carousel">
                <div className="carousel-content">
                  
                <TestimonialCard
                        comentary="Essa hamburgueria oferece opções incríveis de hambúrgueres apimentados, com diferentes níveis de ardência, desde os mais suaves para iniciantes até os mais intensos para os amantes de emoções fortes. Sempre tem algo para cada paladar!"
                        urlProfileImage={RyanGosling}
                        starNumber={5}
                        nameCostumer="Ryan Gosling"
                        ocupationCostumer="Motorista"    
                        />
                        
                        <TestimonialCard
                        comentary="Os hambúrgueres são preparados com ingredientes de altíssima qualidade, combinando molhos apimentados artesanais e temperos exóticos que tornam cada mordida uma explosão de sabor."
                        urlProfileImage={Zeca}
                        starNumber={4}
                        nameCostumer="Zeca"
                        ocupationCostumer="Rival do Pica-Pau"
                        />

                        <TestimonialCard
                        comentary="O ambiente da hamburgueria é tão vibrante quanto seus sabores! Com uma decoração inspirada na cultura dos temperos e da pimenta, é o local perfeito para quem busca uma experiência divertida e diferenciada."
                        urlProfileImage={Dianho}
                        starNumber={5}
                        nameCostumer="Dianho"
                        ocupationCostumer="Sósia do Nicolas Cage"    
                        />

                        <TestimonialCard
                        comentary="Além dos hambúrgueres apimentados, eles oferecem acompanhamentos incríveis, como batatas com especiarias e molhos especiais, além de drinks refrescantes e milkshakes que equilibram a picância na medida certa."
                        urlProfileImage={Marcio}
                        starNumber={5}
                        nameCostumer="Marcio (ou Marcelo)"
                        ocupationCostumer="Candidato a Vereador"    
                        />
                        
                </div>
                <div className="carousel-content">

                <TestimonialCard
                        comentary="Essa hamburgueria oferece opções incríveis de hambúrgueres apimentados, com diferentes níveis de ardência, desde os mais suaves para iniciantes até os mais intensos para os amantes de emoções fortes. Sempre tem algo para cada paladar!"
                        urlProfileImage={RyanGosling}
                        starNumber={5}
                        nameCostumer="Ryan Gosling"
                        ocupationCostumer="Motorista"    
                        />
                        
                        <TestimonialCard
                        comentary="Os hambúrgueres são preparados com ingredientes de altíssima qualidade, combinando molhos apimentados artesanais e temperos exóticos que tornam cada mordida uma explosão de sabor."
                        urlProfileImage={Zeca}
                        starNumber={4}
                        nameCostumer="Zeca"
                        ocupationCostumer="Rival do Pica-Pau"
                        />

                        <TestimonialCard
                        comentary="O ambiente da hamburgueria é tão vibrante quanto seus sabores! Com uma decoração inspirada na cultura dos temperos e da pimenta, é o local perfeito para quem busca uma experiência divertida e diferenciada."
                        urlProfileImage={Dianho}
                        starNumber={5}
                        nameCostumer="Dianho"
                        ocupationCostumer="Sósia do Nicolas Cage"    
                        />

                        <TestimonialCard
                        comentary="Além dos hambúrgueres apimentados, eles oferecem acompanhamentos incríveis, como batatas com especiarias e molhos especiais, além de drinks refrescantes e milkshakes que equilibram a picância na medida certa."
                        urlProfileImage={Marcio}
                        starNumber={5}
                        nameCostumer="Marcio (ou Marcelo)"
                        ocupationCostumer="Candidato a Vereador"    
                        />

                </div>
                
            </section>
        </section>

        <section id="pricing" className="container">
            <header>
                <p className="desktop-only">Ingressos e preços</p>    
                <h2>Nossos Ingressos</h2>
            </header>

            <section className="even-columns gap 1.5">
                <div className="pricing-card">
                    <span className="ticket">
                        <h3>Chamas Mexicanas</h3>
                        <p>Um hambúrguer vibrante e apimentado com um blend de carne suína e bovina, temperado com pimenta malagueta e cominho. Servido em pão de milho macio, é recheado com guacamole cremoso, pico de gallo fresco, queijo pepper jack e um molho especial de sriracha. Acompanhado por nachos crocantes para completar a experiência mexicana.</p>

                    </span><h2>R$ 42,00</h2> <Button func={() => console.log("compro")} text="Comprar agora" secondary key="basic"/>
                    <span className="hr"/>
                    <ul className="features">
                        <li>
                            <img src={Check} alt="check" />
                            <p>Queijo Pepper Jack</p>
                        </li>
                        <li>
                            <img src={Check} alt="check" />
                            <p>Carne suína e bovina</p>
                        </li>
                    </ul>
                </div>

                <div className="pricing-card premium">
                    <span className="bonus"><p>O MAIS ESCOLHIDO</p></span>
                    <span className="ticket">
                        <h3>Fogo Tropical</h3>
                        <p>Um hambúrguer artesanal suculento de 180g feito de carne bovina, temperado com pimenta-do-reino e um toque de pimenta habanero para um calor marcante. Servido em um pão brioche tostado, é acompanhado de fatias de abacaxi grelhado, alface fresca, maionese de jalapeño e queijo cheddar derretido. A combinação perfeita entre o doce e o picante!</p>
                    </span><h2>R$ 38,00</h2> <Button func={() => console.log("compro")} text="Comprar agora" key="premium"/>
                    <span className="hr"/>
                    <ul className="features">
                        <li>
                        <img src={Check} alt="check" width={24} height={24}/>
                        <p>Carne de primeira</p>
                        </li>
                        <li>
                        <img src={Check} alt="check" width={24} height={24}/>
                        <p>Cheddar</p>
                        </li>
                    </ul>
                </div>
                
                <div className="pricing-card">
                    <span className="ticket">
                        <h3>Inferno Texano</h3>
                        <p>Este hambúrguer robusto de 200g combina carne de Angus moída com pimenta chipotle e especiarias defumadas, trazendo um sabor intenso. É montado com cebolas crocantes empanadas, picles de pimenta dedo-de-moça, molho barbecue apimentado e uma fatia generosa de queijo Monterrey Jack, tudo dentro de um pão rústico macio. Prepare-se para sentir o calor do Texas!</p>

                    </span><h2>R$ 44,00</h2> <Button func={() => console.log("compro")} text="Comprar agora" secondary key="basic"/>
                    <span className="hr"/>
                    <ul className="features">
                        <li>
                            <img src={Check} alt="check" />
                            <p>Pimenta Chipotle</p>
                        </li>
                        <li>
                            <img src={Check} alt="check" />
                            <p>Carne de Angus Moída</p>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
        <section id="contact">
            <ContactForm />
        </section>
        <Footer show={true}/>   
        </>
    )
}