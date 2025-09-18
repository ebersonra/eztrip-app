class Trip {
  constructor(data) {
    this.id = data.id || this.generateId();
    this.destination = data.destination;
    this.country = data.country;
    this.description = data.description;
    this.duration = data.duration;
    this.budget = data.budget;
    this.image = data.image;
    this.featured = data.featured || false;
    this.activities = data.activities || [];
    this.rating = data.rating || 0;
    this.reviews = data.reviews || 0;
    this.createdAt = data.createdAt || new Date();
  }

  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  static trips = [
    {
      id: 'paris-01',
      destination: 'Paris',
      country: 'France',
      description: 'Experience the City of Light with its iconic landmarks, world-class museums, and romantic atmosphere.',
      duration: '5 days',
      budget: 1200,
      image: '/images/paris.jpg',
      featured: true,
      activities: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
      rating: 4.8,
      reviews: 234
    },
    {
      id: 'tokyo-01',
      destination: 'Tokyo',
      country: 'Japan',
      description: 'Discover the perfect blend of traditional culture and modern innovation in Japan\'s vibrant capital.',
      duration: '7 days',
      budget: 1800,
      image: '/images/tokyo.jpg',
      featured: true,
      activities: ['Shibuya Crossing', 'Mount Fuji Day Trip', 'Tsukiji Fish Market', 'Temple Visits'],
      rating: 4.9,
      reviews: 189
    },
    {
      id: 'nyc-01',
      destination: 'New York',
      country: 'USA',
      description: 'The city that never sleeps offers endless possibilities from Broadway shows to world-famous landmarks.',
      duration: '4 days',
      budget: 1500,
      image: '/images/nyc.jpg',
      featured: false,
      activities: ['Statue of Liberty', 'Central Park', 'Broadway Show', 'Times Square'],
      rating: 4.7,
      reviews: 312
    },
    {
      id: 'rome-01',
      destination: 'Rome',
      country: 'Italy',
      description: 'Walk through history in the Eternal City, home to ancient wonders and incredible cuisine.',
      duration: '6 days',
      budget: 1000,
      image: '/images/rome.jpg',
      featured: true,
      activities: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'],
      rating: 4.6,
      reviews: 278
    }
  ];

  static getAll() {
    return this.trips.map(trip => new Trip(trip));
  }

  static getFeatured() {
    return this.trips
      .filter(trip => trip.featured)
      .map(trip => new Trip(trip));
  }

  static getById(id) {
    const trip = this.trips.find(trip => trip.id === id);
    return trip ? new Trip(trip) : null;
  }

  static search(params) {
    let filtered = this.trips;

    if (params.destination) {
      filtered = filtered.filter(trip => 
        trip.destination.toLowerCase().includes(params.destination.toLowerCase()) ||
        trip.country.toLowerCase().includes(params.destination.toLowerCase())
      );
    }

    if (params.budget) {
      filtered = filtered.filter(trip => trip.budget <= parseInt(params.budget));
    }

    if (params.duration) {
      const days = parseInt(params.duration);
      filtered = filtered.filter(trip => {
        const tripDays = parseInt(trip.duration);
        return Math.abs(tripDays - days) <= 2;
      });
    }

    return filtered.map(trip => new Trip(trip));
  }

  static create(data) {
    const trip = new Trip(data);
    this.trips.push(trip);
    return trip;
  }
}

module.exports = Trip;