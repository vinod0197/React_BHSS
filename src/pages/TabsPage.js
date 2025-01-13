import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TabsPage = ({ user }) => {
  // Mock Data (you can replace with dynamic data as required)
  const accountDetails = {
    groupName: user?.name || 'Unknown',
    groupId: user?.id || '0000',
    accountStatus: 'Active',
    lastSignedIn: '2025-01-12 10:35 AM',
    accountType: user?.role || 'Candidate',
    expiryDate: '2025-12-31',
  };

  return (
    <div className="container mt-4">
      <h4>Group Basic Details</h4>
      <p style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
        <strong>Group Admin Name:</strong> {accountDetails.groupName} <br />
        <strong>eREC Group ID:</strong> {accountDetails.groupId} <br />
        <strong>Account Status:</strong> {accountDetails.accountStatus} <br />
        <strong>Last Signed In:</strong> {accountDetails.lastSignedIn} <br />
        <strong>Account Type:</strong> {accountDetails.accountType} <br />
        <strong>Expiry Date:</strong> {accountDetails.expiryDate}
      </p>
    </div>
  );
};

export default TabsPage;
