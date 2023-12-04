import React from "react";
const estilo = { color: "green" };

const Sobre = () => {
	return (
		<div>
			<article>
				<h2 style={estilo}>React</h2>
				<p>
					React é um framework para construção de interfaces, sendo mais fácil a reutilização de componenetes.
				</p>
			</article>
		</div>
	);
};

export default Sobre;
