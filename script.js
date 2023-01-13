//Função para não deixa digitar letras maiúscular.
function  ApenasLetrasMinusculas(e,t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 32 || charCode ==13 )) {
                let ret =  e.getModifierState("CapsLock");
            if(e.shiftKey == false && ret == false) {
                return true;
            }else{
                alert("Somente Lestras Minúsculas");
                 return false;
            }
            
        }
        else{
            alert("Somente Lestras Minúsculas");
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}


//Função com Botão criptografar junto com o texto lado direito e esquerdo.
function criptografar() {
    var digitar = document.getElementById("texto");
    var campoResult = document.getElementById("texto2");
    var escrever = digitar.value;

    var cripResul = escrever.replace(/e/g , "enter").replace(/i/g , "imes").replace(/a/g , "ai").replace(/o/g , "ober").replace(/u/g , "ufat");
    console.log(cripResul);
    campoResult.value = cripResul;
    
}


//Função Botão descriptografar no texto lado esquerdo.
function descriptografar() {
   
    var digitar = document.getElementById("texto");
    var campoResult = document.getElementById("texto2");
    var escrever = digitar.value;
    
    var resulDescri = escrever.replace(/enter/g , "e").replace( /imes/g ,"i").replace(/ai/g , "a").replace(/ober/g , "o").replace(/ufat/g , "u");
   campoResult.value = resulDescri;     
}


//Função Botão copiar do texto lado esquerdo.
function copiar() {
    var copia = document.getElementById("texto2");
    copia.select();
    document.execCommand("copy");
    alert("Texto foi copiado");
}

    