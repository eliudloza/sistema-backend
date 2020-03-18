'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendedoresSchema extends Schema {
  up () {
    this.create('vendedores', (table) => {
      table.increments('id')
      table.string('nombre')
      table.string('direccion')
      table.string('ciudad')
      table.string('compania')
      table.integer('telefono')
      table.timestamps()
    })
  }

  down () {
    this.drop('vendedores')
  }
}

module.exports = VendedoresSchema
