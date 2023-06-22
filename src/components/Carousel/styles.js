const styles = {
  carousel: {
    width: "100%",
    overflow: "hidden",
  },
  slideContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  divCircle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#1F313C",
    padding: "10px",
    margin: "auto",
  },
  circle: {
    marginTop: "10%",
    fontSize: "5rem",
    color: "#F0F0F0",
  },
  textCircle: {
    textAlign: "center",
    marginTop: "3vh",
    marginLeft: "15vw",
    marginRight: "15vw",
    marginBottom: "1vh",
  },
};

export default styles;
