import OneSpec from "./OneSpec";

const SpeciesControl = ({
  atoms,
  onChangeState,
  onChangeColor,
  onChangeStateArrayDouble,
  state,
  species,
  onChangeStateArray,
  colors,
}) => {
  return (
    <div className="Species">
      {species.map((element, index) => (
        <div key={index}>
          <OneSpec
            state={state}
            theSpecimen={element}
            onChangeState={onChangeState}
            onChangeStateArray={onChangeStateArray}
            counterAtom={index}
            onChangeStateArrayDouble={onChangeStateArrayDouble}
            atoms={atoms}
            onChangeColor={onChangeColor}
            colors={colors}
          />
        </div>
      ))}
    </div>
  );
};

export default SpeciesControl;
