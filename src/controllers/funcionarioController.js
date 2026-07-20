const Funcionario = require('../models/funcionario')
const axios = require("axios")

exports.cadastrar = async(req,res)=>{
    try{
        const funcionario = await Funcionario.create(req.body)

        console.log(process.env.API_BENEFICIOS);

        await axios.post(`${process.env.API_BENEFICIOS}/beneficios`,{
            funcionarioId: funcionario.id,
            salario: funcionario.salario,
            cargo: funcionario.cargo
        })

        res.status(201).json(funcionario)

    }catch(error){
        console.log(error)
        res.status(500).json({mensage:"Erro de Servidor!"})
    }
}

exports.listar = async (req,res) =>{
    const funcionarios = await Funcionario.findAll()
    res.status(200).json(funcionarios)
}