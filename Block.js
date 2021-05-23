class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.2,
          //isStatic:true
         
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.smokeImage = loadImage("smoke.png");
      this.trajectory = [];
      
    }
   

    display(){
      if(this.body.velocity.x>1 && this.body.position.y>200){
        var position = [this.body.position.x , this.body.position.y]
          this.trajectory.push(position)     
      }
      for(var i=0;i<this.trajectory.length;i++){
        image(this.smokeImage,this.trajectory[i] [0] , this.trajectory  [i]  [1])
      }

      console.log(this.body.speed);
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
      
    }
  }
}