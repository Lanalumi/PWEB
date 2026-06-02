let eventos = require('events');
//atribuição da classe EventEmitter a uma variável
let EmissorEventos = eventos.EventEmitter;
//O emissor de eventos, encontra-se na propriedade EventEmitter
let ee = new EmissorEventos();
//ou criando direto sem a variável intermediária
//let ee= new eventos.EventEmitter();
//mas da forma anterior é uma boa prática
// é registrado um ouvinte(listener) para o evento 'dados'.
//Quando esse evento acontecer executar a função passada como argumento
ee.on('dados',function(fecha){
    console.log(fecha);
})
//Emissão do evento somente uma vez
ee.emit('dados', 'primeira vez'+Date.now());

setInterval(function(){
    ee.emit('dados',+Date.now());
}, 500);
