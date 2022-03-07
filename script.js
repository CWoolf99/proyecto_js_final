let carrito=[];
const productos=[{id:1, nombre:"Macbook Pro", precio:20000, imagen:"assets/producto_mac.jpg"},
    {id:2, nombre:"Macbook Pro2", precio:20000, imagen:"assets/producto_mac.jpg"},
    {id:3, nombre:"Macbook Pro3", precio:20000, imagen:"assets/producto_mac.jpg"},
    {id:4, nombre:"Macbook Pro4", precio:20000, imagen:"assets/producto_mac.jpg"}];

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
    })

    function anadiralcarrito(e) {
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

