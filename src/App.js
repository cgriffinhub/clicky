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
    points: 0,
    gameover: ''
  };


  endGame = () => {
    if (this.state.points < 11) {
      console.log('you lose');
      this.state.points = 0;
      this.state.clickedImages = [];
      alert('YOU LOSE! Try Again?');
    }
    else {
      console.log('you win');
      this.state.points = 0;
      this.state.clickedImages = [];
      alert('YOU WIN! Try Again?');
    }
  }


  clickImage = id => {


    if (this.state.points < 11) {
      console.log('asdf');
      if (this.state.clickedImages.includes(id)) {
        this.endGame();
      }
      else {
        this.state.points++;
        this.state.clickedImages.push(id);
        for (let i = 0; i < images.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          [images[i], images[j]] = [images[j], images[i]];
        }
      }
    }
    else {
      console.log('54334');
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
