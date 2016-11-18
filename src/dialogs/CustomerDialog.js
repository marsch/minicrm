import React from 'react'

import Dialog from 'react-toolbox/lib/dialog'
import Input from 'react-toolbox/lib/input'
import DatePicker from 'react-toolbox/lib/date_picker'

class CustomerDialog extends React.Component {
  state = {
    id: undefined,
    firstname: '',
    lastname: '',
    birthdate: undefined
  }

  componentWillMount() {
    if(this.props.customer) {
      this.setState(this.props.customer)
    }
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  }

  onSave = () => {
    this.props.saveAction(this.state)
    this.setState({
      id: undefined,
      firstname: '',
      lastname: '',
      birthdate: undefined
    })
  }

  getActions() {
    return [
      { label: 'Cancel', onClick: this.props.closeAction },
      { label: (this.state.id) ? 'Save': 'Create', onClick: this.onSave }
    ]
  }

  render() {
    return (
      <Dialog
        title={(this.state.id) ? 'Edit Customer': 'Create Customer'}
        active={this.props.active}
        actions={this.getActions()}
        onEscKeyDown={this.props.closeAction}
        onOverlayClick={this.props.closeAction}
        >
        <section>
          <Input type='text' label='Firstname' name='name' value={this.state.firstname} onChange={this.handleChange.bind(this, 'firstname')} maxLength={16 } />
          <Input type='text' label='Lastname' value={this.state.lastname} onChange={this.handleChange.bind(this, 'lastname')} />
          <DatePicker label='Birthdate' sundayFirstDayOfWeek onChange={this.handleChange.bind(this, 'birthdate')} value={this.state.birthdate} />
        </section>
      </Dialog>
    )
  }
}

export default CustomerDialog
