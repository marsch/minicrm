import {expect} from 'chai'

import mainReducer from './reducer'
import * as actions from './actions'

describe('Reducer', () => {
  let initState = null
  beforeEach(() => {
    initState = {
      customers: [
        {id: 38, firstname: 'Nicolo', lastname: 'Machiavelli', brithdate: new Date(1469, 5, 3)}
      ],
      appointments: [
        {id: 1, customer_id: 38, datetime: new Date()}
      ]
    }
  })
  describe('addCustomer', () => {
    it('should add an customer to state.customers array', () => {
      const addAction = actions.addCustomer({id: 1, firstname: 'Enzio', lastname: 'Auditore', birthdate: new Date(1474, 3, 11)})
      const result = mainReducer(initState, addAction)

      expect(result.customers[1]).to.not.be.undefined
      expect(result.customers[1].firstname).to.equal('Enzio')
    })
  })
  describe('removeCustomer', () => {
    it('should remove a givin customer from state', () => {
      const removeAction = actions.removeCustomer({id: 38})
      const result = mainReducer(initState, removeAction)

      expect(result.customers[0]).to.be.undefined
    })
  })
  describe('updateCustomer', () => {
    it('should update the customer with the givin payload data', () => {
      const updateAction = actions.updateCustomer({id: 38, firstname: 'Cesare', lastname: 'Borgia', birthdate: new Date(1475, 9, 13)})
      const result = mainReducer(initState, updateAction)

      expect(result.customers[0]).to.not.be.undefined
      expect(result.customers[0].firstname).to.equal('Cesare')
    })
  })

  describe('addAppointment', () => {
    it('should add an appointment with existing customer', () => {
      const addAction = actions.addAppointment({id: 2, customer_id: 38, datetime: new Date()})
      const result = mainReducer(initState, addAction)

      expect(result.appointments[1]).to.not.be.undefined
      expect(result.appointments[1].customer_id).to.be.equal(38)
    })
  })

  describe('removeAppointment', () => {
    it('should remove the givin appointment', () => {
      const action = actions.removeAppointment({id: 1})
      const result = mainReducer(initState, action)
      expect(result.appointments[0]).to.be.undefined
    })
  })

  describe('updateAppointment', () => {
    it('should update the givin appointment', () => {
      const action = actions.updateAppointment({id: 1, customer_id: 1, starts_at: new Date()})
      const result = mainReducer(initState, action)
      expect(result.appointments[0]).to.not.be.undefined
      expect(result.appointments[0].customer_id).to.equal(1)
    })
  })
})
