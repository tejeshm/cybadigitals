/**
 * ContactUs.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    firstName: {type: 'string', required: true},
    lastName : {type: 'string', required: true},
    email    : {type: 'email', required: true},
    message  : {type: 'text', required: true}
  },

  load: function (params) {
    params.forEach(function (element, index) {
      index in this.attributes ? this.firstName = element : this.firstName = null;
    })
  }

};

