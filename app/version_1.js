var express = require('express');
var router = express.Router();

// this file deals with all paths starting /version_1
var folder = "/version_1";

// add your routes here
// River permissions prototype version 1

// Start

// Have you called us to check the location of your activity?                   /version_1/start/check_location
// ###  location_check_no = Contact the Environment Agency                      /version_1/contact/contact_ea
// ###  location_check_yes = Add the exemptions you want to register            /version_1/exemptions/add_exemptions

router.post('/start/check_location', function (req,res) {
  if (req.body['location_check']==="location_check_no"){
    res.redirect( folder + '/contact/contact_ea_location');
  } else if (req.body['location_check']==="location_check_yes") {
    res.redirect( folder + '/exemptions/add_exemptions');
  }
});

// Add the exemptions you want to register            /version_1/exemptions/add_exemptions

router.post('/exemptions/add_exemptions', function(req, res) {
  res.redirect( folder + '/exemptions/check_exemptions');
});

// Check your exemptions                                                        /version_1/exemptions/check_exemptions

router.post('/exemptions/check_exemptions', function(req, res) {
  res.redirect( folder + '/location/grid_reference_2');
});

// Where will the exemption activity take place?                                /version_1/location/grid_reference_2

router.post('/location/grid_reference_2', function(req, res) {
  res.redirect( folder + '/user_type/user_type');
});

// Who is legally responsible for the activity?                                 /version_1/user_type/user_type

// ###  public = What’s the name of the local authority or public body?         /version_1/user_type/local_authority
// Route to relevant business type journey

router.post('/user_type/user_type', function (req,res) {
  if (req.body['radio-inline-group']==="local_authority"){
    res.redirect( folder + '/user_type/local_authority');
  }
  if (req.body['radio-inline-group']==="limited_company"){
    res.redirect( folder + '/user_type/limited_company_number');
  }
  if (req.body['radio-inline-group']==="limited_liability"){
    res.redirect( folder + '/user_type/limited_liability_number');
  }
  if (req.body['radio-inline-group']==="individual"){
    res.redirect( folder + '/user_type/individual_name');
  }
  if (req.body['radio-inline-group']==="partnership"){
    res.redirect( folder + '/user_type/partnership');
  }
  if (req.body['radio-inline-group']==="other"){
    res.redirect( folder + '/user_type/other');
  }
  if (req.body['radio-inline-group']==="not_known"){
    res.redirect( folder + '/contact/contact_ea');
  }

});

// What’s the name of the local authority or public body?         /version_1/user_type/local_authority

router.post('/user_type/local_authority', function(req, res) {
  res.redirect( folder + '/address/local_authority_postcode');
});

// What’s the postcode of the local authority or public body?                   /version_1/address/local_authority_postcode

router.post('/address/local_authority_postcode', function(req, res) {
  res.redirect( folder + '/address/local_authority');
});

// What’s the address of the local authority or public body?                    /version_1/address/local_authority

router.post('/address/local_authority', function(req, res) {
  res.redirect( folder + '/contact/main_contact_name');
});

// Who should we contact about this activity?                                   /version_1/contact/main_contact_name

router.post('/contact/main_contact_name', function(req, res) {
  res.redirect( folder + '/contact/main_contact_telephone');
});

// What’s the telephone number of the person we should contact?                 /version_1/contact/main_contact_telephone

router.post('/contact/main_contact_telephone', function(req, res) {
  res.redirect( folder + '/contact/main_contact_email');
});

// What’s the email address of the person we should contact?                    /version_1/contact/main_contact_email

router.post('/contact/main_contact_email', function(req, res) {
  res.redirect( folder + '/contact/main_contact_address');
});

// What’s the postcode of the person we should contact?                         /version_1/contact/main_contact_address

router.post('/contact/main_contact_address', function(req, res) {
  res.redirect( folder + '/contact/main_contact_postcode');
});

// What’s the address of the person we should contact?                          /version_1/contact/main_contact_postcode

router.post('/contact/main_contact_postcode', function(req, res) {
  res.redirect( folder + '/contact/email_someone_else');
});

// Would you like a copy of the registration email sent to someone else?        /version_1/contact/email_someone_else

router.post('/contact/email_someone_else', function(req, res) {
  res.redirect( folder + '/end_registration/check_your_answers');
});

// Check your answers before completing this registration                       /version_1/end_registration/check_your_answers

router.post('/end_registration/check_your_answers', function(req, res) {
  res.redirect( folder + '/end_registration/declaration');
});

// Declaration                                                                  /version_1/end_registration/declaration

router.post('/end_registration/declaration', function(req, res) {
  res.redirect( folder + '/end_registration/confirmation');
});

// Registration complete                                                        /version_1/end_registration/confirmation


module.exports = router;
