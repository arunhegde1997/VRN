function BusinessHours() {
  return (
    <div className="business-hours">
      <h3>Business Hours</h3>

      <div className="hour-row">
        <span>Monday - Saturday</span>
        <strong>9:00 AM - 6:00 PM</strong>
      </div>

      <div className="hour-row">
        <span>Sunday</span>
        <strong>10:00 AM - 4:00 PM</strong>
      </div>

      <p>* WhatsApp orders accepted 24/7</p>
    </div>
  );
}

export default BusinessHours;