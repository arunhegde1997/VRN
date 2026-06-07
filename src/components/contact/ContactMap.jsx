function ContactMap() {
  return (
    <div className="map-box">
      <iframe
        title="VRN Location"
        src="https://maps.google.com/maps?q=Siddapur%20Uttara%20Kannada&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactMap;