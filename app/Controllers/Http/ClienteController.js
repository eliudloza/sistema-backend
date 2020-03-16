'use strict'
const Cliente = use ('App/Models/Modelos/Cliente');
class ClienteController {

    async crearCliente({request, response}){
      let cliente = new Cliente()
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

    async eliminarCliente({request}){
        const cliente = new Cliente().find(request.id)

        if(cliente.delete())
        return response.json(cliente, 200)

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

    async index(){
        const data = new Cliente.all().toArray();

        return view('clientes',['data' , data] );
    }
}

module.exports = ClienteController
