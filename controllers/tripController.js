const Trip = require('../models/Trip');

const tripController = {
  index: (req, res) => {
    const trips = Trip.getAll();
    res.render('pages/trips', {
      title: 'All Trips - EzTrip',
      trips,
      currentPath: req.path
    });
  },

  search: (req, res) => {
    const { destination, budget, duration } = req.query;
    const trips = Trip.search({ destination, budget, duration });
    res.render('pages/search', {
      title: 'Search Results - EzTrip',
      trips,
      searchParams: req.query,
      currentPath: req.path
    });
  },

  plan: (req, res) => {
    res.render('pages/plan', {
      title: 'Plan Your Trip - EzTrip',
      currentPath: req.path
    });
  },

  show: (req, res) => {
    const trip = Trip.getById(req.params.id);
    if (!trip) {
      return res.status(404).render('pages/404', {
        title: 'Trip Not Found - EzTrip',
        currentPath: req.path
      });
    }
    res.render('pages/trip-detail', {
      title: `${trip.destination} - EzTrip`,
      trip,
      currentPath: req.path
    });
  },

  create: (req, res) => {
    const tripData = req.body;
    const trip = Trip.create(tripData);
    res.redirect(`/trips/${trip.id}`);
  }
};

module.exports = tripController;