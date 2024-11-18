const urlApi = 'https://jsonplaceholder.typicode.com/users';
const listaUsuarios = document.getElementById('listaUsuarios');

const fetchUsers = () => {
  fetch(urlApi)
    .then((api) => {
      if (!api.ok) {
        throw new Error('La solicitud no es válida');
      }
      return api.json();
    })
    .then((data) => {
      console.log(data);

      let imageCounter = 1;

      data.forEach(({ name, address, phone, email, username, company }) => {
    
        let edad = Math.floor(Math.random() * (35 - 25 + 1)) + 25;

        // HTML
        let listado = document.createElement('li');
        listado.className = 'listado';
        let divPersona = document.createElement('div');
        divPersona.className = 'divPersona';
        let listaTexto = document.createElement('ul');
        listaTexto.className = 'listaTexto';
        let listaCompania = document.createElement('ul');
        listaCompania.className = 'listaCompania';

        // Agrega Imagen
        let image = document.createElement('img');
        image.className = 'imagenUsuario';
        image.src = `./assets/img/${imageCounter}.jpeg`;
        image.alt = `User ${name}`;
        imageCounter++;

        // Detalles persona
        listaTexto.innerHTML = `
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          <li><strong>Edad:</strong> ${edad}</li>
          <li><strong>Correo E.:</strong> ${email}</li>
          <li><strong>Usuario:</strong> ${username}</li>
        `;

        // Compania
        listaCompania.innerHTML = `
          <li><strong>Dirección:</strong> ${address.street} ${address.suite}, ${address.city}</li>
          <li><strong>Compañía:</strong> ${company.name}</li>
        `;

        // Append 
        divPersona.appendChild(listaTexto);
        divPersona.appendChild(image);

      
        listado.appendChild(divPersona);
        listado.appendChild(listaCompania);

        listaUsuarios.appendChild(listado);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

console.log(fetchUsers());