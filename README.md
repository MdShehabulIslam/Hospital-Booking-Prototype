# Hospital Booking Prototype

This project is a **Hospital Booking System** built using **Next.js**, **React**, **Tailwind CSS**, and a **JSON-based database**. It provides a simple front-end interface where users can authenticate, view available hospitals, book appointments, and interact with basic error handling.

---

## Features

- **User Authentication**: Secure login via email and password.
- **Hospital List**: Displays available hospitals.
- **Service Booking**: Select a hospital's service/test and book an appointment.
- **Validation & Error Handling**: Basic form validation and error handling.

---

## Tech Stack

- **Frontend**: 
  - Next.js
  - React
  - Tailwind CSS
- **Backend**:
  - Next.js API routes (Serverless)
  - JSON file as a simple database
- **Development Tools**:
  - Docker (for containerization)
  - Git for version control

---

## Installation

Follow the steps below to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (>= 16.x.x)
- **npm** or **yarn**
- **Docker** (optional, for containerized setup)

### 1. Clone the Repository

```bash
git clone https://github.com/MdShehabulIslam/Hospital-Booking-Prototype.git
cd Hospital-Booking-Prototype
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Dockerized Environment 
```bash
docker build -t hospital-booking-prototype
docker run -p 3000:3000 hospital-booking-prototype
Visit the application at http://localhost:3000.
```

## JSON database

The application uses a simple JSON file as a database for storing hospital data and bookings.





