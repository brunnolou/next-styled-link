// .eslintrc.js
const { Neutrino } = require('neutrino');
const api = Neutrino();

module.exports = api.call('eslintrc', [
  ['neutrino-preset-airbnb-base', {}],
  'neutrino-preset-node'
]);
