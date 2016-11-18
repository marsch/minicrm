import React from 'react'
import { connect } from 'react-redux'

import Switch from 'react-toolbox/lib/switch'
import AppointmentDialog from '../dialogs/AppointmentDialog'
import ConfirmDialog from '../dialogs/ConfirmDialog'

import moment from 'moment'

import * as actions from '../store/actions'

import { Table } from 'semantic-ui-react'
import {Button} from 'react-toolbox/lib/button'
import Navigation from 'react-toolbox/lib/navigation'
import Tooltip from 'react-toolbox/lib/tooltip'

const TooltipButton = Tooltip(Button)

const AppointmentRow = ({id, datetime, customer_id, customers, onClickDelete, onClickEdit }) => {
  const clickDelete = () => onClickDelete(id)
  const clickEdit = () => onClickEdit(id)
  const customer = customers.find((customer) => customer.id == customer_id)

  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{moment(datetime).format('DD. MMMM YYYY')}</Table.Cell>
      <Table.Cell>{moment(datetime).format('hh:mm')}</Table.Cell>
      <Table.Cell>{customer.firstname}</Table.Cell>
      <Table.Cell>{customer.lastname}</Table.Cell>
      <Table.Cell>
        <Navigation type='horizontal'>
          <Button label="Delete" icon="delete" onClick={clickDelete} />
          <Button label="Edit" icon="edit" onClick={clickEdit} raised primary/>
        </Navigation>
      </Table.Cell>
    </Table.Row>
  )
}

const EmptyAppointmentsRow = ({createAction}) => {
  return (
    <Table.Row>
      <Table.Cell colSpan='6' textAlign='center' className='empty-fallback-cell'>
        There are no appointments available, just create one from the customer list
        <br />
        <Button icon="add" label='View Customer Data' accent onClick={createAction} />
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
class AppointmentsContainer extends React.Component {
  state = {
    DialogComponent: null,
    filterByNextWeek: false
  }

  handleChange = (field, value) => {
    this.setState({...this.state, [field]: value});
  }

  toggleFilter = () => {
    this.setState({filterByNextWeek: !this.state.filterByNextWeek})
  }

  saveAppointment = (appointment) => {
    if(!appointment.id) {
      appointment.id = this.props.appointments.length + 1
      this.props.addAppointment(appointment)
    } else {
      this.props.updateAppointment(appointment)
    }
    this.closeDialog()
  }

  removeAppointment = (appointment) => {
    this.props.removeAppointment(appointment)
    this.closeDialog()
  }


  closeDialog = () => {
    this.setState({
      DialogComponent: null
    })
  }

  showDelete = (appointment_id) => {
    const appointment = this.props.appointments.find((appointment) => appointment.id == appointment_id)
    const customer = this.props.customers.find((customer) => customer.id == appointment.customer_id)
    this.setState({
      DialogComponent: <ConfirmDialog active={true} closeAction={this.closeDialog} confirmAction={this.removeAppointment} data={appointment} title='Delete Appointment' description={`You are about to delete the appointment with customer ${customer.firstname} ${customer.lastname}`}/>
    })
  }

  showEdit = (appointment_id) => {
    const appointment = this.props.appointments.find((appointment) => appointment.id == appointment_id)
    const customer = this.props.customers.find((customer) => customer.id == appointment.customer_id)

    // just making sure it works after hydration
    if(typeof appointment.datetime == 'string') {
      appointment.datetime = new Date(appointment.datetime)
    }
    this.setState({
      DialogComponent: <AppointmentDialog active={true} closeAction={this.closeDialog} saveAction={this.saveAppointment} customer={customer} appointment={appointment}/>
    })
  }

  applyFilter = (appointment) => {
    if(!this.state.filterByNextWeek) {
      return true
    }
    // NOTE: could use memoizing or instance vars to cache the following
    const startNextWeek = moment().add(1, 'weeks').startOf('isoWeek')
    const endNextWeek = moment().add(1, 'weeks').endOf('isoWeek')

    if(moment(appointment.datetime).isBetween(startNextWeek, endNextWeek)) {
      return true
    }
    return false
  }

  goCustomers = () => {
    this.props.router.push({pathname: '/customers'})
  }

  renderAppointments = () => {
    if(this.props.appointments.length) {
      return this.props.appointments.filter(this.applyFilter).map((appointment) => {
        return <AppointmentRow key={`appointment-${appointment.id}`} {...appointment}  customers={this.props.customers} onClickAddAppointment={this.showAddAppointment} onClickEdit={this.showEdit}  onClickDelete={this.showDelete} />
      })
    } else {
      return <EmptyAppointmentsRow createAction={this.goCustomers}/>
    }
  }

  render() {
    const DialogComponent = this.state.DialogComponent || null
    return (
      <div className="page-content">
        {DialogComponent}
        <TooltipButton tooltipPosition='left' tooltip='Show next week' icon={(this.state.filterByNextWeek) ? 'date_range': 'filter_list'} floating className='page-main-fab' ripple accent onClick={this.toggleFilter} />
        <Navigation type='horizontal'>
          <h3 className='page-title'>Appointment List</h3>
        </Navigation>
        <Table compact celled fixed singleLine size='small' striped selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={5}>ID</Table.HeaderCell>
              <Table.HeaderCell width={10}>Date</Table.HeaderCell>
              <Table.HeaderCell width={5}>Time</Table.HeaderCell>
              <Table.HeaderCell width={15}>Firstname</Table.HeaderCell>
              <Table.HeaderCell width={15}>Lastname</Table.HeaderCell>
              <Table.HeaderCell width={15}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.renderAppointments()
            }
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='5'>
                <Switch
                  checked={this.state.filterByNextWeek}
                  label="Filter next week"
                  onChange={this.handleChange.bind(this, 'filterByNextWeek')}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

export default AppointmentsContainer
