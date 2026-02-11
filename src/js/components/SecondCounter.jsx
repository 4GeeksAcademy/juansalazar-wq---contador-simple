import React from "react";

const SecondCounter = ({ seconds }) => {
  // Convierte a 6 dígitos: 000003, 000010, 001234, etc.
  const digits = seconds.toString().padStart(6, "0").split("");

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="d-flex align-items-center bg-dark p-3 rounded gap-2">
        {/* Icono */}
        <div className="bg-black text-white px-3 py-2 rounded">
          <i className="fa-regular fa-clock fs-3"></i>
        </div>

        {/* Dígitos */}
        {digits.map((digit, index) => (
          <div
            key={index}
            className="bg-black text-white px-3 py-2 rounded fs-3 fw-bold"
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondCounter;
