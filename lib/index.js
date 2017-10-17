const decomment = require('decomment');

export default code => {
  return decomment(code, { trim: true });
};
