var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');

});

// Example routes
// Passing data into a page

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;
  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');
  }

});

// add your routes here
// River permissions prototype version 1

// Route location to exemptions page

  router.post('/version_1/location/grid_reference', function(req, res) {
    res.redirect('/version_1/exemptions/add_exemptions');
  });

  router.post('/version_1/exemptions/add_exemptions', function(req, res) {
    res.redirect('/version_1/exemptions/check_exemptions');
  });

  router.post('/version_1/exemptions/check_exemptions', function(req, res) {
    res.redirect('/version_1/user_type/user_type');
  });

// Route to relevant business type journey

router.post('/version_1/user_type/user_type', function (req,res) {
  if (req.body['radio-inline-group']==="local_authority"){
    res.redirect('/version_1/user_type/local_authority');
  }
  if (req.body['radio-inline-group']==="limited_company"){
    res.redirect('/version_1/user_type/limited_company_number');
  }
  if (req.body['radio-inline-group']==="limited_liability"){
    res.redirect('/version_1/user_type/limited_liability_number');
  }
  if (req.body['radio-inline-group']==="individual"){
    res.redirect('/version_1/user_type/individual_name');
  }
  if (req.body['radio-inline-group']==="partnership"){
    res.redirect('/version_1/user_type/partnership');
  }
  if (req.body['radio-inline-group']==="other"){
    res.redirect('/version_1/user_type/other');
  }
  if (req.body['radio-inline-group']==="not_known"){
    res.redirect('/version_1/contact/contact_ea');
  }

});

// Route local authority and public body

router.post('/version_1/user_type/local_authority', function(req, res) {
  res.redirect('/version_1/address/local_authority_postcode');
});

router.post('/version_1/address/local_authority_postcode', function(req, res) {
  res.redirect('/version_1/address/local_authority');
});

router.post('/version_1/address/local_authority', function(req, res) {
  res.redirect('/version_1/contact/main_contact_name');
});

router.post('/version_1/contact/main_contact_name', function(req, res) {
  res.redirect('/version_1/contact/main_contact_telephone');
});

router.post('/version_1/contact/main_contact_telephone', function(req, res) {
  res.redirect('/version_1/contact/main_contact_email');
});

router.post('/version_1/contact/main_contact_email', function(req, res) {
  res.redirect('/version_1/contact/main_contact_address');
});

router.post('/version_1/contact/main_contact_address', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact');
});

// Route limited company

router.post('/version_1/user_type/limited_company_number', function(req, res) {
  res.redirect('/version_1/user_type/limited_company_name');
});

router.post('/version_1/user_type/limited_company_name', function(req, res) {
  res.redirect('/version_1/address/limited_company_postcode');
});

router.post('/version_1/address/limited_company_postcode', function(req, res) {
  res.redirect('/version_1/address/limited_company_address');
});

router.post('/version_1/address/limited_company_address', function(req, res) {
  res.redirect('/version_1/contact/main_contact_name');
});

router.post('/version_1/contact/main_contact_name', function(req, res) {
  res.redirect('/version_1/contact/main_contact_telephone');
});

router.post('/version_1/contact/main_contact_telephone', function(req, res) {
  res.redirect('/version_1/contact/main_contact_email');
});

router.post('/version_1/address/limited_company_address', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact');
});

// Route limited liablity company

router.post('/version_1/user_type/limited_liability_number', function(req, res) {
  res.redirect('/version_1/user_type/limited_liability_name');
});

router.post('/version_1/user_type/limited_liability_name', function(req, res) {
  res.redirect('/version_1/address/limited_liability_postcode');
});

router.post('/version_1/address/limited_liability_postcode', function(req, res) {
  res.redirect('/version_1/address/limited_liability_address');
});

router.post('/version_1/address/limited_liability_address', function(req, res) {
  res.redirect('/version_1/contact/main_contact_name');
});

router.post('/version_1/contact/main_contact_name', function(req, res) {
  res.redirect('/version_1/contact/main_contact_telephone');
});

router.post('/version_1/contact/main_contact_telephone', function(req, res) {
  res.redirect('/version_1/contact/main_contact_email');
});

router.post('/version_1/address/limited_liability_address', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact');
});

// Route individual

router.post('/version_1/user_type/individual_name', function(req, res) {
  res.redirect('/version_1/address/individual_postcode');
});

router.post('/version_1/address/individual_postcode', function(req, res) {
  res.redirect('/version_1/address/individual_address');
});

router.post('/version_1/address/individual_address', function(req, res) {
  res.redirect('/version_1/contact/main_contact_name');
});

router.post('/version_1/contact/main_contact_name', function(req, res) {
  res.redirect('/version_1/contact/main_contact_telephone');
});

router.post('/version_1/contact/main_contact_telephone', function(req, res) {
  res.redirect('/version_1/contact/main_contact_email');
});

router.post('/version_1/address/individual_address', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact');
});

// Route partnership

router.post('/version_1/user_type/partnership', function(req, res) {
  res.redirect('/version_1/user_type/partnership_address');
});

router.post('/version_1/user_type/partnership_address', function(req, res) {
  res.redirect('/version_1/user_type/partnership_details');
});

router.post('/version_1/user_type/partnership_details', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact');
});

// Route Others

router.post('/version_1/user_type/other', function(req, res) {
  res.redirect('/version_1/address/other_postcode');
});

router.post('/version_1/address/other_postcode', function(req, res) {
  res.redirect('/version_1/address/other_address');
});

router.post('/version_1/address/other_address', function(req, res) {
  res.redirect('/version_1/contact/main_contact_name');
});

router.post('/version_1/contact/main_contact_name', function(req, res) {
  res.redirect('/version_1/contact/main_contact_telephone');
});

router.post('/version_1/contact/main_contact_telephone', function(req, res) {
  res.redirect('/version_1/contact/main_contact_email');
});

router.post('/version_1/contact/main_contact_email', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact');
});

// Route contact details

router.post('/version_1/contact/applicant_contact', function (req,res) {
  if (req.body['radio-inline-group']==="contact_yes"){
    res.redirect('/version_1/end_registration/check_your_answers_no_contact');
  } else {
    res.redirect('/version_1/contact/applicant_contact_name');
  }
});

router.post('/version_1/contact/applicant_contact_name', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact_telephone');
});

router.post('/version_1/contact/applicant_contact_telephone', function(req, res) {
  res.redirect('/version_1/contact/applicant_contact_email');
});

router.post('/version_1/contact/applicant_contact_email', function(req, res) {
  res.redirect('/version_1/end_registration/check_your_answers');
});

// Redirects end of check your answers and declaration

router.post('/version_1/end_registration/check_your_answers', function(req, res) {
  res.redirect('/version_1/end_registration/declaration');
});

router.post('/version_1/end_registration/declaration', function(req, res) {
  res.redirect('/version_1/end_registration/confirmation');
});


module.exports = router;
