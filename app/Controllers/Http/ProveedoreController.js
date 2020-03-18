'use strict'

const Provee = use ('App/Models/Modelos/Vendedor');

class ProveedoreController {

    async crear({request, response}) {
        const proveedor = new Provee()
        let obj = request.all()

        proveedor.nombre  = obj.nombre
        proveedor.direccion = obj.direccion
        proveedor.ciudad    = obj.ciudad
        proveedor.compania   = obj.compania
        proveedor.telefono       = obj.telefono


        await proveedor.save()
        return response.send("proveedor creada")
    }

    async  eliminarProveedor( {request,response}) {
        const proveedor = await Provee.find(request.id)

        if(proveedor.delete())
            return response().json(proveedor,202);
        return response().json(null,422);
    }
    async  actualizarProveedor( {request,response}) {
        const proveedor = await Provee.find(request.id);

        proveedor.nombre = nombre
        proveedor.direccion =direccion
        proveedor.ciudad = ciudad
        proveedor.compania =compania
        proveedor.telefono = telefono

        if(proveedor.save())
            return response().json(proveedor,202);
        return response().json(null,422);
    }

    async index({response}){
        const  data = await Producto.all()

        return response.status(200).json(data)
    }

}

module.exports = ProveedoreController
