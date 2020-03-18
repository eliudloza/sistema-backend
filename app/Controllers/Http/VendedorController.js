'use strict'
const Vendedor = use('App/Models/Modelos/Vendedor');
const { validate } = use('Validator');
class VendedorController {

  async crear ({ request, response }) {
    const validation = await validate(request.all(), {
      nombre: 'string',
      direccion: 'string',
      ciudad: 'string',
      compania: 'string',
      telefono: 'integer'
    });

    if(validation.fails()){
      return response.json('back')
    }
    const nombre = request.input('nombre')
    const direccion = request.input('direccion')
    const ciudad = request.input('ciudad')
    const compania = request.input('compania')
    const telefono = request.input('telefono')

    const vendedor = new Vendedor()
    vendedor.nombre = nombre
    vendedor.direccion = direccion
    vendedor.ciudad = ciudad
    vendedor.compania = compania
    vendedor.telefono = telefono

    await vendedor.save()
    return response.json(vendedor)
  }

}

module.exports = VendedorController
