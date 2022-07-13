import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage:
            "url(https://elearningindustry.com/wp-content/uploads/2019/07/top-6-eLearning-trends-of-2019.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "60%",
        paddingLeft: "20px",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function InstructorSignin({ history }) {
    const classes = useStyles();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {

            // history.push("/");
            navigate("/")
        }
    }, [userInfo, history]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password));
    };

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={0} sm={0} md={7} className={classes.image} />
                <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6}>
                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }} >
                        <IconButton>
                            <ArrowBackIosIcon fontSize="5px" />
                            <Typography color="textPrimary">Home</Typography>
                        </IconButton>
                    </Link>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Instructor Login
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={submitHandler} direction={"column"} spacing={5}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                width="90%"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormControl style={{ width: '100%' }} variant="outlined">
                                <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    margin="normal"
                                    id="outlined-adornment-password"
                                    label="Password"
                                    type={show ? "text" : "password"}
                                    value={password}
                                    fullWidth
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleShow}
                                                edge="end"
                                            >
                                                {show ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item>
                                    Don't have an account?&nbsp;
                                    <Link to={"/signup"}>Sign Up</Link>
                                </Grid>
                                {/* <Grid item>
                  Are you Admin?&nbsp;
                  <Link to={"/admin/login"}>Admin Login</Link>
              </Grid> */}
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
export default InstructorSignin;
