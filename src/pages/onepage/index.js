import React from "react";
import styles from "./styles.js";

const index = () => {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.centeredDiv}>
          <h1>Grano e Chaves advogados</h1>
          <p style={styles.pTittle}>
            Pensamos em nosso Escritório de Advocacia com atendimento humanizado
            e acessibilidade a todos, para tornar a sua vida mais justa e feliz.
          </p>
          <button style={styles.bTittle}>Saiba Mais</button>
        </div>
      </div>
    </div>
  );
};

export default index;
