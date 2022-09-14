import './App.css';
import { useState } from 'react';
import {Planets} from './Planets';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
// import { Homepage } from "./Homepage";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";

function App() {
  const planetList=[
    {
     id: "1",
     name: "Tatooine",
     rotation_period: "23",
     orbital_period: "304",
     diameter: "10465",
     climate: "arid",
    gravity: "1 standard",
     terrain: "desert",
     surface_water: "1",
     population: "200000",
    },
    {
     id: "2",
     name: "Alderaan",
     rotation_period: "24",
     orbital_period: "364",
     diameter: "12500",
     climate: "temperate",
     gravity: "1 standard",
     terrain: "grasslands, mountains",
     surface_water: "40",
     population: "2000000000",
    },
    {
     id: "3",
     name: "Yavin IV",
     rotation_period: "24",
     orbital_period: "4818",
     diameter: "10200",
     climate: "temperate, tropical",
     gravity: "1 standard",
     terrain: "jungle, rainforests",
     surface_water: "8",
     population: "1000",
    },
    {
     id: "4",
     name: "Hoth",
     rotation_period: "23",
     orbital_period: "549",
     diameter: "7200",
     climate: "frozen",
     gravity: "1.1 standard",
     terrain: "tundra, ice caves, mountain ranges",
     surface_water: "100",
     population: "unknown",
    },
    {
     id: "5",
     name: "Dagobah",
     rotation_period: "23",
     orbital_period: "341",
     diameter: "8900",
     climate: "murky",
     gravity: "N/A",
     terrain: "swamp, jungles",
     surface_water: "8",
     population: "unknown",
    },
    {
     id: "6",
     name: "Bespin",
     rotation_period: "12",
     orbital_period: "5110",
     diameter: "118000",
     climate: "temperate",
     gravity: "1.5 (surface), 1 standard (Cloud City)",
     terrain: "gas giant",
     surface_water: "0",
     population: "6000000",
    },
    {
     id: "7",
     name: "Endor",
     rotation_period: "18",
     orbital_period: "402",
     diameter: "4900",
     climate: "temperate",
     gravity: "0.85 standard",
     terrain: "forests, mountains, lakes",
     surface_water: "8",
     population: "30000000",
    },
    {
     id: "8",
     name: "Naboo",
     rotation_period: "26",
     orbital_period: "312",
     diameter: "12120",
     climate: "temperate",
     gravity:" 1 standard",
     terrain: "grassy hills, swamps, forests, mountains",
     surface_water: "12",
     population: "4500000000",
    },
    {
     id: "9",
     name: "Coruscant",
     rotation_period: "24",
     orbital_period: "368",
     diameter: "12240",
     climate: "temperate",
     gravity: "1 standard",
     terrain: "cityscape, mountains",
     surface_water: "unknown",
     population: "1000000000000",
    },
    {
     id: "10",
     name: "Kamino",
     rotation_period: "27",
     orbital_period: "463",
     diameter: "19720",
     climate: "temperate",
     gravity: "1 standard,",
     terrain: "ocean",
     surface_water: "100",
     population: "1000000000",
    },
    {
     id: "11",
     name: "Geonosis",
     rotation_period: "30",
     orbital_period: "256",
     diameter: "11370",
     climate: "temperate, arid",
     gravity: "0.9 standard",
     terrain: "rock, desert, mountain, barren",
     surface_water: "5",
     population: "100000000000",
    },
    {
     id: "12",
     name: "Utapau",
     rotation_period: "27",
     orbital_period: "351",
     diameter: "12900",
     climate: "temperate, arid, windy",
     gravity: "1 standard",
     terrain: "scrublands, savanna, canyons, sinkholes",
     surface_water: "0.9",
     population: "95000000",
    },
    {
     id: "13",
     name: "Mustafar",
     rotation_period: "36",
     orbital_period: "412",
     diameter: "4200",
     climate: "hot",
     gravity: "1 standard",
     terrain: "volcanoes, lava rivers, mountains, caves",
     surface_water: "0",
     population: "20000",
    },
    {
     id: "14",
     name: "Kashyyyk",
     rotation_period: "26",
     orbital_period: "381",
     diameter: "12765",
     climate: "tropical",
     gravity: "1 standard",
     terrain: "jungle, forests, lakes, rivers",
     surface_water: "60",
     population: "45000000",
    },
    {
     id: "15",
     name: "Polis Massa",
     rotation_period: "24",
     orbital_period: "590",
     diameter: "0",
     climate: "artificial temperate ",
     gravity: "0.56 standard",
     terrain: "airless asteroid",
     surface_water: "0",
     population: "1000000",
    },
    {
     id: "16",
     name: "Mygeeto",
     rotation_period: "12",
     orbital_period: "167",
     diameter: "10088",
     climate: "frigid",
     gravity: "1 standard",
     terrain: "glaciers, mountains, ice canyons",
     surface_water: "unknown",
     population: "19000000",
    },
    {
     id: "17",
     name: "Felucia",
     rotation_period: "34",
     orbital_period: "231",
     diameter: "9100",
     climate: "hot, humid",
     gravity: "0.75 standard",
     terrain: "fungus forests",
     surface_water: "unknown",
     population: "8500000",
    },
    {
     id: "18",
     name: "Cato Neimoidia",
     rotation_period: "25",
     orbital_period: "278",
     diameter: "0",
     climate: "temperate, moist",
     gravity: "1 standard",
     terrain: "mountains, fields, forests, rock arches",
     surface_water: "unknown",
     population: "10000000",
    },
    {
     id: "19",
     name: "Saleucami",
     rotation_period: "26",
     orbital_period: "392",
     diameter: "14920",
     climate: "hot",
     gravity: "unknown",
     terrain: "caves, desert, mountains, volcanoes",
     surface_water: "unknown",
     population: "1400000000",
    },
    {
     id: "20",
     name: "Stewjon",
     rotation_period: "unknown",
     orbital_period: "unknown",
     diameter: "0",
     climate: "temperate",
     gravity: "1 standard",
     terrain: "grass",
     surface_water: "unknown",
     population: "unknown",
    }];
//   const imovies = [
//     {
//     banner: "https://www.sify.com/uploads/Jai_bhim_vjcj9cjbcihej.jpg",
//     name: "JAI BHIM",
//     rating: 8,
//     summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
//   }
//   , {
//     banner: "https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg",
//     title: "MS-DHONI",
//     rating: 8,
//     summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
//   },
//    {
//     banner: "https://archive.gulte.com/content/2012/03/news/Dhanush-and-Shruthi-Hassan-3-Movie-Posters---Photos-130.jpg",
//     title: "3",
//     rating: 8,
//     summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
//   },
//    {
//     banner: "https://static.toiimg.com/photo/73579998.jpeg",
//     title: "OH MY KADAVULEY",
//     rating: 8,
//     summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form "
//   }, {
//     banner: "https://moviegalleri.net/wp-content/uploads/2018/07/Trisha-Krishnan-Vijay-Sethupathi-96-Movie-New-Poster.jpg",
//     title: "96",
//     rating: 8,
//   summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form " }

//  ]

  const [planets, SetPlanets] = useState(planetList)
  const [name, SetName] = useState()
  const [rotation_period, SetRotation_period] = useState()
  const [orbital_period, SetOrbital_period] = useState()
  const [diameter, SetDiameter] = useState()
  const [climate, SetClimate] = useState()
  const [gravity, SetGravity] = useState()
  const [terrain, SetTerrain] = useState()
  const [surface_water, SetSurface_water] = useState()
  const [population, SetPopulation] = useState()

  const newplanet = (name, rotation_period, orbital_period, diameter,climate,gravity,terrain,surface_water,population) => {
    const addplanet = {
      name: name,
      rotation_period: rotation_period,
      orbital_period: orbital_period,
      diameter: diameter,
      climate: climate,
      gravity: gravity,
      terrain: terrain,
      surface_water: surface_water,
      population:population,
    }

    SetPlanets([...planets, addplanet]);  

  }
  return (

    <div >

      <div className="inputs">
        <input className="form-control"  onChange={(val) => {
          SetName(val.target.value)

        }} placeholder='Enter planet name'></input>

        <input className="form-control" onChange={(val) => {
          SetRotation_period(val.target.value)
          console.log(rotation_period)
        }} placeholder='Enter rotation_period'></input>

        <input className="form-control" onChange={(val) => {
          SetOrbital_period(val.target.value)
        }} placeholder='Enter orbital_period'></input>

        <input className="form-control" onChange={(val) => {
          SetDiameter(val.target.value)
        }} placeholder='Enter diameter'></input>

        <input className="form-control" onChange={(val) => {
          SetClimate(val.target.value)
        }} placeholder='Enter climate'></input>

        <input className="form-control" onChange={(val) => {
          SetGravity(val.target.value)
        }} placeholder='Enter Gravity'></input>

        <input className="form-control" onChange={(val) => {
          SetTerrain(val.target.value)
        }} placeholder='Enter Terrain'></input>

        <input className="form-control" onChange={(val) => {
          SetSurface_water(val.target.value)
        }} placeholder='Enter Surface_water'></input>

        <input className="form-control" onChange={(val) => {
          SetPopulation(val.target.value)
        }} placeholder='Enter Population'></input>

        <button type='submit' onClick={() => {
          newplanet(name, rotation_period, orbital_period, diameter,climate,gravity,terrain,surface_water,population)
        }}
          className='btn  add-button'>ADD PLANET</button>
      </div>
     
        {/* </div> */}

      <div className='App'>
        {planets.map(({name, rotation_period, orbital_period, diameter,climate,gravity,terrain,surface_water,population },index)=> <Planets
        key={index}
        name={name}
          rotation_period={rotation_period}
          orbital_period={orbital_period}
          diameter={diameter}
          climate={climate}
          gravity={gravity}
          terrain={terrain}
          surface_water={surface_water}
          population={population}
          deleteButton = { <IconButton color = "error"
          onClick = {
              () => {
                  console.log(index);
                  const copy = [...planets];
                  copy.splice(index, 1);
                  SetPlanets(copy);
              }
          }>
          <DeleteIcon />
          </IconButton>}
        />)}
      </div>

    </div>
  );
}


