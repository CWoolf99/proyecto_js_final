let carrito=[];
let contenedorC=document.querySelector('#carrito');
async function obtenerProductos() {
  const response = await fetch('./json/productos.json')
  return await response.json()
}

obtenerProductos().then(productos=>{

    productos.forEach((info) =>{ 
      const divStore=document.createElement("div")
      divStore.className="tagS"
        const tag=document.createElement("div");
        tag.innerHTML=
        `<div class="product_tag">
            <img src=${info.imagen} alt="producto" width="200px" height="150px">
            <p class="product_tag_text">${info.nombre}<br> id:${info.id}</p>
            <p class="product_tag_text2">$${info.precio}</p>
        </div>`;
        const boton_div=document.createElement("button");
        boton_div.className="botonS"
        boton_div.textContent='Agregar al carrito +'
        boton_div.setAttribute('nombre',info.nombre);
        boton_div.addEventListener('click', anadiralcarrito);
        const contenedor=document.querySelector('#store');
        contenedor.appendChild(divStore)
        divStore.appendChild(tag);
        divStore.appendChild(boton_div)
    })

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
        let nombre1=e.target.getAttribute('nombre')
        let carro= productos.filter((pr)=>pr.nombre.includes(nombre1))
        carrito= carrito.concat(carro)
        console.log(carrito)
        localStorage.setItem('miOrden', JSON.stringify(carrito));
        
    }
  })
    var carritoLS=localStorage.getItem('miOrden');
    carritoLS=JSON.parse(carritoLS)


    const boton_carrito=document.getElementById('cargaC')
    boton_carrito.addEventListener('click', cargarcarrito);
    
    function cargarcarrito(){
    carrito.forEach((prod)=>{
      const label= document.createElement("div")
      label.innerHTML= `<div class="product_tagC">
      <img src=${prod.imagen} alt="producto" width="75px" height="60px">
      <p class="product_tagC_text">${prod.nombre} $${prod.precio} id:${prod.id}</p>
  </div>`
      contenedorC.appendChild(label);
    })
   
  }
  carritoLS.forEach((pro)=>{
    const label_cont=document.createElement("div")
    label_cont.innerHTML=`<div class="product_tagC">
    <img src=${pro.imagen} alt="producto" width="75px" height="60px">
    <p class="product_tagC_text">Agregado Anteriormente</p>
    <p class="product_tagC_text">${pro.nombre} $${pro.precio} id:${pro.id}</p>
</div>`
    contenedorC.appendChild(label_cont);
  })
  const b_fin=document.getElementById("b_fin")
  b_fin.addEventListener('click', comprar)
  function comprar(){
    Swal.fire(
      'Completado',
      'Se realizó el pago',
      'success'
    )
  }