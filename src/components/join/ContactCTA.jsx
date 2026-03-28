import { T, Ico, F } from "../../constants";
import { Sec } from "../index";
import { drHanEmail, mailtoHan } from "../../utils/email";

export function ContactCTA() {
  return (
    <Sec bg={T.navy} style={{ padding: "72px 0" }}>
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 16,
          }}
        >
          Get in Touch
        </p>
        <h2
          style={{
            fontFamily: F.serif,
            fontSize: "clamp(28px,3.5vw,42px)",
            fontWeight: 400,
            color: T.white,
            marginBottom: 14,
          }}
        >
          Ready to apply or have questions?
        </h2>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: 15,
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            marginBottom: 36,
            lineHeight: 1.7,
          }}
        >
          Interested in joining the lab? We welcome informal enquiries — please
          email us with your CV and a brief summary of your research interests.
        </p>
        <a
          href={mailtoHan()}
          className="btn btn-gold"
          style={{ fontSize: 14, padding: "13px 30px" }}
        >
          {Ico.mail} {drHanEmail()}
        </a>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: 12,
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            marginTop: 16,
          }}
        >
          We aim to respond to all enquiries within 5 working days.
        </p>
      </div>
    </Sec>
  );
}
