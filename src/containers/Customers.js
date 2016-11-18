import React from 'react'
import { connect } from 'react-redux'

import AppointmentDialog from '../dialogs/AppointmentDialog'
import CustomerDialog from '../dialogs/CustomerDialog'
import ConfirmDialog from '../dialogs/ConfirmDialog'

import * as actions from '../store/actions'

import { Table } from 'semantic-ui-react'

import {Button} from 'react-toolbox/lib/button'
import Navigation from 'react-toolbox/lib/navigation'
import Tooltip from 'react-toolbox/lib/tooltip'

const TooltipButton = Tooltip(Button)

import moment from 'moment'

const CustomerRow = ({id, firstname, lastname, birthdate, onClickAddAppointment, onClickEdit, onClickDelete }) => {
  const clickAdd = () => onClickAddAppointment(id)
  const clickDelete = () => onClickDelete(id)
  const clickEdit = () => onClickEdit(id)

  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{firstname}</Table.Cell>
      <Table.Cell>{lastname}</Table.Cell>
      <Table.Cell>{moment(birthdate).format('DD. MMMM YYYY')}</Table.Cell>
      <Table.Cell>
        <Navigation type='horizontal'>
          <Button label="Delete" icon="delete" onClick={clickDelete} />
          <Button label="Edit" icon="edit" onClick={clickEdit} raised />
          <Button label="Add" icon="perm_contact_calendar" onClick={clickAdd} raised primary/>
        </Navigation>
      </Table.Cell>
    </Table.Row>
  )
}

const EmptyCustomerRow = ({createAction}) => {
  return (
    <Table.Row>
      <Table.Cell colSpan='5' textAlign='center' className='empty-fallback-cell'>
        No Entries yet, just create one
        <br />
        <Button icon="add" label='Add Customer' accent onClick={createAction} />
      </Table.Cell>
    </Table.Row>
  )
}

@connect((state) => {
  return {
    customers: state.customers,
    appointments: state.appointments
  }
}, actions)
class CustomersContainer extends React.Component {

  state = {
    DialogComponent: null
  }

  saveCustomer = (customer) => {
    if(!customer.id) {
      customer.id = this.props.customers.length + 1
      this.props.addCustomer(customer)
    } else {
      this.props.updateCustomer(customer)
    }
    this.closeDialog()
  }

  saveAppointment = (appointment) => {
    if(!appointment.id) {
      appointment.id = this.props.appointments.length + 1
      this.props.addAppointment(appointment)
      return this.goAppointments()
    } else {
      this.props.updateAppointment(appointment)
    }
    this.closeDialog()
  }

  goAppointments = () => {
    this.props.router.push({ pathname: '/appointments' })
  }

  removeCustomer = (customer) => {
    // first delete all connected appointments
    const appointmentsToRemove = this.props.appointments.filter((appointment) => appointment.customer_id == customer.id)
    appointmentsToRemove.forEach((appointment) => {
      this.props.removeAppointment(appointment)
    })
    this.props.removeCustomer(customer)
    this.closeDialog()
  }


  closeDialog = () => {
    this.setState({
      DialogComponent: null
    })
  }

  showAddAppointment = (customer_id) => {
    const customer = this.props.customers.find((customer) => customer.id == customer_id)
    this.setState({
      DialogComponent: <AppointmentDialog active={true} closeAction={this.closeDialog} saveAction={this.saveAppointment} customer={customer}/>
    })
  }

  showDelete = (customer_id) => {
    const customer = this.props.customers.find((customer) => customer.id == customer_id)
    this.setState({
      DialogComponent: <ConfirmDialog active={true} closeAction={this.closeDialog} confirmAction={this.removeCustomer} data={customer} title='Delete Customer' description={`You are about to delete the customer ${customer.firstname} ${customer.lastname}`}/>
    })
  }

  showEdit = (customer_id) => {
    const customer = this.props.customers.find((customer) => customer.id == customer_id)
    this.setState({
      DialogComponent: <CustomerDialog active={true} closeAction={this.closeDialog} saveAction={this.saveCustomer} customer={customer}/>
    })
  }

  showCreate = () => {
    this.setState({
      DialogComponent: <CustomerDialog active={true} closeAction={this.closeDialog} saveAction={this.saveCustomer} />
    })
  }

  renderCustomers = () => {
    if(this.props.customers.length) {
      return this.props.customers.map((customer) => {
        return <CustomerRow key={`customer-${customer.id}`} {...customer}  onClickAddAppointment={this.showAddAppointment} onClickEdit={this.showEdit}  onClickDelete={this.showDelete} />
      })
    } else {
      return <EmptyCustomerRow createAction={this.showCreate}/>
    }
  }

  render() {
    const DialogComponent = this.state.DialogComponent || null
    return (
      <div className="page-content">
        {DialogComponent}
        <TooltipButton tooltipPosition='left' tooltip='Add Customer' icon="add" floating className='page-main-fab' ripple accent onClick={this.showCreate} />
        <Navigation type='horizontal'>
          <h3 className='page-title'>Customer List</h3>
        </Navigation>
        <Table compact celled fixed singleLine size='small' striped selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={5}>ID</Table.HeaderCell>
              <Table.HeaderCell width={15}>Firstname</Table.HeaderCell>
              <Table.HeaderCell width={15}>Lastname</Table.HeaderCell>
              <Table.HeaderCell width={10}>Day of Birth</Table.HeaderCell>
              <Table.HeaderCell width={15}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderCustomers()}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Button icon="add" label='Add Customer' accent onClick={this.showCreate} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

export default CustomersContainer
