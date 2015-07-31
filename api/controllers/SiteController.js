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
      ContactUs.create(req.body, function(err) {
        if (!err) {
          res.view({
            success: true,

            errors: req.flash('error')
          });
        }
      });
    }
    res.view({
      success: false,
      errors: req.flash('error')
    });
  }
};

