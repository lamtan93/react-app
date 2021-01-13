import React from 'react';
import MovieElement from '../movieElement/MovieElement';

export default class MovieList extends React.Component{
    render(){
        return(
            <div>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
            </div>
        )
    }
}