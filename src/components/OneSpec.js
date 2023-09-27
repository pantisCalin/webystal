import InputNumber from "./InputNumber";
import "./OneSpec.css";

const OneSpec = ({
  atoms,
  state,
  theSpecimen,
  onChangeStateArrayDouble,
  onChangeColor,
  onChangeStateArray,
  counterAtom,
  colors,
}) => {
  const ChangeColor = (a) => {
    console.log(a);
  };
  const Atoms =
    "Hydrogen,Helium,Lithium,Beryllium,Boron,Carbon,Nitrogen,Oxygen,Fluorine,Neon,Sodium,Magnesium,Aluminum,Silicon,Phosphorus,Sulfur,Chlorine,Argon,Potassium,Calcium,Scandium,Titanium,Vanadium,Chromium,Manganese,Iron,Cobalt,Nickel,Copper,Zinc,Gallium,Germanium,Arsenic,Selenium,Bromine,Krypton,Rubidium,Strontium,Yttrium,Zirconium,Niobium,Molybdenum,Technetium,Ruthenium,Rhodium,Palladium,Silver,Cadmium,Indium,Tin,Antimony,Tellurium,Iodine,Xenon,Caesium,Barium,Lanthanum,Cerium,Praseodymium,Neodymium,Promethium,Samarium,Europium,Gadolinium,Terbium,Dysprosium,Holmium,Erbium,Thulium,Ytterbium,Lutetium,Hafnium,Tantalum,Tungsten,Rhenium,Osmium,Iridium,Platinum,Gold,Mercury,Thallium,Lead,Bismuth,Polonium,Astatine,Radon,Francium,Radium,Actinium,Thorium,Protactinium,Uranium,Neptunium,Plutonium,Americium,Curium,Berkelium,Californium,Einsteinium,Fermium,Mendelevium,Nobelium,Lawrencium,Rutherfordium,Dubnium,Seaborgium,Bohrium,Hassium,Meitnerium,Darmstadtium,Roentgenium,Copernicium,Ununtrium,Flerovium,Ununpentium,Livermorium,Ununseptium,Ununoctium".split(
      ","
    );
  return (
    <div className="oneSpec">
      <div className="specName">
        <div>
          {Atoms[theSpecimen - 1]} - [{atoms[theSpecimen - 1]}]
        </div>
        <div>Z = {theSpecimen}</div>
      </div>
      <div className="properties">
        <div className="property">
          <div className="propName">Design</div>
          <div className="subProperty">
            <div className="subName">Color</div>
            <input
              type="color"
              defaultValue={colors[theSpecimen]}
              onChange={(e) => onChangeColor(theSpecimen, e.target.value)}
            />
          </div>
        </div>
        <div className="property">
          <div className="propName">Translations</div>
          <div className="subProperty">
            <div className="subName">Translate X</div>
            <InputNumber
              step="0.1"
              name="translateX"
              title={`Atom ${counterAtom}`}
              onChange={onChangeStateArray}
              value={state.translateX[counterAtom]}
            />
          </div>
          <div className="subProperty">
            <div className="subName">Translate Y</div>
            <InputNumber
              step="0.1"
              name="translateY"
              title={`Atom ${counterAtom}`}
              onChange={onChangeStateArray}
              value={state.translateY[counterAtom]}
            />
          </div>
          <div className="subProperty">
            <div className="subName">Translate Z</div>
            <InputNumber
              step="0.1"
              name="translateZ"
              title={`Atom ${counterAtom}`}
              onChange={onChangeStateArray}
              value={state.translateZ[counterAtom]}
            />
          </div>
        </div>
        <div className="property">
          <div className="propName">Multiplication</div>
          <div className="subProperty">
            <div className="subName">Repet X</div>
            <InputNumber
              step="1"
              name="repetitionX"
              title={`Atom ${counterAtom}`}
              onChange={onChangeStateArray}
              value={state.repetitionX[counterAtom]}
            />
            <p>
              a<sub>1</sub>:
            </p>
            <div className="subName">
              X:&nbsp;
              <InputNumber
                step="0.1"
                name="constantX"
                title={`Atom ${counterAtom} on 1 st latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantX[counterAtom][0]}
              />
            </div>
            <div className="subName">
              Y:&nbsp;
              <InputNumber
                step="0.1"
                name="constantX"
                title={`Atom ${counterAtom} on 2 nd latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantX[counterAtom][1]}
              />
            </div>
            <div className="subName">
              Z:&nbsp;
              <InputNumber
                step="0.1"
                name="constantX"
                title={`Atom ${counterAtom} on 3 rd latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantX[counterAtom][2]}
              />
            </div>
          </div>
          <div className="subProperty">
            <div className="subName">Repet Y</div>
            <InputNumber
              step="1"
              name="repetitionY"
              title={`Atom ${counterAtom}`}
              onChange={onChangeStateArray}
              value={state.repetitionY[counterAtom]}
            />
            <p>
              a<sub>2</sub>:
            </p>
            <div className="subName">
              X:&nbsp;
              <InputNumber
                step="0.1"
                name="constantY"
                title={`Atom ${counterAtom} on 1 st latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantY[counterAtom][0]}
              />
            </div>
            <div className="subName">
              Y:&nbsp;
              <InputNumber
                step="0.1"
                name="constantY"
                title={`Atom ${counterAtom} on 2 nd latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantY[counterAtom][1]}
              />
            </div>
            <div className="subName">
              Z:&nbsp;
              <InputNumber
                step="0.1"
                name="constantY"
                title={`Atom ${counterAtom} on 3 rd latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantY[counterAtom][2]}
              />
            </div>
          </div>
          <div className="subProperty">
            <div className="subName">Repet Z</div>
            <InputNumber
              step="1"
              name="repetitionZ"
              title={`Atom ${counterAtom}`}
              onChange={onChangeStateArray}
              value={state.repetitionZ[counterAtom]}
            />
            <p>
              a<sub>3</sub>:
            </p>
            <div className="subName">
              X:&nbsp;
              <InputNumber
                step="0.1"
                name="constantZ"
                title={`Atom ${counterAtom} on 1 st latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantZ[counterAtom][0]}
              />
            </div>
            <div className="subName">
              Y:&nbsp;
              <InputNumber
                step="0.1"
                name="constantZ"
                title={`Atom ${counterAtom} on 2 nd latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantZ[counterAtom][1]}
              />
            </div>
            <div className="subName">
              Z:&nbsp;
              <InputNumber
                step="0.1"
                name="constantZ"
                title={`Atom ${counterAtom} on 3 rd latice vector`}
                onChange={onChangeStateArrayDouble}
                value={state.constantZ[counterAtom][2]}
              />
            </div>
          </div>
        </div>
        <div className="property">
          <div className="propName">SuperCell</div>
          <div className="subProperty">
            <p>
              a<sub>1</sub>:
            </p>
            <div className="superCellData">
              X:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantX[counterAtom][0] *
                  state.repetitionX[counterAtom]
                ).toFixed(10)}
              </span>
              Y:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantX[counterAtom][1] *
                  state.repetitionX[counterAtom]
                ).toFixed(10)}
              </span>
              Z:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantX[counterAtom][2] *
                  state.repetitionX[counterAtom]
                ).toFixed(10)}
              </span>
            </div>
          </div>
          <div className="subProperty">
            <p>
              a<sub>2</sub>:
            </p>
            <div className="superCellData">
              X:&nbsp;
              <span className="superCellSpan">
                <span className="superCellSpan">
                  {(
                    state.constantY[counterAtom][0] *
                    state.repetitionY[counterAtom]
                  ).toFixed(10)}
                </span>
              </span>
              Y:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantY[counterAtom][1] *
                  state.repetitionY[counterAtom]
                ).toFixed(10)}
              </span>
              Z:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantY[counterAtom][2] *
                  state.repetitionY[counterAtom]
                ).toFixed(10)}
              </span>
            </div>
          </div>
          <div className="subProperty">
            <p>
              a<sub>3</sub>:
            </p>
            <div className="superCellData">
              X:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantZ[counterAtom][0] *
                  state.repetitionZ[counterAtom]
                ).toFixed(10)}
              </span>
              Y:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantZ[counterAtom][1] *
                  state.repetitionZ[counterAtom]
                ).toFixed(10)}
              </span>
              Z:&nbsp;
              <span className="superCellSpan">
                {(
                  state.constantZ[counterAtom][2] *
                  state.repetitionZ[counterAtom]
                ).toFixed(10)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneSpec;
