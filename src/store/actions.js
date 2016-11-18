import { createAction } from 'redux-act'


export const addCustomer = createAction('ADD_CUSTOMER')
export const removeCustomer = createAction('REMOVE_CUSTOMER')
export const updateCustomer = createAction('UPDATE_CUSTOMER')

export const addAppointment = createAction('ADD_APPOINTMENT')
export const removeAppointment = createAction('REMOVE_APPOINTMENT')
export const updateAppointment = createAction('UPDATE_APPOINTMENT')

export const deleteAllCustomers = createAction('DELETE_ALL_CUSTOMERS')
export const deleteAllAppointments = createAction('DELETE_ALL_APPOINTMENTS')
