    class Base {
        constructor(x,y,width,height,options){

        var options={
            'isStatic':false,
            'restitution':0.5,
            'friction':0.1,
            'density':0.1
        }  
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
            
        }
        display(){
            var position=this.body.position;

         push();
         fill("blue");
         rectMode(CENTER);
         rect(position.x,position.y,this.width,this.height);
         pop();

        }
    }