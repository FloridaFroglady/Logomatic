class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.render = function() {
            if(shapeName && shapeColor && text && textColor) {
                shapeName.render();
            } else {
                alert("You must choose a shape, color and text.");
            }
        this.setColor = function() {if(shapeHexcode) {
                shapeColor = shapeHexcode;
            } else {
                shapeColor = shapeColorname;
            } 
            return shapeColor; 
         }
         if(textHexcode) {
            textColor = textHexcode;
         } else {
            textColor = textColorname;
         }
         return textColor;
         }
         Shape.render()
        }
        
        }  


class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.render = function() {
    <svg width="300" height="200">
    <rect x="30" y="10" width="180" height="180"
    style="fill: ${Shape.shapeColor}" />
    <text x="100" y="110" font-size="50px" fill="${Shape.textColor}">${Shape.text}</text>
  </svg>
        }
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.render = function() {
            <svg width="300" height="200">
            <circle cx="150" cy="100" r="100" fill= "${Shape.shapeColor}" />
         <text x="150" y="110" text-anchor="middle" alignment-baseline="center" font-size="50px" fill="${Shape.textColor}">${Shape.text}</text>
  </svg>
        } 
     }
}
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.render = function() {
        <svg width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill = "${Shape.shapeColor}" />
    <text x="100" y="150" font-size="50px" fill="${Shape.textColor}">${Shape.text}</text>
  </svg> 
        }
    }
}

export { Shape, Square, Circle, Triangle };