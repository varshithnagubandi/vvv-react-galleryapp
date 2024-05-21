import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search, setSearch] = useState("");

  //storing data from the api
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h2 className="heading">GALLERY SNAPSHOTS</h2>
          <h3 className="sideHeading">...SEARCH AND DOWNLOAD...</h3>
          <input
            size="30"
            type="text"
            value={search}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input type="submit" value="SUBMIT" name="Search" />
        </form>
        <br />
        {data.length >= 1 ? (
          <Gallery data={data} />
        ) : (
          <h4>...OOPS NO DATA FOUND...</h4>
        )}
      </center>
    </div>
  );
}

export default App;
