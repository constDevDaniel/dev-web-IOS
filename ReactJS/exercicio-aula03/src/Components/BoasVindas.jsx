import React from 'react'
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  return (
    <div>
        <section>
            <h1 style={{color: 'blue'}}>{props.nome}</h1>
            <p>Seja Bem vindo :D</p>
        </section>
    </div>
  )
}

BoasVindas.defaultProps = {
    nome: 'Nome Padrão',
};
BoasVindas.propTypes = {
  nome: PropTypes.string,
}

export default BoasVindas