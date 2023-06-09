import React from "react";
import logo from "../assets/logoFooter.png";
import styles from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div>
        <div style={styles.divLogoFooter}>
          <img src={logo} alt="" style={styles.logoFooter} />
          <p>
            J.Grano e Chaves é uma Sociedade de Advogados inscrita na OAB/PR sob
            o nº 8.985 e CNPJ 32.211.890/0001-62.
          </p>
        </div>

        <div style={styles.menuFooter}>
          <div>
            <h2>MENU</h2>
            <ul>
              <li>
                <a href="" style={styles.menuLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>ÁREAS DE ATUAÇÃO</h2>
            <ul>
              <li>
                <a href="" style={styles.menuLink}>
                  Direito do trabalho
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Direito de família
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Direito médico
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Direito Imobiliário
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Ver mais..
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>CONTATOS</h2>
            <ul>
              <li>
                <a href="" style={styles.menuLink}>
                  {" "}
                  (43) 9 9996-0847
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  granoechavesadvogados@gmail.com
                </a>
              </li>
              <li>
                <a href="" style={styles.menuLink}>
                  Av. Duque de Caxias, 1726, Sala 109, Vila Brasil, Londrina -
                  PR, 86010-190.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.700971109006!2d-51.156693385026635!3d-23.32660588479992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb436b9517c833%3A0x96722f11d5f2c60d!2sAv.%20Duque%20de%20Caxias%2C%201726%20-%20109%20-%20Jardim%20Londrilar%2C%20Londrina%20-%20PR%2C%2086010-190!5e0!3m2!1spt-BR!2sbr!4v1686182330390!5m2!1spt-BR!2sbr"
          style={styles.iframe}
        />

        <div className="copywrite" style={styles.center}>
          <p>
            &copy; {year} Todos os direitos reservados - Grano & Chaves
            Advogados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
