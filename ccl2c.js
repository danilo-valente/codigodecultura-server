/**********************************************************************
* 
* ccl2c.js: recebe um código em BIRL e retorna o mesmo traduzido
* para C.
*
***********************************************************************/
module.exports = function (birlCode) {
    // A tradução é feita com um simples replace no código ccl com o seu respectivo valor
    //em C, a regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro
    //de aspas.
    var code = birlCode;

    if (code == null) return "";

    //Traduzindo a main
    code = code.replace(/(T[AÁ] COME[CÇ]ANDO MAIS UM CHOQUE DE CULTURA)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {');
    //Traduzindo o }
    code = code.replace(/(A?CAB[OÔ])(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(AQUI TEM INFORMA[CÇ][AÃ]O)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(D[AÁ] O RECADO FINAL)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(ELE TEM TALENTO PRA ISSO[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(VOCÊ T[AÁ] ERRADO)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //Traduzindo else if
    code = code.replace(/(FILME NACIONAL TEM LIVRO[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(RODA A VINHETA SIMONE)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(VELOZES E FURIOSOS)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(FALO COM TRANQUILIDADE[ \t]*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(MAS EU RETORNEI)(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(T[AÁ] COME[CA]NDO O QUADRO)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    //Traduzindo parada no código
    code = code.replace(/((?:EH?|É |)?SPIN OFF QUE CHAMA)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //Traduzindo continuar o código
    code = code.replace(/(ACHOU ERRADO OT[AÁ]RIO)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');

    //Traduzindo os tipos de dados
    code = code.replace(/(MAUR[IÍ]LIO)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(RENAN)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(JULINHO)(?=(?:[^"]|"[^"]*")*$)/g, 'short');
    code = code.replace(/(ROGERINHO)(?=(?:[^"]|"[^"]*")*$)/g, 'long');
    code = code.replace(/(N[AÃ]O TEM PONTO)(?=(?:[^"]|"[^"]*")*$)/g, 'double');
    code = code.replace(/(TIRA PONTO DELE)(?=(?:[^"]|"[^"]*")*$)/g, 'float');
    code = code.replace(/(GUERREI?RINHO)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    console.log ('-----------------------------------------');
    console.log ('CODIGO GERADO:');
    console.log (code);
    console.log ('-----------------------------------------');

    return code;
}
