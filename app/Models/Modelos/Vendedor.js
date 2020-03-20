'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vendedor extends Model {

    static get table () { return 'vendedor' }
}

module.exports = Vendedor
