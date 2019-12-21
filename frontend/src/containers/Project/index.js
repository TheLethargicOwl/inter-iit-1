import React from "react";
import useEffect from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/index.js";
import HeaderLinks from "../Header/Links.js";
import Parallax from "../Parallax/index.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Footer from "../Footer/index.js";
import Button from "../CustomButtons/index.js";

import styles from "../../stylesheets/containers/Home/index.js";
import database from "../../database.js";
import storage from "../../storage.js";

import Typography from "../Typography/Primary.js"

const useStyles = makeStyles(styles);

const download = async () => {
  const mainContainer = document.getElementById("data1");
  console.log(mainContainer.innerHTML);
  const projects = await database.ref('Contract').once('value').then(function (snapshot) {
    const data = snapshot.val();
    Object.keys(data).map(function (key, index) {
      console.log(data[key]);
      mainContainer.innerHTML += `
      <div>
        <h4> Assigned To: ${data[key].assigned_to} </h3>
        <h4> Name: ${data[key].name} </h4>
        <h4> Phase: ${data[key].phase} </h4>
        <h4> Target: ${data[key].target} </h4>
        <h4> Budget: ${data[key].budget} </h4>
        <br /> <br />
      </div>
      `
    });
  }).catch(error => {
    console.log(error);
  });
}

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  React.useEffect(async () => {
    await download();
  });

  return (
    <div>
      <Header
        brand="ISM The Builders"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("../../static/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>ISM Builders</h1>
                <h3 className={classes.subtitle}>
                  A system to detect the potholes in a road.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div id="data1" style={{ padding: "50px" }}></div>
        </div>
      </div>
    </div>
  );
}
