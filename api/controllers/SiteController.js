/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   *
   * @param req
   * @param res
   */
  contactUs: function (req, res) {
    if (req.method == 'POST') {
      console.log(req.body);
      ContactUs.create(req.body, function (err, record) {
        if (!err) {
          ContactUs.findOne(record, function (err, model) {
            if (!err) {
              model.sendEmail();
            } else {
              console.log(err);
            }
          });
          res.view({
            success: true,
            errors : req.flash('error')
          });
        } else {
          res.view({
            success: false,
            errors : req.flash('error')
          });
        }
      });
    } else {
      res.view({
        success: false,
        errors : req.flash('error')
      });
    }
  }
};

