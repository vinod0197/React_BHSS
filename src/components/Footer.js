import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Need Help? - Contact Support Team: <strong>888-514-eREC (3732)</strong>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '15px 10px',
    marginTop: '20px',
    width: '100%',
    position: 'relative', // Ensures it adjusts with the content
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.5', // Improved readability
    margin: '0',
    padding: '0 15px', // Adds slight padding for mobile views
  },
};

export default Footer;
