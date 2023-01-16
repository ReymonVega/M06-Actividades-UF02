//Ejercicio 1

class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}

const size = new Size(1080, 764);
console.log(size.width); // Output: 1080
console.log(size.height); // Output: 764

size.resize(1920, 1080);
console.log(size.width); // Output: 1920
console.log(size.height); // Output: 1080


// Ejercicio 2

class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

const point = new Position();
console.log(point.x); // Output: 0
console.log(point.y); // Output: 0

point.move(100, 200);
console.log(point.x); // Output: 100
console.log(point.y); // Output: 200

//Ejercicio 3

class Size {
    constructor(width = 0, height = 0) {
      this.width = width;
      this.height = height;
    }
  }
  
class Position {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }
  
class ProgramWindow {
    constructor() {
      this.screenSize = new Size(800, 600);
      this.size = new Size();
      this.position = new Position();
    }
  }
  
  const programWindows = new ProgramWindow();
  console.log(programWindows.screenSize.width); // => 800
  
  //Ejercicio 4

  /*FALTA COSAS ...*/ 

  class ProgramWindow {
    
    resize(newSize) {
        let width = Math.max(Math.min(newSize.width, this.screenSize.width - this.position.x), 1);
        let height = Math.max(Math.min(newSize.height, this.screenSize.height - this.position.y), 1);
        this.size = new Size(width, height);
    }
}

const programWindow = new ProgramWindow();
const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size.width); // => 600
console.log(programWindow.size.height); // => 400

//Ejercicio 6
/*Falta mejorar*/ 

function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}