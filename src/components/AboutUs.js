import "../styles/aboutus.css";

import React from "react";

const AboutUs = () => {
  return (
    <div class="container" id="AboutUs">
      <div className="row">
        <div className="col">
          <div className="about-us-container">
            <h1>About Us</h1>

            <div className="row">
              <div className="col">
                {" "}
                <img className="img pb-5" id="picOfMe" src="me.jpg" alt="1" />
              </div>
              <div className="col">
                <p className="text-white mt-5">
                  Welcome to Goodson Film! My name is Michael Ben-Tov and I am
                  the founder of this company. When I was just 16 years old, I
                  started Goodson Film with a passion for video production and
                  photography. In the beginning, I mostly worked with people
                  that I knew personally, but as the business grew, I began to
                  land jobs with some of the biggest names in the entertainment
                  industry. Over the years, I had the opportunity to film and
                  photograph well-known professional athletes, musical artists,
                  and social media influencers. I am grateful for the
                  experiences and opportunities that Goodson Film has given me
                  and I am excited to have been able to serve our clients to the
                  best of my abilities. Although Goodson Film is no longer in
                  operation, I look back on my time in business with gratitude
                  and appreciation for the opportunities and experiences that I
                  had. Thank you to all of our clients and team members for your
                  support and loyalty. I will always be proud of the work that
                  we did at Goodson Film.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
