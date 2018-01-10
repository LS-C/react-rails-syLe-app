import React, { Component } from 'react';
import { Modal, Icon, Header, Button } from 'semantic-ui-react';
import { fetchContent } from '../services/utils';

class RecommendModal extends Component {

  state = {
    content: []
  }

  componentDidMount() {
    fetchContent(this.props.info)
    .then(json => this.setState({ content: json[2][0]}))
  }
 
  componentWillReceiveProps(nextProps){
    fetchContent(nextProps.info)
    .then(json => this.setState({ content: json[2][0]}))
 }



  render() {
    const style = {
    display: 'block',
    width: '100px'
    }
    return(
        <div>
          <Modal trigger={ <Icon name='plus' /> } >
          <Modal.Header>{this.props.info}</Modal.Header>
            <Modal.Content image>
              <Modal.Description style={style}>
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
