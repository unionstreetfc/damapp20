import adamPic from './adam.jpg';
import aidenPic from './aiden.jpg';
import andyPic from './andy.jpg';
import benPic from './ben.jpg';
import benGreenPic from './bengreen.jpg';
import burnerPic from './burner.jpg';
import clewsyPic from './clewsy.jpg';
import craigPic from './craig.jpg';
import cunningPic from './cunning.jpg';
import danPic from './dan.jpg';
import darrenPic from './darren.jpg';
import declanPic from './declan.jpg';
import diegoPic from './diego.jpg';
import eddyPic from './eddy.jpg';
import finlayPic from './finlay.jpg';
import gemPic from './gem.jpg';
import josePic from './jose.jpg';
import keithPic from './keith.jpg';
import lucPic from './luc.jpg';
import manusPic from './manus.jpg';
import markPic from './mark.jpg';
import mattPic from './matt.jpg';
import mattyPic from './matty.jpg';
import mooneyPic from './mooney.jpg';
import pratchPic from './pratch.jpg';
import smithyPic from './smithy.jpeg';
import stevePic from './steve.jpg';
let data = [
  {
    name: 'Adam',
    age: '32',
    img: adamPic
  },
  {
    name: 'Aiden',
    age: '36',
    img: aidenPic
  },
  {
    name: 'Andy',
    age: '40',
    img: andyPic
  },
  {
    name: 'Ben',
    age: '42',
    img: benPic
  },
  {
    name: 'Ben',
    age: '31',
    img: benGreenPic
  },
  {
    name: 'James',
    age: '46',
    img: burnerPic
  },
  {
    name: 'Tom',
    age: '33',
    img: clewsyPic
  },
  {
    name: 'Craig',
    age: '43',
    img: craigPic
  },
  {
    name: 'James',
    age: '33',
    img: cunningPic
  },
  {
    name: 'Dan',
    age: '39',
    img: danPic
  },
  {
    name: 'Darren',
    age: '36',
    img: darrenPic
  },
  {
    name: 'Declan',
    age: '25',
    img: declanPic
  },
  {
    name: 'Diego',
    age: '30',
    img: diegoPic
  },
  {
    name: 'Eddy',
    age: '34',
    img: eddyPic
  },
  {
    name: 'Finlay',
    age: '26',
    img: finlayPic,
  },
  {
    name: 'Gem',
    age: '55',
    img: gemPic
  },
  {
    name: 'Jose',
    age: '27',
    img: josePic
  },
  {
    name: 'Keith',
    age: '61',
    img: keithPic
  },
  {
    name: 'Luciano',
    age: '40',
    img: lucPic
  },
  {
    name: 'Paul',
    age: '36',
    img: manusPic
  },
  {
    name: 'Mark',
    age: '57',
    img: markPic
  },
  {
    name: 'Matt',
    age: '46',
    img: mattPic
  },
  {
    name: 'Matthew',
    age: '34',
    img: mattyPic
  },
  {
    name: 'Matthew',
    age: '34',
    img: mooneyPic
  },
  {
    name: 'Alex',
    age: '36',
    img: pratchPic
  },
  {
    name: 'Smithy',
    age: '36',
    img: smithyPic
  },
  {
    name: 'Stephen',
    age: '37',
    img: stevePic
  }
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

data = shuffle(data);

export default data;
