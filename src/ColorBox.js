import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({

    colorBox: {
        width: "18rem",
        height: "18rem",
        position: "relative",
        "&:hover": {
            borderColor: "#ff5482",
        }
    },
    nameText: {
        color: "white",
    },
    moreText: {
        textTransform: "uppercase",
        color: "white",
    },
    infoBlock: {
        position: "absolute",
        marginTop: "8rem",
        marginLeft: ".5rem",
        paddingRight: "1rem"
    },
    copyButton: {
        animationName: '$appearSlow',
        animationDuration: '0.5s',
        animationTimingFunction: 'linear',
    },
    '@keyframes appearSlow': {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        }
    },
}));

function ColorBox({color, name}) {
    const classes = useStyles();
    const [buttonVisible, setButtonVisible] = useState(false)

    function mouseEnterHandler() {
        setButtonVisible(true)
    }

    function mouseLeaveHandler() {
        setButtonVisible(false)
    }

    return (
        <Grid style={{backgroundColor: color}}
              container direction={"column"}
              justify={"center"}
              alignItems={"center"}
              className={classes.colorBox}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
        >
            <Grid item>
                {buttonVisible && <Button className={classes.copyButton} variant={"outlined"}>Copy</Button>}
            </Grid>
            <Grid container direction={"row"} justify={"space-between"} className={classes.infoBlock}>
                <Typography className={classes.moreText}>More</Typography>
                <Typography className={classes.nameText}>{name} </Typography>
            </Grid>

        </Grid>
    )
}

export default ColorBox;