const Trip = require('../models/Trip');

const homeController = {
  index: (req, res) => {
    const featuredTrips = Trip.getFeatured();
    res.render('pages/home', {
      title: 'EzTrip - Plan Your Perfect Journey',
      featuredTrips,
      currentPath: req.path
    });
  },

  about: (req, res) => {
    res.render('pages/about', {
      title: 'About Us - EzTrip',
      currentPath: req.path
    });
  },

  contact: (req, res) => {
    res.render('pages/contact', {
      title: 'Contact Us - EzTrip',
      currentPath: req.path
    });
  }
};

module.exports = homeController;