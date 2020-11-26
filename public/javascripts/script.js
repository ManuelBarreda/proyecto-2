const travelAPI = new APIHandler()

// ALL TRAVELS
travelAPI
  .getTravelsList()
  .then(res => {

    let allInfo = res.data.reverse()
    let InfoHtml = ""
    allInfo.forEach(elm => {

      let date = elm.date
      let day = date.slice(8, 10)
      let month = date.slice(5, 7)
      let hour = date.slice(11, 16)
      let year = date.slice(0,4)

      InfoHtml +=   
      `<div class=\"travel-info\">
      
      <div class=\"title-alltravels\"><h4>${elm.originCity} - ${elm.destinationCity}</h4></div>
     
      <div class=\"row\ date">

            <div class=\"col-md-10\">

             
              <div>Fecha: ${day} - ${month} - ${year}</div>
          
      </div>

         <div class=\"col-md-2\">

              <div class=\"hour\">Hora ${hour}</div>

        </div>    
       
        </div>    
      
      <div class=\"row\">
      
                <div class=\"col-md-4\">

                  <div class=\"origin\"><p class="origin-travel">Origen:</p><p class="cities-origin">${elm.originCity}</p></div>

                </div>

                <div class=\"col-md-4\">

                  <img class="travel-car" src="../../images/car_icon.png" alt="car">

                </div>

                <div class=\"col-md-4\">

                  <div class=\"destination\"><p class="destination-travel">Destino:</p><p class="cities-destination">${elm.destinationCity}</p></div>

                  <div class=\"places\">${elm.availablePlaces} plazas disponibles</div>

                </div>

              </div>


      
                     <div class=\"price\">Precio: ${elm.price}€</div>

                </div>


                <div class=\"button button-details\">

                <a href=\"/travel/travel-details/${elm._id}\">Detalles del viaje</a>

          </div>` 
    });

    document.querySelector('.travel-container').innerHTML = InfoHtml

  })
  .catch(err => new Error(err))

// PROFILE TRAVELS
travelAPI
  .getTravelbyDriver()
  .then(res => {

    let allInfo = res.data.reverse()
    let InfoHtml = ""
    allInfo.forEach(elm => {
      
      let date = elm.date
      let day = date.slice(8, 10)
      let month = date.slice(5, 7)
      let hour = date.slice(11, 16)
      let year = date.slice(0,4)

      InfoHtml += 
      `<div class=\"travel-info\">
              
      <div class=\"title-alltravels\"><h4>${elm.originCity} - ${elm.destinationCity}</h4></div>
              
            <div class=\"row\">
              
                <div class=\"col-md-4\">
                    <div class=\"origin\"><p class="origin-travel">Origen:</p><p class="cities-origin">${elm.originCity}</p></div>
                </div>
             
                <div class=\"col-md-4\">
                     <img class="travel-car" src="../../images/car_icon.png" alt="car">
                </div>

                <div class=\"col-md-4\">
                     <div class=\"destination\"><p class="destination-travel">Destino:</p><p class="cities-destination">${elm.destinationCity}</p></div>
                     <div class=\"places\">Tienes ${elm.availablePlaces} plaza disponible</div>
                </div>
            </div>

                     <div class=\"row\ date-user">

                    <div class=\"col-md-10\">


                      <div class=\"date\">Fecha: ${day} - ${month} - ${year}</div>
                  
              </div>

                 <div class=\"col-md-2\">

                      <div class=\"hour\">Hora ${hour}</div>

                </div>    
                 </div>    
                 </div>

            <div class=\"row\ travel-user" >

              <div class=\"col-md-4\">

     
                <a href=\"/travel/travel-details/${elm._id}\">Detalles del viaje</a>

              </div>

              <div class=\"col-md-4\">
               
                <a href="/travel/delete/${elm._id}">Eliminar viaje</a>

              </div>

              <div class=\"col-md-4\">

                   
              <a href=\"/travel/edit-travel/${elm._id}\">Editar el viaje</a>
              </div>

            </div>`
    });

    document.querySelector('.my-travel-container').innerHTML = InfoHtml

  })
  .catch(err => new Error(err))

