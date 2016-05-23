import React from 'react';
import Result from './result.jsx';
import Filters from './FilterList.jsx';

import RestaurantList from '../lists/Intuit_list';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = React.createClass({
    getInitialState() {
        return {
            restaurants: RestaurantList,
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

    render() {
        return (
            <div className="main">
                <Result restaurant={this.state.pickedRestaurant}/>
                <button className="main-button" onClick={this.pickNewRestaurant}>BARREL ROLL!</button>
                <Filters/>
            </div>
        );
    }
});

//TODO Connect to the store!
//TODO Hook up to redux. Send the state after "pick new restaurant"
//TODO Hook up filters to access written reducers
export default App;
