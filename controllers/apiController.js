const Trip = require('../models/Trip');

const apiController = {
  getDestinations: (req, res) => {
    const destinations = [
      { id: 1, name: 'Paris', country: 'France', image: '/images/paris.jpg' },
      { id: 2, name: 'Tokyo', country: 'Japan', image: '/images/tokyo.jpg' },
      { id: 3, name: 'New York', country: 'USA', image: '/images/nyc.jpg' },
      { id: 4, name: 'London', country: 'UK', image: '/images/london.jpg' },
      { id: 5, name: 'Rome', country: 'Italy', image: '/images/rome.jpg' },
      { id: 6, name: 'Barcelona', country: 'Spain', image: '/images/barcelona.jpg' }
    ];
    res.json(destinations);
  },

  getTrips: (req, res) => {
    const trips = Trip.getAll();
    res.json(trips);
  },

  createTrip: (req, res) => {
    try {
      const trip = Trip.create(req.body);
      res.status(201).json(trip);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getWeather: (req, res) => {
    // Mock weather data - in production, integrate with a real weather API
    const weatherData = {
      city: req.params.city,
      temperature: Math.floor(Math.random() * 30) + 5,
      condition: ['sunny', 'cloudy', 'rainy', 'partly-cloudy'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 100),
      forecast: Array.from({ length: 5 }, (_, i) => ({
        day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
        temp: Math.floor(Math.random() * 30) + 5,
        condition: ['sunny', 'cloudy', 'rainy', 'partly-cloudy'][Math.floor(Math.random() * 4)]
      }))
    };
    res.json(weatherData);
  }
};

module.exports = apiController;