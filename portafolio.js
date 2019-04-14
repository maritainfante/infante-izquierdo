// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Patiperros",
    about: "App de turismo en el sur de Chile, que permite armar paquetes turísticos",
}, {
    figure: "media/foto-02.jpg",
    title: "Pulling Spray",
    about: "Adaptador de spray para que los niños puedan utilizarlos sin esfuerzo",
}, {
    figure: "media/foto-03.jpg",
    title: "Pincoya",
    about: "Chaleco que previene a los pescadores de la hipotermia",
}, {
    figure: "media/foto-04.jpg",
    title: "Lhasa",
    about: "Nueva imagen y material de trabajo para la empresa Lhasa",
}, {
    figure: "media/foto-05.jpg",
    title: "Maggi",
    about: "Estrategia de captación de clientes para empresa Maggi",
}, {
  figure: "media/foto-07.jpg",
  title: "Lámpara reciclada",
    about: "Lámpara a partir de bolsas recicladas, luego de pasar su punto de fusión",
}, {
    figure: "media/foto-06.jpg",
    title: "Modelo 3D",
    about: "Modelado 3D de tanque para el curso de diseño por computación",
  }, {
      figure: "media/foto-08.jpg",
      title: "Corte CNC",
      about: "Corte CNC de juego para Hospital San José",

}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
