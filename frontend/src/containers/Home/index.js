import React from "react";
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

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="React-Site-Builder"
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
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={3} className={classes.textCenter}>
          <Link to={"/auth"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
