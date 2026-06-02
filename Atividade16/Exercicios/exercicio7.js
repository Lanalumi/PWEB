let http = require('http');
let server = http.createServer(function(req, res){
let opcao = req.url //pegando a url da requisição
if(opcao == '/historia'){
    res.end("<html><body>História da Fatec Sorocaba</body></html>");
}else if(opcao == '/cursos'){
    res.end("<html><body>Cursos</body></html>");
}else if(opcao == '/professores'){
    res.end("<html><body>Professores</body></html>");
}else if(opcao == '/alunos'){
    res.end("<html><body>Alunos</body></html>");
}else{
    res.end("<html><body>Página não encontrada</body></html>");
}

});
server.listen(3000);
console.log("Servidor iniciado");