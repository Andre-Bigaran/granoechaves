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
    backgroundColor: "#eaeaea",
    padding: "10px",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    marginBottom: "10px",
  },
  textCircle: {
    textAlign: "center",
  },
};

export default styles;
