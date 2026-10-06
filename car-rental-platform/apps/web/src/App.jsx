import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:4000/api';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [form, setForm] = useState({
    customerName: '',
    vehicleId: '',
    startDate: '',
    endDate: '',
    totalPrice: 0
  });

  useEffect(() => {
    fetch(`${API_URL}/vehicles`)
      .then(res => res.json())
      .then(data => setVehicles(data));
  }, []);

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setForm({
      customerName: '',
      vehicleId: vehicle.id,
      startDate: '',
      endDate: '',
      totalPrice: vehicle.pricePerDay
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...form,
      totalPrice: Number(form.totalPrice)
    };

    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      alert('Booking failed');
      return;
    }

    const result = await response.json();
    alert(`Booking confirmed for ${result.vehicleName}`);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Local rental marketplace</p>
          <h1>DriveLocal Rentals</h1>
        </div>
        <button className="primary-btn">List your car</button>
      </header>

      <section className="hero">
        <div>
          <p className="tag">Easy booking for customers</p>
          <h2>Rent a car in your city in minutes</h2>
          <p>
            Search by location, vehicle type, and budget. Book online and drive away.
          </p>
        </div>
      </section>

      <section className="filters">
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Vehicle type" />
        <input type="text" placeholder="Max price" />
        <button className="primary-btn">Search</button>
      </section>

      <section className="catalog">
        {vehicles.map(vehicle => (
          <article key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
            <div className="card-body">
              <div className="card-header">
                <div>
                  <h3>{vehicle.make} {vehicle.model}</h3>
                  <p>{vehicle.company}</p>
                </div>
                <span className="rating">★ {vehicle.rating}</span>
              </div>

              <div className="meta-row">
                <span>{vehicle.type}</span>
                <span>{vehicle.transmission}</span>
                <span>{vehicle.seats} seats</span>
              </div>

              <div className="price-row">
                <strong>R{vehicle.pricePerDay}</strong>
                <span>/ day</span>
              </div>

              <button className="primary-btn" onClick={() => handleBookNow(vehicle)}>
                Book now
              </button>
            </div>
          </article>
        ))}
      </section>

      {selectedVehicle && (
        <section className="booking-panel">
          <h3>Book {selectedVehicle.make} {selectedVehicle.model}</h3>
          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              placeholder="Customer name"
              value={form.customerName}
              onChange={(e) => setForm({ ...form, customerName: e.target.value })}
            />
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
            <input
              type="number"
              value={form.totalPrice}
              onChange={(e) => setForm({ ...form, totalPrice: Number(e.target.value) })}
            />
            <button type="submit" className="primary-btn">Confirm booking</button>
          </form>
        </section>
      )}
    </div>
  );
}

export default App;
