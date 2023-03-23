import React, { Component } from 'react';
class Counter extends Component { 
    state ={ 
        count:0,
        tags:['tag1','tag2','tag3']
    };
    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ol>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ol>
        
    }   
    render() { 
        return (<div>
            { this.state.tags.length === 0 && "Please Create a new Tag!"}
                {this.renderTags()}
                </div>);
    }
}
export default Counter;