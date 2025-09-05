import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

function Core() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="core-section" data-aos="fade-up">
      <h2 className="core-title">
        Meet the <span>Team</span>
      </h2>
      <p className="core-subtitle">
        The passionate minds driving TradeNest forward.
      </p>

      <div className="team-row">
        {/* Team Member 1 */}
        <div className="team-member">
          <img src="/media/image/team1.jpg" alt="Team Member" />
          <h5>Hritik Nema</h5>
          <p className="team-role">CEO & Founder</p>
          <p className="team-desc">
            Visionary behind TradeNest’s mission to democratize trading.
          </p>
          <div className="team-links">
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="team-member">
          <img src="/media/image/team2.jpg" alt="Team Member" />
          <h5>Hashit Gurjer</h5>
          <p className="team-role">CTO & Backend Lead</p>
          <p className="team-desc">
            Leads the secure, scalable tech behind our trading engine.
          </p>
          <div className="team-links">
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-member">
          <img src="/media/image/team3.jpg" alt="Team Member" />
          <h5>Saksham Nema</h5>
          <p className="team-role">Co-Founder & Designer</p>
          <p className="team-desc">
            Crafts seamless and elegant UI/UX across all platforms.
          </p>
          <div className="team-links">
            <a href="#"><i className="fa fa-behance"></i></a>
            <a href="#"><i className="fa fa-dribbble"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Core;
