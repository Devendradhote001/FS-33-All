import React from "react";
import { MapPin, Mail, Phone, User, Eye, EyeOff } from "lucide-react";

const UserCard = ({ userData, handleDelete }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const getInitials = (firstname, lastname) => {
    return `${firstname.charAt(0)}${lastname.charAt(0)}`.toUpperCase();
  };

  const formatAddress = (address) => {
    return `${address.number} ${address.street}, ${address.city} ${address.zipcode}`;
  };

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="w-1/8 min-w-[18rem] max-w-[15rem] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 text-white relative">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>

        {/* Profile Avatar */}
        <div className="flex flex-col items-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mb-3 ring-4 ring-white/30">
            {getInitials(userData.name.firstname, userData.name.lastname)}
          </div>
          <h2 className="text-xl font-bold text-center">
            {capitalizeWords(
              `${userData.name.firstname} ${userData.name.lastname}`
            )}
          </h2>
          <p className="text-blue-100 text-sm">@{userData.username}</p>
          <div className="mt-2 px-3 py-1 bg-white/20 rounded-full text-xs">
            ID: {userData.id}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Email
              </p>
              <p className="text-sm font-medium truncate">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-700">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Phone
              </p>
              <p className="text-sm font-medium">{userData.phone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 text-gray-700">
            <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mt-0.5">
              <MapPin className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Address
              </p>
              <p className="text-sm font-medium leading-5">
                {formatAddress(userData.address)}
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleDelete(userData.id)}
              className="px-4 py-3 text-white bg-red-500 rounded-md cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
