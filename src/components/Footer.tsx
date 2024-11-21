import React from 'react';

interface FooterProps {
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ show }) => {
  return (
    <footer className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>RHCP</h3>
          <p>Matando a sua vontade de comer um Hambúrguer picante e saboroso.</p>
        </div>
        
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#solution">Soluções</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><a href="#contact">Contatos</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Conecte-se conosco</h4>
          <div className="social-links">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 RHCP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;