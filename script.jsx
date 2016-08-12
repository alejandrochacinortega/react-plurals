/*------------- CARD COMPONENTS ---------------*/

// var Card = React.createClass({
//   getInitialState: function () {
//     return {}
//   },
//
//   componentDidMount: function () {
//     var component = this;
//     $.get("https://api.github.com/users/" + this.props.login, function (data) {
//       console.log('data  ', data);
//       component.setState(data);
//     })
//   }
//   ,
//   render           : function () {
//     return (
//       <div>
//         <img src={this.state.avatar_url} width="80"/>
//         <h3>{this.state.login}</h3>
//         <hr/>
//       </div>
//     )
//   }
// });
//
// var Form = React.createClass({
//   handleSubmit: function(e) {
//     console.log('submitting now ');
//     e.preventDefault();
//     var loginInput = React.findDOMNode(this.refs.login);
//     this.props.addCard(loginInput.value);
//     loginInput.value = ";"
//   },
//   render: function () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input placeholder="github login" ref="login"/>
//         <button>Add</button>
//       </form>
//     )
//   }
// });
//
//
// var Main = React.createClass({
//   getInitialState: function () {
//     return {logins: []}
//   },
//   addCard: function (loginToAdd) {
//     this.setState({logins: this.state.logins.concat(loginToAdd)})
//   },
//   render         : function () {
//     var cards = this.state.logins.map(function (login) {
//       return (<Card login={login}/>)
//     });
//     return (
//       <div>
//         <Form addCard={this.addCard}/>
//         {cards}
//       </div>
//     )
//   }
// });
//
// React.render(
//   <Main />, document.getElementById("root"));

/*------------- CARD COMPONENTS ---------------*/


/*------------- KID GAME: PLAY NINE ---------------*/

var StarsFrame = React.createClass({
  render: function () {
    var numberOfStars = Math.floor(Math.random()*9) + 1;
    var stars = [];
    for (var i = 0; i < numberOfStars; i++ ) {
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      )
    }
    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    )
  }
});

var ButtonFrame = React.createClass({
  render: function () {
    return (
      <div id="button-frame">
        <button className="btn btn-primary">Button</button>
      </div>
    )
  }
});


var AnswerFrame = React.createClass({
  render: function () {
    return (
      <div id="answer-frame">
        <div className="well">
          ...
        </div>
      </div>
    )
  }
});

var NumbersFrame = React.createClass({
  render: function () {
    var numbers = [];
    for (var i = 1; i <= 9; i++ ) {
      numbers.push(
        <div className="number">{i}</div>
      )
    }
    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    )
  }
});

var Game = React.createClass({
  render: function () {
    return (
      <div id="game">
        <h2>Game</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame />
          <ButtonFrame />
          <AnswerFrame />
        </div>
        <NumbersFrame />
      </div>
    )
  }
});

React.render(
  <Game />, document.getElementById("container")
);


/*------------- KID GAME: PLAY NINE ---------------*/
