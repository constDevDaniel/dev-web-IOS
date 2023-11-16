import { Component } from "react";
import PropTypes from "prop-types";

const estilo = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
    border: "1px solid red"
};


export class Header extends Component {
	render() {
		return (
			<div>
				<h1 style={estilo}>Olá, {this.props.nome}, seja bem-vindo!</h1>
			</div>
		);
	}
}

Header.defaultProps = {
	nome: "Nome padrão",
};

Header.propTypes = {
	nome: PropTypes.string,
};

export default Header;
