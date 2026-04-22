function ContactForm({ formData, handleChange, handleSubmit, buttonText }) {
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.group}>
        <label style={styles.label}>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>
        {buttonText}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "500px"
  },
  group: {
    marginBottom: "16px"
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default ContactForm;