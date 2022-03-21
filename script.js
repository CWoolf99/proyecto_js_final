let carrito=[];
async function obtenerProductos() {
  const response = await fetch('./json/productos.json')
  return await response.json()
}

obtenerProductos().then(productos=>{

    productos.forEach((info) =>{ 
        const tag=document.createElement("div");
        tag.innerHTML=
        `<div class="product_tag">
            <img src=${info.imagen} alt="producto" width="200px" length="200px">
            <p class="product_tag_text">${info.nombre}<br> id:${info.id}</p>
            <p class="product_tag_text2">${info.precio}</p>
        </div>`;
        const boton_div=document.createElement("button");
        boton_div.textContent='Agregar al carrito +'
        boton_div.setAttribute('nombre',info.nombre, info.precio, info.id );
        boton_div.addEventListener('click', anadiralcarrito);
        const contenedor=document.querySelector('#store');
        contenedor.appendChild(tag);
        contenedor.appendChild(boton_div)
    })})

    function anadiralcarrito(e) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Se agregó al carrito'
          })
        const contenedorC=document.querySelector('#carrito');
        contenedorC.innerHTML=``;
        let nombre=e.target.getAttribute('nombre')
        carrito.push(nombre)
        console.log(carrito);
        localStorage.setItem('miOrden', JSON.stringify(carrito));
        const tagC=document.createElement("div");
        tagC.innerHTML=
        `<p class="product_tag_text">${carrito}<br>Agregado anteriormente:${carritoLS}</p>`;
        contenedorC.appendChild(tagC);
    }
    var carritoLS=localStorage.getItem('miOrden');
    carritoLS=JSON.parse(carritoLS)
