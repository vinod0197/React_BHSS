import React, { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Card,
  Button,
  Row,
  Col,
  Table,
  ButtonGroup,
  ToggleButton,
  Modal,
  Form,
} from 'react-bootstrap';

const HomePage = ({ user }) => {
  const [activeTab, setActiveTab] = useState('eREC');
  const [adminStatus, setAdminStatus] = useState('Active');
  const [showModal, setShowModal] = useState(false);
  const [schoolDetails, setSchoolDetails] = useState({
    address:
      'Bronx High School of Science, 1234 Main Street, City Hall Park, New York City, New York, Zip code-10007',
    primaryPhone: '212-456-7890',
    secondaryPhone: '314-123-4567',
    fax: '314-123-4567',
    website: 'www.school.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchoolDetails({ ...schoolDetails, [name]: value });
  };

  const handleSaveDetails = () => {
    setShowModal(false);
    console.log('Saved Details:', schoolDetails);
  };

  const handleInvite = () => {
    const url = 'https://vinod0197.github.io/React_BHSS';
    if (navigator.share) {
      navigator
        .share({
          title: 'React BHSS',
          text: 'Check out this project!',
          url,
        })
        .then(() => console.log('Link shared successfully'))
        .catch((error) => console.error('Error sharing the link:', error));
    } else {
      alert(`Sharing is not supported in this browser. Copy the link: ${url}`);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'eREC':
        return (
          <Card className="p-4 shadow-sm" style={styles.card}>
            <Card.Header className="text-white" style={styles.cardHeader}>
              Group Basic Details
            </Card.Header>
            <Card.Body>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <strong>Group Admin Name:</strong> {user?.name || 'Jane Doe'}
                </Col>
                <Col xs={12} md={6}>
                  <strong>eREC Group ID:</strong> {user?.id || '999999'}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <strong>Last Sign in:</strong> Jul 30, 2024
                </Col>
                <Col xs={12} md={6}>
                  <strong>Account Type:</strong> School - Public
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <strong>Account Status:</strong>{' '}
                  <span style={{ color: 'gold' }}>In-Active</span>
                </Col>
                <Col xs={12} md={6}>
                  <strong>Expiry Date:</strong> -
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer
              className="d-flex justify-content-between align-items-center"
              style={styles.cardFooter}
            >
              <span style={{ color: 'white' }}>
                Invite Parents / Guardians / Employees to join your eREC account
              </span>
              <Button variant="danger" style={{ borderRadius: '5px' }} onClick={handleInvite}>
                Invite Now
              </Button>
            </Card.Footer>
          </Card>
        );

      case 'Group Administrator':
        return <p>Details about Group Administrators.</p>;

      case 'Other Administrator':
        return (
          <Container className="mt-4">
            <Row className="mb-3">
              <Col>
                <h5>Other Administrator List</h5>
              </Col>
              <Col className="d-flex justify-content-end">
                <ButtonGroup>
                  <ToggleButton
                    type="radio"
                    name="status"
                    variant={adminStatus === 'Active' ? 'danger' : 'outline-danger'}
                    checked={adminStatus === 'Active'}
                    onClick={() => setAdminStatus('Active')}
                  >
                    Active
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    name="status"
                    variant={adminStatus === 'Inactive' ? 'danger' : 'outline-danger'}
                    checked={adminStatus === 'Inactive'}
                    onClick={() => setAdminStatus('Inactive')}
                  >
                    Inactive
                  </ToggleButton>
                </ButtonGroup>
              </Col>
            </Row>
            <Table bordered hover responsive>
              <thead>
                <tr style={styles.tableHeader}>
                  <th>Admin User Name</th>
                  <th>Title</th>
                  <th>eREC Role</th>
                  <th>Username / Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jane Doe</td>
                  <td>HOD</td>
                  <td>Dept. of science</td>
                  <td>name@group.com</td>
                  <td>
                    <Button variant="outline-danger" size="sm" className="me-2">
                      View
                    </Button>
                    <Button variant="outline-danger" size="sm" className="me-2">
                      Edit
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        );

      case 'General':
        return (
          <Card className="p-4 shadow-sm" style={styles.card}>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={styles.cardHeaderLight}
            >
              General School Information
              <Button
                variant="link"
                style={{ color: '#a10733', textDecoration: 'none', fontWeight: 'bold' }}
                onClick={() => setShowModal(true)}
              >
                Edit Details
              </Button>
            </Card.Header>
            <Card.Body>
              <Row className="mb-3">
                <Col>
                  <strong>Primary Address:</strong> {schoolDetails.address}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={4}>
                  <strong>Primary Phone Number:</strong> {schoolDetails.primaryPhone}
                </Col>
                <Col xs={12} md={4}>
                  <strong>Secondary Phone Number:</strong> {schoolDetails.secondaryPhone}
                </Col>
                <Col xs={12} md={4}>
                  <strong>FAX Number:</strong> {schoolDetails.fax}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Website URL:</strong> {schoolDetails.website}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );

      case 'Group Users':
        return <p>Information on Group Users.</p>;

      case 'Member list':
        return <p>List of members in the system.</p>;

      case 'Account Summary':
        return <p>Summary of user accounts.</p>;

      default:
        return <p>Welcome to BHSS.</p>;
    }
  };

  return (
    <Container className="my-4">
      <h1 className="text-center">Bronx High School of Science</h1>
      <p className="text-center text-muted">District: New York</p>
      <Tabs
        id="controlled-tab"
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="mb-3"
      >
        <Tab eventKey="eREC" title="eREC Profile" />
        <Tab eventKey="Group Administrator" title="Group Administrator" />
        <Tab eventKey="Other Administrator" title="Other Administrator" />
        <Tab eventKey="General" title="General" />
        <Tab eventKey="Group Users" title="Group Users" />
        <Tab eventKey="Member list" title="Member list" />
        <Tab eventKey="Account Summary" title="Account Summary" />
      </Tabs>
      <div>{renderTabContent()}</div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit School Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {['address', 'primaryPhone', 'secondaryPhone', 'fax', 'website'].map((field) => (
              <Form.Group controlId={`form${field}`} className="mb-3" key={field}>
                <Form.Label>{field}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter ${field}`}
                  name={field}
                  value={schoolDetails[field]}
                  onChange={handleInputChange}
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveDetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

const styles = {
  card: {
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  cardHeader: {
    backgroundColor: '#444',
    borderRadius: '8px',
  },
  cardHeaderLight: {
    backgroundColor: '#fff',
    color: '#a10733',
  },
  cardFooter: {
    backgroundColor: '#444',
  },
  tableHeader: {
    backgroundColor: '#f7f7f7',
    color: '#a10733',
  },
};

export default HomePage;
