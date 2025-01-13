import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Modal, Button, Form } from 'react-bootstrap';

const Header = ({ user, onLogout }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu
  const [editableUser, setEditableUser] = useState({
    photo: '',
    username: user?.name || 'User Name',
    email: user?.email || 'email@example.com',
    address: '1234 Main Street, New York, NY',
    phoneNumber: '123-456-7890',
    accountStatus: 'Active',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditableUser({ ...editableUser, photo: URL.createObjectURL(file) });
    }
  };

  const handleSaveProfile = () => {
    console.log('Updated Profile:', editableUser);
    setShowProfileModal(false);
  };

  return (
    <header style={styles.header}>
      {/* Mobile Menu Toggle */}
      <div style={styles.mobileMenuToggle}>
        <Button
          variant="light"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          style={styles.hamburgerButton}
        >
          ☰
        </Button>
      </div>

      {/* Sliding Panel for Mobile Navigation */}
      <div
        style={{
          ...styles.mobileMenu,
          transform: showMobileMenu ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <nav style={styles.mobileNav}>
          <Button
            variant="light"
            onClick={() => setShowMobileMenu(false)}
            style={styles.closeButton}
          >
            ✕
          </Button>
          <Link to="/" style={styles.link} onClick={() => setShowMobileMenu(false)}>
            Home
          </Link>
          <Link to="/how-erec-works" style={styles.link} onClick={() => setShowMobileMenu(false)}>
            How eREC Works
          </Link>
          <Link to="/benefits" style={styles.link} onClick={() => setShowMobileMenu(false)}>
            Benefits
          </Link>
          <Link
            to="/security-and-privacy"
            style={styles.link}
            onClick={() => setShowMobileMenu(false)}
          >
            Security and Privacy
          </Link>
          <Link to="/how-much" style={styles.link} onClick={() => setShowMobileMenu(false)}>
            How Much
          </Link>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/how-erec-works" style={styles.link}>
          How eREC Works
        </Link>
        <Link to="/benefits" style={styles.link}>
          Benefits
        </Link>
        <Link to="/security-and-privacy" style={styles.link}>
          Security and Privacy
        </Link>
        <Link to="/how-much" style={styles.link}>
          How Much
        </Link>
      </nav>

      {/* User Info */}
      <div style={styles.userInfo}>
        <Dropdown align="end">
          <Dropdown.Toggle variant="link" style={styles.userDropdownToggle}>
            <img
              src={editableUser.photo || 'https://via.placeholder.com/40'}
              alt="User"
              style={styles.userPhoto}
            />
            Welcome back, {editableUser.username}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setShowProfileModal(true)}>View Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => alert('Change Password')}>Change Password</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Profile Modal */}
      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>View Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPhoto" className="mb-3">
              <Form.Label>Profile Photo</Form.Label>
              <div className="mb-2">
                <img
                  src={editableUser.photo || 'https://via.placeholder.com/100'}
                  alt="Profile"
                  style={styles.profilePhotoPreview}
                />
              </div>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </Form.Group>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={editableUser.username}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editableUser.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={editableUser.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={editableUser.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAccountStatus" className="mb-3">
              <Form.Label>Account Status</Form.Label>
              <Form.Control
                type="text"
                name="accountStatus"
                value={editableUser.accountStatus}
                disabled
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowProfileModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#990808',
    padding: '10px 20px',
    color: 'white',
    position: 'relative',
  },
  mobileMenuToggle: {
    display: 'none',
    alignSelf: 'flex-start',
  },
  hamburgerButton: {
    fontSize: '20px',
    padding: '5px 10px',
    border: 'none',
    backgroundColor: 'white',
    color: '#990808',
    borderRadius: '5px',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '70%',
    backgroundColor: '#990808',
    zIndex: 1000,
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    padding: '20px',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  closeButton: {
    fontSize: '20px',
    border: 'none',
    alignSelf: 'flex-end',
  },
  nav: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  userDropdownToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    textDecoration: 'none',
    border: 'none',
    backgroundColor: 'transparent',
  },
  userPhoto: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  profilePhotoPreview: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};



export default Header;
