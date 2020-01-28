import React from 'react';
import {searchMovie} from '../api/moviedb'

class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
            request: '',
            results: []
		}
	}

	handleChangeInput(text) {
	    this.setState({request: text});
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('La requête qui a été soumise : ' + this.state.request);
        let data = await this.searchApi(this.state.request);
        console.log(data); 
        this.setState({ results: data.results });
        console.log(this.state.results);              
    } 

    async searchApi(text) {        
        let data =  await searchMovie(text);        
        return data;
    }
    
	render() {

        const resultsData = this.state.results;

        return (
        <React.Fragment>
	      <div style={{padding:"35px", color:"#38d474", fontFamily:"system-ui", fontSize:"15px", backgroundColor:"rgba(7, 64, 52, 1)"}}>
	        <h1 style={{fontSize:"20px", color:"white", fontWeight:"bold"}}>Movie db api interface</h1>            
	        <p>Tape un mot pour faire une recherche de film sur l'api movie db</p>
            <p style={{color:"white"}}>{this.state.request}</p>

            <form onSubmit={(e)=>{this.handleSubmit(e)}}>     
                <input 
                type="text"
                value={this.state.request}
                onChange={(e)=>{
                    console.log(e);
                    this.handleChangeInput(e.currentTarget.value);
                }}
            />
                <input type="submit" value="Envoyer" />
            </form>
	      </div>
          <div style={{padding:"35px", color:"rgba(7, 64, 52, 1)", fontFamily:"system-ui", fontSize:"15px"}}>
                {resultsData.map(item => 
                    <div>
                    <h1>{item.original_title}</h1>
                    <img src={'https://image.tmdb.org/t/p/w500/' + {...item.poster_path}} style={{width:"300px"}}/>                   
                    <p>{item.overview}</p>
                    </div>
                    )}
          </div>
        </React.Fragment>   
	    );
	}
}

export default Home;