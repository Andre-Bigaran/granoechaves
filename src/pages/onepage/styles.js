import backgroundMockup from "../../assets/mockupBackground.png";
import backgroundMockupMobile from "../../assets/mockupBackgroundMobile.png";
import backgroundContact from "../../assets/contact.png";

import backgorundAbout from "../../assets/backgroundAbout.svg";

const styles = {
  background: {
    backgroundImage: `url(${backgroundMockup})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
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
  },
  centeredDivE: {
    margin: "40vh 0px 0px 6vw",
  },
  centeredDiv: {
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    padding: "20px 0 0 0 ",
  },
  pTittle: {
    marginRight: "50vw",
    paddingBottom: "2vw",
  },
  bTittle: {
    border: "2px solid #F0F0F0",
    borderRadius: "5px",
    backgroundColor: "transparent",
    padding: "10px 20px",
    color: "#F0F0F0",
    cursor: "pointer",
    fontSize: "initial",
    textTransform: "uppercase",
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
    backgroundImage: `url(${backgroundContact})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
    marginTop: "4%",
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
    marginLeft: "30%",
    marginRight: "30%",
  },

  //mobile

  backgroundMobile: {
    backgroundImage: `url(${backgroundMockupMobile})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "65vh",
  },
  containerHomeMobile: {
    backgroundColor: "rgba(59, 59, 59, 0.6)",
    padding: "2vh",
    marginBottom: "6vh",
  },
  centeredDivMobile: {
    margin: "20vh 6vw  0 0 ",
  },
  pTittleMobile: {
    marginRight: "5vw",
    paddingBottom: "2vw",
    fontSize: "small",
  },
  tittleMobile: {
    fontSize: "smaller",
    marginBottom: "1.5vh",
  },
  bTittleMobile: {
    marginLeft: "2vh",
    marginRight: "-1vh",
    border: "2px solid #F0F0F0",
    borderRadius: "3px",
    backgroundColor: "transparent",
    padding: "20px 20px",
    color: "#F0F0F0",
    cursor: "pointer",
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

  divAtuacaoTextMobile: {
    margin: "0 1vh 3vh 1vh",
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

  containerIcon: {},
  "@media (max-width: 768px)": {
    containerIcon: {
      display: "none",
    },
  },
};

export default styles;
