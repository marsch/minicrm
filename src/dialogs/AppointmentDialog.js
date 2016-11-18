import React from 'react'
import Dialog from 'react-toolbox/lib/dialog'
import DatePicker from 'react-toolbox/lib/date_picker'
import TimePicker from 'react-toolbox/lib/time_picker'

class AppointmentDialog extends React.Component {
  state = {
    id: undefined,
    customer_id: undefined,
    datetime: new Date()
  }

  componentWillMount() {
    if(this.props.appointment) {
      this.setState(this.props.appointment)
    }

    if(this.props.customer) {
      this.setState({
        customer_id: this.props.customer.id
      })
    }
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  }

  onSave = () => {
    this.props.saveAction(this.state)
    this.setState({
      id: undefined,
      customer_id: undefined,
      datetime: new Date()
    })
  }

  getActions() {
    return [
      { label: 'Cancel', onClick: this.props.closeAction },
      { label: (this.state.id) ? 'Save': 'Create', onClick: this.onSave }
    ]
  }

  //BUG: changing time resets the date in UI
  render() {
    return (
      <Dialog
        title={(this.state.id) ? 'Edit Appointment': 'Create Appointment'}
        active={this.props.active}
        actions={this.getActions()}
        onEscKeyDown={this.props.closeAction}
        onOverlayClick={this.props.closeAction}
        >
        <section>
          <p>You are about to {(this.state.id) ? 'edit the': 'create an'} appointment with {this.props.customer.firstname} {this.props.customer.lastname}</p>
          <DatePicker label='Day' sundayFirstDayOfWeek onChange={this.handleChange.bind(this, 'datetime')} value={this.state.datetime} />
          <TimePicker
            label='Starts at'
            onChange={this.handleChange.bind(this, 'datetime')}
            value={this.state.datetime}
          />
        </section>
      </Dialog>
    )
  }
}

export default AppointmentDialog
