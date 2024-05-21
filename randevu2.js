function openTab(tabName) {
    var i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
    function initMap() {
        var hospital = {lat: -34.397, lng: 150.644};  // Change these coordinates to your desired location
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: hospital
        });
        var marker = new google.maps.Marker({
            position: hospital,
            map: map
        });
    }
    let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

}
