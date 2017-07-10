import React from 'react';
import ReactDOM from 'react-dom';
import {ajax} from 'jquery';

const api_key = 'f012df5d63927931e82fe659a8aaa3ac';
const api_url = 'https://api.themoviedb.org/3/search/movie';
const poster_path = 'https://image.tmdb.org/t/p/w500';

class App extends React.Component {
	constructor() {
		super();
		this.getInitialMovie = this.getInitialMovie.bind(this);
	}

	getInitialMovie() {
		ajax({
			url: api_url,
			method: 'GET',
			dataType: 'JSON',
			data: {
				api_key: api_key,
				query: 'inception'
			}
		})
		.then((res) => {
			console.log(res);
		});
	}

    render() {
    	return (
        	<div>
           		{this.getInitialMovie()}
        	</div>
      	)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
