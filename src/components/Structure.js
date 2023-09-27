import { useRef, useEffect } from "react";
import "./Structure.css";

const Structure = ({
  stretches,
  matrixMultiplication,
  removedData,
  selectedPoint,
  species,
  state,
  angles,
  changeOnListener,
  releaseClick,
  performClick,
  visualDistance,
  zoomInOut,
  allMultiSpec,
  dataX,
  dataY,
  dataZ,
  colors,
}) => {
  const unitCellLineIndexes = [
    [0, 1],
    [0, 3],
    [1, 4],
    [1, 6],
    [2, 0],
    [3, 5],
    [3, 6],
    [4, 2],
    [5, 2],
    [7, 6],
    [7, 5],
    [7, 4],
  ];

  const atomDimensions =
    "0.53	0.31	1.67	1.12	0.87	0.67	0.56	0.48	0.42	0.38	1.9	1.45	1.18	1.11	0.98	0.88	0.79	0.71	2.43	1.94	1.84	1.76	1.71	1.66	1.61	1.56	1.52	1.49	1.45	1.42	1.36	1.25	1.14	1.03	0.94	0.88	2.65	2.19	2.12	2.06	1.98	1.9	1.83	1.78	1.73	1.69	1.65	1.61	1.56	1.45	1.33	1.23	1.15	1.08	2.98	2.53	1.95	1.85	2.47	2.06	2.05	2.38	2.31	2.33	2.25	2.28	2.26	2.26	2.22	2.22	2.17	2.08	2	1.93	1.88	1.85	1.8	1.77	1.74	1.71	1.56	1.54	1.43	1.35	1.27	1.2			1.95	1.8	1.8	1.75	1.75	1.75	1.75".split(
      "\t"
    );
  let heightCanvas = 800;
  let widthCanvas = 800;
  let minimumOfXAxis = -visualDistance;
  let minimumOfYAxis = -visualDistance;
  let maximumOfXAxis = visualDistance;
  let maximumOfYAxis = visualDistance;

  const xyPosition = (coordinates) => {
    const canvasXCoordinate =
      ((coordinates[0] - minimumOfXAxis) * widthCanvas) /
      (maximumOfXAxis - minimumOfXAxis);
    const canvasYCoordinate =
      heightCanvas -
      ((coordinates[1] - minimumOfYAxis) * heightCanvas) /
        (maximumOfYAxis - minimumOfYAxis);
    return [canvasXCoordinate, canvasYCoordinate];
  };

  const projectionFunction = (coordinates) => {
    let Rx = [
      [1, 0, 0],
      [
        0,
        Math.cos((angles[1] * Math.PI) / 180),
        -Math.sin((angles[1] * Math.PI) / 180),
      ],
      [
        0,
        Math.sin((angles[1] * Math.PI) / 180),
        Math.cos((angles[1] * Math.PI) / 180),
      ],
    ];
    let Rz = [
      [
        Math.cos((angles[0] * Math.PI) / 180),
        -Math.sin((angles[0] * Math.PI) / 180),
        0,
      ],
      [
        Math.sin((angles[0] * Math.PI) / 180),
        Math.cos((angles[0] * Math.PI) / 180),
        0,
      ],
      [0, 0, 1],
    ];

    let vector = [];
    coordinates.forEach((element) => {
      vector.push([element]);
    });
    let resultant = matrixMultiplication(Rz, Rx);
    let [xReturn, yReturn, zReturn] = matrixMultiplication(
      resultant,
      vector
    )[0];
    return [xReturn, yReturn, zReturn];
  };

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = widthCanvas;
    canvas.height = heightCanvas;
    if (state.showAxis) {
      ctx.lineWidth = 1;
      const pointCenters = [
        xyPosition(
          projectionFunction([
            -state.constantX[0][0] / 2,
            -state.constantY[0][1] / 2,
            -state.constantZ[0][2] / 2,
          ])
        ),
        xyPosition(
          projectionFunction([
            (-state.constantX[0][0] + state.constantZ[0][0]) / 2,
            (-state.constantY[0][1] + state.constantZ[0][1]) / 2,
            state.constantZ[0][2] / 2,
          ])
        ),
        xyPosition(
          projectionFunction([
            (-state.constantX[0][0] + state.constantY[0][0]) / 2,
            state.constantY[0][1] / 2,
            (-state.constantZ[0][2] + state.constantY[0][2]) / 2,
          ])
        ),
        xyPosition(
          projectionFunction([
            state.constantX[0][0] / 2,
            (-state.constantY[0][1] + state.constantX[0][1]) / 2,
            (-state.constantZ[0][2] + state.constantX[0][2]) / 2,
          ])
        ),
        xyPosition(
          projectionFunction([
            (-state.constantX[0][0] +
              state.constantZ[0][0] +
              state.constantY[0][0]) /
              2,
            (state.constantY[0][1] + state.constantZ[0][1]) / 2,
            (state.constantZ[0][2] + state.constantY[0][2]) / 2,
          ])
        ),
        xyPosition(
          projectionFunction([
            (state.constantX[0][0] + state.constantY[0][0]) / 2,
            (state.constantY[0][1] + state.constantX[0][1]) / 2,
            (-state.constantZ[0][2] +
              state.constantY[0][2] +
              state.constantX[0][2]) /
              2,
          ])
        ),
        xyPosition(
          projectionFunction([
            (state.constantX[0][0] + state.constantZ[0][0]) / 2,
            (-state.constantY[0][1] +
              state.constantZ[0][1] +
              state.constantX[0][1]) /
              2,
            (state.constantZ[0][2] + state.constantX[0][2]) / 2,
          ])
        ),
        xyPosition(
          projectionFunction([
            (state.constantX[0][0] +
              state.constantZ[0][0] +
              state.constantY[0][0]) /
              2,
            (state.constantY[0][1] +
              state.constantZ[0][1] +
              state.constantX[0][1]) /
              2,
            (state.constantZ[0][2] +
              state.constantY[0][2] +
              state.constantX[0][2]) /
              2,
          ])
        ),
      ];

      for (let k = 0; k < unitCellLineIndexes.length; k++) {
        ctx.beginPath();
        ctx.moveTo(
          pointCenters[unitCellLineIndexes[k][0]][0],
          pointCenters[unitCellLineIndexes[k][0]][1]
        );
        ctx.lineTo(
          pointCenters[unitCellLineIndexes[k][1]][0],
          pointCenters[unitCellLineIndexes[k][1]][1]
        );
        ctx.stroke();
      }
    }
    let transposeMatrix = [];
    for (let tr = 0; tr < dataX.length; tr++) {
      let onProjectionData = projectionFunction([
        dataX[tr] - state.constantX[0][0] / 2,
        dataY[tr] - state.constantY[0][1] / 2,
        dataZ[tr] - state.constantZ[0][2] / 2,
      ]);
      transposeMatrix = [
        ...transposeMatrix,
        [onProjectionData, allMultiSpec[tr], tr],
      ];
    }
    let sortedPoints = transposeMatrix.sort((a, b) => {
      return b[0][2] - a[0][2];
    });

    for (let i = 0; i < dataX.length; i++) {
      if (removedData.includes(sortedPoints[i][2])) {
        continue;
      } else {
        let canvasCoordinates = xyPosition(sortedPoints[i][0]);
        let atomDimension = 1;

        if (sortedPoints[i][2] === selectedPoint) {
          atomDimension = 300 * atomDimensions[parseInt(sortedPoints[i][1])];
        } else {
          atomDimension = 200 * atomDimensions[parseInt(sortedPoints[i][1])];
        }

        let atomRadius = atomDimension / visualDistance || 2;
        let grd = ctx.createRadialGradient(
          canvasCoordinates[0],
          canvasCoordinates[1],
          atomRadius / 1,
          canvasCoordinates[0] + atomRadius / 2,
          canvasCoordinates[1] - atomRadius / 2,
          atomRadius / 1000
        );

        grd.addColorStop(1, "wheat");

        if (sortedPoints[i][2] === selectedPoint) {
          grd.addColorStop(0, "black");
        } else {
          let currentColor = colors[parseInt(sortedPoints[i][1])] || "blue";
          grd.addColorStop(0, currentColor);
        }

        ctx.fillStyle = grd;
        ctx.lineWidth = 10 / visualDistance;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(
          canvasCoordinates[0],
          canvasCoordinates[1],
          atomRadius,
          0,
          10 * Math.PI
        );
        ctx.fill();

        for (let j = i; j < dataX.length; j++) {
          if (removedData.includes(sortedPoints[j][2])) {
            continue;
          } else {
            let lengthCondition =
              (sortedPoints[i][0][0] - sortedPoints[j][0][0]) ** 2 +
                (sortedPoints[i][0][1] - sortedPoints[j][0][1]) ** 2 +
                (sortedPoints[i][0][2] - sortedPoints[j][0][2]) ** 2 <
              state.maxBound ** 2;
            if (lengthCondition) {
              ctx.lineWidth = state.bondThickness / visualDistance;
              let projectedPoint = xyPosition(sortedPoints[j][0]);
              ctx.beginPath();
              ctx.lineCap = "round";
              ctx.strokeStyle = ctx.fillStyle;
              ctx.moveTo(canvasCoordinates[0], canvasCoordinates[1]);

              if (sortedPoints[i][1] !== sortedPoints[j][1]) {
                let theHalf = xyPosition([
                  (sortedPoints[i][0][0] + sortedPoints[j][0][0]) / 2,
                  (sortedPoints[i][0][1] + sortedPoints[j][0][1]) / 2,
                  (sortedPoints[i][0][2] + sortedPoints[j][0][2]) / 2,
                ]);
                ctx.lineTo(theHalf[0], theHalf[1]);
                ctx.stroke();
                ctx.beginPath();
                if (sortedPoints[j][2] === selectedPoint) {
                  ctx.strokeStyle = "black";
                } else {
                  let currentColor =
                    colors[parseInt(sortedPoints[j][1])] || "blue";
                  ctx.strokeStyle = currentColor;
                }
                ctx.moveTo(theHalf[0], theHalf[1]);
              }
              ctx.lineTo(projectedPoint[0], projectedPoint[1]);
              ctx.stroke();
            }
          }
        }
      }
    }
  }, [
    species,
    angles,
    visualDistance,
    state,
    dataX,
    selectedPoint,
    removedData,
    colors,
  ]);
  return (
    <div className="canvasDiv">
      <canvas
        ref={canvasRef}
        onMouseDown={performClick}
        onMouseMove={changeOnListener}
        onMouseUp={releaseClick}
        onWheel={zoomInOut}
      />
    </div>
  );
};

export default Structure;
