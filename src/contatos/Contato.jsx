import styled from "styled-components"
import { useState } from "react"

const Card = styled.div`
background-color: #2a2a3d;
padding: 15px;
margin: 10px 0;
border-radius: 10px;
position: relative;
overflow: hidden;

transition: opacity 0.6s ease-out;
opacity: ${(props) => (props.$animando ? 0 : 1)};

animation: ${(props) =>
  props.$animando ? 'glitch 0.15s steps(2, end) 4' : 'none'};

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(3px, -3px); }
  60% { transform: translate(-3px, -3px); }
  80% { transform: translate(3px, 3px); }
  100% { transform: translate(0); }
}
`

const Pixel = styled.div`
position: absolute;
width: 4px;
height: 4px;
background: #f90808;

pointer-events: none;

animation: explode 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;

@keyframes explode {
  from {
    opacity: 1;
    transform: translate(0, 0);
  }
  to {
    opacity: 0;
    transform: translate(var(--x), var(--y));
  }
}
`

const BotaoAcao = styled.button`
background-color: transparent;
color: #00ff88;
border: 1px solid #00ff88;
padding: 6px 10px;
margin: 5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background-color: #00ff88;
  color: black;
  box-shadow: 0 0 10px #00ff88;
`

const BotaoRemover = styled.button`
background-color: transparent;
color: #ff4d4d;
border: 1px solid #ff4d4d;
padding: 6px 10px;
margin: 5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background-color: #ff4d4d;
  color: white;
  box-shadow: 0 0 10px #ff4d4d;
`

function Contato(props){

  const [particulas, setParticulas] = useState([])
  const [animando, setAnimando] = useState(false)

  function handleRemover(e) {

    const rect = e.currentTarget.parentElement.getBoundingClientRect()

    const novasParticulas = []

    for (let i = 0; i < 2000; i++) {
      novasParticulas.push({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        dx: (Math.random() - 0.5) * 600,
        dy: (Math.random() - 0.5) * 600,
        delay: Math.random() *0.5,
        size: Math.random() * 6 + 2,
        opacity: Math.random()
      })
    }

    setParticulas(novasParticulas)
    setAnimando(true)

    setTimeout(() => {
      props.onRemover()
    }, 800)
  }

  return(
    <Card $animando={animando}>

      <h2>{props.nome}</h2>
      <p>{props.email}</p>
      <p>{props.telefone}</p>

      <BotaoAcao onClick={props.onEditar}>Editar</BotaoAcao>
      <BotaoRemover onClick={handleRemover}>Remover</BotaoRemover>

      {animando && particulas.map(p => (
        <Pixel
          key={p.id}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            '--x': `${p.dx}px`,
            '--y': `${p.dy}px`
          }}
        />
      ))}

    </Card>
  )
}

export default Contato