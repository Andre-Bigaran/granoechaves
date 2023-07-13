import React, { useState, useRef } from "react";
import "./styles.css";
import idfale from "../../pages/onepage/index#faleconosco";

const Atuacao = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const cardRefs = useRef([]);

  const handleCardClick = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null);
    } else {
      setExpandedCardIndex(index);
      if (index === 7) {
        window.location.href = "../../pages/onepage/index#sectionRef";
      } else {
        cardRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleScrollToSection = () => {
    const faleConoscoSection = document.getElementById("sectionRef");
    faleConoscoSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="containerDivCard">
        <div
          className={`containerCard ${
            expandedCardIndex === 0 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(0)}
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="78.75"
            height="78.75"
            viewBox="0 0 78.75 78.75"
          >
            <path
              id="hospital-box"
              d="M68.625,51.125h-17.5v17.5h-17.5v-17.5h-17.5v-17.5h17.5v-17.5h17.5v17.5h17.5M73,3H11.75A8.72,8.72,0,0,0,3,11.75V73a8.75,8.75,0,0,0,8.75,8.75H73A8.75,8.75,0,0,0,81.75,73V11.75A8.748,8.748,0,0,0,73,3Z"
              transform="translate(-3 -3)"
              fill="#cf9426"
            />
          </svg>

          <h4 className="h4Card">Direito da Saúde</h4>
          {expandedCardIndex === 0 && (
            <ul className="cardContent">
              <li>
                Negativa de cobertura por planos de saúde Atraso no atendimento
              </li>
              <li>
                médico Reajuste abusivo de mensalidades de planos de saúde
              </li>
              <li>
                Cancelamento indevido do plano durante o tratamento Falta de
                atendimento e demora no agendamento de consultas e cirurgias no
                SUS.
              </li>
            </ul>
          )}
        </div>

        <div
          className={`containerCard ${
            expandedCardIndex === 1 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(1)}
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="78.75"
            height="70.777"
            viewBox="0 0 78.75 70.777"
          >
            <path
              id="medical-bag"
              d="M33.5,3l-7.864,7.864v7.864h-11.8c-4.522,0-7.392,3.932-7.864,7.864L2.041,65.913c-.472,3.932,2.123,7.864,7.864,7.864H72.818c5.741,0,8.336-3.932,7.864-7.864L76.75,26.592c-.472-3.932-3.7-7.864-7.864-7.864H57.09V10.864L49.226,3H33.5m0,7.864H49.226v7.864H33.5V10.864m3.932,19.66h7.864v11.8h11.8v7.864h-11.8v11.8H37.429v-11.8h-11.8V42.321h11.8Z"
              transform="translate(-1.986 -3)"
              fill="#cf9426"
            />
          </svg>

          <h4 className="h4Card">Direito Médico</h4>
          {expandedCardIndex === 1 && (
            <ul className="cardContent">
              <li>Negligência médica</li>
              <li>Danos decorrentes de procedimentos médicos</li>
              <li>
                Responsabilidade civil de hospitais e profissionais de saúde
              </li>
              <li>Má prática médica</li>
            </ul>
          )}
        </div>

        <div
          className={`containerCard ${
            expandedCardIndex === 2 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(2)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="74.512"
            height="70.777"
            viewBox="0 0 74.512 70.777"
          >
            <path
              id="handcuffs"
              d="M69.946,17.006a22.311,22.311,0,0,0-25.405-4.358L40.965,9.072a3.71,3.71,0,0,0-5.252,0l-.3.335A7.43,7.43,0,0,0,20.626,10.45a2.769,2.769,0,0,0,.112.969A7.475,7.475,0,0,0,16.9,17.9a7.345,7.345,0,0,0,1.565,4.507A3.617,3.617,0,0,0,16.9,25.351V30.38a22.351,22.351,0,1,0,14.9,0V25.351a3.617,3.617,0,0,0-1.565-2.943A7.345,7.345,0,0,0,31.8,17.9a2.769,2.769,0,0,0-.112-.969A9.12,9.12,0,0,0,33.4,15.591a11.066,11.066,0,0,1,5.848,9.76v.3c.484.261.931.633,1.416.931a14.126,14.126,0,0,1,2.943-4.321A14.909,14.909,0,1,1,53.891,47.7a17.566,17.566,0,0,1,.261,3.725,30.761,30.761,0,0,1-.261,3.725A22.352,22.352,0,0,0,69.946,17.006M28.076,6.725A3.736,3.736,0,0,1,31.8,10.45a3.617,3.617,0,0,1-1.565,2.943,7.32,7.32,0,0,0-5.886-2.943,3.736,3.736,0,0,1,3.725-3.725M22.19,14.958A7.32,7.32,0,0,0,28.076,17.9a3.725,3.725,0,0,1-7.45,0,3.617,3.617,0,0,1,1.565-2.943M39.251,51.427a14.9,14.9,0,1,1-14.9-14.9A14.9,14.9,0,0,1,39.251,51.427Z"
              transform="translate(-2 -3)"
              fill="#cf9426"
            />
          </svg>

          <h4 className="h4Card">Direito Penal</h4>
          {expandedCardIndex === 2 && (
            <ul className="cardContent">
              <li>
                Crimes contra a pessoa: homicídio, lesões corporais, violência
                doméstica
              </li>
              <li>Crimes contra o patrimônio: roubo, furto, estelionato</li>
              <li>
                Crimes de trânsito: embriaguez ao volante, homicídio culposo,
                lesão corporal no trânsito
              </li>
              <li>Crimes de drogas: tráfico, posse e uso de entorpecentes</li>
            </ul>
          )}
        </div>

        <div
          className={`containerCard ${
            expandedCardIndex === 3 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(3)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="79.75"
            height="79.75"
            viewBox="0 0 79.75 79.75"
          >
            <path
              id="cart-variant"
              d="M72.775,73.775A7.975,7.975,0,1,1,64.8,65.8a7.947,7.947,0,0,1,7.975,7.975M24.925,65.8A7.975,7.975,0,1,0,32.9,73.775,7.947,7.947,0,0,0,24.925,65.8m.8-13.438-.12.479a.987.987,0,0,0,1,1H72.775v7.975H24.925a7.973,7.973,0,0,1-7.975-7.975,8.127,8.127,0,0,1,.957-3.828L23.33,40.24,8.975,9.975H1V2H14.039l3.748,7.975H76.763a4,4,0,0,1,3.988,3.988,5.044,5.044,0,0,1-.479,1.994L66,41.756a8.017,8.017,0,0,1-6.978,4.107H29.311l-3.589,6.5m5.184-14.475h5.981V29.913h-9.73l3.748,7.975m9.969-7.975v7.975H52.838V29.913H40.875m11.963-3.988V17.95H40.875v7.975H52.838m12.4,3.988H56.825v7.975h3.988l4.426-7.975M71.9,17.95H56.825v7.975H67.472L71.9,17.95m-50.4,0,3.748,7.975H36.888V17.95Z"
              transform="translate(-1 -2)"
              fill="#cf9426"
            />
          </svg>
          <h4 className="h4CardConsumidor">Direito do Consumidor</h4>
          {expandedCardIndex === 3 && (
            <ul className="cardContent">
              <li>Defesa do consumidor: orientação e assistência jurídica</li>
              <li>Responsabilidade civil: danos materiais e morais</li>
              <li>Contratos de consumo: análise e elaboração</li>
              <li>Vícios e defeitos de produtos e serviços</li>
            </ul>
          )}
        </div>

        <div
          className={`containerCard ${
            expandedCardIndex === 4 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(4)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="78.75"
            height="74.813"
            viewBox="0 0 78.75 74.813"
          >
            <path
              id="briefcase"
              d="M33.5,2H49.25a7.875,7.875,0,0,1,7.875,7.875V17.75h15.75a7.875,7.875,0,0,1,7.875,7.875V68.938a7.875,7.875,0,0,1-7.875,7.875h-63A7.873,7.873,0,0,1,2,68.938V25.625A7.848,7.848,0,0,1,9.875,17.75h15.75V9.875A7.848,7.848,0,0,1,33.5,2M49.25,17.75V9.875H33.5V17.75Z"
              transform="translate(-2 -2)"
              fill="#cf9426"
            />
          </svg>

          <h4 className="h4Card">Direito do Trabalho</h4>
          {expandedCardIndex === 4 && (
            <ul className="cardContent">
              <li> Assessoria jurídica em questões trabalhistas</li>
              <li>Rescisões contratuais: orientação e suporte legal</li>
              <li>Reclamações trabalhistas: defesa dos seus interesses</li>
              <li>
                Assédio moral e discriminação no trabalho: proteção contra
                violações
              </li>
            </ul>
          )}
        </div>

        <div
          className={`containerCard ${
            expandedCardIndex === 5 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(5)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="84.479"
            height="79.457"
            viewBox="0 0 84.479 79.457"
          >
            <path
              id="scale-balance"
              d="M44.1,3A12.483,12.483,0,0,0,32.3,11.364H6.459v8.364h8.155L2.277,49C.312,57.365,6.459,61.547,16.914,61.547S33.893,57.365,31.551,49L19.214,19.728H32.262a13.273,13.273,0,0,0,7.653,7.653V74.093H2.277v8.364H85.916V74.093H48.278V27.339a12.909,12.909,0,0,0,7.611-7.611H68.979L56.642,49c-1.966,8.364,4.182,12.546,14.637,12.546S88.258,57.365,85.916,49L73.579,19.728h8.155V11.364h-25.8A12.577,12.577,0,0,0,44.1,3m0,8.364a4.182,4.182,0,1,1-4.182,4.182A4.182,4.182,0,0,1,44.1,11.364M16.914,33.319,23.187,49H10.641l6.273-15.682m54.365,0L77.552,49H65.006Z"
              transform="translate(-1.913 -3)"
              fill="#cf9426"
            />
          </svg>

          <h4 className="h4Card">Direito Civil</h4>
          {expandedCardIndex === 5 && (
            <ul className="cardContent">
              <li>
                Direito das obrigações: contratos, responsabilidade civil,
                inadimplência
              </li>
              <li>
                Direito de família: divórcio, guarda dos filhos, pensão
                alimentícia
              </li>
              <li>Direito das sucessões: inventário, testamentos, herança</li>
              <li>
                Direito imobiliário: compra e venda de imóveis, locação, despejo
              </li>
            </ul>
          )}
        </div>

        <div
          className={`containerCard ${
            expandedCardIndex === 6 ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(6)}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="78.75"
            height="77.214"
            viewBox="0 0 78.75 77.214"
          >
            <path
              id="human-male-female-child"
              d="M55.781,9.683a7.683,7.683,0,1,1,7.683,7.683,7.706,7.706,0,0,1-7.683-7.683M71.147,78.83V55.781h9.6l-9.6-29.2a7.853,7.853,0,0,0-7.3-5.378h-.384a7.853,7.853,0,0,0-7.3,5.378l-3.457,9.988a13.127,13.127,0,0,1,6.915,11.909V79.214H71.147M42.336,38.494a5.762,5.762,0,1,0-5.762-5.762,5.908,5.908,0,0,0,5.762,5.762M15.445,17.366A7.683,7.683,0,1,0,7.762,9.683a7.706,7.706,0,0,0,7.683,7.683M23.128,78.83V51.939H28.89V28.89a7.706,7.706,0,0,0-7.683-7.683H9.683A7.706,7.706,0,0,0,2,28.89V51.939H7.762V78.83H23.128m24.97,0V63.464h3.841V48.1a5.908,5.908,0,0,0-5.762-5.762H38.494A5.908,5.908,0,0,0,32.732,48.1V63.464h3.841V78.83Z"
              transform="translate(-2 -2)"
              fill="#cf9426"
            />
          </svg>

          <h4 className="h4Card">Direito da Família</h4>
          {expandedCardIndex === 6 && (
            <ul className="cardContent">
              <li>
                Divórcio: orientação e assistência jurídica em processos de
                divórcio consensual ou litigioso
              </li>
              <li>
                Guarda dos filhos: busca pela melhor solução para a guarda e
                convivência dos filhos menores
              </li>
              <li>
                Pensão alimentícia: definição e revisão dos valores de pensão
                alimentícia
              </li>
              <li>
                União estável: orientação e formalização de contratos de união
                estável
              </li>
            </ul>
          )}
        </div>

        <div
          className={`containerCardActive ${
            expandedCardIndex === 7 ? "expanded" : ""
          }`}
          onClick={handleScrollToSection}
        >
          <svg
            className="svgContainer"
            xmlns="http://www.w3.org/2000/svg"
            width="70.935"
            height="70.935"
            viewBox="0 0 70.935 70.935"
          >
            <path
              id="plus-box-multiple"
              d="M62.294,33.921H48.107V48.107H41.014V33.921H26.827V26.827H41.014V12.64h7.093V26.827H62.294M65.841,2H23.28a7.093,7.093,0,0,0-7.093,7.093V51.654a7.093,7.093,0,0,0,7.093,7.093H65.841a7.093,7.093,0,0,0,7.093-7.093V9.093A7.093,7.093,0,0,0,65.841,2M9.093,16.187H2V65.841a7.093,7.093,0,0,0,7.093,7.093H58.748V65.841H9.093Z"
              transform="translate(-2 -2)"
              fill="#001c34"
            />
          </svg>

          <div>
            <h4 className="h4Card"> Outras Áreas</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atuacao;
