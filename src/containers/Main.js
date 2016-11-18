import React from 'react'
import { Layout, Panel, Tabs, Tab } from 'react-toolbox'
import AppBar from 'react-toolbox/lib/app_bar'

import {IconMenu, MenuItem } from 'react-toolbox/lib/menu';

import Navigation from 'react-toolbox/lib/navigation'

import { connect } from 'react-redux'
import * as actions from '../store/actions'
import Faker from 'faker'
import moment from 'moment'

import PouchDB from 'pouchdb'

@connect((state) => {
  return {
    customers: state.customers,
    appointments: state.appointments
  }
}, actions)
class Main extends React.Component {

  state = {
    index: 0,
    availableRoutes: [
      { label: 'Customers', path: '/customers'},
      { label: 'Appointments', path: '/appointments'}
    ]
  }

  componentWillMount() {
    const activeIndex = this.state.availableRoutes.findIndex((route) => route.path == this.props.location.pathname)
    this.setState({
      index: activeIndex
    })
  }

  handleTabChange = (index) => {
    this.props.router.push({
      pathname: this.state.availableRoutes[index].path
    })

    this.setState({index})
  }

  onClickAddFakeData = () => {
    const batchSize = 10
    const startDate = moment().add(3, 'days').toDate()
    const endDate = moment().add(23, 'days').toDate()

    for(let i=0; i<= batchSize; i++ ) {
      const fakeCustomer = {
        id: Faker.random.number() + i,
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        birthdate: Faker.date.past(30, new Date())
      }

      const fakeAppointment = {
        id: Faker.random.number() + i,
        customer_id: fakeCustomer.id,
        datetime: Faker.date.between(startDate, endDate)
      }
      this.props.addCustomer(fakeCustomer)
      this.props.addAppointment(fakeAppointment)
    }
  }

  onClickResetDatabase = () => {
    this.props.deleteAllAppointments()
    this.props.deleteAllCustomers()
  }

  render() {
    return (
      <div>
      <AppBar  className='app-bar'>
        <Navigation type='horizontal'>
          <IconMenu icon='menu' className="app-bar-button">
            <MenuItem value='fill' icon='airplay' caption='Add Testdata' onClick={this.onClickAddFakeData}/>
            <MenuItem value='empty' icon='delete' caption='Empty Database' onClick={this.onClickResetDatabase}/>
          </IconMenu>
        <a href="/customers">mini-crm</a>
        </Navigation>
      </AppBar>
      <Layout>
        <Panel>
          <Tabs index={this.state.index} onChange={this.handleTabChange} inverse className='page-tabs'>
            {
              this.state.availableRoutes.map((route, index) => {
                const active = (this.props.location.pathname == route.path)
                return <Tab active={active} label={route.label} key={`route-${index}`} className="page-tab"/>
              })
            }

          </Tabs>
          {this.props.children}
        </Panel>
      </Layout>
      </div>
    )
  }
}



export default Main
