//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
      <div>
          <p>{ props.values.color}</p>
          <h1>{ props.values.codigo}</h1>
      </div>
  )
}
