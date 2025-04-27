export default function HospitalCard({ hospital, onSelect }) {
  return (
    <div
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
      onClick={() => onSelect(hospital)}
    >
      <h2 className="text-xl font-bold">{hospital.name}</h2>
      <ul className="mt-2">
        {hospital.services.map((service, index) => (
          <li key={index} className="text-gray-600">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
