var cont=0;
$(document).ready( function() {
  $('#escoger').change(function() {
    escogePais();
  });
  $('#btncomprobar').click(function() {
    comprobarNombre();
  });
});

function escogePais() {
  var opciones =$('#escoger').val();
  if( opciones == 1 ) {
    aleatorioMexico();
  } else if( opciones == 2 ) {
    aleatorioLima();
  }
}

function aleatorioMexico() {
  $('#nombre').text("");
  $('#name').val("");
  $('#info').text("");
  $('#name').focus();

  var description = [
    "img/mexico/carmen.jpg",
    "img/mexico/hass.jpg",
    "img/mexico/nayeli.jpg",
    "img/mexico/okaidy.jpg",
    "img/mexico/orianna.jpg",
    "img/mexico/edith.jpg",
    "img/mexico/irma.jpg"
  ];

  var nombres = [
    "CARMEN",
    "HASS",
    "NAYELI",
    "OKAIDY",
    "ORIANNA",
    "EDITH",
    "IRMA"
  ]

  var size = description.length
  var x = Math.floor(size*Math.random())
  document.getElementById('perfil').src=description[x];
  document.getElementById('nombre').innerHTML=nombres[x];

}

function aleatorioLima() {
  $('#nombre').text("");
  $('#name').val("");
  $('#info').text("");
  $('#name').focus();

  var imagenes = [
    "img/lima/analucia.jpg",
    "img/lima/lorena.jpg",
    "img/lima/marilyn.jpg",
    "img/lima/zarai.jpg"
  ];

  var names = [
    "ANA LUCIA",
    "LORENA",
    "MARILYN",
    "ZARAI"
  ]

  var tamaño = imagenes.length
  var y = Math.floor(tamaño*Math.random())
  document.getElementById('perfil').src=imagenes[y];
  document.getElementById('nombre').innerHTML=names[y];
}

function comprobarNombre (personas){
  var real=$('#nombre').text();
  var nfoto=$('#name').val();
  var minname=nfoto.toUpperCase();
  var op =$('#escoger').val();
  var ptos=Number($('#puntos').text());
  var oportunidades = $('#btncomprobar');


  if (op == 0) {
    alert('Seleccione una sede porfavor');
  }

  if (nfoto==0) {
    alert('Inserte un nombre porfavor');
  } else if (minname==real){
    $('#info').text("Excelente acertaste");
    ptos+=5;
    $('#puntos').text(ptos);
    window.setTimeout(escogePais,2000);
  } else if (minname!==real) {
    $('#info').text("Sigue intentando");
    $('#name').val("");
    $('#name').focus();

    cont++;
    console.log(cont);
    if (cont === 5){
      cont = 0;
      ptos-=1;
      $('#puntos').text(ptos);
      escogePais();
    }
  }
}
