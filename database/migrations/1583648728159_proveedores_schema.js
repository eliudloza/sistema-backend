'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedoresSchema extends Schema {
  up () {
    this.create('proveedores', (table) => {
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
    this.drop('proveedores')
  }
}

module.exports = ProveedoresSchema
