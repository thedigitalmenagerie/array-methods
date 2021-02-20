const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


const planetEl = document.getElementById("planets")
planetEl.innerHTML = `<h2>List of Planets</h2>`
planets.forEach(planet => {
  planetEl.innerHTML +=  `<ul>
  <li>${planet}</li>
  </ul>`;
})

const planetCapEl = document.getElementById("capPlanets")
planetCapEl.innerHTML = `<h2>Capitalized</h2>`
const capPlanets = planets.map((planet) => {
    return planet.toUpperCase();
  })
  planetCapEl.innerHTML += `<ul><li>${capPlanets}</li></ul>`

const ePlanetEl = document.getElementById("ePlanets")
ePlanetEl.innerHTML = `<h2>Planets Containing the Letter E</h2>`
  const ePlanets = planets.filter((planet) => {
  return planet.includes('e');
})
ePlanetEl.innerHTML += `<ul><li>${ePlanets}</li></ul>`
