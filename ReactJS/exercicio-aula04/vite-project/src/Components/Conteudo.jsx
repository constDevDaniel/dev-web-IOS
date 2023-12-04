import { useState } from 'react';

const Conteudo = () => {
    const [contador, setContador] = useState(0);
    const [lido, setLido] = useState(0);
    return (
      <div>
        <article>
          <h2>CONTRATAÇÃO DE PESO</h2>
          <p>O tricolor paulista fecha contratação com o jogador James Rodriguez</p>
          <div>
            <p>{lido}{contador}</p>
            <button onClick={() => setLido('Read:')}>
              Read
            </button>
            <button onClick={() => setContador('Like')}>
              Lindo
            </button>

            <button onClick={() => setContador('Like')}>
              Gostei
            </button>

            <button onClick={() => setContador('Deslike')}>
              Não Gostei
            </button>
          </div>


        </article>
      </div>
    )
  }


export default Conteudo;
