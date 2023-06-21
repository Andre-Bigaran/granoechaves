import React from "react";
import styles from "./styles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  600: { items: 3 },
  800: { items: 4 },
};

const items = [
  <div className="item" data-value="1">
    <div style={styles.divCircle}>
      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <h3>Direito da Saúde</h3>
          <p>
            Defendendo seus Direitos em Relação aos Planos de Saúde e ao SUS
          </p>
        </div>
      </div>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito Médico</h3>
        <p>Protegendo seus Direitos na Relação Médico-Paciente</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito do Trabalho</h3>
        <p>Defendendo seus Direitos no Ambiente de Trabalho</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="4">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito Penal</h3>
        <p>Defendendo seus Direitos com Experiência e Comprometimento</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="5">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito do Consumidor</h3>
        <p>Protegendo seus Direitos e Interesses como Consumidor</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="6">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito Civil</h3>
        <p>Protegendo seus Direitos e Interesses na Esfera Civil</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="7">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito de Família</h3>
        <p>Protegendo seus Direitos e Interesses Familiares</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="8">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Divórcio</h3>
        <p>
          Orientação e assistência jurídica em processos de divórcio consensual
          ou litigioso
        </p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="9">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito Previdenciário</h3>
        <p>Garantindo seus Direitos Previdenciários e Benefícios Sociais</p>
      </div>
    </div>
  </div>,
  <div className="item" data-value="9">
    <div style={styles.containerCircle}>
      <div style={styles.circle}></div>
      <div style={styles.textCircle}>
        <h3>Direito Administrativo</h3>
        <p>Defendendo seus Direitos em Relação à Administração Pública</p>
      </div>
    </div>
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
  />
);

export default Carousel;
