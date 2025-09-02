import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-container">
      {/* Funds Header */}
      <div className="funds-header">
        <p className="funds-intro">
          Instant, zero-cost fund transfers with <strong>UPI</strong>
        </p>
        <div className="funds-actions">
          <Link className="btn btn-green">Add Funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="row">
        {/* Equity Section */}
        <div className="col equity-section">
          <h3 className="section-title">Equity</h3>

          <div className="table">
            {/* Available / Used / Cash */}
            <div className="data">
              <p>Available Margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used Margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available Cash</p>
              <p className="imp">4,043.10</p>
            </div>

            <hr />

            {/* Opening Balances */}
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Closing Balance</p>
              <p>3,736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery Margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options Premium</p>
              <p>0.00</p>
            </div>

            <hr />

            {/* Collateral */}
            <div className="data">
              <p>Collateral (Liquid Funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="col commodity-section">
          <div className="commodity-card">
            <p>You don’t have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