export default App;
// import "./App.css";
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import TextField from '@mui/material/TextField';
// import { useState } from 'react'

// export default function App() {
//     const data = [{
//             nm: "Thare zameen par",
//             im: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXFxgZGBgYGBgaFxoYFhgXGBUZHx0YHSggHx4lHRcXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzUmICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQgAvwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABHEAABAwIEAwYCBwUFBgcBAAABAgMRACEEBRIxQVFhBhMicYGRMqEHFEKxwdHwI1JiguEVJDPS8UNTcpKisiU0ZIOzw+IW/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQBAgUABv/EAD0RAAEDAgQBCwMACQMFAAAAAAEAAhEDIQQSMUFRBRMiYXGBkaGxwfAy0eEGFDM0QlJikrIjovEVJHLS4v/aAAwDAQACEQMRAD8A6rmeDeWtrul92gElwwDMKQQI6gLE8Jof+zX0tuQ8VOFpSUWSkByV6VbRtoHKQTxs/FekVBbeUQVnBobbwHGdderXRVdWRPkEHEXUFAkJ0m86DqFzpBjrvvUq8pfM/wB5IssJhA4lOgmdyAFC3MHhVhih8Q7FqBXqU6DC93qUQV3kxb+1v2SdjBPhKx34WT3QSSkDTps4do8Xlvx5SHAPzZ4eqExMmeHLr/UnXx+6t234rLocrMLg2oI65Kl2fW3gPt8MlAqy56B/eLiT8KY+EgTAuJM+21NoHShMTiI2NDfWqity0yk8taJ65Xc294BPoB6JkSmvNY5Uu+sVIl2gHlxx0EKP1cjVGd4OVe94OVBd7JrC9VW8sVOK7mUYVis7wcqBXiK87+rnlh+xXcwUxDia81JoHva27yoby3UBuAu5lGADnUoQOlLg7RDT9OUeWabjDxCo6kQiu7HIVnddBWqHq2DgrTZiaTxLShQQte7HIVWPpDwhcwhCE6ilYKoiQNKp38x71aHV2tVW+pYk4hZ7xSkDSTJ0BVrDw8R+t6rVxlOi8Ndr8+dl1YU84KoSMtQ6WEthSlCB4k6R4uEkRvXYWWhpTYbD7qnQbViqazZkNrcsqQVtWCh8euEHragVqgpU3VDoAT4K7RJAWfWBeKT50t3QSzBXI35T4tyLx1FEIMUm7WZynCYZ3EKE6EyBMSokBCZ6qIryGIx9bEhrHCTNh18PZOU2BjsyHTi8ftpZHhF4kAwmftyb6uUW3rdp3Fd4CvuwmwURPwgumydcAmWxPnyr3I8wOIw7LykhJcbQsp3jUAY+dHGs91ZwlpA+d6dzAj6R4flIHxi7wfhccUmTIUg96QlVxxKABsABytsHcXqNmgJt1Eqt8XLTfztThQodL6VTpUlUciD91D54nVo8PyjipOw8EGl/El1YQEBsOABSk3j9mSR4hqsXOQsN71jqsapMQgSrdJIMW28W3XfpR6FVKk1ZtWNGjwVXOjRo8EsdcxpSQAhJhQBFzq0p0m5jSVauZ2tvWs4wGBoiVXMndSiDdU7abbRN9hTeaiKqsKx/lHgoDv6R4ILC/WCv9rASAkgpjxGCCDc22PDamIdodx8ASogDmTA+dLMbniURoSVkz+8kADjJF/SrtZUrHoN8NPt5oVetTZeoQPnDVWBK6kkxS/Kseh1IIBSSCYO9jB+dMmxUOw9Sm7K8QUAVGOGZtwtBNbBwgit1IqNSoMASfu/XKqGm4FTnBRjaq2W+E7n8T6AXNAoVJtcixUdh0A5/omimkAEnc8+P66U/TeWwJQHNClS9ImCOh3rAvjUDi6jeXYyQIuTVX4lznFykU9EwwL+qRyPyNFLpLgXYcHW1OFV6PkbEGthhOrTHuPIoGIZlepqX5qqyfM/hTClucH4fX8KvyqYwdQ9n+QUUBNQIDGYnumnHSlS+7QpelAlStIJhI4kxauK/SD28+u4Tuk4V5pKlpJW5ZJCZIAgbkwd+Fdywxrnf09q/8Pb64lA9mnT+FYfJPN87TzNk5hBk27t73ui1SQDB2S/Je276G20KynGaEoQkKQlapCUgAgFsbgc66BhMT3jaHNK060hWladK0yNlA7HpRjJlCSeKQfcUBneYIw7TjzhhDaSo+nDzO3rWbWLHu6FOCToC491yd0ywncqgfSn2mWjRgcNPfPRr07hKjCUA81H2HnSXMux7uW4ZvGYdw/WGoL4B8BSYkAcUpNiDuJNopV2fxuLOMXjzgHsQtzUWzCktp1WBCtBCoT4RcWmrVjM2zl5JQMvaQhQKT3igbEQQZWOHSt3LUwgZRpluUXqS9gzk/U0yZgaDrE8ChNy1ZcZnaATHgNZVzyHNk4pht9FgtMxyOyk+hBHpQ3abtKzgUBbpMn4EC61kch+JtVV+iJ5aEYjCuAhbLgOk8NYKSP8AmRP81Rdp80YYzltzFH9mnCjTKSqFla4IABvvesw4FrcY+iAXASQBqRq0DtEXi101zp5oO0JtfY6GUU722xraBiHsBowpUAfF+2SFbKgxbzA86tzWJ71tKmljSsBQULykiRHI3qnY/t5hX0KbRh8S+haSk6G7QbHc/hWv0VY8qw62FTLDhEKsoJVJSCOBkLEdKvXwrhRNU0ubLSBF4IdpqSZB1O86WUscwuyZpBHmOsR+IRz3a/AIefZxAKCyoDUuV6zsSkJkyPuobB9t8rU6NSiEEK+JDhSDKQmbcgonhfekuT5Ozic5xnfpC0tlSgk/CVEgCRxAvaugJyDBRfCYc9O5b/y0es/C0IY4OJLWk9IACQDaQePYNkuMOaknK3U/w9afZfim3m0uNKSptQlKk7ETH4fKjAYql9su0gy7CpDKE96s92w2lNgeekcBIsOJApM32IzEoDys0eTiT4imVFoEidFlRAP8MdKSpUGZecc8NBNpkkxrZoOm5jWdVz5nLErpC3ir4TA/e/Lp1rVKJ2sn1lX4x13NUvsV2jefU9hcYkDE4cgKKY0rTsDAty6GRVvRiBwoWIz0nljvLTqI7dQVdjZbLUWCEgWgfIV59Zi+w2HM+lDPuEiwk8uHmTWuGam5MnadvQchQ80KcgIkr199SrCw26+/PoPcV4wyLz7frj+r0RiFBPkLf0/pUCFE3IgcuPr+VQ5xAspaLWRuGYPgX1pwaq2MceIShrisEmdh+o+dWYAxcyeJ2r1fIfN8wcnVPbF/FJ4qcwnr9UTS3Ofs+v4UypTnH2fX8KLyt+51O7/IIeH/AGgWuEFc5+n4/wBxZH/qR/8AE9+ddGwVB9ocgw+Na7rEN60zqFyClQ2IIuDc15/APFMsqO0BlEqiSQl+Gz/DBeHwxdT3zrQUhIvICJkkWFgYneDVU+kF363i8NlifhJD2Ijg0i6UmNpg+ujnVh7PdgcDgne9ZbV3gBAUtZUUg2MDYEi0xO9GjImG8Q7iUo/bPBIWskmQkAAAHYWG3IVVxo0X56ZJgGJt0rwdbRqDeSOu12S6x+BapbCRAgACABYACwHtXqgKkUmolVlhaIMqg5ArRnuNRFltJV7Bm/8A1GiXUg58mQD/AHLiJ+2qrWzl7Xel8IHeqSEFfEpGw/XIcq8xeAwrb4xThQh7u+6ClL0gomYgmNzv1rQfiA9+aD+zDe8NAnssgluUAf1T5rd1UGqNk7hTnGOTsFttLHWEoE/9SquGMcBgpIIPEEERQHcgKK9KdRABVFykSQCdyBJt1oGHcKbXiPqbHmD7ea0BRz5XToZ8iPdVDsu7GbY88/8AMKu7eJuEzc3HK3+tJsFk7bLrzydRW8oFUxAibC216ILYCj8V4gyYCjNhfr+rUziXMr1JbplaO8NAPzhdWpUTTpw7iT4kkKufSjhiThcQVLDbbhStTfxoCykhQPAjSfWOdM8D2RQ+2HGs2xriDsUvyPLoehqx4bBa2y04hBSQUlIukp8jSZn6K8OhRcaxGKYn7LawPQEpmPOaLRxDXURSzFpZMEAEETN+BHEeG6zcQwNqZokHbQ8LIrJezbWXl14OvPOO6UlThClWPlJ4ewp9hHNQBAtSzEYjDsJQ29iAgJ+FTriQ4qDc6lQehI502yhSSk6FBSZJBBBEEzYjfjSNVxqdN5JNhJGwEDS22nijNAptIHyUexyrdS9JgbnYeXH+tci+kbO38HmzLrJUe7YQooBVpUnW53gIHAjjwgHhXVsjxzWKYRiGlBSXBM8UkboPIgyCOdNHk57KTKuocJ7+HukjWBcQiG0gk3BULH+GeEcPW5rVaa55lyzhe0L7erwYpkLA5qSmZ8wUO+9dE1TQMTS5tzbzLQfHbuMjuVqZJnwUCzy3/KrGFyAeYB96rjgvVgwfwI/4R91a/wCj7iHVG9QPgT90PGDotPz5ZGUqzB0FYSCJAuOInamYVVHzFSxjVKgpkCL32tt91xwrT5VvhiOJHlf2S+HbL06GM0L0kW4GY/Xn0oHMsapWrTuCAkcNpUZFv9KIwwdv4LyfETwm0fKtFpKjGok6gmxtsFE25CawG2YAExbNK1w7rm6lgAfZI2nneoMYp5ZhKtKf3wn/ADE/IeopkMA2CDpuLzxtt7VriqWqvESFanGZANN6QBJPMkySedVHFZzmmtSU5c2U6jpUcQ3BAPhMTNxFqt6iapvbrM3JRgcN/wCYxFiR/s2tlrMXFp9j0qMIM9TKWgzu7NDQLk9Fw03mU06wmT3RfxBU3YbtFicYtwOYdCWkEp7xCyUlaTGkT8Q38Qt70+zfsxhX3O+eYQ44E6ZUCfCJIEExuTeJvW/Z3LkYZltlA8KEgDrzJ6kyaTds33ncThsE08WEuhxbjibOFDceBB4Ezv8A1BuXNfUJo9AQdJ0AuTcm4EwOzrQXS2A657tTtwSbKWBhcZicGizelD7SJPhCjpcAk7aot1obtd2icwa8PpTrDgdlHFSgGw3fcXVw3rGMoawmZaWtXjwiyoqUVKUrvUXJV0FD9sWdb2APLEf5VH/spikadTEtc7pAtvNphhEmCbki5mSb6p5ragwxDbGR1wMw8beVkO1nmJxLicH/AOXfSpZfUkBQCEARo1T8WoceHWnXZnGuKcewmIIU6yUqDkABaFGUKgbEcY/OvGcrSMWrEg+JTYQRHIg6vYAelaNfs812s7hbH+JtySPaoq1Kb2ltNsdGesO1N9csSAJiAN7ovNPpkFziTMdRboLaTpeEswzrWYOOv4rG9wylZQy2l5LRhNi4Z4nyp72KzpYfxOC+tDFttpStl7UFK0kgFClDcgkex5gCtJZw+XPLRjMCl1haypp8NhZAUfgVNre/QzXROzxwjjXeYRhLaCYsz3MwAeKRIvuJFFxbstM5QTTIAabQNDYjfjeZJm6y29KoM31A34/8cNoXOcnzXBOP4h/HoU64VlttvulOJQ0jaBESTN97TaTT/wCj1YTj304VnEN4JbWsB1CkpS8lSQQkqmxBJiZ9qmcyvH5fiXHcE0nEYd9WtbJUEqQ4fiKSTsek8osDV0yTFPut6n2Dh1TZBcS4Y5ymw8q7E1WlhdT+lwAjOLQB/BAIyxY34k3Qrl3S17Ne+bgqn5mgHtHhwtIKV4RSYIkEEPyI8qWBxfZ/HaPErLsSZE37s2B66kiJ/eTG5FXHNOzTjmZ4PGpUnQyhxLgJOoylYTpAEG6zMkbUd2wyRvGsKYd2N0q4pWPhUP1cEijU8ZTpsY192loDgNuk646wLjjpvCHzZc45ddlS8/IV2hwBSbnDqNtojEkfjXQW5Nc07CdlsYzmGvFgqRh2C205YpUCYQEneAlS97iwrqMUhygGtcxgcHZWgSNLkn3TFE2Nt/sFFF6fsDwp8h91ItV6fNfCnyH3Vofo+OnU7B6lCxn0hSDUf4R86CdQNZVFxx40xFLXz41DrTnLboos/wDL2KWoiSexD4TFJxCFaZEKI48DY+vKtMHgygqUqLkwOQ4n1oxlISDpAAngPSoxiAZAI3I3G4sR51jOqNygBG4wlec9o8LhSE4h9ttShIClXImJgXje/SlrfavBOqCW8UwpRMBIcTJ5QJmqznOXtP8AaJDbzaHEfU5KVgKTIK4MGjO0/YLAONLhltghJIWjwaSBYkCxHOarUp4cZOdc4SJkQYknaQT1olLNJygeasxqjnsViRiXcSMxUhTpMlLKZ0z4UAqWYAsLDhW/Z3EYvHZbh1NYruHUkpWsthwrCCUj4uJEEnnNH5NjsS3ifqeLUhxSmy408lOjUEkBaVJmAoTNuFUYyrhjUa1wzCQ5sSYBuek0tjexmEwS2oASDGx7ew+qiZ7FulQUvM8cYvCXQgH0E077S5AzjEpDmpKkHU242rS4gneD1tbyoHtp2iOXsIeCAsl1CCDPwmSuI46UmPOkw+kttQCjg8YEHZfdggg7Hf7prmUsXUaKrBuQCIF99IGm26hxp5sjvOfyo8Z2HaB1jE4vvQI73viXCOKZI2o5eGTCQRqKI0qVdUgadUnjBN+povE5u33SXSSlKxqSCkhR2+zvNVns9mjjzhSooIJUrfxRwTvFpG3KnMNgsVicPVruMNpibzeJkA9UQY0JjjGhTq0qTmtAu7hHVc96fttUShlJUFFIlMgGBqE7weEwPYVj6kpAJNrCwJJJMAW61G1jGzFzJJTEGZSVBXldKvas0U6jhmaD3TwPDqlN1KrdyneCRTAppRgszbOjSSSqNIggm9zCo23PTzFNcRiEtpBWqNRgWJJO+wvsCSdgASbCqDD1M2UtM8IM27b7HvsJWTWqiZmylmKxK4pa7mraSnxCFFI47rISi3UkCpMBmSXFKRpUkhS0iQIV3atKoIJ9jB41bmKsE5TA/PHsk8BfRCJaEwVikpSVGwAJ626cfKonHEm4UDG8X+6tH8PqEbGQQYBgg9agZYKATN+IElIVxgcBPCqfUAN1IaAZCNKqjbeSqYIMctqr3aTMVd0tps+OwUdk+K4RPNQB/U0v7PdplLUljukJ0gTC58I8FoFzqKLDnM06zkus+gKrRc6Cw6PG+s7AXi+4CjpyTHRG87zwmbbmPdXALk24VYkbegrnnZ559b6y8nTOvwxEAEe4uADfjXRBW7yZg/1aq9uaZawyOvNP46oWc7E8+wOyxBcL9XbHFTil+JHjPmPuFMaXY0+M+lV5c/d2n+oejl1H6lopOpMGY4wSPmL0DgcrSzJSTKvj5Hj6RP5zvTBnao1q4V55tYhglHi8LkvanJvrufhnvXGYwqVa2zChpm09ZorGfRaF/wCNj8Y6j91Rn5qJHyqyM5A6M6cxhA7n6qltJkSV6hIjcQE77eIdasOKpmtjqtJrBSfENGkWNyYMT7rqdNrnHMFSMVjm8ubZwmGYW64rV3bSTBMXWta1WAk79elLME5inM2YOJaabKcO6pCW1FdlFKTqO0yeApt2ny3EjENYvCJQ442hTamlnSFoUQrwq2CgRx/oUwxuNbxgxeJy94I7hTKUsKQ+sEuBZJCSN4j2qlMg0y4QXEOkl3TkyLAkbXsDM3PBo/VeYkRa0fOxE/Sa0HE4FpVwvGtJI5ggpP8A3VdnSI5Dlwqt9qcpcxD+AKU+BrEd64ZA06QFJsTJkiLU8xa4BpOq4GlTbM/Uewl0ewRabZeT2eirme4NTi1RGmEnxaiCbiANWkRAPwn4qUMZV3S5aOla99KbCJ0mSDYTBm5kxFWRxeoxXqW/an6PKdWmzm/4YiNjaLyDIm8W4AgLQ/V2RJ14oZ7DhxOlVrpNo3SQRuCNxxrZjK0aiozPeBwG3xBOiIINrqPmomiFpNTYZFJDE1GtIBtw8J9ArVGMdc/PklaZa00laEIUPAlUI4yYv0+BRjjqJppj1oPdhbhQsGU6TCjPhUNjY6o9RBBik+V4dxLslChOuSYiyj3ah1hSkkco4bz52ytZhCTJQpEmNJCwZnkUqCFAweIG9PFn/cQX7HpS3eZm3GbGSRcmCYyXgFth69Sg/sRA0DWTGgqvBlBBSocvEJo/KMvCHFuFwqBUsoTsEatIWTN1ElO559SSqGSrTIHdqR3gUAqwju9N9I4K8Q4WAGmAakcyR169k+JR1EmY1OWIA8QIKOMACwndgP50kPxFjqS0aG+kzNrxt0RmuFSo3K2zVaotUDqd6nbJtMTxiwmtFpvWG8IjDBVWzjs+XVEpWEzG4lM8ZHEf1rbIcKGioFvQoBKSU6glWkrIgEkAwrhw8qsDqaFKBv8A61pf9VquoupVLy0AEWIjjxBFjuVd7H1CzpWbtqCLx1227ANgjcEJqy1XMrHiSOtWOK1P0fb/AKdQ9YHgD90jjvrCnpdjU+M+QphQmKT4usUzyyzNhu8fb3S1Iw5DpsmtWRxrFA2FbkRXlBMg8ExNu1ROGgMV0rX6q5F3TNucC1+N739I2tULmEWJ/abmTY/uhPPpw9IqlTKd/VM0wAdVoa2SKGGDVMlwkBUwQYsQY36RefesaYI1wr4jO2173niLcKHlHH1TVjuiSaAxyrcakODISAHDaNhb2mgncMq5KyOYuRsBxM8KkNbP1eRRaQEzKHQiiAmRQ5wpgQqISB5xPXrWr2UFa9YcUkRECZFlCxmB8U7bgUQBp1d5FOFw4ooVuwsEkSJG/O+1J/7CI3dNjNgQP9l/Ef8Adn/nNTYPLNKkqUskJMxfgCBx6g+lTkpwTm8lUhpFinacYgAkqEBQSeiiQAPdQ96IUaRnJgpS1d5ZxQJBG3jSu17Tpg+nKtXchNoeVZJGxkCFiAdW3jFv4RU5KX83kly1k6p4ijWTalOWYPuklIUSCoqvwkJBAvzBPqaaI6VQQHWMpeqBoiEitAsg3HDhW6dqlaAir5SdEoXQg1rBnnQwRePajHMPuajUkbUGL3TLHAaKXLkeNPnVgNJ8AII43pua9XyDAov7R6BZuLMvU9C4zceVFUHmAsD1pvlQThHnhB8wgU/qCjbFq0dFTI2rRVeaqU4pgIwN0G5QmIXwpi+mkmNJCjbrWZVaWm6coDOV4tdYKgQ6DMGpkG1DThbC1cVQmIo/RUL7PKpmFZjgCg2xPCjGERWuHYjeig1aiNupq1BoluKVFC6xwovGt0D3ZqzYTNKC1MG11I4sULhwaFzzNUYVlbq4hIOkTGpUHSkTxNS1hc4NbcmwQXgNMnZGY7MmsO0p15QQhI3PyAHEngK5h2h+k992UYZJZT+9ILh/BPpJ61U897RPYpQU6vUU/CkWQPID796TFw17DAciUqIz1uk7yH37/BYeIxjqhhlh5q3YD6R8xaI/b6xycSlXTeAfnXWfo87aDMErSoBLqNJUkbEKEEi5kagfKQDzPzxRmT5s7hXkvMqKVpMjkRxSRxB4imsXyXRrMORoa7YgR4wl2VnA3uvqnEUIs0B2Y7RN4/DJfRY/CtG5QsRKfK4IPEEUxXXisQwseWEQQtSkZCOyy5FNTSvLuFNjXqeQ/wBge32WfifrUtQ4pMp9qmrVwWNP4lmei9nEEeSC0wQhaAzjM2sM2XXlhKRxM3PAAC5NGPOhCSpVgAST0Fya+Ye3Pa53MMQXDKWxIbRyRNif4juf6Vi4fBnEuy6Aa28kVzsquWa/TC6okMMpTIIlfig8xEfOqXnXafFYklTryj/CDpT7Cq62upg5W/RwWHpXYwTx1PiZQXVHHdTNYtaDKVKBHEEg/KKteTfSHimYClB1PEOCTHRQ8XvNUlSq1CqtXw1KuIqNDu35I7lLKjmfSYX0T2W7V4fHJ/ZkpcAlTaviHUfvDqPWKsARtXzBgcc4y4lxtRQtBBSobgj8OY4i1fRPZfPU43DIfSIJELT+6tNljym46EV5DlbksYUipTu07cOqdwdvDrT9DEGp0TqmpSJqSLVGDUqVb1mUwIR3Sl2MTQfd8aPxNCHehTdPUicq9QK5N9LmLJxKGp8KGwrpKyqT7JFdbTauOfSwn++gjiyj/uWK2OQv3wTwKTx/7E9oVf7NZIrFO6E+ZPSro59GI4OKHoDWn0X4P4nOumfYmuoBJivT1azs5AOiVw9BhYC4TK5Q59GsbvT6Ujx/Y1TZs5PmK7C8mTtVTztMEjc0J2JqA6pn9TpEaJF9EWbnD4xWGUYS8CPJxuSn3Goe1dpmuAZDhlf2thwkXLyFbxYXX8ga7+TFYPLzWiu14/iaJ9PSPBDws5S07FM8vMQKbmkeDXcfrjTyK0eQnTScOz3SmKEPUlYvasrF7Vr1PpPYfRLKsdu8QW8vxSk79yoD+Yafxr5gdYn519V9pMF3+Ffa31tLSPMpMfOK+WXlX4+X69aV5LjK7tHz1U1EDotFMcLkzzgBS2SDsYorKcqXiFpQhO59haT8q7xluToaaSnSLJAp2rVc2wRaNEPu5fOOIwikEhQII4GoYrsva/s8l2SkAK8q5jmOULbN01SlimvsdVevhH0r6hJq659COLPd4lvgFtrHmpKkn/sFcncaINdQ+hEj+9f+z/8AZSnLIBwTzwj/ACCHhv2o7/RdUUa91WPKvF71qTavEt0Wqh8RehiBzrXGZggHTJUeSRP3UkzPPS3HgiT9pJt13FqJTwlapdot8704xjg26eyK552/ylL7asT8LrZUjTIAUhCidjckAk2pk92mdAUQW4Ak+A7D+at8izZOKWQop73uyYKfCpK7FJHOBPODW1yZhatCpzhA0+3qhVwxzSx++nztUPY3ClGXp0lQUdSpSAVCTcieNJHswxLJWWncSlI8RDqkGZPAKTc77EVe+zmFS0ktpulJMXmASbT029KJxmXMk61pB8/1ethj9XdfZuljRnK3hCquJzPEIwhxSvESmAmIN4gn9ca5/jH8S6O8dWoAgEJQQmZO1hc11ztM3qwxgWmfaKpjTLZElIkffXMqc3JIkq9aiagAzbfJS7sVhHF5phiCZQgrWoi+kBYM+eoJ/mrtXGub9kM0w+GfcW7IUtKUJVYhKQSo23uSNp+EV0TD4lDiQttQWk8QZFee5Zc91UOIsABPmfM9SrRYWSOtMMHuPT8KsRqv5am9WE1o8gDoPPZ7pHGHpQtq8XtXteObGtup9JPUUqEITXzH26yReDxjyVJhCnFqaPAtqUSmPKdP8tfTKxVE7Q5U1i0IwK0nvEpCi4IhCjfUZ3BJiP4jWPybWh7p6h4/PVNsw/OtMai/rc9UwO9Vr6Kuz5Wj6yokAmEjnG9X3N8xDSTDa1Ryge070v8Ao4tgG0EQpKnEKHJSXFBQ9xWvajLypLh1LUpSClIkjQSDCgUEG3I2rTebEzrvwR6LdGxpsN0rZzhD+yFJPJQ/Kar3aXGMtyFiSeEXpp9HvZpbBK3Con+I8ecUp7d5RrxBUlM2kAGJ50kabS4OJtPYmjUfkIA6UdqpeKWlwKAZ0yLGQT0JA4VbfoQaP96XaIaT1nxn8aruW5EtGpa9YCUqjUbm1dD+ijKe5wQWR43lajzAHhSPvPrQ+VazG4R7AdS0e58gkaVN5qBzhxVu1mahx7hskTJ+6iSi9K8ZjYcKdJOwgRexPHff768/yfTbUqgO0F/t5rTpiTIGil7gNgRbn+gCY9KhxhSpMEAjkb/IipQ26rd0I5BKQT6k71CVuIBClIcT18Ch7W+6vUQToPT7yl3uE3Mnv+0LnueZaPGWk6LGwmCDvY7VWsLmPcBVvFpE85SmAP1zrqeOZbIkKFuZE1Ucx7MtOO6hqUSmVJSTptYTYmOg/Kb4eS7m3oNZxb02bKydjsclTQj90f1pzmGLbGkKPkm5J6wLmKqAyx1g/wB2aCVA3ClnRBuUneCOgEcacYYOn/EQqf4VD8QKFU/0nFmvzQo9N5e2dClXaNQWhSe8cCTJMJc1E8rpsI9qrbeOTECbcwQfO9XHMcnSr7Dx81/1qp4zs5iCqEIgdVX+6pDqeh+ei6pmBDmpcHwp03jmeieHlTnB5t3Udypc89agPYED5RSodkcUFeIJE9Sfwp5l3Zkp/wARRj+FN/ckRRH82REhUpF41arv2Q7Xa3EtvhKSogJULCeAIPPmK6YDXBnspQPhUsed/uNdP7Hdo0vNIbdWkPpEGTGsJ2UCdzAuPOowVOnSLmtgTCBjacw8DtVurVzY1tUbpsacqglhjgfRZ41QtLsXliFalaZUoATsoXBsoX3ANT4nEECwPnb8KUZl2jDDalLQpUD7P9a87SoYmiC8N1tBj0P/AD3G7bC9plqny5sIK5QEKUsqUAZGo/a9QAfOa3zV5ISTVJ7K9sHMSHHnQhI7xSUBP+7G0ybmZvR+cuKfSA0uNR+IXgca0RXc1mV8Zt+Ep6lRzkVNkQnGLS2pSEgkmUyopFucA2qp5xmK3HwdH7PTOvbxDeAb86cOuJbSBiHHHEDTZJCIA+KyYBkVSc4KHXB9XcdQJMlRChEmOJG0V3N5hBcI+cPymXOy9LKZPCPC/wBuwqwsD6ytLaYlXE7QAST7A10DB4UNoShIskAD0rjPZzGrw6lLSqVAFIJjibmD5ffTV3tbi1gJU6QZHwAJi+5i+1JYrkytWIyuGUdszx090lUxQdsuqlNKn0ftVKNyAAOg4+9JcF2xQ2kjErA5KtPkR+NQNdo2nnFONqJQYFxBsN4PClsNhKuHqkvbYDXZFoEPJE3jRWJsE0JjWlQaNwihpBmtcyeTpmRWvEhW3sqxiExuKXuszIFp36g8KjzDN0lUAzQqscZm9ADSDIUkhTKxrqDdWr/iJn3ptleeJJCF+AmwJ2PrVZdx15Mmgnszbgg+xoga43hVzNFpXUddeqUnpXHz2neYI0qK0fuqJkeR5edPst7cNr+KUnr+e1EdSqASBPzxVG1qZME/PRXxRFeKA6VXf7bSqIVatlZnGxHvS+cg3CaAEWThbCVDaq9mjGk2qUZ2OJFQ5rmrWidQ4VwM7LnAQuw5zmimyEtgFZN52AqvZrmLypRqITspQkHqEgXp1jj41HrVS7RP7gmK2iBF1hsEQQg8rzQ4fU22466kkf4q9QRAjSkxMeZNNjn6VCFIH3/fVQVjGk/Eo24AVA/2iYT+/wC1BcJEIweRurI8xhF6oToJ30eEk8zG9KGc7auEKSACRaBsY96Rr7TYY/bWPMGh3FYV46pQVc7pUfUVVtMNMwufVLhr5q3M5nI+L0NbrbbcEKAPr+VUXF4d9IllwqH7pIUfQi9Kjj1j/FU6j+WPvMVfJO0qhquG5XSGcmw6R4UD3J+80cyhKLJAHkBVBy/N8MmJLyz5j8FUyV2pQPgbXHUj86tKrZWh0A32PMD7xQj6RyBjhA+X5UjHaqd21fKtxnwV/s1Dqa4kKwKbsZroOgk6TtET0iaCzJ5hdlqejl3iQD7XpLjsak7G5NAowBNy4ZPkKTrBrCHWHdKZpve8EXPem4Tg0/Chc/8AGfzrSWCD4YjmtX50tOVji4v3rRWUo4rV6qoRqsP8Xkrc28bealeQ1O5H80ioClk8T6xWKwTEf/o/nUScMwTGiOuo3q4eOtRkdO3it3GsORBmPT86jGCwpEQY8zyjgetTjKmj9kH1P51hylv9we5qBWbs4qTRcdQ1aIZwwEJgAD94j8b1sl1mOXrWisCyD/hBXvW6MAyfsDyqS8aku+d64MdoMvzuXqXsPzrdLmGJ+xPVIP31GrL2f92n2rU5e1+4n2qMzeLvJXyP6vNduzfP8OlxQS4FEgnwgqTI3Ei1UDO33cQ4S3IjnA++ieIISrne3O1zyoZbq9SobMHaSn8DVDjnO2EdqkYMNG6QPtYwXBQodR/So1MYg2W0kdUqj5GrBim3FtqSABI58eG1FYTAuqRMAkAAwbTHWuGLsNFV2E7VRMZkylbA+sUv/sFwG6gPLerz2nw+hlBIKTx96rSn0zBJn1phtd+yXdQpjVR4TAFAnvl9BAprhsSQmCpZ89NLi6kC4PMWN6kOJRYhEW43nrUGo4qwpsCidyBtRUpKlJKiTciASZ2A2ojA9meeLSKjTik8qIGKSkAlJgiRI3AJBI9QR6Gp/WHi2qg0KZ6kenIEAWxjfyn51O3lDAHixCVHrf5TFJ045M7V6caAYg+16jn3/wAvqrcw3iilZHhtYWcQSZnYAfKtlZfhx/tz/wAs/hQH13oalGLn9GoNZx1aFzaTRYFElhkH41H+X+laqaa4FXtQ4xnQVG4+o8vnVBUfOitlaitDP8XtWwDQvpPyoGHDPh2EmxsOdbNJcNgPYE1Jc/iuAbwTIPtjZuK1L6f3aXwscfl/WpHG3AbyDAMRFiAQfYg+tULncQrAN4IrveSajUqfsioGWHidKQSTsNN7X+6vV4N8kDSuTBEJ3B2964Fw3+eCtDeC3n+AV5on7IqBeHeQY8Q8wPyrQtPDYm/l+VTLtnBRA/lXRFNmhdBBnjM0xWaSZtmaWbKBNkqMESApaWxbfdXQWN6xqcudDdVsVMobLtEenMFpNyNuVeox5gjmZ240KtkzXiW6KHlwmUAsjZSZ1j1lkgEbg8T+M/rqarSXVqBSqPHvYTvz/W9PMcj9mqelKEGRajNqOaIlAdTaTMXRX1XEST4b+WxAg3PlE8+VFIyHEuN8NJJTdQmZKSPEqd5FDIkiTvRbJBT4lG0wOA42t5/q9WGJPw/hV5kAfj8puMFjoAlEAadm4M+G824+lav4XEqKUuaDKtQHg3aUVAHpPP8AOliS2R8autv6fL58tHC1NlqFotNwfi4edv8AWr8847n+4fZD5oDYf2n7p8trE+NUNpkaPskhMmTJNyCjjfxzVaxja8UoKXBKRANk7kn1NTJLIUkFSokyYvF4O3OOfG1EupwgmHXDaYgXARPH7RMDfcm0C9i+o/Q+LtfRdkYzb/ahVYR0AmABx47dPX9ACj2cqxBQjTo8RsJEgFOsG546j5RUWHewZA1FWrSnUkzGqwVBB3JJMX29BHOGKQApYV3p1WNmibRM3Ag+vS/XGp/3fhQQDYDy/KJYyN9KRp7salHwyIEX5/8AEPTqK1TgX1KUkqbGnRrMi2v4f0Np8q1H1OQO8cmPtABPWY+V/wAqFdTg76VvHePCkcJTw4m3Tla8gfM34VT86P5RKcmxBmyLgJPiSbFRTHvPyi4tIjAPBXdlSAoIGm6TsptOmecLSfTnQaThtaD4tOkBxMX1aSFFJ5aoPqbQIqbFfVA2dGortpJBmxGqRMXEmotB/wDb8KQDP/z+VviG1tQFlMquCCkxoUOVviTH8pr1efPXlc7j4U7GJFh0FLC9MXm0CeXAV6FUuargbEx2o/NNOoRj/aDEKVOrZWseFNjGkcORi9a//wBFiQZ73jPwo3/5bUHxrVSDyHqQPvqRWfxPirNw4dZrZ7p9lvjMzddCUuK1BJMWSInfYT70Klrp860x+Jba061Rq23MxHIdRQi86YH2/wDpX+VFbQxFVudjHEcQCfSd1Rz6NM5HOAPAkBX8xSnG4dpwypCVWAukmQDqg8xNxyNZWVnUrGQVo1ACLolJB2/EffSrOsUpBQAdIVqkhTYVNghI7zeSTwO3WsrKNRaDUAPyxS9VxyEpLiX8T3SkFwOEaDqSEyokJC0gQBCValE73SK9ydZUFHUFJ1eG6SQIG+m0zPpFeVlaOJphtO25Gw6uAWfReS++3b1pyBXh+E1lZWW1PFa8KjtNZWUUKhUbu/pXvcEpKrQNyTXlZR6YlzRxIHiQF0TPf5An2WuHYuDPPeBtsb9SKnyzCBaiCTNvnIn3rKytcYSmaIfuWE9+WfKVnU6rnVHN4A/4lMMuyYOMOvEypGyR0gqJ9DbypO6jSqPL51lZXnsPUc+pUa42Bt2QFoGOamL5vYW7FgTWyhyr2so6qsg/61IPSsrKorhYDReCxYRqlIUVJUkE6bEgQq/LesrK4OgyE7g2h1SDwPokeeYsNqQuAbK0ibSQjytalGdZohxvSAE3B3AuZK4ANpUT6WrKyvXclYem/DsqkXBdH9zttF5vlSo4YuowaSv/2Q==",
//             sm: "Ishaan is criticised by his parents for his poor academic performance and is sent away to a boarding school. Ram, an art teacher, however, realises he has dyslexia and helps him uncover his potential.",
//             rt: "4.8"
//         },
//         {
//             nm: "Paa",
//             im: "data:image/jpeg;base64,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",
//             sm: "The 12-year-old Auro, who is raised by his gynaecologist mother Vidya, suffers from a rare genetic disorder called progeria. Auro wants to know about his father but Vidya hides it from him.",
//             rt: "4.6"
//         },
//         {
//             nm: "Baby's day out",
//             im: "data:image/jpeg;base64,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",
//             sm: "Three bumbling crooks pose as photographers to kidnap the son of a millionaire. But the baby turns out to be smarter than them, making it difficult for them to hold on to him.",
//             rt: "4.7"
//         },
//         {
//             nm: "Beauty and the beast",
//             im: "data:image/jpeg;base64,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",
//             sm: "Belle, a beautiful young woman, agrees to live with the Beast in exchange for the return of her abducted father. Soon, Belle discovers that her hideous captor is actually an enchanted prince.",
//             rt: "4.2"
//         },

