var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {

 // Store common vars

 res.locals.formData = "";
 res.locals.formQuery = "?";
 res.locals.data = {};

 for (var name in req.query){
   var value = req.query[name];
   res.locals.formData += '<input type="hidden" name="'+name+'" value="' + value + '">\n';
   res.locals.formQuery += name + "=" + value + "&";
   res.locals.data[name] = value;
 }

 res.locals.formQuery = res.locals.formQuery.slice(0,-1);

 next();

});

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

// anything beginning with "/smart_start" will go into this
router.use('/smart_start', require('./smart_start'));


// Route location to exemptions page

  router.post('/version_1/location/activity_specific/bridge_grid_reference', function(req, res) {
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
  res.redirect('/version_1/contact/main_contact_postcode');
});

router.post('/version_1/contact/main_contact_postcode', function(req, res) {
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

router.post('/version_1/end_registration/check_your_answers_no_contact', function(req, res) {
  res.redirect('/version_1/end_registration/declaration'); });


// DESIGN AREA ROUTING

// Location

// Redirects for grid reference

router.post('/version_1/location/abstract_grid_references/choose_location_type', function (req,res) {
  if (req.body['radio-inline-group']==="single_grid_reference"){
    res.redirect('/version_1/location/abstract_grid_references/single_grid_reference');
  }
  if (req.body['radio-inline-group']==="two_more_grid_references"){
    res.redirect('/version_1/location/abstract_grid_references/start_and_end_grid_references');
  }
  if (req.body['radio-inline-group']==="start_and_end_grid_references"){
    res.redirect('/version_1/location/abstract_grid_references/two_more_grid_references');
  }

});

// Routing questions

// scaffolding questions
// scaffolding index.html

router.get('/design_patterns/routing_questions/bridges_outfalls_culverts', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var scaffolding = req.query.scaffolding;

  if (scaffolding == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/scaffolding/take_down_daily" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/bridges_outfalls_culverts/index.html');

  }

});


// Bridges, outfalls, culverts questions
// Question for bridges_outfalls_culverts index.html

router.get('/design_patterns/routing_questions/defences_scrapes_drinking_bays', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var bridges_outfalls_culverts = req.query.bridges_outfalls_culverts;

  if (bridges_outfalls_culverts == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/bridges_outfalls_culverts/what_you_building" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/defences_scrapes_drinking_bays/index.html');

  }

});



// Defences, scrapes, drinking bays questions
// Question for defences_scrapes_drinking_bays index.html

router.get('/design_patterns/routing_questions/tracks_paths', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var defences_scrapes_drinking_bays = req.query.defences_scrapes_drinking_bays;

  if (defences_scrapes_drinking_bays == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/defences_scrapes_drinking_bays/follow_up_question" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/tracks_paths/index.html');

  }

});

// stones_gravel_sand_silt_logs
// Question for stones_gravel_sand_silt_logs index.html

router.get('/design_patterns/routing_questions/wildlife_welfare', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var stones_gravel_sand_silt_logs = req.query.stones_gravel_sand_silt_logs;

  if (stones_gravel_sand_silt_logs == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/stones_gravel_sand_silt_logs/follow_up_question" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/wildlife_welfare/index.html');

  }

});


// wildlife_welfare
// Question for stones_gravel_sand_silt_logs index.html

router.get('/design_patterns/routing_questions/cables_service_crossings', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var wildlife_welfare = req.query.wildlife_welfare;

  if (wildlife_welfare == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/wildlife_welfare/what_you_building" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/cables_service_crossings/index.html');

  }

});

// Cables, service crossings
// Question for cables_service_crossings index.html

router.get('/design_patterns/routing_questions/constructions_channelstructures_surveyrafts', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var cables_service_crossings = req.query.cables_service_crossings;

  if (cables_service_crossings == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/cables_service_crossings/follow_up_question" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/constructions_channelstructures_surveyrafts/index.html');

  }

});

// Constructions, channel structures, surveyrafts Questions
// Question for constructions_channelstructures_surveyrafts index.html

router.get('/design_patterns/routing_questions/riverbanks', function (req, res) {

  console.log("WHAT");

  // constructions_channelstructures_surveyraftset the answer from the query string (eg. ?scaffolding=1)
  var constructions_channelstructures_surveyrafts = req.query.constructions_channelstructures_surveyrafts;

  if (constructions_channelstructures_surveyrafts == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/constructions_channelstructures_surveyrafts/follow_up_question" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/riverbanks/index.html');

  }

});

