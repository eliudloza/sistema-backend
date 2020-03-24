'use strict'
const Vendedor = use('App/Models/Modelos/Vendedor');

class VendedorController {

  async crear ({ request, response }) {
    const vendedor = new Vendedor()
    let obj = request.all()

    vendedor.nombre = obj.nombre
    vendedor.biografia = obj.biografia
    vendedor.pais = obj.pais
    

    await vendedor.save()
    return response.json(vendedor)
  }

  async delete({params, response}){
    const id = params.id
    const vendedor = await Vendedor.findOrFail(id)

    if(vendedor.delete())
        return response.json({'respuesta': 'Artista eliminada'});
    return response.json(null,422);
}

async update( {params, request, response}) {

    const id = params.id
    const {nombre, biografia, pais} = request.all()
    const vendedor = await Vendedor.findOrFail(id)

    vendedor.nombre = nombre
    vendedor.biografia = biografia
    vendedor.pais= pais

    await vendedor.save()
    return response.json({'respuesta': 'Artista actualizado'});
}

  async index({response}){
    const  data = await Vendedor.all()

    return response.status(200).json(data)
}

}

module.exports = VendedorController
