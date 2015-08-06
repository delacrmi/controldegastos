/** @jsx React.DOM*/

var React = require('react'),
  myInput = require('./input');

var inputInfo = [
  {name: 'firstName', text: 'First Name:', type: 'text'},
  {name: 'lastName', text: 'Last Name:', type: 'text'},
  {name: 'nickName', text: 'User Name:', type: 'text'},
  {name: 'email', text: 'Email:', type: 'email'},
  {name: 'password', text: 'Password:', type: 'password'},
  {name: 'confirm', text: 'Repeat:', type: 'password'}
];

var formPanel = React.createClass({

  render: function() {

    var inputItem = inputInfo.map(function(x) {
      console.log(x);

      return <myInput name= {x.name} classLabel= {'hidden-xs col-lg-2 col-sm-3'}
        classDiv={'col-lg-7 col-sx-8 bottom-space'} type= {x.type} length= {150} ph= {x.text}
        classInput= {'form-control'} labelText= {x.text}/>;
    }, this);

    return (<div className= "row green animated flipInX">
          <div className="col-lg-7 col-md-9 col-sm-10 col-xs-12 inline-block">
            <div className="panel">
              <div className="panel-header animated bounceIn delay-1">
                <h2 className="pacifico big blue">Create Account</h2>
              </div>
              <div className="panel-body">

                {inputItem}

              </div>
            </div>
            <div className="panel-footer clearfix"></div>
          </div>
        </div>
    );
  }
});

React.renderComponent(<formPanel/>, document.getElementById('content'));