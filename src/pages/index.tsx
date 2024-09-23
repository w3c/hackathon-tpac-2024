/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import { Submission } from "../../types";
import submissions from "../../public/submissions.json";
import Head from "next/head";

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
    <>
      <Head>
        <title key="title">Hackathon @ W3C TPAC 2024</title>
        <meta property="og:image" content={`${assetPrefix}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="900" />
        <meta
          name="description"
          content="Join fellow W3C TPAC attendees for a fun HTML/CSS challenge on Tuesday September 24th. Test your coding skills, and compete for nerdy prizes."
        />
      </Head>
      <div className="windows95-container">
        {/* Hero Section */}
        <section className="hero">
          <img
            src={`${assetPrefix}/icons/my-computer.png`}
            alt="Hackathon icon"
          />
          <h1>Hackathon @ TPAC 2024</h1>
          <p>
            Join fellow W3C TPAC attendees for a fun and fast-paced HTML/CSS
            challenge! Test your coding skills, and compete for nerdy prizes.
          </p>
          <p>
            This hackathon is open to everyone attending TPAC in person. Enjoy
            hot snacks, meet new people, and show off your creativity in this
            competitive evening event in a relaxed setting.
          </p>
          <p>
            Don’t miss out — space is limited, so{" "}
            <a href="https://www.w3.org/events/meetings/d33f09f9-a171-452e-8998-1c5130669f97/">
              register early!
            </a>
          </p>
        </section>

        {/* Basic Info Section */}
        <section className="info">
          <h2>About the Event</h2>
          <p>
            This fun and relaxed evening will feature an HTML/CSS challenge
            where participants can test their coding skills & creativity, enjoy
            some snacks, and compete for nerdy prizes.
          </p>
          <p>
            Whether you’re a seasoned web developer or just starting out, all
            skill levels are welcome. We’ve got limited space for 30
            participants, so be sure to sign up early to secure your spot.
          </p>
          <p>
            <strong>Date and Time:</strong> Tuesday, September 24th, from 8:30
            PM to 10:30 PM.
          </p>
          <p>
            <strong>Location:</strong> Hilton Anaheim, Huntington, Concourse
            level, 4th Floor.
          </p>
        </section>

        {/* Submissions Section */}
        <section className="submissions">
          <h2>Explore the Submissions</h2>
          <div className="card-grid">
            {submissions.map(submission => (
              <div className="card" key={submission.slug}>
                <img
                  src={`${assetPrefix}/screenshots/${submission.slug}.png`}
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
            <h3>Will there be food?</h3>
            <p>
              Yes! We’ll have hot snacks available for everyone, but it may not
              be a full dinner. Make sure to grab a bite beforehand if you’re
              hungry! Soft drinks and water will also be provided, and alcoholic
              drinks can be purchased at the bar (for those 21+).
            </p>
          </div>

          <div className="faq-item">
            <h3>Who can participate?</h3>
            <p>
              Participation is open to in-person attendees at the W3C TPAC event
              in LA. If you’re here, you’re welcome to join. Please{" "}
              <a href="https://www.w3.org/events/meetings/d33f09f9-a171-452e-8998-1c5130669f97/">
                register early
              </a>{" "}
              to avoid disappointment.
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
              We will be using GitHub for project submissions.{" "}
              <a href="https://github.com/w3c/hackathon-tpac-2024">
                Link to GitHub repo
              </a>
              .
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
              You can subscribe to the event{" "}
              <a href="https://www.w3.org/events/meetings/d33f09f9-a171-452e-8998-1c5130669f97/">
                here
              </a>
              . If you see more than 30 people have already registered, please
              register anyway and show up on the day — last minute cancellations
              may free up a spot for you.
            </p>
          </div>

          <div className="faq-item">
            <h3>What do I need to bring?</h3>
            <p>
              Make sure to have a fully charged laptop with your favorite text
              editor installed, and a GitHub account to submit your project.
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
          <p>Hackathon @ TPAC 2024 is a W3C member organized event.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
