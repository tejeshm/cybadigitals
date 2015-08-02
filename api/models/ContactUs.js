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
    message  : {type: 'text', required: true},

    sendEmail: function () {
      sails.hooks.email.send(
        "contactUsEmail", {
          name   : this.firstName + ' ' + this.lastName,
          email  : this.email,
          message: this.message
        }, {
          to     : 'cybadigitals@gmail.com',
          subject: this.firstName + " tried to contact you."
        },
        function (err, info) {
          if (!err) {
            console.log('Info' + info);
          } else {
            console.log(err)
          }
        }
      );
    }
  }

};

