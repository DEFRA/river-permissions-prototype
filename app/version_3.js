var express = require('express');
var router = express.Router();

// this file deals with all paths starting /version_x
var folder = "version_3";

// add your routes here
// River permissions prototype version 2


// Start

// Have you called us to check the location of your activity?                   /version_2/start/check_location
// ###  location_check_no = Contact the Environment Agency                      /version_2/contact/contact_ea
// ###  location_check_yes = Add the exemptions you want to register            /version_2/exemptions/add_exemptions


// NOT USED in v3
// router.post('/start/check_location', function (req,res) {
//  if (req.body['location_check']==="location_check_no"){
//    res.redirect( '/' + folder + '/contact/contact_ea_location');
//  } else if (req.body['location_check']==="location_check_yes") {
//    res.redirect( '/' + folder + '/exemptions/add_exemptions');
//  }
// });

// Add the exemptions you want to register                                      /version_2/exemptions/add_exemptions

// add exemptions page posts to this URL /do_exemption_check
router.post('/do_exemption_check', function(req, res) {
  var codearray = req.body.ex;

  // get chosen exemption codes
  var exempt1 = req.body.ex[0];
  var exempt2 = req.body.ex[1];
  var exempt3 = req.body.ex[2];
  var exempt4 = req.body.ex[3];
  var exempt5 = req.body.ex[4];
  var exempt6 = req.body.ex[5];
  res.render(folder + '/exemptions/check_exemptions',{
    'exempt1':exempt1,
    'exempt2':exempt2,
    'exempt3':exempt3,
    'exempt4':exempt4,
    'exempt5':exempt5,
    'exempt6':exempt6
    }
  );

});

// Check your exemptions posts to /version_3/check_grid_ref

router.post('/check_grid_ref', function(req, res) {
    res.redirect( '/' + folder + '/location/grid_reference');
});

// Where will the exemption activity take place?                                /version_2/location/grid_reference

router.post('/location/grid_reference', function(req, res) {
  res.redirect( '/' + folder + '/user_type/user_type');
});


// Who is legally responsible for the activity?                                 /version_2/user_type/user_type

// ###  public = What’s the name of the local authority or public body?         /version_2/user_type/local_authority
// Route to relevant business type journey

router.post('/user_type/user_type', function (req,res) {
  if (req.body['radio-inline-group']==="local_authority"){
    res.redirect( '/' + folder + '/user_type/local_authority');
  }
  if (req.body['radio-inline-group']==="limited_company"){
    res.redirect( '/' + folder + '/user_type/limited_company_number');
  }
  if (req.body['radio-inline-group']==="limited_liability"){
    res.redirect( '/' + folder + '/user_type/limited_liability_number');
  }
  if (req.body['radio-inline-group']==="individual"){
    res.redirect( '/' + folder + '/user_type/individual_name');
  }
  if (req.body['radio-inline-group']==="partnership"){
    res.redirect( '/' + folder + '/user_type/partnership');
  }
  if (req.body['radio-inline-group']==="other"){
    res.redirect( '/' + folder + '/user_type/other');
  }
  if (req.body['radio-inline-group']==="not_known"){
    res.redirect( '/' + folder + '/contact/contact_ea');
  }

});

// What’s the name of the local authority or public body?                       /version_2/user_type/local_authority
router.post('/user_type/local_authority', function(req, res) {
  res.redirect( '/' + folder + '/address/local_authority_postcode');
});

// What’s the postcode of the local authority or public body?                   /version_2/address/local_authority_postcode
router.post('/address/local_authority_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/local_authority_address');
});

// What’s the address of the local authority or public body?                    /version_2/address/local_authority
router.post('/address/local_authority_address', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});
router.post('/address/local_authority_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});


// What’s the name of limited company?                                          /version_2/user_type/limited company
router.post('/user_type/limited_company_number', function(req, res) {
  res.redirect( '/' + folder + '/user_type/limited_company_name');
});

// What’s the name of limited company?                                          /version_2/user_type/limited company
router.post('/user_type/limited_company_name', function(req, res) {
  res.redirect( '/' + folder + '/address/limited_company_postcode');
});

// What’s the postcode of the limited company?                                  /version_2/address/limited company postcode
router.post('/address/limited_company_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/limited_company_address');
});

