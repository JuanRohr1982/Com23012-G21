function iniciarMap(){
    var coord = {lat:-34.54919449715547 ,lng: -58.467711447307714};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
    
}