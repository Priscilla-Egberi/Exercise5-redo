import React from "react";
import cars from "./practice";
import animals, {useAnimals} from "./data.js"

function App() {
  const [tesla, honda] = cars;
  const {
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;
  const {
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour]
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour]
  } = honda;
  const [cat, dog]=animals;
  const meme = useAnimals;
  const [name, dosomthing]=meme(cat);
  console.log(dosomthing())

  return (
    <section>
        <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td className="me-5">{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
    {/* <div>
        
    </div> */}
    </section>
  );
}
export default App;
