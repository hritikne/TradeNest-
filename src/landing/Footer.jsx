import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', paddingTop: '40px', borderTop: '1px solid #dee2e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '30px' }}>
          
          {/* Left section */}
          <div style={{ flex: '1 1 25%', marginBottom: '20px' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#0d6efd' }}>TradeNest</h5>
            <p style={{ color: '#6c757d', marginBottom: '10px' }}>© 2010 - 2025, TradeNest Broking Ltd. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}><i className="fab fa-linkedin fa-lg"></i></a>
              <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}><i className="fab fa-telegram fa-lg"></i></a>
            </div>
          </div>

          {/* Footer columns */}
          <div style={{ flex: '1 1 75%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              
              {/* Column 1 */}
              <div style={{ flex: '1 1 25%', marginBottom: '20px' }}>
                <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Account</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#6c757d' }}>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Open demat account</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Minor demat account</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>NRI demat account</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Commodity</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Dematerialisation</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Fund transfer</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>MTF</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Referral program</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div style={{ flex: '1 1 25%', marginBottom: '20px' }}>
                <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Support</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#6c757d' }}>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Contact us</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Support portal</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>How to file a complaint?</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Bulletin</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Circular</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Downloads</a></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div style={{ flex: '1 1 25%', marginBottom: '20px' }}>
                <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Company</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#6c757d' }}>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>About</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Philosophy</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Careers</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Press & media</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>TradeNest</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Open source</a></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div style={{ flex: '1 1 25%', marginBottom: '20px' }}>
                <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Quick links</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#6c757d' }}>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Upcoming IPOs</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Brokerage charges</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Market holidays</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Calculators</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Markets</a></li>
                  <li><a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>Sectors</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #dee2e6', margin: '20px 0' }} />

        {/* Bottom disclaimer */}
        <div style={{ marginTop: '20px', color: '#6c757d', fontSize: '13px' }}>
          <p style={{ marginBottom: '15px' }}>
            TradeNest Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p style={{ marginBottom: '15px' }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p style={{ marginBottom: '15px' }}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p style={{ marginBottom: '15px' }}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
