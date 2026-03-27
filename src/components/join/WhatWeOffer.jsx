import { T } from "../../constants";
import { Sec, SH } from "../index";

const offerings = [
  {
    title: "Mentorship & Career Development",
    body: "Regular one-to-one mentoring, personalised development plans, and active support for fellowships and career progression.",
  },
  {
    title: "State-of-the-Art Research Environment",
    body: "Access to cutting-edge techniques, including fibre photometry, miniscope imaging, viral approaches, and advanced microscopy platforms.",
  },
  {
    title: "Collaborative & Connected Network",
    body: "Strong collaborations with leading research groups and support for national and international conferences, fostering scientific exchange and networking.",
  },
  {
    title: "Inclusive Culture & University Environment",
    body: "A supportive, inclusive, and intellectually stimulating environment, with full access to university resources and a vibrant research community.",
  },
];

export function WhatWeOffer() {
  return (
    <Sec bg={T.offWhite}>
      <SH
        eyebrow="Lab Environment"
        title="What We Offer"
        sub="We are committed to supporting the development of every lab member."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
        }}
        className="grid-3"
      >
        {offerings.map((item) => (
          <div key={item.title} className="card" style={{ padding: "26px 24px" }}>
            <div
              style={{
                width: 32,
                height: 2,
                background: T.teal,
                marginBottom: 16,
              }}
            />
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 18,
                fontWeight: 500,
                color: T.navy,
                marginBottom: 10,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 13.5,
                fontWeight: 300,
                color: T.slate,
                lineHeight: 1.75,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Sec>
  );
}
