var cadastro = $('#cadastrar');
var email = $('#email');

$(function(){

    $(cadastro).click(function(e){
        e.preventDefault();
        var texto = $('#senha').val();

       if(testaExpressao(texto) ){
        let primeiroNome = $("#primeironome").val();
        let ultimoNome = $("#ultimonome").val();
        let datnasc = $("#datnasc").val();
        let username = $('#username').val();          



       } 
       else {
         if(texto.length == 0){
             texto = null;
         }
         alert("Email ou senha inválido, favor verificar requisitos :)"
                + " -- Senha informada: "+ texto);
         
       } 
    });
})

function testaExpressao(texto){
    var reg1 = new RegExp(/[a-z0-9]/i);
    var reg2 = new RegExp(/[^0-9a-z]/i);

    if( reg1.test(texto) && reg2.test(texto) && texto.length >= 8){
        return true;
    } else  
        return false;
}

function validaEmail(email){
    var isValid = new RegExp (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    if (!isValid.test(email)){
        return false;
    }

    
}