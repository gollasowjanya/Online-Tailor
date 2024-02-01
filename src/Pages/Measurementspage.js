import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../app.css';

const MeasurementsPage = () => {
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
    inseam: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log('Submitted measurements:', measurements);
    navigate('/paymentspage');
  };

  return (
    <div className="measurements">
      <h1>Measurements Form</h1>
      <form className="measurementform">
        <label>
          Chest:
          <input
            type="text"
            name="chest"
            value={measurements.chest}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Waist:
          <input
            type="text"
            name="waist"
            value={measurements.waist}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hips:
          <input
            type="text"
            name="hips"
            value={measurements.hips}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Inseam:
          <input
            type="text"
            name="inseam"
            value={measurements.inseam}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="btn measurebtn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MeasurementsPage;
