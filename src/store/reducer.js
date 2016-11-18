import { createReducer } from 'redux-act'
import * as actions from './actions'

window.actions = actions

const defaultState = {
  customers: [
    {id: 43, firstname: 'Jim', lastname: 'Beam',  birthdate: new Date(1980, 3, 11)},
    {id: 42, firstname: 'Johnny', lastname: 'Daniels',  birthdate: new Date(1950, 3, 11)}
  ],
  appointments: []
}

export const customerReducer = createReducer({
  [actions.addCustomer]: (state, payload) => {
    return [
      ...state,
      payload
    ]
  },
  [actions.removeCustomer]: (state, payload) => {
    return state.filter((customer) => customer.id != payload.id)
  },
  [actions.updateCustomer]: (state, payload) => {
    return state.map((customer) => {
      if(customer.id == payload.id) {
        return payload
      }
      return customer
    })
  },
  [actions.deleteAllCustomers]: () => {
    return []
  }
}, [])

export const appointmentsReducer = createReducer({
  [actions.addAppointment]: (state, payload) => {
    return [...state, payload]
  },
  [actions.removeAppointment]: (state, payload) => {
    return state.filter((appointment) => appointment.id != payload.id)
  },
  [actions.updateAppointment]: (state, payload) => {
    return state.map((appointment) => {
      if(appointment.id == payload.id) {
        return payload
      }
      return appointment
    })
  },
  [actions.deleteAllAppointments]: () => {
    return []
  }
}, [])


export default function mainReducer(state = defaultState, action) {
  return {
    customers: customerReducer(state.customers, action),
    appointments: appointmentsReducer(state.appointments, action)
  }
}
