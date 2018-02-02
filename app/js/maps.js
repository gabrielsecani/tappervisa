var map;

var infowindow = null;
var cm = [-23.572658, -46.695643];
function initialize() {
    var centerMap = new google.maps.LatLng(cm[0],cm[1]); /*PONTO CENTRAL*/

    var myOptions = {
      zoom: 14,
      center: centerMap,
      scrollwheel:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDoubleClickZoom: true,
      streetViewControl: false,
      navigationControl: true,
      navigationControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tappers']
      }
    }

    var map = new google.maps.Map(document.getElementById("map"), myOptions);


    // array com os estilos
    var m_styles  = [
      {
        featureType: "all",
        stylers: [{ saturation: 20 }]
      }
    ];
    var pinMapType = new google.maps.StyledMapType(m_styles ,{name: "tappers"});
 	// Associando o estilo do mapa com o tipo do mapa
	map.mapTypes.set('tappers', pinMapType);
	// indicando estilo de mapa inicial
	map.setMapTypeId('tappers');

    setMarkers(map, sites);
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });
}
function geraInfo(nome, desc){
  return '<p style="font-size:14px;"><strong>'+nome+'</strong></br>'+desc+'</p>';
}
var mark1 = '../images/mark.svg';
var sites = [
  ['Vila Butantan', -23.572090, -46.703761, 4, 'Muitas opções para dar um Tapp com seu Cartão NFC'],
  ['Adega Santiago', -23.571156, -46.689073, 4, 'Aqui aceita seu cartão de crédito/débito NFC'],
  ['Primo Basílico', -23.573988, -46.684889, 4, 'Seu melhor pedido é com usando seu cartão NFC'],
  ['Café Árabe', -23.574588, -46.688118, 4, 'Praça de alimentação recheada de opções'],
  ['Steakhouse', -23.573093, -46.695585, 4, 'Muitas opções para dar um Tapp com seu Cartão NFC'],
  ['Theodora Sushi', -23.569652, -46.692667, 4, 'Aqui aceita seu cartão de crédito/débito NFC'],
  ['Brazuca', -23.570005, -46.704855, 4, 'Seu melhor pedido é com usando seu cartão NFC']
];

function setMarkers(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    var sites = markers[i];
    var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
    var marker = new google.maps.Marker({
        position: siteLatLng,
        map: map,
        title: sites[0],
        zIndex: sites[3],
        icon: mark1,
        html: geraInfo(sites[0],sites[4])
    });

    var contentString = "Some content";

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        var marcador = markers[i];
        var latMarcadorClicado = marcador[1];
        var lonMarcadorClicado = marcador[2];
        var pontoLatLng = new google.maps.LatLng(latMarcadorClicado , lonMarcadorClicado);
        map.panTo(pontoLatLng);
        infowindow.setContent(this.html);
        infowindow.open(map, this);
      }
    })(marker, i));
  }
}
