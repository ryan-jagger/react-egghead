var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  render: function(){
    //console.log("NOTES", this.props.notes)
    return(
      <div>
        <p>
          <h3> Notes for {this.props.username} </h3>
          <NotesList notes={this.props.notes} />
        </p>
      </div>
      )
  }
});

module.exports = Notes;
