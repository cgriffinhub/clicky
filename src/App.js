import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";

import Header from "./components/Header";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array

  state = {
    images,
    clickedImages: [],
    points: 0
  };


  

// Click function determines correct guess or win/loss
  clickImage = id => {


    if (this.state.points < 12) {
      if (this.state.clickedImages.includes(id)) {
        console.log('you lose');
      this.state.points = 0;
      this.state.clickedImages = [];
      alert('YOU LOSE! Try Again?');
      }
      else {        
        this.state.points++;
        this.state.clickedImages.push(id);
        for (let i = 0; i < images.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          [images[i], images[j]] = [images[j], images[i]];
        }
        if (this.state.points === 12) {
          console.log('you win');
          this.state.points = 0;
          this.state.clickedImages = [];
          alert('YOU WIN! Try Again?');
        }
      }
    }
    else {
      this.endGame();
    }



    // Set this.state.images equal to the new images array
    this.setState({ images });

  };





  // Map over this.state.images and render a FriendCard component for each friend object
  render() {
    return (
      <div><Header>{this.state.points}</Header>
        <Wrapper>
          {this.state.images.map(image => (
            <ImageCard
              clickImage={this.clickImage}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
