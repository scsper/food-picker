import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Result = React.createClass({
    propTypes(){
        return {
            restaurant : React.PropTypes.string
        };
    },

    renderPickedRestaurant() {
        const {restaurant} = this.props;
        const key = restaurant ? restaurant.id : -1;
        const text = restaurant ? restaurant.name : 'No restaurant picked.';

        return <p key={key}>{text}</p>;
    },

    render() {
        return (
            <div className="restaurant">
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {this.renderPickedRestaurant()}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default Result;

