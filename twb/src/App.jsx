import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  console.log("formdata->", formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-8">
          Two way binding
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="text"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile
            </label>
            <input
              value={formData.mobile}
              onChange={handleChange}
              name="mobile"
              type="number"
              id="mobile"
              placeholder="Mobile"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-3 bg-blue-600 text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
