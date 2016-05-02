import React from 'react';
import List from '../lists/Intuit_list';

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

        return <div key={key}>{text}</div>;
    },

    render() {
        return (
            <div className="main">
                <div className="restaurant">
                    {this.renderPickedRestaurant()}
                    <button className="main-button" onClick={this.pickNewRestaurant}>Pick!</button>
                </div>
            </div>
        );
    }
});

export default App;
