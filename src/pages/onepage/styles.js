import backgroundMockup from "../../assets/mockupBackground.png";
import backgroundMockupMobile from "../../assets/mockupBackgroundMobile.png";
import backgroundCompromisso from "../../assets/backgroundCompromisso.png";
import backgroundContact from "../../assets/contact.png";
import backgroundQuemSomos from "../../assets/backgroundQuemSomos.png";
import backgorundAbout from "../../assets/backgroundAbout.svg";

const styles = {
  background: {
    backgroundImage: `url(${backgroundMockup})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "auto",
  },

  containerFlex: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#F0F0F0",
    fontSize: "x-large",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    overflow: "hidden",
  },
  containerHome: {
    display: "inline-flex",
    marginLeft: "5vw",
  },
  centeredDivE: {
    margin: "40vh 0px 6vh 6vw",
  },
  centeredDiv: {
    textAlign: "center",
    backgroundColor: "#001C34",
    padding: "20px 0 0 0 ",
  },
  H1Tittle: {
    marginBottom: "3vh",
  },

  pTittle: {
    marginRight: "56vw",
    paddingBottom: "2vw",
  },
  bTittle: {
    backgroundColor: "rgb(207,148,38)",
    padding: "13px 60px 13px 60px",
    textDecoration: "none",
    color: "#F0F0F0",
    borderRadius: "10px",
    fontSize: "1rem",
    transition: "0.3s ease-in-out",
  },
  bTittleHover: {
    backgroundColor: "#F0F0F0",
    color: "#000000",
  },
  backgroundEquipe: {
    backgroundImage: `url(${backgorundAbout})`,
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  },
  textEquipe: {
    textAlign: "start",
    padding: "2%",
    whiteSpace: "pre-line",
  },
  imgEquipe: {
    float: "left",
    paddingRight: "4%",
  },
  imgEquipeW: {
    width: "60vh",
  },
  contactBackground: {
    backgroundColor: "#001C34",
    color: "#f0f0f0",
    height: "65vh",
    marginTop: "4%",
  },
  containerContact: {
    display: "flex",
    marginRight: "20%",
    marginLeft: "20%",
    lexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
  },
  h2TextContact: {
    fontSize: "2rem",
    marginBottom: "3vh",
  },
  textContact: {
    marginRight: "10vw",
    flex: "1",
    textAlign: "left",
  },
  contentContact: {
    width: "50%",
  },

  borderRHome: {
    borderLeft: "2px solid white",
    height: "20vh",
    marginTop: "20vh",
    marginLeft: "5vw",
  },
  borderLHome: {
    borderLeft: "2px solid white",
    height: "20vh",
    marginTop: "5vh",
    marginLeft: "5vw",
    marginBottom: "6vw",
  },
  iconsL: {
    display: "grid",
    marginTop: "5vh",
    marginLeft: "4.5vw",
  },
  icons: {
    marginBottom: "50%",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  },
  icon: {
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  },
  divAtuacaoText: {
    color: "#F0F0F0",
    marginLeft: "35%",
    marginRight: "35%",
  },

  h2TittleArea: {
    color: "#CF9426",
    fontSize: "1.9rem",
    marginTop: "3vh",
    marginBottom: "2vh",
  },

  //card
  containerDivCard: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: "20%",
    marginLeft: "20%",
    marginBottom: "5%",
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
  },

  containerCard: {
    color: "#CF9426",
    border: "2px solid",
    borderRadius: "24px",
    width: "250px",
    height: "250px",
    marginRight: "3%",
    marginTop: "5%",
  },

  containerCardActive: {
    color: "#001C34",
    backgroundColor: "#CF9426",
    border: "2px solid",
    borderRadius: "24px",
    width: "250px",
    height: "250px",
    marginRight: "3%",
    marginTop: "5%",
  },
  svgContainer: {
    marginTop: "20%",
  },

  h4Card: {
    marginTop: "20%",
  },

  h4CardConsumidor: { marginTop: "16%" },

  h4CardSaude: { marginTop: "17%" },

  h4CardTrabalho: { marginTop: "22%" },

  //Equipe Quem somos
  containerBackgroundAbout: {
    backgroundImage: `url(${backgroundQuemSomos})`,
    backgroundColor: "rgb(171 111 0)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto",
    padding: "15px",
  },

  fieldset: {
    height: "auto",
    textAlign: "left",
    marginLeft: "23%",
    marginRight: "23%",
    marginTop: "8vh",
    marginBottom: "8vh",
    borderRadius: "50px",
    border: "3px solid #f0f0f0",
    overflow: "hidden",
  },

  h2TittleSobre: {},
  h3TittleSobre: {},
  displayContainerEquipe1: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column-reverse",
  },

  displayContainerEquipe2: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column-reverse",
  },

  containerImgEquipe2: {
    display: "inline-block",
  },

  h3TittleSobre1: {
    textAlign: "left",
    color: "#f0f0f0",
    fontSize: "1.8rem",
    marginLeft: "3vw",
    marginTop: "5vh",
    marginBottom: "1vh",
  },
  h3TittleSobre2: {
    textAlign: "left",
    color: "#f0f0f0",
    fontSize: "1.8rem",
    marginLeft: "25vw",
    marginTop: "5vh",
    marginRight: "5vw",
    marginBottom: "1vh",
  },
  pTextEquipe1: {
    textAlign: "left",
    color: "#f0f0f0",
    marginLeft: "3vw",
    marginRight: "30vw",
    marginBottom: "10vh",
  },
  pTextEquipe2: {
    textAlign: "left",
    color: "#f0f0f0",
    marginLeft: "25vw",
    marginRight: "5vw",
    marginBottom: "3vw",
  },
  imgEquipe1: {
    marginLeft: "32vw",
    marginTop: "-10vh",
    width: "25vw",
    position: "absolute",
  },
  imgEquipe2: {
    marginLeft: "-7vw",
    marginTop: "-3vh",
    width: "25vw",
    position: "absolute",
  },
  legend: {
    paddingLeft: "2%",
    paddingRight: "2%",
    marginLeft: "8%",
  },
  h2Legend: {
    color: "#001C34",
    fontSize: "2rem",
  },
  containerAbout: {
    display: "absolute",
  },

  //compromisso
  backgroundCompromisso: {
    backgroundImage: `url(${backgroundCompromisso})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflowX: "hidden",
    height: "auto",
  },
  imgCompromisso: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflowX: "hidden",
    height: "auto",
  },
  containerTextCompromisso: {
    color: "#f0f0f0",
    marginTop: "10vh",
    marginLeft: "15vw",
    marginRight: "55vw",
    marginBottom: "5vw",
  },
  h3TextCompromisso: {
    fontSize: "2rem",
    textAlign: "left",
    marginBottom: "4%",
  },
  pTextCompromisso: {
    textAlign: "left",
    marginBottom: "5vh",
  },

  backgroundAmarelo: {
    backgroundColor: "#CF9426",
  },

  containerAtendimento: {
    display: "flex",
    padding: "10vh 32vh",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerTextAtendimento: {
    marginLeft: "6vw",
    marginRight: "7vw",
    textAlign: "left",
    color: "#f0f0f0",
  },

  h3TextAtendimento: {
    fontSize: "2rem",
    marginBottom: "3vh",
  },

  pTextAtendimento: {},

  //mobile

  backgroundMobile: {
    backgroundImage: `url(${backgroundMockupMobile})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  containerHomeMobile: {
    padding: "2vh",
    marginBottom: "4vh",
    textAlign: "center",
  },
  centeredDivMobile: {
    margin: "30vh 6vw  0 0 ",
  },
  pTittleMobile: {
    marginRight: "5vw",
    marginLeft: "5vw",
    paddingBottom: "2vw",
    fontSize: "initial",
  },
  tittleMobile: {
    fontSize: "2.5rem",
    marginBottom: "1.5vh",
    textAlign: "center",
  },
  divBTittleMobile: {
    marginTop: "2vh",
  },
  bTittleMobile: {
    backgroundColor: "rgb(207,148,38)",
    padding: "13px 60px 13px 60px",
    textDecoration: "none",
    color: "#F0F0F0",
    borderRadius: "10px",
    fontSize: "1rem",
    transition: "0.3s ease-in-out",
  },
  tittleAreaMobile: {
    color: "#CF9426",
    fontSize: "2rem",
  },
  setaTittleMobile: {
    margin: "0",
    padding: "0",
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: "10px solid transparent",
  },
  bTextMobile: {
    fontSize: "medium",
    marginLeft: "2vh",
  },
  aButtonHomeMobile: {
    textDecoration: "none",
    color: "#f0f0f0",
    alignItems: "center",
    display: "flex",
  },
  contactTittleMobile: {
    color: "#F0F0F0",
    marginBottom: "3vh",
  },

  divAtuacaoTextMobile: {
    margin: "5vh 5vh 3vh 5vh",
    color: "#f0f0f0",
    fontSize: "large",
  },
  tittleArea: {
    marginTop: "2vh",
    marginBottom: "0.5vh",
  },
  tittleAreaDecoration: {
    borderBottom: "4px solid #1F313C",
    marginLeft: "12vw",
    marginRight: "12vw",
    marginBottom: "3vh",
  },

  tittleAreaDecorationEscritorio: {
    borderBottom: "4px solid #1F313C",
    marginLeft: "4vw",
    marginRight: "4vw",
    marginBottom: "3vh",
  },

  textEquipeMobile: {
    textAlign: "center",
    marginLeft: "4vw",
    marginRight: "4vw",
    color: "#F0f0f0",
    fontSize: "large",
  },
  backgroundEquipeMobile: {
    backgroundImage: `url(${backgroundQuemSomos})`,
    backgroundColor: "rgb(171 111 0)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto",
    padding: "15px",
  },
  tittleEquipeMobile: {
    marginTop: "3vh",
    marginBottom: "1.5vh",
    fontSize: "1.8rem",
  },
  h2EquipeMobile: {
    color: " rgb(0, 28, 52)",
    fontSize: "2rem",
  },
  pEquipeMobile: {
    marginBottom: "2vh",
    fontSize: "large",
  },
  imgEquipeWMobile: {
    width: "90%",
    margin: "4vw",
  },
  containerContactMobile: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "5vw",
    marginRight: "5vw",
    marginLeft: "5vw",
    lexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  textContactMobile: {
    marginRight: "2%",
    marginBottom: "4%",
    flex: "1",
    textAlign: "center",
  },
  contactBackgroundMobile: {
    backgroundColor: "#001C34",
    color: "#f0f0f0",
    height: "auto",
    marginTop: "4%",
  },
  containerTextCompromissoMobile: {
    color: "#f0f0f0",
    marginTop: "5vh",
    marginLeft: "3vh",
    marginRight: "3vh",
    marginBottom: "5vw",
    textAlign: "center",
  },
  pTextCompromissoMobile: {
    marginTop: "3vh",
    marginBottom: "2vh",
    fontSize: "large",
  },
  h3TextCompromissoMobile: {
    fontSize: "2rem",
    marginBottom: "5vh",
  },
  containerAtendimentoMobile: {
    textAlign: "center",
  },
  imgAtendimentoMobile: {
    width: "100%",
  },
  containerTextAtendimentoMobile: {
    paddingTop: "4vh",
    marginLeft: "6vw",
    marginRight: "7vw",
    paddingBottom: "4vh",
    color: "#f0f0f0",
  },
  h3TextAtendimentoMobile: {
    fontSize: "2rem",

    marginBottom: "3vh",
  },
  pTextAtendimentoMobile: {
    fontSize: "large",
    marginTop: "4vh",
  },
  containerIcon: {},
  "@media (max-width: 768px)": {
    containerIcon: {
      display: "none",
    },
  },
};

export default styles;
