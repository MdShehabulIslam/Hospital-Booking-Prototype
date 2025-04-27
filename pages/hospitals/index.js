import { useState, useEffect } from "react";
import HospitalCard from "../../components/HospitalCard";
import BookingForm from "../../components/BookingForm";

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setHospitals(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hospitals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            hospital={hospital}
            onSelect={setSelectedHospital}
          />
        ))}
      </div>

      {selectedHospital && (
        <BookingForm
          hospital={selectedHospital}
          onClose={() => setSelectedHospital(null)}
        />
      )}
    </div>
  );
}
