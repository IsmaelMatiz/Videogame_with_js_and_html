//videogame from youtube video https://www.youtube.com/watch?v=vyqbNFMDRGQ
//im doing this project because i think that it could be interesting just do it
//also learn a little bit more about js and canva



const canvas = document.querySelector('canvas')//select the canva in the html file
const c = canvas.getContext('2d')//it is posible make 3d thinks with canva but in this case i will handle it in a 2d context

//set up the canva's size
canvas.width = 1024
canvas.height = 576

//the background with full size
c.fillRect(0,0,canvas.width,canvas.height)

//gravity const
const gravity = 15.0

//here we create a class for set up the sprites properties
class Sprite {
	constructor({position,velocity,height}){// a little tip you can set up the properties as object to handle it a little more easy because, you dont need to add all the properties mandatory and also it doesnt matter the sort
		this.position = position
		this.velocity = velocity
		this.height = height
	}
	draw(){
		c.fillStyle = "red"
		c.fillRect(this.position.x,this.position.y, 50,this.height)
	}
	//i change a little bit the code here just to test that i really understand this, in the
	//video it has a little more sense stop the velocity but i want to stop the position update
	//because yes, i can do it thats all
	update(){
		this.draw()	
		if(this.position.y + this.height >= canvas.height){
			this.position.y = this.position.y
		}else this.position.y += this.velocity.y	
	}
}

//here i set up the player using the call created before
const player = new Sprite({
	position: {
		x:0,
		y:0
	},
	height: 150
	,
	velocity: {
		x:0,
		y:gravity
	}
})

//here i set up the enemy using the same class, because this objet has similar properties than the player

const enemy = new Sprite({
	position: {
		x:500,
		y:0
	},
	height: 100
	,
	velocity: {
		x:0,
		y:gravity
	}
})

//in this way we paint the objects in the canvas
player.draw()
enemy.draw()

//just a little comprovation
console.log(player)


function animate(){
	window.requestAnimationFrame(animate)
	c.fillStyle = "black"
	c.fillRect(0,0,canvas.width, canvas.height)
	player.update()
	enemy.update()
}

animate()

