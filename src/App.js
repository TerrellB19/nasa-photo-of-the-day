import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaPhoto, { dummyData } from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data)
    }).catch(err => console.error(err))
  },[])
  
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}
export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

 /*

date: "2023-02-23"

explanation: "Peculiar spiral galaxy Arp 78 is found within the boundaries of the head strong constellation Aries. Some 100 million light-years beyond the stars and nebulae of our Milky Way galaxy, the island universe is an enormous 200,000 light-years across. Also known as NGC 772, it sports a prominent, outer spiral arm in this detailed cosmic portrait. Tracking along sweeping dust lanes and lined with young blue star clusters, Arp 78's overdeveloped spiral arm is pumped-up by galactic-scale gravitational tides. Interactions with its brightest companion galaxy, the more compact NGC 770 seen above and right of the larger spiral, are likely responsible. Embedded in faint star streams revealed in the deep telescopic exposure, NGC 770's fuzzy, elliptical appearance contrasts nicely with spiky foreground Milky Way stars in matching yellowish hues."

hdurl: "https://apod.nasa.gov/apod/image/2302/NGC772-L2bh-RGB-19-8aT-cC.jpg"

title: "Arp 78: Peculiar Galaxy in Aries"
 */