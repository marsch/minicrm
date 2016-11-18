import React from 'react'
import Dialog from 'react-toolbox/lib/dialog'

class ConfirmDialog extends React.Component {

  onSave = () => {
    this.props.confirmAction(this.props.data)
  }

  getActions() {
    return [
      { label: 'Cancel', onClick: this.props.closeAction },
      { label: 'Confirm', onClick: this.onSave }
    ]
  }

  render() {
    return (
      <Dialog
        title={this.props.title}
        active={this.props.active}
        actions={this.getActions()}
        onEscKeyDown={this.props.closeAction}
        onOverlayClick={this.props.closeAction}
        >
        <section>
          <p>{this.props.description}</p>
        </section>
      </Dialog>
    )
  }
}

export default ConfirmDialog
