import React from "react";
import logo from "../assets/logoPe.png";
import styles from "./styles";
import { GiInjustice } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { MdEmail } from "react-icons/md";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    const scrollToContainerMobile = () => {
      const container = document.getElementById("faleconosco");
      container.scrollIntoView({ behavior: "smooth" });
    };

    const year = new Date().getFullYear();

    return (
      <footer style={styles.footer}>
        <div
          style={
            isMobile ? styles.backgroundFooterMobile : styles.backgroundFooter
          }
        >
          <div style={styles.divLogoFooter}>
            <img src={logo} alt="" style={styles.logoFooter} />
          </div>
          <div
            style={isMobile ? styles.containerFlexMobile : styles.containerFlex}
          >
            <div style={styles.contentFlex}>
              <div style={isMobile ? styles.divTextMobile : styles.divTextLeft}>
                <div style={isMobile ? styles.decorationMobile : null}></div>
                <h4
                  style={
                    isMobile ? styles.tittleFooterMobile : styles.tittleFooter
                  }
                >
                  Contato
                </h4>

                <p style={isMobile ? styles.pFooterMobile : styles.pFooter}>
                  <BsFillTelephoneFill style={styles.iconText} />
                  (43) 99996-0847
                </p>
                <p style={isMobile ? styles.pFooterMobile : styles.pFooter}>
                  <MdEmail style={styles.iconText} />
                  granoechavesadvogados@gmail.com
                </p>
                <p style={isMobile ? styles.pFooterMobile : styles.pFooter}>
                  <SiGooglemaps style={styles.iconText} />
                  Av.Duque de Caxias, 1726, Sala 109, Vila Brasil, Londrina -
                  PR, 86010-190
                </p>
                <div>
                  <div style={isMobile ? styles.decorationMobile : null}></div>
                  <h4
                    style={
                      isMobile ? styles.tittleFooterMobile : styles.tittleFooter
                    }
                  >
                    OAB
                  </h4>

                  <p style={isMobile ? styles.pFooterMobile : styles.pFooter}>
                    <GiInjustice style={styles.iconText} />
                    Clito Dante Eugênio Juliani Grano Advogado com inscrição
                    principal na OAB/PR sob o n.º 74604.
                  </p>
                  <p style={isMobile ? styles.pFooterMobile : styles.pFooter}>
                    <GiInjustice style={styles.iconText} />
                    André Luiz de Souza Chaves Advogado com inscrição principal
                    na OAB/PR sob o n.º 75556.
                  </p>
                </div>
              </div>
              <div style={isMobile ? styles.decorationMobile : null}></div>
              <h4
                style={
                  isMobile ? styles.tittleFooterMobile : styles.tittleFooterNone
                }
              >
                Localização
              </h4>
            </div>

            <div style={styles.iframeMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.700971109006!2d-51.156693385026635!3d-23.32660588479992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb436b9517c833%3A0x96722f11d5f2c60d!2sAv.%20Duque%20de%20Caxias%2C%201726%20-%20109%20-%20Jardim%20Londrilar%2C%20Londrina%20-%20PR%2C%2086010-190!5e0!3m2!1spt-BR!2sbr!4v1686182330390!5m2!1spt-BR!2sbr"
                style={isMobile ? styles.iframeMobile : styles.iframe}
              />
            </div>
          </div>

          <div className="copywrite" style={styles.copywrite}>
            <p style={isMobile ? styles.copMobile : null}>
              &copy; {year} Todos os direitos reservados - Grano & Chaves
              Advogados.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
