import { useState } from 'react';

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import Badge from "@mui/material/Badge";
export function Planets({ name, rotation_period, orbital_period, diameter,climate,gravity,terrain,surface_water,population,deleteButton }) {

  
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const history = useHistory();

  const [show, setShow] = useState(false);
  
  // const summarystyles ={
  //     display : show  ? "block": "none",
  // }
  return (
    <div>
        
      <div className="card mt-sm-3">
        
               <div className="card-body">
                <CardContent>
          <h5 className="card-title">Planet Name: {name}{show === true ? <i onClick={() => { setShow(!show); }} class="bi bi-caret-up"></i> : <i onClick={() => { setShow(!show); }} class="bi bi-caret-down"></i>} </h5>
          
          {show ? <div>
              <p>
                <b>rotation_period :</b> {rotation_period}
              </p>
              <p>
                <b>orbital_period :</b>
                {orbital_period}
              </p>
              <p>
                <b>diameter :</b>
                {diameter}
              </p>
              <p>
                <b>climate :</b>
                {climate}
              </p>
              <p>
                <b>gravity :</b>
                {gravity}
              </p>
              <p>
                <b>terrain :</b>
                {terrain}
              </p>
              <p>
                <b>surface_water :</b>
                {surface_water}
              </p>
              <p>
                <b>population :</b>
                {population}
              </p>
            </div> : ""}

            </CardContent>
            <CardActions>
            <IconButton
          color="primary"
          aria-label="like-button"
          onClick={() => setlike(like + 1)}
        >
          <Badge badgeContent={like} color="success">
            👍
          </Badge>
        </IconButton>
        <IconButton
          color="error"
          aria-label="dislike-button"
          onClick={() => setdislike(dislike + 1)}
        >
          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
          
        </IconButton>
       {/* <DeleteIcon onClick={{deletebutton}}/> */}
{deleteButton}
        
            </CardActions>
        </div>
      </div>


    </div>

  );
}
