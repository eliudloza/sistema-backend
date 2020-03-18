'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Orden extends Model {

    static get table () { return 'ordenes' }
    
}

module.exports = Orden
