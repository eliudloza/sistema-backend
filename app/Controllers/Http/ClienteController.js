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

    async delete({params, response}){
      const id = params.id
      const cliente = await Cliente.findOrFail(id)

      if(cliente.delete())
          return response.json({'respuesta': 'Cliente eliminada'});
      return response.json(null,422);
  }

  async update( {params, request, response}) {

      const id = params.id
      const {nombre, ap_paterno, ap_materno, direccion, ciudad, tel} = request.all()
      const cliente = await Cliente.findOrFail(id)

      cliente.nombre = nombre
      cliente.ap_paterno = ap_paterno
      cliente.ap_materno = ap_materno
      cliente.direccion = direccion 
      cliente.ciudad = ciudad
      cliente.tel = tel

      await cliente.save()
      return response.json({'respuesta': 'Cliente actualizada'});
  }

    async index({response}){
      const  data = await Cliente.all()

      return response.status(200).json(data)
    }
}

module.exports = ClienteController
