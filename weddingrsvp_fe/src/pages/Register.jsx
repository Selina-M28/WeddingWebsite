import React, { useState} from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add logic here to send to backend or save in state
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-2xl mx-auto p-8 bg-blue-50 border border-purple-100 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-3xl font-semibold text-purple-600 text-center mb-6 tracking-wide">
        Add Guest Address
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
          required
        />
      </div>

      <input
        type="text"
        name="street"
        placeholder="Street Address"
        value={formData.street}
        onChange={handleChange}
        className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={handleChange}
          className="p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email (optional)"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white"
      />

      <button
        type="submit"
        className="w-full bg-purple-300 hover:bg-purple-400 text-white font-medium py-3 rounded-lg transition duration-200"
      >
        Save Address
      </button>
    </form>
  );
};

export default Register