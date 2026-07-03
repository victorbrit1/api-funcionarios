const app = require('./app')

const PORT = 3000

app.listen(PORT , (req,res) =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})