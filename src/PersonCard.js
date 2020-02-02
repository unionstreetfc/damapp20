import React from 'react';
import { Button, Card, Jumbotron, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import data from './data';

import badgers from './badgers.jpg';
import zero from './zero.png';

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

    let contents =  this.state.done ?
      (
        <Jumbotron style={{marginTop: '50px'}}>
          <span>
            <FontAwesomeIcon size="2x" style={{color: 'green', float: 'left'}} icon={faHeart}/>
            <FontAwesomeIcon size="2x" style={{color: 'green', float: 'right'}} icon={faHeart}/>
          </span>
          <h1>It's a Match!</h1>
          <h2 style={{marginBottom: '50px'}}>Kullen Nullen Aachen and Union Street Oxford</h2>
          <p>
            <img src={badgers} height='100px' width='100px' style={{float: 'left', marginRight: '30px'}} />
            <FontAwesomeIcon size="2x" style={{color: 'green'}} icon={faHeart}/>
            <img src={zero} height='100px' width='100px' style={{float: 'right', marginLeft: '30px'}} />
          </p>
          <p style={{clear: 'both'}}>Please consider our offering of Love.</p>
          <p>We hope to enjoy more matches with you in Landgraaf.</p>
          <p>Finally, don't forget to <a href="https://scratch.mit.edu/projects/361354173/">play some football</a>.</p>
        </Jumbotron>
      )
    :
      (
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
      )

    return contents;
  }
}

export default PersonCard;
