import React from 'react';


class Hello extends React.PureComponent {
  state = {
    text: ''
  };


  onChange(e) {
    this.setState({text: e.target.value});
  }


  render() {
    const {text} = this.state;
    return (
      <div>
        <input type="text" value={text} onChange={::this.onChange} />
        <span className="text">{text}</span>
      </div>
    );
  }
}

export default Hello;
