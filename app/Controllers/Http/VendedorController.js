'use strict'
const Vendedor = use('App/Models/Modelos/Vendedor');

class VendedorController {

  async crear ({ request, response }) {
    const vendedor = new Vendedor()
    let obj = request.all()

    vendedor.nombre = obj.nombre
    vendedor.direccion = obj.direccion
    vendedor.ciudad = obj.ciudad
    vendedor.compania = obj.compania
    vendedor.telefono = obj.telefono

    await vendedor.save()
    return response.json(vendedor)
  }

  async index({response}){
    const  data = await Vendedor.all()

    return response.status(200).json(data)
}

}

module.exports = VendedorController
