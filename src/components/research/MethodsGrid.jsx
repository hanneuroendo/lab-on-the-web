import { T, F } from "../../constants";
import { Sec, SH } from "../index";

export function MethodsGrid() {
  return (
    <Sec bg={T.navy} style={{ padding: "72px 0 64px" }}>
      <SH eyebrow="Approaches" title="Methods & Techniques" light />
      <p
        style={{
          fontFamily: F.sans,
          fontSize: 15,
          fontWeight: 300,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 2,
          maxWidth: 720,
        }}
      >
        We combine advanced genetic, optical, cellular, and molecular approaches
        to investigate neural circuit function, including transgenic mouse
        models, in vivo calcium imaging (fibre photometry and miniscopes), in
        vivo manipulation (optogenetics, chemogenetics, and CRISPR-Cas9 gene
        editing), dynamic hormone profiling and behaviour tracking, supported by
        a range of techniques including ELISA, RNAscope, immunohistochemistry,
        and transcriptomics.
      </p>
    </Sec>
  );
}
