import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import data from './data';

class PersonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      showModal: false,
      done: false,
    }
    this.advance = this.advance.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  advance() {
    this.setState({showModal: true});
    let nextStep = this.state.step + 1;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.hideModal();
      }, 1000);
      setTimeout(() => {
        resolve('done');
      }, 1300);
    }).then(() => {
      if (this.state.step == data.length - 1) {
        this.setState({done: true});
      } else {
        this.setState({step: nextStep});
      }
    });
  }

  hideModal() {
      this.setState({showModal: false});
      setTimeout(() => { return true }, 1000);
      return true;
  }

  render() {
    let cardStyle = {
      margin: '40px auto 0px',
      width: '310px',
      height: '550px',
    }
    let imageStyle = {
      maxWidth: '250px',
      maxHeight: '400px',
      margin: '10px auto 10px',
      width: '300px',
      height: '500px',
    }
    return (
      <div>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={data[this.state.step].img} style={imageStyle}/>
          <Card.Body>
            <Card.Title>{data[this.state.step].name + ', ' + data[this.state.step].age}</Card.Title>
            <Button
              style={{float: 'left'}}
              variant="light"
              onClick={this.advance}>
              <FontAwesomeIcon size="2x" style={{color: 'green'}} icon={faHeart}/>
            </Button>
            <Button
              style={{float: 'right'}}
              variant="light"
              onClick={this.advance}>
              <FontAwesomeIcon size="2x" style={{color: 'green'}} icon={faHeart}/>
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.showModal} onClick={this.hideModal} centered>
          <Modal.Header>
            <Modal.Title>It's a match!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{data[this.state.step].name + ' likes you!'}</Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default PersonCard;
