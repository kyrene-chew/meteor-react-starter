import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // add/modify states
  //   };
  // }

  renderTasks() {
    // let filteredTasks = this.props.tasks;
    // if (this.state.hideCompleted) {
    //   filteredTasks = filteredTasks.filter(task => !task.checked);
    // }
    // return filteredTasks.map((task) => {
    //   const currentUserId = this.props.currentUser && this.props.currentUser._id;
    //   const showPrivateButton = task.owner === currentUserId;

    //   return (
    //     <Task
    //       key={task._id}
    //       task={task}
    //       showPrivateButton={showPrivateButton}
    //     />
    //   );
    // });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Hello World</h1>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  // tasks: PropTypes.array.isRequired,
  // incompleteCount: PropTypes.number.isRequired,
  // currentUser: PropTypes.object,
};

export default createContainer(() => {
  // Meteor.subscribe('tasks');

  // return {
  //   tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  //   incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  //   currentUser: Meteor.user(),
  // };
}, App);