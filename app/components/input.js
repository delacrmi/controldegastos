/** @jsx React.DOM*/

var React = require('react');

var inputAndLabel = React.createClass({

  render: function() {

    var config = this.props.config;
    console.log(config);
    return <div className="row">
            <label htmlFor= {this.props.name} className= {this.props.classLabel}>{this.props.labelText}</label>
            <div className= {this.props.classDiv}>
              <input id= {this.props.name} name= {this.props.name} type= {this.props.type} placeholder={this.props.ph} className= {this.props.classInput} maxLength= {this.props.length}/>
            </div>
          </div>;
  }
});

var input = React.createClass({

  render: function() {

    var config = this.props.config;

    return (<input id= {config.name} name= {config.name} type= {config.input.type} maxlength= {config.input.length} placeholder={config.input.ph} className= {config.input.class}/>);
  }
});

module.exports =  inputAndLabel;