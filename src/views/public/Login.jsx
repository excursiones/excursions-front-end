import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavPills from "components/NavPills/NavPills.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

const loginStyles = theme => ({
  root: {
    height: "30vh",
    width: "90vw",
    left: "0",
    right: "0",
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": "0px"
  },
  image: {
    backgroundImage:
      "url(https://www.placesyoullsee.com/wp-content/uploads/2017/02/13-Things-to-Consider-when-Booking-Your-Shore-Excursions-title.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing.unit * 9,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    "margin-top": "20px"
  },
  signupcontainer: {
    padding: "5px"
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: {
        firstName: "",
        lastName: "",
        password: "",
        email: ""
      },
      login: {
        email: "",
        password: ""
      }
    };

    this.handleChangeSignUp = this.handleChangeSignUp.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleSubmitLogin(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleChangeLogin(event) {
    var stt = { ...this.state };
    stt.login[event.target.id] = event.target.value;
    this.setState(stt);
  }

  handleSubmitSignUp(event) {
    event.preventDefault();
    console.log(this.state);
    event.preventDefault();
  }

  handleChangeSignUp(event) {
    var stt = { ...this.state };
    stt.signup[event.target.id] = event.target.value;
    this.setState(stt);
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          alignItems="center"
        >
          <div className={classes.paper}>
            <h5>Excursiones</h5>
            <NavPills
              color="warning"
              tabs={[
                {
                  tabButton: "Login",
                  tabContent: (
                    <div>
                      <Typography component="h1" variant="h5">
                        Ingresa
                      </Typography>
                      <form
                        className={classes.form}
                        onSubmit={this.handleSubmitLogin}
                      >
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          onChange={this.handleChangeLogin}
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Contraseña"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={this.handleChangeLogin}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={this.handleSubmitLogin}
                        >
                          Continuar
                        </Button>
                      </form>
                    </div>
                  )
                },
                {
                  tabButton: "Registro",
                  tabContent: (
                    <div className={classes.signupcontainer}>
                      <Typography component="h1" variant="h5">
                        Regístrate
                      </Typography>
                      <form className={classes.form} submit="return false">
                        <Grid container spacing={8}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="fname"
                              name="firstName"
                              variant="outlined"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              className={classes.textfield}
                              onChange={this.handleChangeSignUp}
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id="lastName"
                              variant="outlined"
                              onChange={this.handleChangeSignUp}
                              label="Last Name"
                              name="lastName"
                              className={classes.textfield}
                              autoComplete="lname"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              variant="outlined"
                              label="Email Address"
                              onChange={this.handleChangeSignUp}
                              name="email"
                              className={classes.textfield}
                              autoComplete="email"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              className={classes.textfield}
                              onChange={this.handleChangeSignUp}
                              type="password"
                              variant="outlined"
                              id="password"
                              autoComplete="current-password"
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          onClick={this.handleSubmitSignUp}
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Sign Up
                        </Button>
                      </form>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(loginStyles)(Login);
