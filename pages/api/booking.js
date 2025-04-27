import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { userEmail, hospitalId, service, date } = req.body;

    if (!userEmail || !hospitalId || !service || !date) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const bookingsPath = path.join(process.cwd(), "data", "bookings.json");
    const bookings = JSON.parse(fs.readFileSync(bookingsPath, "utf8"));

    const newBooking = {
      id: bookings.length + 1,
      userEmail,
      hospitalId,
      service,
      date,
    };

    bookings.push(newBooking);

    fs.writeFileSync(bookingsPath, JSON.stringify(bookings, null, 2));

    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
