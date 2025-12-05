import { useRef } from "react";
import VariableProximity from "./VariableProximity";

function Defaultpage() {
  const containerRef = useRef(null);
  return (
    <>
      <div
        style={{
          background: "var(--primary-color)",
          height: "100vh",
        }}
        className="p-3 col-12 col-lg-8"
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center rounded-5"
          style={{
            height: "100%",
            background: "var(--secondary-color)",
          }}
        >
          <div ref={containerRef} className="text-center">
            <VariableProximity
              label={"Click on any user to chat"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
          <p>You selected the right app</p>
        </div>
      </div>
    </>
  );
}
export default Defaultpage;
