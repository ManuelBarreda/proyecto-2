# proyecto-2
Proyecto del módulo 2 de Ironhack
<h1>AppCITY</h1>
<hr>
<h2>Authors:</h2> Manuel de la Barreda & Javier Fernández.
<hr>
<h2>Specials thanks to:</h2>
<ul>
  <li> Teacher: Germán Álvarez</li>
  <li> Teacher assistant: Jon Arechalde & Belen Olías</li>
 </ul>
<hr>
<h2>Technologies used:</h2>
<ul>
  <li> HTML5</li>
  <li> CSS3: Sass</li>
  <li> Our own API</li>
  <li> Google Maps API</li>
  <li> Javascript (ES6):</li>
  <ul>
  <li>node</li>
  <li>mongoose</li>
  <li>passport</li>
  <li>flash</li>
  <li>mongo</li>
  <li>express</li>
  <li>axios</li>
  <li>bcryptjs</li>
  <li>hbs</li>
  </ul>
</ul>
<hr>
<h2>Description:</h2> Its the first basic app we do. It's an application to share travel expenses.
<hr>
<h2>Endpoints:</h2>

 | Path        | Method           | JSON response  |
  | ------------- | ------------- | ------------- |
  | `/`  | GET | Inicio  |
  | `/travel/all-travels` | GET | Ver viajes  |
  | `/travel/new-travel` | GET | Formulario para crear viaje |
  | `/travel/new-travel` | POST | Creación del viaje |
  | `/travel/travel-details/:id` | GET | Detalles del viaje |
  | `/travel/travel-details/:id/update` | PUT | Actualización de un viaje publicado |
  | `/travel/travel-details/:id/delete` | DELETE | Eliminar un viaje publicado |
  | `/user/profile/:id` | GET | Vista del perfil y de mis viajes |
  | `/user/profile/:id` | PUT | Editar tu perfil |
  | `/login` | GET | Formulario de acceso  |
  | `/login` | POST | Gestión del formulario de acceso  |
  | `/signup` | GET | Formulario de Registro  |
  | `/signup` | POST | Creación del Usuario  |
  | `/signout` | GET | Cierre de sesión  |
  
