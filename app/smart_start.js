// this file deals with all paths starting /smart_start
var express = require('express');
var router = express.Router();

router.get('/gds_start', function (req, res) {
  res.render('smart_start/gds_start');
});

router.get('/q-main-river', function (req, res) {
  res.render('smart_start/q-main-river', { 'formaction' : '/smart_start/q-main-river-check' } );
});

// q-main-river-check
// q-main-river  on_main_river yes no dontknow
router.get('/q-main-river-check', function (req, res) {
  if (req.query.on_main_river == "yes"){
    res.redirect("/smart_start/q-sensitive");
  } else if (req.query.on_main_river == "no") {
    res.redirect("/smart_start/a-check-where");
  } else if (req.query.on_main_river == "dontknow") {
      res.redirect("/smart_start/a-check-where");
  } else {
    res.render('/q-main-river'); // No choice made - show page again
  }
});

router.get('/q-sensitive', function (req, res) {
  res.render('smart_start/q-sensitive', { 'formaction' : '/smart_start/q-sensitive-check' } );
});

// q-sensitive-check
// q-sensitive near_sensitive yes no dontknow
router.get('/q-sensitive-check', function (req, res) {
  if (req.query.near_sensitive == "yes"){
    res.redirect("/smart_start/a-need-permit");
  } else if (req.query.near_sensitive == "no") {
    res.redirect("/smart_start/q-excluded");
  } else if (req.query.near_sensitive == "dontknow") {
      res.redirect("/smart_start/a-check-where");
  } else {
    res.render('/q-sensitive'); // No choice made - show page again
  }
});

router.get('/q-excluded', function (req, res) {
  res.render('smart_start/q-excluded', { 'formaction' : '/smart_start/q-excluded-check' } );
});

// q-excluded-check
// q-excluded  is_excluded  yes  no
router.get('/q-excluded-check', function (req, res) {
  if (req.query.is_excluded == "yes"){
    res.redirect("/smart_start/a-excluded");
  } else if (req.query.is_excluded == "no") {
    res.redirect("/smart_start/q-exemption");
  } else {
    res.render('/q-excluded'); // No choice made - show page again
  }
});

router.get('/q-exemption', function (req, res) {
  res.render('smart_start/q-exemption', { 'formaction' : '/smart_start/q-exemption-check' } );
});

// q-exemption-check
// q-exemption  is_exempt  yes  no
router.get('/q-exemption-check', function (req, res) {
  if (req.query.is_exempt == "yes"){
    res.redirect("/smart_start/q-grid-ref");
  } else if (req.query.is_exempt == "no") {
    res.redirect("/smart_start/a-permit");
  } else {
    res.render('smart_start/q-exemption'); // No choice made - show page again
  }
});

router.get('/q-grid-ref', function (req, res) {
  res.render('smart_start/q-grid-ref', { 'formaction' : '/smart_start/q-grid-ref' } ); // to self - end of this sample journey
});

//

// a-check-where
// a-excluded
// a-permit
// a-contact

module.exports = router;
