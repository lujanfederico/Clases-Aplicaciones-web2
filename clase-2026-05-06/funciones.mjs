import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProductoPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es un numero
    //Filtramos


    const productosFiltrados = productos.filter((producto)=>{
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
     productos.push(nuevoProducto)

     const respuesta = {
            mensaje:'Producto dado de alta'
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
    

    productos.length = 0
    productos.push(...productosFiltrados)

    const respuesta = {
            mensaje:'Producto eliminado'
        }
        
    res.json(respuesta)



}