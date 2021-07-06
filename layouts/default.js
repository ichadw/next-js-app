import Head from "next/head";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useDefaultStyles } from "./styles";

const DefaultLayout = (props) => {
  const classes = useDefaultStyles();

  return (
    <>
      <Head>
        <title>Default | Website Name</title>
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Website Name</Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{props.children}</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DefaultLayout;
