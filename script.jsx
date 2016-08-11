var Button = React.createClass({
  localHandler: function () {
    this.props.localHandler(this.props.increment)
  },
  render         : function () {
    return (
      <button onClick={this.localHandler}>+{this.props.increment}</button>
    )
  }
});

var Result = React.createClass({
  render: function () {
    return (
      <div>{this.props.localCounter}</div>
    )
  }
});

var Main = React.createClass({
  getInitialState: function () {
    return {
      counter: 10
    }
  },
  handleClick    : function (increment) {
    console.log('you click me ');
    this.setState({counter: this.state.counter + increment})
  },
  render: function () {
    return (
      <div>
        <Button localHandler={this.handleClick} increment={1}/>
        <Button localHandler={this.handleClick} increment={5}/>
        <Button localHandler={this.handleClick} increment={10}/>
        <Button localHandler={this.handleClick} increment={100}/>
        <Result localCounter={this.state.counter}/>
      </div>
    )
  }
});

React.render(<Main />, document.getElementById("root"));