//     ];
//     const [movieList, setMovieList] = useState(data);
//     const [mname, setName] = useState("");
//     const [poster, setPoster] = useState("");
//     const [summary, setSummary] = useState("");
//     const [rating, setRating] = useState("");
//     return ( 
//     <div className = "App">
//         <div className = "add-movie">

//         <TextField id = "filled-basic"
//         label = "Name"
//         variant = "filled"
//         type = "text"
//         onChange = {
//             (event) => setName(event.target.value)
//         }/>
//          <TextField id = "filled-basic"
//         label = "Poster"
//         variant = "filled"
//         type = "text"
//         onChange = {
//             (event) => setPoster(event.target.value)
//         }/> 
//         <TextField id = "filled-basic"
//         label = "Summary"
//         variant = "filled"
//         type = "text"
//         onChange = {
//             (event) => setSummary(event.target.value)
//         }/> 
//         <TextField id = "filled-basic"
//         label = "Rating"
//         variant = "filled"
//         type = "text"
//         onChange = {
//             (event) => setRating(event.target.value)
//         }/>
//         <Button variant = "contained"

//         className = "addbutton"
//         onClick = {
//             () => {
//                 console.log(mname, poster, summary, rating);
//                 const newMovie = {
//                     nm: mname,
//                     im: poster,
//                     sm: summary,
//                     rt: rating,
//                 };
//                 setMovieList([...movieList, newMovie])
//             }
//         }> Add me </Button> 
//         </div >
//         <div className = "movielist" > 
//         {movieList.map(({ nm, im, sm, rt },index) => ( 
//           <Movie 
//           key={index}
//           mname = { nm }
//                 poster = { im }
//                 summary = { sm }
//                 rating = { rt }
//                 />
//             ))
//         } 
//         </div>
//          </div >
//     );
// }

