'use strict'

const Provee = use ('App/Models/Modelos/Proveedor');

class ProveedoreController {

    async crear({request, response}) {
        const proveedor = new Provee()
        const {nombre, direccion, ciudad, compania, telefono} = request.all()

        proveedor.nombre  = nombre
        proveedor.direccion = direccion
        proveedor.ciudad    = ciudad
        proveedor.compania   = compania
        proveedor.telefono       = telefono


        await proveedor.save()
        return response.send("proveedor creada")
    }

    async  eliminarProveedor( {request,response}) {
        const proveedor = new Provee.find(request.id)

        if(proveedor.delete())
            return response().json(proveedor,202);
        return response().json(null,422);
    }
    async  actualizarProveedor( {request,response}) {
        const proveedor = new Provee.find(request.id);

        proveedor.nombre = nombre
        proveedor.direccion =direccion
        proveedor.ciudad = ciudad
        proveedor.compania =compania
        proveedor.telefono = telefono

        if(proveedor.save())
            return response().json(proveedor,202);
        return response().json(null,422);
    }

    async index(){
        const data = new Provee.all().toArray();

        return view('proveedores',['data' , data] );
    }

}

module.exports = ProveedoreController
