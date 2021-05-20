import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import actions from './card_actions';

class App extends React.Component {
    componentDidMount(){
        this.props.getCards(this.props.dispatch);
    }

    render () {
        return (
            <div>
                <div> Welcome to the app of awesome</div>
                <div>App {this.props.name}!</div>

            </div>
        );
    }
}
App.defaultProps = {
    name: 'David'
}

App.propTypes = {
    name: PropTypes.string
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, actions)(App);