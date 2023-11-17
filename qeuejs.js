class qeue{
	constructor(){
		this.Q = []
	}


	push(x){
		this.Q.splice(0 , 0 ,x)
	}

	pop(){
		const answer = this.Q.pop()
		return (answer)
	}


}


export{
	qeue
};