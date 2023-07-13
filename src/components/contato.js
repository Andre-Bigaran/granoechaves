import React, { useState } from "react";
import styles from "./styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário de contato
    console.log("Nome:", name);
    console.log("Sobrenome:", sobrenome);
    console.log("E-mail:", email);
    console.log("Mensagem:", message);
    // Limpar os campos após o envio do formulário
    setName("");
    setSobrenome("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={styles.containerContact}>
        <div>
          <label htmlFor="name" style={styles.labelText}>
            Nome
          </label>
          <input
            style={styles.inputContact}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="sobrenome" style={styles.labelText}>
            Sobrenome
          </label>
          <input
            style={styles.inputContact}
            type="text"
            id="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" style={styles.labelText}>
            Email
          </label>
          <input
            style={styles.inputContact}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" style={styles.labelText}>
            Conte-nos sobre seu caso
          </label>
          <textarea
            style={styles.inputContactLabel}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <button type="submit" style={styles.buttonContact}>
        ENTRE EM CONTATO
      </button>
    </form>
  );
};

export default ContactForm;
