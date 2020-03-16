'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments('id')
      table.string('nombre')
      table.string('ap_paterno')
      table.string('ap_materno')
      table.string('direccion')
      table.string('ciudad')
      table.integer('tel')
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClientesSchema
