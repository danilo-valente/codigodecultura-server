/**********************************************************************
* 
* code_verification.js: recebe um código em ccl e verifica se o código
* pode ser executado ou nao.
*
***********************************************************************/
module.exports = function (cclCode) {
    return cclCode.match(/((#.*include.*)|(system)|(popen)|(fopen)|(fgets)|(execl))/g);
}
