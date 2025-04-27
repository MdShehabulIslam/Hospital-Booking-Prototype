import hospitals from "../../data/hospitals.json";

export default function handler(req, res) {
  res.status(200).json(hospitals);
}
