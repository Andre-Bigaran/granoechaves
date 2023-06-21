import { Component } from "react";
import Logo from "../../assets/logoPe.png";
import "./styles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <img className="logo" src={Logo} alt="Logo da Empresa" />
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="">
                  HOME
                </a>
              </li>
              <li>
                <a href="">ATUAÇÃO</a>
              </li>
              <li>
                <a href="">EQUIPE</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTATO</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
