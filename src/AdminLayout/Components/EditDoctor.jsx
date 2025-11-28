import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const EditDoctor = () => {
  const location = useLocation();
  const { doctor } = location.state || {};
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: doctor?.name || "",
    email: doctor?.email || "",
    location: {
      city: doctor?.location?.city || "",
      address: doctor?.location?.address || "",
    },
    phoneNumber: doctor?.phone || "",
    image: doctor?.image || "",
    specialty: doctor?.specialty || "",
    consultationPrice: doctor?.consultationPrice || "",
    experience: doctor?.experience || "",
    bio: doctor?.bio || "",
    education: doctor?.education || "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedDoctor = { ...formData };
    try {
      await axios.put(`${URL}/doctors/${id}`, updatedDoctor, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setShowSuccess(true);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      location: {
        city: "",
        address: "",
      },
      phoneNumber: "",
      image: "",
      specialty: "",
      consultationPrice: "",
      experience: "",
      bio: "",
      education: "",
    });

    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen bg-dark-textPrimary">
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in ">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>

            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm">Doctor Edited successfully.</p>
            </div>

            <button
              onClick={() => setShowSuccess(false)}
              className="ml-4 text-white hover:text-gray-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Edit the Doctor
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Fill in the details to edit the doctor
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 mb-4">
                {previewImage || formData.image ? (
                  <img
                    src={previewImage || formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full border-4 border-indigo-200"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    image: e.target.value,
                  }));
                  setPreviewImage(e.target.value);
                }}
                placeholder="Enter image URL (https://...)"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter doctor's name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="doctor@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+20 123 456 7890"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                City
              </label>
              <textarea
                name="city"
                value={formData.location.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: { ...formData.location, city: e.target.value },
                  })
                }
                placeholder="Enter clinic address"
                required
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.location.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: { ...formData.location, address: e.target.value },
                  })
                }
                placeholder="Enter clinic address"
                required
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Specialty
              </label>
              <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                placeholder="Enter the specialty"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Consultation Price
              </label>
              <input
                type="number"
                name="consultationPrice"
                value={formData.consultationPrice}
                onChange={handleChange}
                placeholder="Enter the consultation price"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Experience Years
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter the experience years"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Enter Bio"
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Edit Doctor
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDoctor;
