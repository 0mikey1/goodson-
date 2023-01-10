import React from "react";
import Images from "../components/images";
import "../styles/features.css";

const Features = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-white fs-1 text pb-5">
            At Goodson Film, we believe that every brand has a unique story to
            tell. Our mission is to bring that story to life through stunning
            visuals and expert filmmaking. Contact us today and let us help you
            share your message with the world.
          </h1>

          <img src="asia.jpg" alt="Image 1" />

          <h1 className="text-white fs-1 text pb-5 " id="videos">
            <sub>Some</sub> Videos <sub>Made By Us</sub>
          </h1>

          <p align="center">
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/YXzADX_oL8s"
              title="Julius Randle Summer 2018 Training  (Shot by Mike Goodson)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>{" "}
            <iframe
              width="951"
              height="535"
              src="https://www.youtube.com/embed/X8DRAnoyLMg"
              title="Coach Andrew Moran and Miami Hoop School train Tim Hardaway Jr"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/1Y1f70g-jAU"
              title="Lu - Matrix  (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/8Q2_Tzx7t0w"
              title="F.R.I.E.N.D.S - Danny Gauchier (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/XmSjm7naxaU"
              title="WORK (Official Video) - Yung Quay"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/zXYiLBIU5z4"
              title="Yung Quay - “88” (Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/7s4dtE8zW78"
              title="MF - Setbacks feat. Bruno Mali (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/4Bm14KNXZvY"
              title="@DIRTYFACESMOOK - JIGGLYPUFF (OFFICIAL VIDEO) DIR BY MASTERGOODSON"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="950"
              height="534"
              src="https://www.youtube.com/embed/dzEQfnYPHrQ"
              title="Pocket Of Lollipops : Non-Friend Friend (Official Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </p>
        </div>
      </div>
      <div className="row">
        <h1 className="text-white fs-1 text pb-5" id="photos">
          <sub>Some</sub> Photos <sub>Taken By Us</sub>
        </h1>
        <Images />
      </div>
    </div>
  );
};

export default Features;