// Riverbank Questions
// Question for riverbanks index.html

router.get('/design_patterns/routing_questions/dredging', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var riverbanks = req.query.riverbanks;

  if (riverbanks == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/riverbanks/follow_up_question" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/dredging/index.html');

  }

});

// Dredging questions
// Question for dredging index.html

router.get('/design_patterns/routing_questions/dewatering', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var dredging = req.query.dredging;

  if (dredging == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/dredging/dredge_length" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/dewatering/index.html');

  }

});

// Dewatering questions
// Question for dewatering index.html

router.get('/design_patterns/routing_questions/permission_types/declaration', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var dewatering = req.query.dewatering;

  if (dewatering == "1"){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/dewatering/follow_up_question" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/permission_types/declaration.html');

  }

});

// phone_questions folder
// building folder questions
// Question for building index.html

router.get('/design_patterns/routing_questions/phone_questions/repair_maintain', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var building = req.query.building;
  var what_you_building = req.query.what_you_building;

  if (building == "yes" && what_you_building==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/building/what_you_building" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/repair_maintain/index.html');

  }

});

// repair_maintain folder questions
// Question for repair_maintain index.html

router.get('/design_patterns/routing_questions/phone_questions/animal_welfare', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var repair_maintain = req.query.repair_maintain;
  var what_you_repairing = req.query.what_you_repairing;

  if (repair_maintain == "yes" && what_you_repairing==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/repair_maintain/what_you_repairing" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/animal_welfare/index.html');

  }

});

// animal_welfare folder questions
// Question for animal_welfare index.html

router.get('/design_patterns/routing_questions/phone_questions/scaffolding_ladders', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var animal_welfare = req.query.animal_welfare;
  var what_is_it = req.query.what_is_it;

  if (animal_welfare == "yes" && what_is_it==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/animal_welfare/what_is_it" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/scaffolding_ladders/index.html');

  }

});

// scaffolding_ladders folder questions
// Question for animal_welfare index.html

router.get('/design_patterns/routing_questions/phone_questions/floodplain', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var scaffolding_ladders = req.query.scaffolding_ladders;
  var scaffolding_ladders_time = req.query.scaffolding_ladders_time;

  if (scaffolding_ladders == "yes" && scaffolding_ladders_time==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/scaffolding_ladders/for_how_long" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/floodplain/index.html');

  }

});


// floodplain folder questions
// Question for animal_welfare index.html

router.get('/design_patterns/routing_questions/phone_questions/cables', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var floodplain = req.query.floodplain;
  var what_you_digging = req.query.what_you_digging;

  if (floodplain == "yes" && what_you_digging==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/floodplain/what_you_digging" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/cables/index.html');

  }

});

// cables folder questions
// Question for cables index.html

router.get('/design_patterns/routing_questions/phone_questions/remove_sand_silt', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var cables = req.query.cables;
  var existing_or_new_thing = req.query.existing_or_new_thing;

  if (cables == "yes" && existing_or_new_thing==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/cables/existing_or_new_thing" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/remove_sand_silt/index.html');

  }

});

// cables folder questions
// Question for cables existing_or_new_thing.html
router.get('/design_patterns/routing_questions/phone_questions/cables/on_new_thing', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var existing_or_new_thing = req.query.existing_or_new_thing;
  var on_existing_thing = req.query.on_existing_thing;

  if (existing_or_new_thing == "yes" && on_existing_thing==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/cables/on_existing_thing" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/cables/on_new_thing.html');

  }

});

// remove_sand_silt folder questions
// Question for animal_welfare index.html

router.get('/design_patterns/routing_questions/phone_questions/dewatering', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var remove_sand_silt = req.query.remove_sand_silt;
  var are_you_dredging = req.query.are_you_dredging;

  if (remove_sand_silt == "yes" && are_you_dredging==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/remove_sand_silt/are_you_dredging" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/dewatering/index.html');

  }

});

// remove_sand_silt folder questions
// Question for cables existing_or_new_thing.html
router.get('/design_patterns/routing_questions/phone_questions/remove_sand_silt/what_you_removing', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var are_you_dredging = req.query.are_you_dredging;
  var dredging_distance = req.query.dredging_distance;

  if (are_you_dredging == "yes" && dredging_distance==undefined){

    // if users IS using scaffolding
    res.redirect("/design_patterns/routing_questions/phone_questions/remove_sand_silt/dredging_distance" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('design_patterns/routing_questions/phone_questions/remove_sand_silt/what_you_removing.html');

  }

});

module.exports = router;
