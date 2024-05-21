import React from "react";

const Gallery = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((image) => (
          <div key={image.id}>
            <div className="col-md-4">
              <img
                className="images"
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                height="200"
                width="200"
                alt={image.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
