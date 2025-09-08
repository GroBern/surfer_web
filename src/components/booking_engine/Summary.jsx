import React from "react";

const Summary = ({ dateRange, selectedRooms, selectedPackages, addons, totalPrice }) => {
  return (
    <div className="summary-box">
      <h3>Summary</h3>
      <hr style={{ width: "100%" }} />
      
      {dateRange && (
        <>
          <div>
            <strong>Dates</strong> <p>{dateRange}</p>
          </div>
          <hr style={{ width: "100%" }} />
        </>
      )}

      {selectedRooms && selectedRooms.length > 0 && (
        <>
          <div>
            <strong>Rooms</strong>
            {(selectedRooms || []).map((room, idx) => (
              <p key={idx}>{room}</p>
            ))}
          </div>
          <hr style={{ width: "100%" }} />
        </>
      )}

    {selectedPackages && selectedPackages.length > 0 && (
      <>
        <div>
          <h4 style={{ margin: 0 }}>Packages</h4>
          {(selectedPackages || []).map((pkg, idx) => (
            <p key={idx}>{pkg}</p>
          ))}
        </div>
        <hr style={{ width: "100%" }} />
      </>
      )}
      
      {addons && addons.length > 0 && (
        <>
          <div>
            <strong>Airport</strong>
            {addons.map((addon) => (
              <p key={addon.title}>
                {addon.title}
              </p>
            ))}
          </div>
          <hr style={{ width: "100%" }} />
        </>
      )}

      {totalPrice > 0 && (
      <p>
        <strong>Total Price:</strong> EUR {totalPrice}
      </p>
      )}
    </div>
  );
};

export default Summary;
