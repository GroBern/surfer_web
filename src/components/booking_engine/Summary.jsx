import React from "react";

const Summary = ({ dateRange, selectedRooms, selectedPackages, addons, totalPrice }) => {
  return (
    <div className="grid border border-black p-4 sm:p-6 rounded-lg">
      <h3 className="text-lg font-semibold">Summary</h3>
      <hr className="w-full my-2 border-gray-300" />

      {dateRange && (
        <>
          <div className="space-y-2">
            <strong>Dates</strong>
            <p className="my-2">{dateRange}</p>
          </div>
          <hr className="w-full my-2 border-gray-300" />
        </>
      )}

      {selectedRooms && selectedRooms.length > 0 && (
        <>
          <div className="space-y-2">
            <strong>Rooms</strong>
            {selectedRooms.map((room, idx) => (
              <p key={idx} className="my-2">
                {room}
              </p>
            ))}
          </div>
          <hr className="w-full my-2 border-gray-300" />
        </>
      )}

      {selectedPackages && selectedPackages.length > 0 && (
        <>
          <div className="space-y-2">
            <h4 className="text-base font-semibold m-0">Packages</h4>
            {selectedPackages.map((pkg, idx) => (
              <p key={idx} className="my-2">
                {pkg}
              </p>
            ))}
          </div>
          <hr className="w-full my-2 border-gray-300" />
        </>
      )}

      {addons && addons.length > 0 && (
        <>
          <div className="space-y-2">
            <strong>Airport</strong>
            {addons.map((addon) => (
              <p key={addon.title} className="my-2">
                {addon.title}
              </p>
            ))}
          </div>
          <hr className="w-full my-2 border-gray-300" />
        </>
      )}

      {totalPrice > 0 && (
        <p className="mt-2 font-medium">
          <strong>Total Price:</strong> EUR {totalPrice}
        </p>
      )}
    </div>
  );
};

export default Summary;
