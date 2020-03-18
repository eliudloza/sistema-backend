'use strict'
const Cliente = use ('App/Models/Modelos/Cliente');
class ClienteController {

    async crearCliente({request, response}){
      const cliente = new Cliente()
      let obj = request.all()

      cliente.nombre = obj.nombre
      cliente.ap_paterno = obj.ap_paterno
      cliente.ap_materno = obj.ap_materno
      cliente.direccion = obj.direccion
      cliente.ciudad = obj.ciudad
      cliente.tel = obj.tel

      try {
        let data = await cliente.save()
        if(data) {
          return response.status(201).send({message: "Cliente creado con exito"})
        }
      } catch(error) {
        return response.status(401)
      }

    }

    async eliminarCliente({params, response}){
        const cliente = await Cliente.find(params.id)

        if(!cliente){ 
          return response.status(404).json( {data : 'Datos no encontrados'})
        }
        await cliente.delete()
        return response.status(204).json()

    }

    async actualizarCliente({response,request}){
        const cliente = new Cliente.find(request.id)
        const {nombre, ap_paterno, ap_materno,direccion, ciudad, telefono} = request.all()

        cliente.nombre = nombre
        cliente.ap_paterno = ap_paterno
        cliente.ap_materno = ap_materno
        cliente.direccion = direccion
        cliente.ciudad = ciudad
        cliente.telefono = telefono

        await cliente.save()
        return response.json(cliente, 200)

    }

    async index({response}){
      const  data = await Cliente.all()

      return response.status(200).json(data)
    }
}

module.exports = ClienteController
