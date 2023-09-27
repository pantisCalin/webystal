import InputNumber from "./InputNumber";
import "./Rotations.css";

const Rotations = ({
  onChangeStretches,
  stretches,
  angleRotatedData,
  onChangeDataRotationAngle,
  onChangeDataRotationType,
  state,
  onRotationChange,
  angles,
  onChangeState,
  typeOfDataRotation,
}) => {
  return (
    <div className="oneSpec">
      <label className="specName">General Properties</label>
      <label className="propName">System Rotation</label>
      <div className="property">
        <div className="subProperty">
          Z-Rotation
          <InputNumber
            step="1"
            value={angles[0]}
            name="x"
            onChange={onRotationChange}
          />
        </div>
        <div className="subProperty">
          Y-Rotation
          <InputNumber
            step="1"
            value={angles[1]}
            name="y"
            onChange={onRotationChange}
          />
        </div>
      </div>

      <label className="propName">Bounds</label>
      <div className="property">
        <div className="subProperty">
          Maximum Bound
          <InputNumber
            step="0.1"
            name="maxBound"
            onChange={onChangeState}
            value={state.maxBound}
          />
        </div>
        <div className="subProperty">
          Bond Thickness
          <InputNumber
            step="5"
            name="bondThickness"
            onChange={onChangeState}
            value={state.bondThickness}
          />
        </div>
      </div>
      <label className="propName">Data Rotation</label>
      <div className="property">
        <div className="subProperty">
          <div className="DFR">
            <button
              className="download noMarginTop"
              value="x"
              style={
                typeOfDataRotation === "x"
                  ? { background: "var(--grayHover)" }
                  : {}
              }
              onClick={onChangeDataRotationType}
            >
              Rotate X
            </button>
            <button
              style={
                typeOfDataRotation === "y"
                  ? { background: "var(--grayHover)" }
                  : {}
              }
              className="download noMarginTop"
              value="y"
              onClick={onChangeDataRotationType}
            >
              Rotate Y
            </button>
            <button
              className="download noMarginTop"
              value="z"
              style={
                typeOfDataRotation === "z"
                  ? { background: "var(--grayHover)" }
                  : {}
              }
              onClick={onChangeDataRotationType}
            >
              Rotate Z
            </button>
            <button
              className="download noMarginTop"
              value="none"
              style={
                typeOfDataRotation === "none"
                  ? { background: "var(--grayHover)" }
                  : {}
              }
              onClick={onChangeDataRotationType}
            >
              None
            </button>
          </div>
        </div>
        <div className="subProperty">
          <label>Angle: </label>
          <InputNumber
            step="5"
            name="maxBound"
            onChange={onChangeDataRotationAngle}
            value={angleRotatedData}
          />
        </div>
      </div>
      <label className="propName">Data Stretch</label>
      <div className="butandangle">
        <div className="subProperty">
          <div>
            X:{" "}
            <InputNumber
              step="0.2"
              title={`xStretch`}
              onChange={onChangeStretches}
              value={stretches[0]}
            />
          </div>
          <div>
            Y:{" "}
            <InputNumber
              step="0.2"
              title={`yStretch`}
              onChange={onChangeStretches}
              value={stretches[1]}
            />
          </div>

          <div>
            Z:{" "}
            <InputNumber
              step="0.2"
              title={`zStretch`}
              onChange={onChangeStretches}
              value={stretches[2]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rotations;
