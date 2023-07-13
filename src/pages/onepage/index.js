import React, { useState, createRef } from "react";
import styles from "./styles.js";
import quemSomosImg from "../../assets/imagemQuemSomos.png";
import imgAtendimento from "../../assets/imgAtendimento.png";
import imagemMedico from "../../assets/imagemMedico.png";
import Atuacao from "../../components/Atuacao/index.js";
import ContactForm from "../../components/contato.js";
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import imgCompromisso from "../../assets/imgCompromisso.png";

class index extends React.Component {
  sectionRef = createRef();

  handleClick = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    if (this.sectionRef.current) {
      window.scrollTo({
        top: this.sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

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

    if (isMobile) {
      return (
        <div>
          <div style={styles.containerFlex}>
            <div style={styles.backgroundMobile}>
              <div style={styles.containerHome}>
                <div id="home" style={styles.centeredDivMobile}>
                  <div style={styles.containerHomeMobile}>
                    <h1 style={styles.tittleMobile}>
                      Grano e Chaves advogados
                    </h1>
                    <p style={styles.pTittleMobile}>
                      Defendendo seus direitos, empoderando pacientes e lutando
                      incansavelmente por justiça na área da saúde. Conte
                      conosco para enfrentar desafios, superar obstáculos.
                    </p>
                    <div style={styles.divBTittleMobile}>
                      <a
                        href=""
                        onClick={this.handleClick}
                        style={styles.bTittleMobile}
                      >
                        SAIBA MAIS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tyle={styles.container}>
            <div style={styles.centeredDiv}>
              <h2 style={styles.tittleAreaMobile}>ÁREAS DE ATUAÇÃO</h2>
              <p style={styles.divAtuacaoTextMobile}>
                Nossos advogados são especialistas em diversas áreas do direito,
                com um enfoque específico em Direito Médico e Direito da Saúde.
                Conheça nossas áreas de atuação nessas duas áreas fundamentais
              </p>

              <div>
                <Atuacao />
              </div>

              <div>
                <div style={styles.backgroundEquipeMobile}>
                  <div style={styles.textEquipeMobile}>
                    <h2 style={styles.h2EquipeMobile}>Quem somos</h2>

                    <div>
                      <img
                        src={quemSomosImg}
                        alt=""
                        style={styles.imgEquipeWMobile}
                      />
                    </div>

                    <div>
                      <h3 style={styles.tittleEquipeMobile}>Sobre nós</h3>

                      <p style={styles.pEquipeMobile}>
                        Somos uma equipe de advogados especializados em Direito
                        da Saúde e Direito Médico, comprometidos em defender os
                        direitos dos pacientes. Com sede em Londrina, Paraná,
                        oferecemos serviços de representação jurídica em todo o
                        Brasil, com ênfase em ações contra planos de saúde, o
                        SUS e questões relacionadas à negligência médica.
                      </p>
                    </div>
                    <div>
                      <img
                        src={imagemMedico}
                        alt=""
                        style={styles.imgEquipeWMobile}
                      />
                    </div>
                    <div>
                      <h3 style={styles.tittleEquipeMobile}>
                        Direito Médico: Proteção contra Negligência e Erro
                        Médico
                      </h3>
                      <p style={styles.pEquipeMobile}>
                        Em nossa atuação em Direito Médico, estamos preparados
                        para representar clientes em casos de negligência
                        médica, erro médico e responsabilidade civil de
                        hospitais e profissionais de saúde. Buscamos justiça em
                        situações de má prática médica, defendendo os direitos
                        dos pacientes e buscando a devida compensação pelos
                        danos sofridos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style={styles.containerTextCompromissoMobile}>
                  <h3 style={styles.h3TextCompromissoMobile}>
                    Compromisso com a Ética e Transparência
                  </h3>
                  <img
                    src={imgCompromisso}
                    alt=""
                    style={styles.imgCompromisso}
                  />
                  <p style={styles.pTextCompromissoMobile}>
                    Nosso trabalho é pautado pela ética e transparência.
                    Comprometemo-nos a fornecer a representação jurídica que
                    você merece, com integridade e dedicação. Ao entrar em
                    contato conosco, você terá a tranquilidade de estar lidando
                    com uma equipe confiável e comprometida com seus interesses.
                    Agende uma consulta hoje mesmo para garantir a defesa de
                    seus direitos relacionados ao Direito da Saúde e Direito
                    Médico. Nossa equipe de advogados especializados está
                    pronta para ajudá-lo.
                  </p>
                </div>
              </div>

              <div style={styles.backgroundAmarelo}>
                <div style={styles.containerAtendimentoMobile}>
                  <div
                    id="sectionRef"
                    ref={this.sectionRef}
                    style={styles.containerTextAtendimentoMobile}
                  >
                    <h3 style={styles.h3TextAtendimentoMobile}>
                      Atendimento Personalizado: Online e Presencial em Londrina
                    </h3>
                    <img
                      src={imgAtendimento}
                      alt="imgAtendimento"
                      style={styles.imgAtendimentoMobile}
                    />
                    <p style={styles.pTextAtendimentoMobile}>
                      Valorizamos a comodidade e a acessibilidade nos serviços
                      jurídicos. Oferecemos atendimento personalizado 100%
                      online, permitindo a assinatura de documentos e reuniões
                      virtuais. Além disso, você também pode contar com nosso
                      atendimento presencial em nossa moderna sede em
                      Londrina-PR. Nossas instalações são projetadas para
                      proporcionar conforto e acessibilidade aos nossos
                      clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div id="faleconosco" style={styles.contactBackgroundMobile}>
                <div style={styles.containerContactMobile}>
                  <div style={styles.textContactMobile}>
                    <h2 style={styles.h2TextContact}>
                      Seus direitos merecem ser protegidos. Fale Conosco
                    </h2>
                    <p>
                      Deixe-nos cuidar do seu caso e garantir que a justiça seja
                      feita
                    </p>
                  </div>
                  <div style={styles.contentContactMobile}>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={styles.containerFlex}>
          <div style={styles.background}>
            <div style={styles.containerHome}>
              <div style={styles.containerIcon}>
                <div style={styles.borderRHome}></div>
                <div style={styles.iconsL}>
                  <a href="" style={styles.icons}>
                    <FaPhone />
                  </a>
                  <a href="" style={styles.icons}>
                    <FaWhatsapp />
                  </a>
                  <a href="" style={styles.icons}>
                    <FaFacebook />
                  </a>
                  <a href="" style={styles.icon}>
                    <FaInstagram />
                  </a>
                </div>
                <div style={styles.borderLHome}></div>
              </div>

              <div style={styles.centeredDivE}>
                <h1 style={styles.H1Tittle}>Grano e Chaves advogados</h1>
                <p style={styles.pTittle}>
                  Defendendo seus direitos, empoderando pacientes e lutando
                  incansavelmente por justiça na área da saúde. Conte conosco
                  para enfrentar desafios, superar obstáculos.
                </p>

                <a href="" onClick={this.handleClick} style={styles.bTittle}>
                  SAIBA MAIS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div tyle={styles.container}>
          <div style={styles.centeredDiv}>
            <h2 style={styles.h2TittleArea}>ÁREAS DE ATUAÇÃO</h2>
            <p style={styles.divAtuacaoText}>
              Nossos advogados são especialistas em diversas áreas do direito,
              com um enfoque específico em Direito Médico e Direito da Saúde.
              Conheça nossas áreas de atuação nessas duas áreas fundamentais
            </p>

            <div>
              <Atuacao />
            </div>

            <div style={styles.containerBackgroundAbout}>
              <fieldset style={styles.fieldset}>
                <div style={styles.containerAbout}>
                  <legend style={styles.legend}>
                    <h2 style={styles.h2Legend}>Quem somos</h2>
                  </legend>

                  <h3 style={styles.h3TittleSobre1}>Sobre nós</h3>

                  <div style={styles.displayContainerEquipe1}>
                    <p style={styles.pTextEquipe1}>
                      Somos uma equipe de advogados especializados em Direito da
                      Saúde e Direito Médico, comprometidos em defender os
                      direitos dos pacientes. Com sede em Londrina, Paraná,
                      oferecemos serviços de representação jurídica em todo o
                      Brasil, com ênfase em ações contra planos de saúde, o SUS
                      e questões relacionadas à negligência médica.
                    </p>
                    <div>
                      <img
                        src={quemSomosImg}
                        alt=""
                        style={styles.imgEquipe1}
                      />
                    </div>
                  </div>

                  <div>
                    <img src={imagemMedico} alt="" style={styles.imgEquipe2} />
                  </div>

                  <h3 style={styles.h3TittleSobre2}>
                    Direito Médico: Proteção contra Negligência e Erro Médico
                  </h3>

                  <div style={styles.displayContainerEquipe1}>
                    <p style={styles.pTextEquipe2}>
                      Somos uma equipe de advogados especializados em Direito da
                      Saúde e Direito Médico, comprometidos em defender os
                      direitos dos pacientes. Com sede em Londrina, Paraná,
                      oferecemos serviços de representação jurídica em todo o
                      Brasil, com ênfase em ações contra planos de saúde, o SUS
                      e questões relacionadas à negligência médica.
                    </p>
                  </div>
                </div>
              </fieldset>
            </div>

            <div style={styles.backgroundCompromisso}>
              <div style={styles.containerTextCompromisso}>
                <h3 style={styles.h3TextCompromisso}>
                  Compromisso com a Ética e Transparência
                </h3>
                <p style={styles.pTextCompromisso}>
                  Nosso trabalho é pautado pela ética e transparência.
                  Comprometemo-nos a fornecer a representação jurídica que você
                  merece, com integridade e dedicação. Ao entrar em contato
                  conosco, você terá a tranquilidade de estar lidando com uma
                  equipe confiável e comprometida com seus interesses. Agende
                  uma consulta hoje mesmo para garantir a defesa de seus
                  direitos relacionados ao Direito da Saúde e Direito Médico.
                  Nossa equipe de advogados especializados está
                  pronta para ajudá-lo.
                </p>
              </div>
            </div>

            <div style={styles.backgroundAmarelo}>
              <div
                ref={this.sectionRef}
                id="sectionRef"
                style={styles.containerAtendimento}
              >
                <img src={imgAtendimento} alt="imgAtendimento" />
                <div style={styles.containerTextAtendimento}>
                  <h3 style={styles.h3TextAtendimento}>
                    Atendimento Personalizado: Online e Presencial em Londrina
                  </h3>
                  <p style={styles.pTextAtendimento}>
                    Valorizamos a comodidade e a acessibilidade nos serviços
                    jurídicos. Oferecemos atendimento personalizado 100% online,
                    permitindo a assinatura de documentos e reuniões virtuais.
                    Além disso, você também pode contar com nosso atendimento
                    presencial em nossa moderna sede em Londrina-PR. Nossas
                    instalações são projetadas para proporcionar conforto e
                    acessibilidade aos nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            <div id="faleconosco" style={styles.contactBackground}>
              <div style={styles.containerContact}>
                <div style={styles.textContact}>
                  <h2 style={styles.h2TextContact}>
                    Seus direitos merecem ser protegidos. Fale Conosco
                  </h2>
                  <p>
                    Deixe-nos cuidar do seu caso e garantir que a justiça seja
                    feita
                  </p>
                </div>
                <div style={styles.contentContact}>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
