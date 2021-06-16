import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import actions from './card_actions';

class App extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {count: 0,
            exampleText: 'default example text. TYPE HERE!'}
        // this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    componentDidMount() {
        console.log('mount yo');
    }

    handleChange = (event) => {
        this.setState({exampleText: event.target.value});
    }
    handleButtonClick = () => {
        this.props.exampleAction(this.state.exampleText);
        // this.setState({exampleText: event.target.value});
    }


    render () {
        console.log('renderino');
        return (
            <div>
                <div> Welcome to the app of awesome</div>
                <div>App {this.props.name}!</div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.increment}>add to count</button>

                <input onChange={this.handleChange} type="text" name="exampleTextOnForm" value={this.state.exampleText}/>
                <button onClick={this.handleButtonClick}>Submit New Text</button>

                <div>ExampleText from this.props.exampleText: {this.props.exampleText} </div>
                <div>ExampleText from this.state.exampleText: {this.state.exampleText} </div>
            </div>
        );
    }

    // component action
    increment = () => {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
    }

    modifyReduxExample = () => {
        console.log('modifyReduxExample');
        this.props.exampleAction('example string the get immediately returned')
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
        cards: state.cards,
        // initialState: state.exampleInitialState
        exampleText: state.exampleText
    }
}

export default connect(mapStateToProps, actions)(App);
