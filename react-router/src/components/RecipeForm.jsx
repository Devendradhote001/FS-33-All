import React from "react";

const RecipeForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          🍳 Add a New Recipe
        </h2>

        <form className="flex flex-col gap-4">
          {/* Recipe Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Name
            </label>
            <input
              type="text"
              placeholder="Enter recipe name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ingredients
            </label>
            <textarea
              placeholder="List your ingredients (comma separated)"
              className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Cooking Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Cooking Time (in minutes)
            </label>
            <input
              type="number"
              placeholder="e.g. 30"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Difficulty
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:border-pink-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select difficulty
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-gray-600 border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-500/70 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
