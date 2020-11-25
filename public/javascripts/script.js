const travelAPI = new APIHandler()


document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


// ALL TRAVELS
travelAPI

  .getTravelsList()
  .then(res => {

    let allInfo = res.data.reverse()
    let InfoHtml = ""
    allInfo.forEach(elm => {
      InfoHtml += `<div class=\"travel-info\">
              <div class=\"title-alltravels\"><h4>${elm.originCity} - ${elm.destinationCity}</h4></div>
              <div class=\"row\">
              <div class=\"col-md-4\">
              <div class=\"origin\"><p class="origin-travel">Origen:</p><p class="cities-origin">${elm.originCity}</p></div>
              </div>
              <div class=\"col-md-4\">
              <img class="travel-car" src="./images/car_icon.png" alt="car">
              </div>
              <div class=\"col-md-4\">
              <div class=\"destination\"><p class="destination-travel">Destino:</p><p class="cities-destination">${elm.destinationCity}</p></div>
              <div class=\"places\">${elm.availablePlaces} plazas disponibles</div>
              </div>
              </div>
              <div class=\"row\">
              <div class=\"date\">Fecha y hora: ${elm.date}
              </div>
              <div class=\"price\">Precio: ${elm.price}€</div>
              </div>
              </div>
              <div class=\"button button-details\">
              <a href=\"/travel-details/${elm._id}\">Detalles del viaje</a>
              </div>
              </div>
              </div>`
      
    });
    document.querySelector('.travel-container').innerHTML = InfoHtml
  })
  .catch(err => console.log('HUBO UN ERROR!', err))