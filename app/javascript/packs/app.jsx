import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import actions from './card_actions';

class App extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {count: 0}
    }

    componentDidMount() {
        console.log('mount yo');
       store.dispatch(getCards(this.props));
    }

    render () {
        console.log('renderino');
        return (
            <div>
                <div> Welcome to the app of awesome</div>
                <div>App {this.props.name}!</div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.increment}>add to count</button>

            </div>
        );

    }

    increment = () => {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
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
