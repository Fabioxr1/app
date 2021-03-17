import React from "react";

export default function ItemList({ data, filterOn }) {

  const proFilter = (event) => {
    filterOn(event.target.innerText)
  }

  return (
    <div className="wrapped-grid">
      {data.map((item) => (
        <div
          className="content-grid"
          key={item.id}
          style={{ background: item.parent ? "" : "#009fb7", height: item.parent ? "" : "50px" }}
        >
          <div className="content-parent">
            <div className="id"> <h5> Id : {item.id} </h5></div>
            <div className="parent">{item.parent && <h5> Parent: {item.parent}</h5>}</div>
            <div className="level"> <h3> Level : {item.level} </h3></div>
            </div>
          <div className="title">
            <h2>{item.name}</h2>
          </div>
          <div className="list">
            {item.art.map((art) => (
              <p key={art} className="progress-text" onClick={(event) => proFilter(event)}>
                {art}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}