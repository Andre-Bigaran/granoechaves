const styles = {
  navbar: {
    background: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: "20px",
    paddingLeft: "80px",
    paddingRight: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  logo: {
    width: "100px",
    height: "auto",
  },
  containerText: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menuItems: {
    display: "flex",
    gap: "20px",
  },
  itemText: {
    color: "#F0F0F0",
    textDecoration: "none",
    paddingLeft: "10%",
  },

  searchForm: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    marginLeft: "10px",
    background: "#F0F0F0",
    padding: "10px 40px 10px 10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    width: "300px",
  },
  searchButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "4px",
    background: "#F0F0F0",
    color: "black",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    outline: "none",
  },
  inputContact: {
    width: "30vw",
    height: " 3vh",
  },
  logoFooter: {
    width: "35%",
  },
  divLogoFooter: {
    float: "left",
  },
  center: {
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#15252E",
    color: "#F0F0F0",
  },
  iframe: {
    width: "400px",
    height: "300px",
  },
  menuFooter: {
    float: "right",
  },
  menuLink: {
    color: "#F0F0F0",
    textDecoration: "none",
  },
  searchContainer: {
    position: "relative",
  },
};

export default styles;
