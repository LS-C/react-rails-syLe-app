import React from 'react';
import { Modal, Header } from 'semantic-ui-react';
import '../App.css';


const ArticleModal = (props) =>
  <div>
    <Modal trigger={ <button className="button-1">NEWS</button> } closeIcon>
      <Modal.Header>
        {props.article.title}
      </Modal.Header>
        <Modal.Content image>
          <Modal.Description className="recommend-modal">
            <Header></Header>
            <p>{props.article.description}</p>
          </Modal.Description>
        </Modal.Content>
    </Modal>
  </div>

export default ArticleModal
