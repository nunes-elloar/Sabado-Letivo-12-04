import express from "express"
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";


const PORT = 3333

const app = express()
app.use(cors({
    origin: '*',
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.json())


const pessoas = []

// Buscar todas as pessoas cadastradas
app.get('/pessoas', (request, response)=>{
    response.status(200).json(pessoas)
})
//Cadastrar um pessoa
app.post('/pessoas', (request, response)=>{
    const {nome, cargo } = request.body;
    if(!nome){
        response.status(400).json({mensagem: "Nome é obrigatório"})
        return
    }
    if(!cargo){
        response.status(400).json({mensagem:"Cargo é obrigatório"})
        return
    }
    const pessoa = {
        id: uuidv4(),
        nome,
        cargo
    }
    pessoas.push(pessoa)
    
    console.log(nome, cargo)
    response.status(201).json({mensagem: 'cadastro realizado', pessoa});
    
})


//Buscar um ÚNICA PESSOA
app.get('/pessoas/:id', (request, response)=>{
    const {id} = request.params 
/**
 * 
 */
    const encontrarpessoa = pessoas.findIndex((pessoa)=>{pessoa.id === id})
    if(encontrarpessoa === -1){

        response.status(400).json({message:"Pessoa não encotrada"})
    return
    }
   const pessoaEncontrada = pessoas[encontrarpessoa]
   response.status(200).json(pessoaEncontrada)
    
})

//Atualizar um ÚNICA PESSOA
app.put("/pessoas/:id", (request, response)=>{
    const {id} = request.params
    
 
    if(!nome || !cargo){
        response.status(400).json({mensagem: "Nome e Cargo é obrigatório"})
        return
    }
    const pessoaAtualizada = {
        id,
        nome,
        cargo
    }
    pessoas[encontrarpessoa] = pessoaAtualizada
    response.status(200).json({message:"Pessoa atualizada", pessoaAtualizada})
})

//Deleta uma ÚNICA PESSOA
app.delete('/pessoas/:id', (request, response)=>{
    const {id} = request.params

    const encontrarpessoa = pessoas.findIndex((pessoa) => pessoa.id === id)
    if(encontrarpessoa === -1) {
        response.status(400).json({mensagem: 'Pessoa não encontrada'})
        return
    }
    pessoas.splice(encontrarpessoa, 1)
    response.status(200).json({mensagem:"Pessoa Excluída"})
})

app.listen(PORT,  ()=>{
    console.log(`servidor iniciado na porta:${PORT}`)
})