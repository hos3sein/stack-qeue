

class stack{
	constructor(){
		this.STACK = []
	}


	push(x){
		this.STACK.push(x)
	}

	pop(){
		const y = this.STACK.pop()
		return(y)
	}
}


const s = new stack();
