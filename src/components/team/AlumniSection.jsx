import { T } from "../../constants";
import { Sec, SH } from "../index";

export function AlumniSection() {
  return (
    <Sec bg={T.offWhite} style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 680 }}>
        <SH
          eyebrow="Former Members"
          title="Lab Alumni"
          sub="Alumni information coming soon. We are proud of every member who has trained in the Han Lab and gone on to make contributions to science."
        />
      </div>
    </Sec>
  );
}
