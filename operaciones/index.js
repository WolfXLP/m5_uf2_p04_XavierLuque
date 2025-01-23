/**
 * Aquesta funcio suma tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 * sdvsdvsvdsdv
 */
function suma(...valors) {
    let resultat = 0;
    for (let valor of valors) {
        resultat += valor;
    }
    return resultat;
}


/**
 * Aquesta funcio multiplica tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function multiplica(...valors) { 
    let resultat = 1; for (let valor of
    valors) { resultat *= valor; } 
}
return resultat;


module.exports.suma = suma;
module.exports.multiplica = multiplica;