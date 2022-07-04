
import React, { Component } from 'react';


class Chang extends Component {
    state = {
        
            color: "black",
            backgroundColor: 'white',
            width: '100px',
            height: '100px'
    

        

    }
    
    handleTheme = () => {
        if (this.state.backgroundColor==="green") {
            this.setState({backgroundColor: 'white'});
            this.setState({Color: 'black'});
            console.log('done');
            
        }else{
            this.setState({backgroundColor: 'green'});
            this.setState({Color: 'white'});
        }

    }


    render() {
        return (
            <div>
                <div className='theme' style={this.state} >
                    <input type="button" value={'theme'} onClick={this.handleTheme} />
                    <p>hi</p>
                </div>

                <h2><pre>{this.state.Color}</pre></h2>
            </div>
        );
    }
}

export default Chang;