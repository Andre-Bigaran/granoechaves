import React from "react";
import styles from "./styles.js";
import Carousel from "../../components/Carousel/index.js";
import quemSomos from "../../assets/quemSomos.png";
import ContactForm from "../../components/contato.js";
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

class index extends React.Component {
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

    if (isMobile) {
      return (
        <div>
          <div style={styles.containerFlex}>
            <div style={styles.backgroundMobile}>
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
                  <h1>Grano e Chaves advogados</h1>
                  <p style={styles.pTittle}>
                    Defendendo seus direitos, empoderando pacientes e lutando
                    incansavelmente por justiça na área da saúde. Conte conosco
                    para enfrentar desafios, superar obstáculos.
                  </p>
                  <button
                    onClick={scrollToContainerMobile}
                    style={styles.bTittle}
                  >
                    Contatar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div tyle={styles.container}>
            <div style={styles.centeredDiv}>
              <h2>ARÉAS DE ATUAÇÃO</h2>
              <p style={styles.divAtuacaoText}>
                Nossos advogados são especialistas em diversas áreas do direito,
                com um enfoque específico em Direito Médico e Direito da Saúde.
                Conheça nossas áreas de atuação nessas duas áreas fundamentais
              </p>

              <div>
                <Carousel />
              </div>

              <div>
                <div style={styles.backgroundEquipe}>
                  {/* <div style={styles.imgEquipe}>
                <img src={quemSomos} style={styles.imgEquipeW} alt="" />
              </div> */}

                  {/* <div style={styles.textEquipe}>
                <h2>CONHEÇA O ESCRITÓRIO</h2>
                <div>
                  <h3>
                    {" "}
                    Advogados Especializados em Direito da Saúde e Direito
                    Médico
                  </h3>
                  <p>
                    Somos uma equipe de advogados especializados em Direito da
                    Saúde e Direito Médico, comprometidos em defender os
                    direitos dos pacientes. Com sede em Londrina, Paraná,
                    oferecemos serviços de representação jurídica em todo o
                    Brasil, com ênfase em ações contra planos de saúde, o SUS e
                    questões relacionadas à negligência médica.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Ações contra Planos de Saúde: Garantindo sua Cobertura e
                    Direitos
                  </h3>
                  <p>
                    Como especialistas em Direito da Saúde, ajudamos pacientes a
                    enfrentar questões complexas envolvendo planos de saúde.
                    Lidamos com negativas de cobertura de tratamentos e
                    procedimentos, atrasos no atendimento, reajustes abusivos de
                    mensalidades e cancelamentos indevidos durante o tratamento.
                    Nossa equipe está preparada para lutar pelos seus direitos e
                    garantir que você receba a assistência médica necessária.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Defesa dos seus Direitos no SUS: Buscando uma Saúde Pública
                    de Qualidade
                  </h3>
                  <p>
                    Representamos pacientes em ações contra o SUS, buscando
                    garantir o acesso adequado aos serviços de saúde. Lutamos
                    contra a falta de atendimento, demoras no agendamento de
                    consultas e cirurgias, negativas de fornecimento de
                    medicamentos e outras questões. Nosso objetivo é assegurar
                    que você receba o tratamento adequado e a qualidade de
                    cuidados que merece.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Direito Médico: Proteção contra Negligência e Erro Médico
                  </h3>
                  <p>
                    Em nossa atuação em Direito Médico, estamos preparados para
                    representar clientes em casos de negligência médica, erro
                    médico e responsabilidade civil de hospitais e profissionais
                    de saúde. Buscamos justiça em situações de má prática
                    médica, defendendo os direitos dos pacientes e buscando a
                    devida compensação pelos danos sofridos.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Atendimento Personalizado: Online e Presencial em Londrina
                  </h3>
                  <p>
                    Valorizamos a comodidade e a acessibilidade nos serviços
                    jurídicos. Oferecemos atendimento personalizado 100% online,
                    permitindo a assinatura de documentos e reuniões virtuais.
                    Além disso, você também pode contar com nosso atendimento
                    presencial em nossa moderna sede em Londrina-PR. Nossas
                    instalações são projetadas para proporcionar conforto e
                    acessibilidade aos nossos clientes.
                  </p>
                </div>

                <div>
                  <h3> Compromisso com a Ética e Transparência</h3>
                  <p>
                    Nosso trabalho é pautado pela ética e transparência.
                    Comprometemo-nos a fornecer a representação jurídica que
                    você merece, com integridade e dedicação. Ao entrar em
                    contato conosco, você terá a tranquilidade de estar lidando
                    com uma equipe confiável e comprometida com seus interesses.
                  </p>

                  <p>
                    Agende uma consulta hoje mesmo para garantir a defesa de
                    seus direitos relacionados ao Direito da Saúde e Direito
                    Médico. Nossa equipe de advogados especializados está pronta
                    para ajudá-lo.
                  </p>
                </div>
              </div> */}
                </div>
              </div>

              <div id="faleconosco" style={styles.contactBackground}>
                <h2>FALE CONOSCO</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      );
    }

