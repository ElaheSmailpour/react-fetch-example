import React, {Component} from 'react'

export default class Data extends Component{

state={

    text:""

}
/*
componentDidMount(){
    window.fetch("https://cat-fact.herokuapp.com/facts")
        .then((response) => {
            response.json()
            .then((katzenfaktenobjekt) => {
                    console.log(katzenfaktenobjekt);
                   
                    this.setState({text:katzenfaktenobjekt[1].text})
                   
                }
            )
})
 
}
*/
/*
componentDidMount(){
    window.fetch("https://api.npms.io/v2/search?q=react")
        .then((response) => {
            response.json()
            .then((data) => {
                    console.log("data=",data);
                   
                    this.setState({text:data.results[0].package.description})
                   
                }
            )
})
 
}*/
componentDidMount(){
    window.fetch("https://api.npms.io/v2/search?q=react")
        .then((response) => {
            response.json()
            .then((data) => {
                    console.log("data=",data);
                   
                    this.setState({text:data.results[0].package.description})
                   
                }
            )
})
}

render(){

    return (
		<div className="data">
		
				<p>Data...</p>
				
                      <p>{this.state.text}</p>
                     
                     </div>
                    
		
		
	);
}

}
