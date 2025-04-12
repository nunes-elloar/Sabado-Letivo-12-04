import Container from "../Components/Container";
import Imagem from "../Components/Imagem";
import Perfume from "../Components/Perfume";
import Titulo from "../Components/Titulo";
import Textinho from "../Components/Textinho";
import Preco from "../Components/Preco";
import Botao from "../Components/Botao";
import Container2 from "../Components/Container2";

const App = () => {
    return(
        <Container>
        <Imagem/>
        <Container2>
        <Perfume/>
        <Titulo/>
        <Textinho/>
        <Preco/>
        <Botao/>
        </Container2>
        </Container>
    )
}

export default App