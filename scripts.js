const frasesRajoy = [
    "¿Usted cree que yo me levanto un día y digo: 'bueno, pues me voy a la cama a las tantas'?",
    "El que no corre, vuela",
    "No es fácil, pero es sencillo",
    "Yo me guío por lo que veo, y no veo nada",
    "Lo importante es que todos nos pongamos de acuerdo, y yo estoy de acuerdo conmigo mismo",
    "Las cosas claras y el chocolate espeso",
    "Yo sé que no sé nada, y encima tengo mis dudas",
    "Me gusta el fútbol, pero no soy muy futbolero",
    "El PP es muy transversal, como los peces",
    "Yo no tengo ningún problema en reconocer que tengo problemas",
    "España es un gran país, y los españoles muy españoles y mucho españoles",
    "No voy a contar lo que voy a hacer hasta que lo haga, y cuando lo haga ya lo verán",
    "Yo creo que el sentido común es el menos común de los sentidos",
    "Lo de la amnistía es complicado, como todo en esta vida",
    "A veces hay que hacer lo que se debe, aunque no se quiera",
    "El problema no es el problema, sino la solución del problema",
    "Yo soy un hombre de estado, y los hombres de estado hablamos cuando tenemos que hablar",
    "No me gusta hablar de lo que no sé, y hay muchas cosas que no sé",
    "La política es el arte de lo posible, y yo soy un artista",
    "Prefiero que me critiquen por lo que hago a que me elogien por lo que no hago",
    "Mañana será otro día, y pasado mañana también",
    "Yo he dicho lo que he dicho y mantengo lo que dije",
    "Esto no es como el agua que cae del cielo sin que se sepa exactamente por qué..."
];
function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesRajoy.length);
    return frasesRajoy[indiceAleatorio];
}
function mostrarFraseEnAlert(event) {
    event.preventDefault();
    
    const frase = obtenerFraseAleatoria();
    
    alert(frase);
}