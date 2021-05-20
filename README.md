# README
rails s

REACT

view -> actions -> state    loop


*React is A User Interface Library*

*React Has A One Way Flow of Data*

*React Uses Component Architecture*

*React Components Can Have State*

*Updating Component State from Child Components*

**components have state and props**

constructor(props)
- call once

componentDidMount(){}
- you might need to hook into life cycle for the app
- in backbone, this would be load the data
- this is once this renders for the first time, do what is in this function
- re-rendering (via the React cycle) will not call this
- is after first render - kind of like an onLoad thing


render(){}
- display the component
- any time we re-render this is called

App.defaultProps = {}
App.propTypes = {}

mapStateToProps(state)


don't forget the scope!!!!!!!
use arrow functions
- (a) => {
  return a + 100;
  }

or

- (a) => a + 100;

or

- a => a + 100;

within the function since it is arrow
- don't need to use the prevent default onload stuff with this
- don't worry bout the binding


without redux you could call this.get function and set state via AJAX


with redux you get more streamlined control of actions across multiple components

action defined in the card_actions file
once the action is done, a dispatch  needs to happen to update the state of the global store

global store used to coordinate components
no one can mess with store except for sending action

**stopping before we correctly config middleware**

