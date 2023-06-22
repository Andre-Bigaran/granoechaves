import React from "react";
import styles from "./styles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdFamilyRestroom, MdWorkHistory } from "react-icons/md";
import {
  BsFillPeopleFill,
  BsFillBasket3Fill,
  BsHeartbreakFill,
  BsClipboard2CheckFill,
  BsFolderFill,
} from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiCriminalFill } from "react-icons/ri";

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  600: { items: 3 },
  800: { items: 4 },
};

const items = [
  <div className="item" data-value="1">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <GiHealthNormal />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito da Saúde</h3>
      <p>Defendendo seus Direitos em Relação aos Planos de Saúde e ao SUS</p>
    </div>
  </div>,

  <div className="item" data-value="2">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <FaHandHoldingMedical />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito Médico</h3>
      <p>Protegendo seus Direitos na Relação Médico-Paciente</p>
    </div>
  </div>,
  <div className="item" data-value="3">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <MdWorkHistory />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito do Trabalho</h3>
      <p>Defendendo seus Direitos no Ambiente de Trabalho</p>
    </div>
  </div>,
  <div className="item" data-value="4">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <RiCriminalFill />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito Penal</h3>
      <p>Defendendo seus Direitos com Experiência e Comprometimento</p>
    </div>
  </div>,
  <div className="item" data-value="5">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <BsFillBasket3Fill />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito do Consumidor</h3>
      <p>Protegendo seus Direitos e Interesses como Consumidor</p>
    </div>
  </div>,
  <div className="item" data-value="6">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <BsFillPeopleFill />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito Civil</h3>
      <p>Protegendo seus Direitos e Interesses na Esfera Civil</p>
    </div>
  </div>,
  <div className="item" data-value="7">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <MdFamilyRestroom />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito de Família</h3>
      <p>Protegendo seus Direitos e Interesses Familiares</p>
    </div>
  </div>,
  <div className="item" data-value="8">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <BsHeartbreakFill />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Divórcio</h3>
      <p>
        Orientação e assistência jurídica em processos de divórcio consensual ou
        litigioso
      </p>
    </div>
  </div>,
  <div className="item" data-value="9">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <BsClipboard2CheckFill />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito Previdenciário</h3>
      <p>Garantindo seus Direitos Previdenciários e Benefícios Sociais</p>
    </div>
  </div>,
  <div className="item" data-value="9">
    <div style={styles.containerCircle}>
      <div style={styles.circle}>
        <BsFolderFill />
      </div>
    </div>
    <div style={styles.textCircle}>
      <h3>Direito Administrativo</h3>
      <p>Defendendo seus Direitos em Relação à Administração Pública</p>
    </div>
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    animationType="fadeout"
    animationDuration={800}
    disableButtonsControls
    infinite
    items={items}
    mouseTracking
  />
);

export default Carousel;
