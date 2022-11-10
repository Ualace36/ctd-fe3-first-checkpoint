
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import {useState} from "react";
import {Card} from "./Card";

const validateColorName = (colorName) => {
    let withoutSpaces = colorName.trim();
    return withoutSpaces.length > 2 ? withoutSpaces : false
}

const validateColorHex = (colorHex) => {
    let withoutSpaces = colorHex.trim();
    let split = withoutSpaces.split("")
    return withoutSpaces.length > 5 && split[0] === "#" ? withoutSpaces : false;
}

function App() {
    // Aqui você irá criar os Estados para manipular os Inputs

    const [allCards, setAllCards] = useState([])
    const [colorName, setColorName] = useState('')
    const [colorHex, setColorHex] = useState('#e66465')
    const [formularyError, setFormularyError] = useState(false)

    function createCard(event) {
        event.preventDefault()

        const newCard = {
            color: colorName,
            codigo: colorHex,
        }
        console.log(validateColorHex(colorName))
        if (!validateColorName(colorName) || !validateColorHex(colorHex)) {
            setFormularyError(true)
        }else{
            setFormularyError(false)

            setAllCards([...allCards, newCard])

            setColorHex('')
            setColorName('')
        }

    }

    return (
        <div className="App">
            <h1>Carga de estudiantes</h1>
            <form onSubmit={createCard} className={formularyError? 'form-error' : ''}>
                <h1>Adicionar Nova Cor</h1>
                <p>Digite o nome da cor e a selecione no formato HEX abaixo</p>
                <label htmlFor="colorName">Nome: </label>
                <input type="text" id="colorName" value={colorName} onChange={event => setColorName(event.target.value)}/>

                <label htmlFor="colorHex">Codigo da cor: </label>
                <input  id="colorHex" type="color" value={colorHex} onChange={event => setColorHex(event.target.value)}/>
                <button type='submit'>Adicionar</button>

            </form>
            {
                formularyError ? (
                    <span>O seu formulário contem erros</span>
                ) : null
            }
            <div className="cards">
                {
                    allCards.map(
                        cards =>(
                            <Card
                                values={ cards}
                            />
                        )

                    )
                }
            </div>
        </div>
    )
}

export default App
