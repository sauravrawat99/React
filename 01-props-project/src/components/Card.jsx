const Card = ({ elem }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-2xl transition duration-300 m">
      <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          className="w-full h-full object-contain"
          src={elem.brandLogo}
          alt={elem.companyName}
        />
      </div>

      <h1 className="text-xl font-semibold text-gray-800">{elem.post}</h1>

      <p className="text-gray-500 text-sm">{elem.datePosted}</p>

      <p className="text-gray-600 font-medium">{elem.companyName}</p>

      <div className="flex gap-2 mt-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
          {elem.tag1}
        </span>

        <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
          {elem.tag2}
        </span>
      </div>

      <p className="text-lg font-bold text-gray-800 mt-2">{elem.pay}</p>

      <p className="text-sm text-gray-500">{elem.location}</p>
    </div>
  );
};

export default Card;
