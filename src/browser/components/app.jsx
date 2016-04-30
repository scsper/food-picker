import React from 'react';

const App = React.createClass({
    getInitialState() {
        return {
            restaurants: [{
                id: 1,
                name: 'Banana Leaf'
            }, {
                id: 2,
                name: 'A Slice of New York'
            }, {
                id: 3,
                name: 'Adamson\'s French Dip'
            }],

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
            <div>
                {this.renderPickedRestaurant()}
                <button onClick={this.pickNewRestaurant}>Pick a new restaurant</button>
            </div>
        );
    }
});

export default App;
