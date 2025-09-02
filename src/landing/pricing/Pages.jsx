import React from 'react'

function Pages() {
  return (
    <div style={{ maxWidth: '900px', margin: '50px auto', padding: '20px' }}>
      {/* Account Opening Charges */}
      <h3 style={{ marginBottom: '20px' }}>Charges for account opening</h3>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'center',
          border: '1px solid #ddd',
        }}
      >
        <thead style={{ backgroundColor: '#f8f9fa' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Type of account</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Online account</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
              <span style={{ background: '#198754', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>FREE</span>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Offline account</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
              <span style={{ background: '#198754', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>FREE</span>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>NRI account (offline only)</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>₹ 500</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>₹ 500</td>
          </tr>
        </tbody>
      </table>

      {/* AMC Charges */}
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Demat AMC (Annual Maintenance Charge)</h3>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'center',
          border: '1px solid #ddd',
        }}
      >
        <thead style={{ backgroundColor: '#f8f9fa' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Value of holdings</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Up to ₹4 lakh</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
              <span style={{ background: '#198754', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>FREE*</span>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>₹4 lakh – ₹10 lakh</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>₹100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>Above ₹10 lakh</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>₹300 per year, charged quarterly</td>
          </tr>
        </tbody>
      </table>

      <p style={{ color: '#6c757d', fontSize: '14px', marginTop: '15px' }}>
        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account.
      </p>
    </div>
  )
}

export default Pages
