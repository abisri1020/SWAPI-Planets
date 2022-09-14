import { useState } from 'react';

export function Movie({ banner, title, rating, summary }) {

  
  const [like, setlike] = useState(0);
  const [dislike, dellike] = useState(0);

  const [show, setshow] = useState(false);
  // const summarystyles ={
  //     display : show  ? "block": "none",
  // }
  return (
    <div>
      <div className="card mt-sm-3">
        <img src={banner} className="card-img-top " alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}{show === true ? <i onClick={() => { setshow(!show); }} class="bi bi-caret-up"></i> : <i onClick={() => { setshow(!show); }} class="bi bi-caret-down"></i>} </h5>

          <p className="card-text">{rating}<i class="bi bi-star-half"></i></p>



          {/* <p style={summarystyles} className="card-text">{summary}</p> */}
          {show ? <p className="card-text">{summary}</p> : ""}

          <div className='like'>
            <button className='btn like-button'><i onClick={() => { setlike(like + 1); }} className='fa fa-thumbs-o-up'><h6>{like}</h6></i></button>

            <button className='btn dislike-button'><i onClick={() => { dellike(dislike + 1); }} className='fa fa-thumbs-o-down'><h6>{dislike}</h6></i></button>
          </div>
        </div>
      </div>

    </div>

  );
}
