import React from "react";
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

<Anime
  initial={[
    {
      targets: "#Box",
      translateX: 50,
      easing: "linear"
    }
  ]}
>
  <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
</Anime>