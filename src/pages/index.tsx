/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import { Submission } from "../../types";
import submissions from "../../public/submissions.json";

interface Props {
  submissions: Submission[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      submissions,
    },
  };
};

const Home: React.FC<Props> = ({ submissions }) => {
  const assetPrefix = "/hackathon-tpac-2024"; // redundant path is workaround for gh pages to display images and submission routes correctly
  return (
    <div className="windows95-container">
      {/* Hero Section */}
      <section className="hero">
        <img
          src={`${assetPrefix}/icons/my-computer.png`}
          alt="Hackathon icon"
        />
        <h1>TPAC Hackathon 2024</h1>
        <p>
          Join fellow W3C attendees for a fun and fast-paced HTML/CSS challenge!
          Test your coding skills, and compete for nerdy prizes.
        </p>
        <p>
          This hackathon is open to everyone attending TPAC in person. Enjoy hot
          snacks, meet new people, and show off your creativity in this relaxed
          evening event.
        </p>
        <p>Don’t miss out — space is limited, so register early!</p>
      </section>

      {/* Basic Info Section */}
      <section className="info">
        <h2>About the Event</h2>
        <p>
          This fun and relaxed evening will feature an HTML/CSS challenge where
          participants can test their coding skills & creativity, enjoy some
          snacks, and compete for nerdy prizes.
        </p>
        <p>
          Whether you’re a seasoned web developer or just starting out, all
          skill levels are welcome. We’ve got limited space for 30 participants,
          so be sure to sign up early to secure your spot.
        </p>
        <p>
          <strong>Date and Time:</strong> Tuesday, September 24th, from 8:30 PM
          to 10:30 PM.
        </p>
        <p>
          <strong>Location:</strong> Hilton Anaheim, Huntington, Concourse
          level, 4th floor
        </p>
      </section>

      {/* Submissions Section */}
      <section className="submissions">
        <h2>Explore the Submissions</h2>
        <div className="card-grid">
          {submissions.map(submission => (
            <div className="card" key={submission.slug}>
              <img
                src={`${assetPrefix}/submissions/${submission.slug}.png`}
                alt={`${submission.title} screenshot`}
              />
              <h2>{submission.title}</h2>
              <p>by {submission.author}</p>
              <a
                href={`${assetPrefix}/submissions/${submission.slug}.html`}
                className="button"
              >
                <img
                  src={`${assetPrefix}/icons/folder-open.png`}
                  alt="View icon"
                  className="icon"
                />
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>What is the TPAC Hackathon about?</h3>
          <p>
            This hackathon was created to encourage innovation and creativity
            using HTML and CSS in a friendly competition format.
          </p>
        </div>

        <div className="faq-item">
          <h3>Will there be food?</h3>
          <p>
            Yes! We’ll have hot snacks available for everyone, but it won’t be a
            full dinner. Make sure to grab a bite beforehand if you’re hungry!
          </p>
        </div>

        <div className="faq-item">
          <h3>Who can participate?</h3>
          <p>
            Participation is open to in-person attendees at the W3C TPAC event
            in LA. If you’re here, you’re welcome to join!
          </p>
        </div>

        <div className="faq-item">
          <h3>What’s the hackathon project?</h3>
          <p>
            The project is a surprise! But we can tell you that it’ll be based
            on HTML and CSS, and you’ll have about an hour to work on it. You
            can work solo or with a partner – your choice!
          </p>
        </div>

        <div className="faq-item">
          <h3>Where do I submit my project?</h3>
          <p>
            We will be using GitHub for project submissions. The repo link will
            be provided soon.
          </p>
        </div>

        <div className="faq-item">
          <h3>What are the prizes?</h3>
          <p>
            We&apos;re keeping the prizes a secret for now, but we promise
            they&apos;ll be nerdy and fun. Multiple winners will be selected
            based on audience votes.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I register?</h3>
          <p>
            You can register{" "}
            <a href="https://www.w3.org/events/meetings/d33f09f9-a171-452e-8998-1c5130669f97/">
              here
            </a>
            , but please note it’s gated behind a W3C login.
          </p>
        </div>

        <div className="faq-item">
          <h3>What do I need to bring?</h3>
          <p>
            Make sure to have your favorite text editor ready and a GitHub
            account to submit your project.
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h2>Our Sponsors</h2>
        <p>
          Thank you to our sponsors for helping make this event possible by
          providing snacks, drinks, and prizes!
        </p>
        <div className="sponsor-logos">
          <img src={`${assetPrefix}/logos/adobe.png`} alt="Adobe" />
          <img src={`${assetPrefix}/logos/google.png`} alt="Google" />
          <img src={`${assetPrefix}/logos/holopin.png`} alt="Holopin" />
          <img src={`${assetPrefix}/logos/mozilla.png`} alt="Mozilla" />
          <img src={`${assetPrefix}/logos/w3c.png`} alt="W3C" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 TPAC Hackathon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
