import React, { Component } from 'react';
import { Modal, Header } from 'semantic-ui-react';
import { fetchContent } from '../services/utils';
import '../containers/Recommends.css'

class RecommendModal extends Component {
  constructor() {
    super()

    this.state = {
      content: []
    }
  }


  componentDidMount() {
    fetchContent(this.props.info)
    .then(json => this.setState({ content: json[2]}))
  }

  componentWillReceiveProps(nextProps){
    fetchContent(nextProps.info)
    .then(json => this.setState({ content: json[2]}))
 }


  render() {
    return(
        <div>
          <Modal trigger={ <button className="button">MORE INFO</button> } >
          <Modal.Header>{this.props.info}</Modal.Header>
            <Modal.Content image>
              <Modal.Description className="recommend-modal">
                <Header></Header>
                <p>{this.state.content}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
      </div>
    )
  }
}

export default RecommendModal

RecommendModal.defaultProps = {
  info: []
}
