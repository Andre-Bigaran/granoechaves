import backgroundMockup from "../../assets/mockupBackground.png";

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
  container: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#F0F0F0",
    fontSize: "x-large",
  },
  centeredDiv: {
    margin: "20% 0 0 5% ",
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
};

export default styles;
