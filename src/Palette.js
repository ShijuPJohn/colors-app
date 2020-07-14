import React, {useEffect} from "react";
import ColorBox from "./ColorBox";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        margin:"0.4rem",
        width: "99%",
        flexGrow: 1,
        boxShadow: "none",
    },
    colorCard: {}
}));

function Palette({palette}) {

    const classes = useStyles();

    useEffect(() => {
        console.log(palette)
    })
    return (
        <Grid container className={classes.root} justify={"center"} alignItems={"center"}>
            {/*Navbar Goes Here*/}

                {palette.colors.map(color => (
                        <ColorBox color={color.color} name={color.name}/>
                ))}
                {/*bunch of color boxes*/}

        </Grid>
    )
}

export default Palette;