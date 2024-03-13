import React, { Component } from 'react';
import Slider from '@mui/material/Slider';

class ColorChangingCircle extends Component {
  constructor(props) {
    super(props);
    // Initialize state for red, green, blue, opacity, rotation degree, and zoom level|Props serve as a way to pass data from parent to child components in React, and they are accessed and used within the component through the props object.
       this.state = {
        red: 0,
        green: 0,
        blue: 0,
        opacity: 1,
        borderRadius: 0, // Initialize border-radius for square shape
        rotationDegree: 0,
        zoomLevel: 1,
    };
  }

  render() {
    // Destructure state variables for easier access
    const { red, green, blue, opacity, borderRadius, rotationDegree, zoomLevel } = this.state;


    // Style object for the circle
    const circleStyle = {
      width: `${170 * zoomLevel}px`, // Adjust width based on zoom level
      height: `${170 * zoomLevel}px`, // Adjust height based on zoom level
                      // Construct RGBA color string based on state values| String Interpolation: Inside a template literal, you can embed expressions or variables using ${} syntax. These expressions are evaluated and the result is inserted into the string.    
      backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`, //A template literal (``) is a feature in JavaScript that allows for easier string interpolation and multiline strings compared to traditional string concatenation or interpolation methods.
                      //String Interpolation: Inside a template literal, you can embed expressions or variables using ${} syntax. These expressions are evaluated and the result is inserted into the string.    
      transition: 'background-color 0.5s ease',
      margin: 'auto', // Center the circle horizontally
      marginTop: '10vh', // Position the circle vertically in the center of the screen
      borderRadius: `${borderRadius}%`, // Use border-radius to control the shape
      transform: `rotate(${rotationDegree}deg)`, // Rotate the square
      position: 'relative' // Ensure the circle is a positioned element
    };

    return (
      <div style={{display: 'block'}}>
        {/* Title */}
        <div style={{ width:'100', height:'80 ' }}><h1 style={{ textAlign: 'center' }}>Color And Opacity Changing App</h1></div>

        {/* Sliders container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-10px' }}>
             
          
          {/* Red slider|Definine an event handler function for the onChange event of a <Slider> component */} 
          <div style={{ display: 'flex', alignItems: 'center', }}>
          <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan'}}>R</span>
          <Slider value={red} onChange={(event, newValue) => this.setState({ red: newValue })} min={0} max={255} aria-label="Red" valueLabelDisplay="auto" style={{ width: '150px', marginBottom: '10px'}} />
          </div>

          {/* Green slider */}
          <div style={{ display: 'flex', alignItems: 'center', }}>
          <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan' }}>G</span>
          <Slider value={green} onChange={(event, newValue) => this.setState({ green: newValue })} min={0} max={255} aria-label="Green" valueLabelDisplay="auto" style={{ width: '150px', marginBottom: '10px' }} />
          </div>

          {/* Blue slider */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan' }}>B</span>
          <Slider value={blue} onChange={(event, newValue) => this.setState({ blue: newValue })} min={0} max={255} aria-label="Blue" valueLabelDisplay="auto" style={{ width: '150px', marginBottom: '10px' }} />
          </div>

          {/* Opacity slider */}
          <div style={{ display: 'flex', alignItems: 'center', }}>
          <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan' }}>O</span>
          <Slider value={opacity} onChange={(event, newValue) => this.setState({ opacity: newValue })} min={0} max={1} step={0.01} aria-label="Opacity" valueLabelDisplay="auto" style={{ width: '150px', marginBottom: '10px' }} />
          </div>      

          {/* Slider to control border-radius */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan' }}>Shape</span>
          <Slider value={borderRadius} onChange={(event, newValue) => this.setState({ borderRadius: newValue })} min={0} max={50} aria-label="Shape" valueLabelDisplay="auto" style={{ width: '150px', marginBottom: '10px' }} />
          </div>

          {/* Slider to control rotation */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan' }}>Rotation</span>
            <Slider value={rotationDegree} onChange={(event, newValue) => this.setState({ rotationDegree: newValue })} min={0} max={360} aria-label="Rotation" valueLabelDisplay="auto" style={{ width: '150px', marginBottom: '10px' }} />
          </div>

          {/* Slider to control zoom (scale) */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '15px', marginTop: '-11px', backgroundColor:'cyan' }}>Zoom</span>
            <Slider
              value={zoomLevel}
              onChange={(event, newValue) => this.setState({ zoomLevel: newValue })}
              min={0}
              max={1}
              step={0.1}
              aria-label="Zoom"
              valueLabelDisplay="auto"
              style={{ width: '150px', marginBottom: '10px' }}
            />
          </div>

        </div>
          
        {/* Circle element that changes color */}
        <div style={circleStyle}></div>

      </div>
    );
    
  }
}

export default ColorChangingCircle;
