import { useState } from "react";

export default function BookingForm({ hospital, onClose }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: user.email,
        hospitalId: hospital.id,
        service,
        date,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Booking successful!");
      onClose();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">{hospital.name}</h2>

        <select
          className="border p-2 w-full mb-4"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          {hospital.services.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border p-2 w-full mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Book
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
