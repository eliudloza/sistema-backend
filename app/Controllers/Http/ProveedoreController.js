'use strict'

const Provee = use ('App/Models/Modelos/Vendedor');

class ProveedoreController {

    async crear({request, response}) {
        let proveedor = new Provee()
        let obj = request.all()

        proveedor.nombre = obj.nombre
        proveedor.direccion = obj.direccion
<<<<<<< HEAD
        proveedor.ciudad = obj.ciudad
        proveedor.compania = obj.compania
        proveedor.telefono = obj.telefono
=======
        proveedor.ciudad    = obj.ciudad
        proveedor.compania   = obj.compania
        proveedor.telefono    = obj.telefono
>>>>>>> d729481eed11f8fffec3287cfcf62ca387f1d5eb

        try {
            let data = await proveedor.save()
            if(data) {
<<<<<<< HEAD
                return response.status(201).send({message: "Proveedor creado con exito"})
=======
              return response.status(201).send({message: "Proveedor creado con exito"})
>>>>>>> d729481eed11f8fffec3287cfcf62ca387f1d5eb
            }
        } catch(error) {
            return response.status(401)
        }
<<<<<<< HEAD

=======
>>>>>>> d729481eed11f8fffec3287cfcf62ca387f1d5eb
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
        const  data = await Provee.all()

        return response.status(200).json(data)
    }

}

module.exports = ProveedoreController
