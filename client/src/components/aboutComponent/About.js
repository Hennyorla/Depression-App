import "./About.css";

const About = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "50px" }}
    >
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div class="summary-container">
            <h2>About Us</h2>

            <p>
              At <strong>Mood Lift</strong>, we are dedicated to providing
              exceptional mental health care services that prioritize the
              well-being and recovery of our clients. Founded on principles of
              empathy, evidence-based practices, and accessibility, we strive to
              be a trusted partner in our clients' mental health journeys.
            </p>

            <p class="mission-statement">
              Our mission at <strong>Mood Lift</strong> is to empower
              individuals to lead fulfilling lives through comprehensive and
              compassionate mental health care. We are committed to delivering
              personalized treatment plans that address the unique needs of each
              client, fostering resilience, healing, and personal growth.
            </p>

            <div class="highlight">
              <h3>Comprehensive Services:</h3>
              <ul>
                <li>Therapeutic Counseling</li>
                <li>Psychiatric Care</li>
                <li>Teletherapy Options</li>
                <li>Support Groups</li>
              </ul>
            </div>

            <div class="benefits">
              <h3>Benefits of Choosing Us:</h3>
              <ul>
                <li>
                  Expert Team: A multidisciplinary team of psychologists, social
                  workers, psychiatric nurse practitioners, and support staff.
                </li>
                <li>
                  Personalized Care: Individualized treatment plans tailored to
                  each client's goals and therapeutic needs.
                </li>
                <li>
                  Holistic Approach: Integrating physical, social, and
                  environmental factors into treatment.
                </li>
                <li>
                  Privacy and Confidentiality: Upholding the highest standards
                  of care and respecting client privacy.
                </li>
              </ul>
            </div>

            <div class="team">
              <h3>Our Team:</h3>
              <p>
                Our team consists of dedicated professionals who are passionate
                about mental health and committed to providing compassionate
                care.
              </p>
            </div>

            <div class="community">
              <h3>Community Engagement:</h3>
              <p>
                Beyond clinical services, <strong>Mood Lift</strong> actively
                engages with the community through educational workshops,
                outreach programs, and partnerships with local organizations. We
                are committed to promoting mental health awareness, reducing
                stigma, and advocating for equitable access to mental health
                care.
              </p>
            </div>

            <div class="contact-info">
              <h3>Contact Us:</h3>
              <p>
                Discover how <strong>Mood Lift</strong> can support you or your
                loved ones on the path to mental wellness. Contact us today to
                schedule a consultation or learn more about our comprehensive
                range of mental health services.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default About;