// function Movie({ poster, mname, summary, rating }) {

//     let y = {
//         color: rating >= 4.7 ? "green" : "red"
//     };
//     const [show, setShow] = useState(false);
//     // const summarystyle = {
//     //     display: show ? "block" : "none",
//     // };
//     return ( <Card className = "movie" >
//         <img className = "movie-poster"
//         src = { poster }
//         alt = "movie poster"/>
//         <CardContent >
//         <div className = "movie-spec"> 
//         <h3 className = "movie-name"> {mname} 
//         <IconButton onClick = {
//             () => setShow(!show)
//         }> {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
//         </IconButton>  
//         </h3> 
//         <p className = "movie-rating" style = { y }> ⭐{ rating } </p>  
//         </div> 
//         { show ? <p className = "movie-summary" > { summary } </p>:""}   
//         </CardContent > 
//         <CardActions>
//            <Counter/>
//             </CardActions>  
//             </Card >
//         );
//     }

//     function Counter() {
//         let [like, setLike] = useState(0);
//         let [dislike, setDislike] = useState(0);
//         return ( <div className = "counter">
//             <IconButton color = "success"
//             className = "like-dislike"
//             onClick = {
//                 () => setLike(like + 1)
//             }> 
//             < Badge badgeContent = { like }
//             color = "primary"> 👍</Badge>
//             </IconButton>
//             <IconButton color = "error"
//             className = "like-dislike"
//             onClick = {
//                 () => setDislike(dislike + 1)
//             }>
//               <Badge badgeContent = { dislike }
//             color = "error"> 👎
//             </Badge> 
//             </IconButton> 
//             <IconButton color = "error">
//             <DeleteIcon/>
//             </IconButton> 
//             </div>
//         )
//     }