// What’s the address of the limited company?                                   /version_2/address/limited company
router.post('/address/limited_company_address', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});
router.post('/address/limited_company_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});


// What’s the number of limited liablity partnership?                           /version_2/user_type/limited_liability_number
router.post('/user_type/limited_liability_number', function(req, res) {
  res.redirect( '/' + folder + '/user_type/limited_liability_name');
});

// What’s the name of limited liablity partnership?                             /version_2/user_type/limited liability partnership
router.post('/user_type/limited_liability_name', function(req, res) {
  res.redirect( '/' + folder + '/address/limited_liability_postcode');
});

// What’s the postcode of the limited liablity partnership?                     /version_2/address/limited liability partnership postcode
router.post('/address/limited_liability_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/limited_liability_address');
});

// What’s the address of the limited liablity partnership?                      /version_2/address/limited liability partnership company
router.post('/address/limited_liability_address', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});
router.post('/address/limited_liability_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});


// What's the individuals name?                                                 /version_2/user_type/individual_name
router.post('/user_type/individual_name', function(req, res) {
  res.redirect( '/' + folder + '/address/individual_postcode');
});

// What’s the postcode for the individual?                                      /version_2/address/individual_postcode
router.post('/address/individual_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/individual_address');
});

// What’s the address for the individual?                                        /version_2/address/individual_address
router.post('/address/individual_address', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});
router.post('/address/individual_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});


// Partnership names and addresses                                              /version_2/user_type/partnership
router.post('/user_type/partnership', function(req, res) {
  res.redirect( '/' + folder + '/address/partner_postcode');
});

router.post('/address/partner_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/partner_address');
});

router.post('/address/partner_address', function(req, res) {
  res.redirect( '/' + folder + '/user_type/partnership_details');
});
router.post('/address/partner_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/user_type/partnership_details');
});


// Partnership details                                                          /version_2/user_type/partnership_details
router.post('/user_type/partnership_details', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});

// What's the name of the organisation?                                         /version_2/user_type/other
router.post('/user_type/other', function(req, res) {
  res.redirect( '/' + folder + '/address/other_postcode');
});

// What’s the postcode of the organisation?                                     /version_2/address/other_postcode
router.post('/address/other_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/other_address');
});

// What’s the address of the organisation?                                      /version_2/address/other_address
router.post('/address/other_address', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});
router.post('/address/other_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});

// What's the name of the organisation?                                         /version_2/user_type/other
router.post('/user_type/other', function(req, res) {
  res.redirect( '/' + folder + '/address/other_postcode');
});

// Contact the EA?                                                              /version_2/contact/contact_ea
router.post('/address/other_postcode', function(req, res) {
  res.redirect( '/' + folder + '/address/other_address');
});

// What’s the address of the organisation?                                      /version_2/address/other_address
router.post('/address/other_address', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});
router.post('/address/other_address_manual', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_name');
});

// Who should we contact about this activity?                                   /version_2/contact/main_contact_name
router.post('/contact/main_contact_name', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_telephone');
});

// What’s the telephone number of the person we should contact?                 /version_2/contact/main_contact_telephone
router.post('/contact/main_contact_telephone', function(req, res) {
  res.redirect( '/' + folder + '/contact/main_contact_email');
});

// What’s the email address of the person we should contact?                    /version_2/contact/main_contact_email

router.post('/contact/main_contact_email', function(req, res) {
  res.redirect( '/' + folder + '/contact/email_someone_else');
});

// Would you like a copy of the registration email sent to someone else?        /version_2/contact/email_someone_else

router.post('/contact/email_someone_else', function(req, res) {
  res.redirect( '/' + folder + '/end_registration/check_your_answers');
});

// Check your answers before completing this registration                       /version_2/end_registration/check_your_answers

router.post('/end_registration/check_your_answers', function(req, res) {
  res.redirect( '/' + folder + '/end_registration/declaration');
});

// Declaration                                                                  /version_2/end_registration/declaration

