import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos.datos)
}

export function obtenerProductoPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es un numero
    //Filtramos


    const productosFiltrados = productos.datos.filter((producto)=>{
    return id_producto === Number(producto.id) // verdadero o falso
    })




    //Logica verificar si hay productos
    if(productosFiltrados.length > 0){
        res.json(productosFiltrados)
    }else{
        const respuesta = {
            mensaje:'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }

    res.json(productos)
}

export function altaProducto(req, res) {
    
     const nuevoProducto = req.body
     const proximoId = Number(productos.ultimo_id) + 1


     //Agregar propiedad id
     nuevoProducto.id = proximoId
     //Actualizar la referencia
     productos.ultimo_id = proximoId


     productos.datos.push(nuevoProducto)

     const respuesta = {
            mensaje:'Producto dado de alta'
        }
        res.json(respuesta)
    }


export function modificarProducto(req,res){

       const id_producto = Number(req.params.id)
       const productoaModificar = req.body


       productos.datos.forEach((producto, indice)=>{
             //obteniendo el indice con indexOff()
             // const indice = productos.datos.indexOf(producto)
             //
             if(id_producto === Number(producto.id)){
                productoaModificar.id = id_producto
                productos.datos[indice] = productoaModificar
             }
       })

       const respuesta = {
            mensaje:'Producto modificado con id' + id_producto
       }
        res.json(respuesta)


}
export function eliminarProductoPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es un numero
    //Filtramos

    const productosFiltrados = productos.filter((producto)=>{
    return id_producto !== Number(producto.id) // verdadero o falso
    })
    

    productos.datos.length = 0
    productos.datos.push(...productosFiltrados)

    const respuesta = {
            mensaje:'Producto eliminado'
        }
        
    res.json(respuesta)


}


