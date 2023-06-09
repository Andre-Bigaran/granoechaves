import backgroundMockup from "../../assets/mockupBackground.png";
import backgroundContact from "../../assets/contact.png";

/* styles.css */
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
  },
  containerCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 20px 0 20px",
    height: "20vh",
  },
  divCircle: {
    display: "inline-flex",
  },
  centeredDivE: {
    margin: "20% 0 0 5% ",
  },
  centeredDiv: {
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    padding: "20px 0 0 0 ",
  },
  pTittle: {
    marginRight: "30%",
  },
  bTittle: {
    border: "2px solid #F0F0F0",
    borderRadius: "5px",
    backgroundColor: "transparent",
    padding: "10px 20px",
    color: "#F0F0F0",
  },
  circle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#1F313C",
  },
  textCircle: {
    marginTop: "20px",
    textAlign: "center",
  },
  slideContainer: {
    display: "flex",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    width: "100%",
    scrollPadding: "0 10px",
    alignItems: "center",
    justifyContent: "center",
    scrollbarWidth: "thin",
    marginBottom: "5%",
  },

  itemBox: {
    flex: "0 0 25%",
    width: "40%",
    margin: "0 auto",
  },

  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundEquipe: {
    backgroundColor: "#AEB8BE",
    margin: 0,
    padding: 0,
  },

  TextEquipe: {
    textAlign: "left",
    padding: "5% 2% 5% 2%",
  },
  imgEquipe: {
    float: "left",

    paddingRight: "6%",
  },
  imgEquipeW: {
    width: "100%",
  },
  contactBackground: {
    backgroundImage: `url(${backgroundContact})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
    marginTop: "4%",
  },
};

export default styles;
