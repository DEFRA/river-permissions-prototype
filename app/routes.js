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
// Redirects to relevant business type journey

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

module.exports = router;
