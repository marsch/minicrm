import Main from './containers/Main'
import CustomersContainer from './containers/Customers'
import AppointmentsContainer from './containers/Appointments'

export default {
  path: '/',
  component: Main,
  indexRoute: { onEnter: (nextState, replace) => replace('/customers') },
  childRoutes: [{
    path: '/customers',
    component: CustomersContainer
  }, {
    path: '/appointments',
    component: AppointmentsContainer
  }]
}