    const scrollToContainer = () => {
      const container = document.getElementById("faleconosco");
      container.scrollIntoView({ behavior: "smooth" });
    };
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
                <h1>Grano e Chaves advogados</h1>
                <p style={styles.pTittle}>
                  Defendendo seus direitos, empoderando pacientes e lutando
                  incansavelmente por justiça na área da saúde. Conte conosco
                  para enfrentar desafios, superar obstáculos.
                </p>
                <button onClick={scrollToContainer} style={styles.bTittle}>
                  Contatar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div tyle={styles.container}>
          <div style={styles.centeredDiv}>
            <h2>ARÉAS DE ATUAÇÃO</h2>
            <p style={styles.divAtuacaoText}>
              Nossos advogados são especialistas em diversas áreas do direito,
              com um enfoque específico em Direito Médico e Direito da Saúde.
              Conheça nossas áreas de atuação nessas duas áreas fundamentais
            </p>

            <div>
              <Carousel />
            </div>

            <div>
              <div style={styles.backgroundEquipe}>
                {/* <div style={styles.imgEquipe}>
                <img src={quemSomos} style={styles.imgEquipeW} alt="" />
              </div> */}

                {/* <div style={styles.textEquipe}>
                <h2>CONHEÇA O ESCRITÓRIO</h2>
                <div>
                  <h3>
                    {" "}
                    Advogados Especializados em Direito da Saúde e Direito
                    Médico
                  </h3>
                  <p>
                    Somos uma equipe de advogados especializados em Direito da
                    Saúde e Direito Médico, comprometidos em defender os
                    direitos dos pacientes. Com sede em Londrina, Paraná,
                    oferecemos serviços de representação jurídica em todo o
                    Brasil, com ênfase em ações contra planos de saúde, o SUS e
                    questões relacionadas à negligência médica.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Ações contra Planos de Saúde: Garantindo sua Cobertura e
                    Direitos
                  </h3>
                  <p>
                    Como especialistas em Direito da Saúde, ajudamos pacientes a
                    enfrentar questões complexas envolvendo planos de saúde.
                    Lidamos com negativas de cobertura de tratamentos e
                    procedimentos, atrasos no atendimento, reajustes abusivos de
                    mensalidades e cancelamentos indevidos durante o tratamento.
                    Nossa equipe está preparada para lutar pelos seus direitos e
                    garantir que você receba a assistência médica necessária.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Defesa dos seus Direitos no SUS: Buscando uma Saúde Pública
                    de Qualidade
                  </h3>
                  <p>
                    Representamos pacientes em ações contra o SUS, buscando
                    garantir o acesso adequado aos serviços de saúde. Lutamos
                    contra a falta de atendimento, demoras no agendamento de
                    consultas e cirurgias, negativas de fornecimento de
                    medicamentos e outras questões. Nosso objetivo é assegurar
                    que você receba o tratamento adequado e a qualidade de
                    cuidados que merece.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Direito Médico: Proteção contra Negligência e Erro Médico
                  </h3>
                  <p>
                    Em nossa atuação em Direito Médico, estamos preparados para
                    representar clientes em casos de negligência médica, erro
                    médico e responsabilidade civil de hospitais e profissionais
                    de saúde. Buscamos justiça em situações de má prática
                    médica, defendendo os direitos dos pacientes e buscando a
                    devida compensação pelos danos sofridos.
                  </p>
                </div>

                <div>
                  <h3>
                    {" "}
                    Atendimento Personalizado: Online e Presencial em Londrina
                  </h3>
                  <p>
                    Valorizamos a comodidade e a acessibilidade nos serviços
                    jurídicos. Oferecemos atendimento personalizado 100% online,
                    permitindo a assinatura de documentos e reuniões virtuais.
                    Além disso, você também pode contar com nosso atendimento
                    presencial em nossa moderna sede em Londrina-PR. Nossas
                    instalações são projetadas para proporcionar conforto e
                    acessibilidade aos nossos clientes.
                  </p>
                </div>

                <div>
                  <h3> Compromisso com a Ética e Transparência</h3>
                  <p>
                    Nosso trabalho é pautado pela ética e transparência.
                    Comprometemo-nos a fornecer a representação jurídica que
                    você merece, com integridade e dedicação. Ao entrar em
                    contato conosco, você terá a tranquilidade de estar lidando
                    com uma equipe confiável e comprometida com seus interesses.
                  </p>

                  <p>
                    Agende uma consulta hoje mesmo para garantir a defesa de
                    seus direitos relacionados ao Direito da Saúde e Direito
                    Médico. Nossa equipe de advogados especializados está pronta
                    para ajudá-lo.
                  </p>
                </div>
              </div> */}
              </div>
            </div>

            <div id="faleconosco" style={styles.contactBackground}>
              <h2>FALE CONOSCO</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