router.post('/end_registration/declaration', function(req, res) {
  res.redirect( '/' + folder + '/end_registration/confirmation');
});

// Registration complete                                                        /version_2/end_registration/confirmation


// ADDRESS AND POSTCODE PAGES ##################################################
// These use common templates for postcode and address and pass through the title
// The 'router.get()' call creates the URL for the page

// local authority or public body
var la_title="What’s the main address of the local authority or public body?";
router.get('/address/local_authority_postcode', function (req, res) {
  res.render( folder + '/address/postcode', {'title' : la_title, 'manual_link' : 'local_authority_address_manual'});
});
router.get('/address/local_authority_address', function (req, res) {
  res.render( folder + '/address/address', {'title' : la_title, 'pcodelink' : 'local_authority_postcode', 'manual_link' : 'local_authority_address_manual'});
});
router.get('/address/local_authority_address_manual', function (req, res) {
  res.render( folder + '/address/address-manual', {'title' : la_title});
});

// limited company
var rc_title="What’s the registered address of the company?";
router.get('/address/limited_company_postcode', function (req, res) {
  res.render( folder + '/address/postcode', {'title' : rc_title, 'manual_link' : 'limited_company_address_manual'});
});
router.get('/address/limited_company_address', function (req, res) {
  res.render( folder + '/address/address', {'title' : rc_title, 'pcodelink' : 'limited_company_postcode', 'manual_link' : 'limited_company_address_manual'});
});
router.get('/address/limited_company_address_manual', function (req, res) {
  res.render( folder + '/address/address-manual', {'title' : rc_title});
});

// Limited liability partnership
var llp_title="What’s the registered address of the partnership?";
router.get('/address/limited_liability_postcode', function (req, res) {
  res.render( folder + '/address/postcode', {'title' : llp_title, 'manual_link' : 'limited_liability_address_manual'});
});
router.get('/address/limited_liability_address', function (req, res) {
  res.render( folder + '/address/address', {'title' : llp_title, 'pcodelink' : 'limited_liability_postcode', 'manual_link' : 'limited_liability_address_manual'});
});
router.get('/address/limited_liability_address_manual', function (req, res) {
  res.render( folder + '/address/address-manual', {'title' : llp_title});
});

// individual
var in_title = "What’s the address for the individual?";
router.get('/address/individual_postcode', function (req, res) {
  res.render( folder + '/address/postcode', {'title' : in_title, 'manual_link' : 'individual_address_manual'});
});
router.get('/address/individual_address', function (req, res) {
  res.render( folder + '/address/address', {'title' : in_title, 'pcodelink' : 'individual_postcode', 'manual_link' : 'individual_address_manual'});
});
router.get('/address/individual_address_manual', function (req, res) {
  res.render( folder + '/address/address-manual', {'title' : in_title});
});

// Partnership
var pt_title = "What’s the address for Partner One";
router.get('/address/partner_postcode', function (req, res) {
  res.render( folder + '/address/postcode', {'title' : pt_title, 'manual_link' : 'partner_address_manual'});
});
router.get('/address/partner_address', function (req, res) {
  res.render( folder + '/address/address', {'title' : pt_title, 'pcodelink' : 'partner_postcode', 'manual_link' : 'partner_address_manual'});
});
router.get('/address/partner_address_manual', function (req, res) {
  res.render( folder + '/address/address-manual', {'title' : pt_title});
});

// Other
var ot_title = "What's the main address of the organisation?";
router.get('/address/other_postcode', function (req, res) {
  res.render( folder + '/address/postcode', {'title' : ot_title, 'manual_link' : 'other_address_manual'});
});
router.get('/address/other_address', function (req, res) {
  res.render( folder + '/address/address', {'title' : ot_title, 'pcodelink' : 'other_postcode', 'manual_link' : 'other_address_manual'});
});
router.get('/address/other_address_manual', function (req, res) {
  res.render( folder + '/address/address-manual', {'title' : ot_title});
});

// Fake Google search_box
router.get('/google/results', function (req, res) {
  res.render(folder + '/google/results', { 'search_query' : req.query.search_text });

});

module.exports = router;
