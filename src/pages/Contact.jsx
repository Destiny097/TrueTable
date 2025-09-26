import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    companySize: '',
    howCanWeHelp: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server.
    // For this example, we'll just log it to the console and show a success message.
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-5xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact sales</h1>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-blue-500 mr-2" size={20} />
              Request a demo
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-blue-500 mr-2" size={20} />
              Learn which plan is right for your team
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-blue-500 mr-2" size={20} />
              Get onboarding help
            </li>
            <li className="flex items-center text-gray-700">
              <CheckCircle className="text-blue-500 mr-2" size={20} />
              Discuss Enterprise features
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">How we can help?</h2>
          {formSubmitted ? (
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <p className="text-green-700 text-lg font-semibold">Thank you for your submission!</p>
              <p className="text-green-600 mt-2">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Work email
                  <span className="text-gray-500 font-normal ml-1"> (we automatically ignore non-company emails)</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                  Company size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="" disabled>Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div>
                <label htmlFor="howCanWeHelp" className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help?
                  <span className="text-gray-500 font-normal ml-1"> (optional, but saves time)</span>
                </label>
                <textarea
                  id="howCanWeHelp"
                  name="howCanWeHelp"
                  value={formData.howCanWeHelp}
                  onChange={handleChange}
                  placeholder="I'm interested in..."
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Get in touch
                </button>
                <a
                  href="mailto:contact@rebolt.ai"
                  className="text-sm text-gray-500 hover:underline flex items-center"
                >
                  <Mail className="mr-2" size={16} />
                  Or email us at <span className="text-gray-900 font-semibold ml-1">contact@rebolt.ai</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
