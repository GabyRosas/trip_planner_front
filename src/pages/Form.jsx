import React, { useState } from 'react';

const ItineraryForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    season: '',
    activities: [],
    duration: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleActivityChange = (activity) => {
    setFormData((prevState) => {
      const activities = prevState.activities.includes(activity)
        ? prevState.activities.filter((a) => a !== activity)
        : [...prevState.activities, activity];
      return { ...prevState, activities };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Lógica para generar itinerario
  };

  return (
    <div className="itinerary-form">
      <h1>Hi, Lara</h1>
      <form onSubmit={handleSubmit}>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Barcelona"
        />

        <label>Season</label>
        <input
          type="text"
          name="season"
          value={formData.season}
          onChange={handleChange}
          placeholder="Spring/Summer/Fall/Winter"
        />

        <label>Favourite activities</label>
        <div className="activities">
          {['Hiking', 'Art', 'Beach', 'Sports', 'Food'].map((activity) => (
            <button
              type="button"
              key={activity}
              className={`activity-btn ${formData.activities.includes(activity) ? 'selected' : ''}`}
              onClick={() => handleActivityChange(activity)}
            >
              {activity}
            </button>
          ))}
        </div>

        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="3 days"
        />

        <label>Budget</label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="150 euros"
        />

      </form>
    </div>
  );
};

export default ItineraryForm;