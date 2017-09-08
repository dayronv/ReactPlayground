// There are multiple ways to implement this component. This is one.
var VacancySign = React.createClass({
  render: function() {
    var text = "Hello";
    return <div>{text}</div>;
  }
});

ReactDOM.render(
  <VacancySign />,
  document.getElementById('container')
);