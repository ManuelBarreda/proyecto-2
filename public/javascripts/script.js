const travelAPI = new APIHandler(`http://localhost:3000/api/travels`)


document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



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
              <img class="travel-car" src="./images/icon_car.jpg" alt="car">
              </div>
              <div class=\"col-md-4\">
              <div class=\"destination\"><p class="destination-travel">Destino:</p><p class="cities-destination">${elm.destinationCity}</p></div>
              </div>
              <div class=\"date\">Fecha y hora: ${elm.date}</div>
              </div>
              <div class=\"button button-details\">
              <a href=\"/travel-details/${elm._id}\">Detalles del viaje</a>
              </div>
              </div>`
    });
    document.querySelector('.travel-container').innerHTML = InfoHtml // El enlace debería llevar a /travel-details:id
  })


  .catch(err => console.log('HUBO UN ERROR!', err))

