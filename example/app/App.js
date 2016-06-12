import React from 'react';
import Slider from '../../src/image-slider';

class App extends React.Component {
  render() {
    const images = [
      '//placehold.it/600/1abc9c',
      '//placehold.it/600/3498db',
      '//placehold.it/600/2ecc71',
      '//placehold.it/600/9b59b6',
      '//placehold.it/600/f1c40f',
      '//placehold.it/600/e74c3c',
      '//placehold.it/600/e67e22',
    ];

    return <Slider images={images} isInfinite={true} delay={5000}/>
  }
}

export default App;
