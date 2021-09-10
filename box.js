class Box
  {
    //attributes
    constructor(){
      this.x = 40;
      this.y = 40;
      this.w = 40;
      this.h = 40;
    }
  
    show(){
      rect(this.x, this.y, this.w, this.h)
    }

    setSpeed(v){
      this.x = this.x + v
    }
  }

  

  
