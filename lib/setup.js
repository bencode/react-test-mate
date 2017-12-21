const React = require('react');
const Enzyme = require('enzyme');

const Adapter = parseInt(React.version, 10) === 16 ?
  require('enzyme-adapter-react-16') :
  require('enzyme-adapter-react-15');


Enzyme.configure({ adapter: new Adapter() });

