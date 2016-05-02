import React from 'react';
import List from '../lists/Intuit_list';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = React.createClass({
    getInitialState() {
        return {
            restaurants: List,
            pickedRestaurant: null
        };
    },

    pickNewRestaurant() {
        const {restaurants} = this.state;
        const index = Math.floor(Math.random() * restaurants.length);

        this.setState({
            pickedRestaurant: restaurants[index]
        })
    },

    renderPickedRestaurant() {
        const {pickedRestaurant} = this.state;
        const key = pickedRestaurant ? pickedRestaurant.id : -1;
        const text = pickedRestaurant ? pickedRestaurant.name : 'No restaurant picked.';

        return <p key={key}>{text}</p>;
    },

    render() {
        return (
            <div className="main">
                <div className="restaurant">
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {this.renderPickedRestaurant()}
                    </ReactCSSTransitionGroup>
                    <button className="main-button" onClick={this.pickNewRestaurant}>BARREL ROLL!</button>
                </div>
            </div>
        );
    }
});

export default App;
