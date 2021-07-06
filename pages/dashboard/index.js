import { useState } from "react";
import { number, arrayOf, object } from "prop-types";
import { Waypoint } from "react-waypoint";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchUsers } from "@/helpers/fetcher/user";
import logError, { CATCH_ERROR } from "@/helpers/logError";

const perPage = 6;

function Dashboard({ totalPages, users }) {
  const [stateUsers, setStateUsers] = useState(users);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFetchMore = async () => {
    let newUsers;
    setLoading(true);
    try {
      newUsers = await fetchUsers({
        params: { page: page + 1, per_page: perPage },
      });
    } catch (err) {
      setLoading(false);
      logError({ module: "dashboard", errType: CATCH_ERROR, errMessage: err });
    } finally {
      setLoading(false);
      setPage((prevState) => prevState + 1);
      setStateUsers((prevState) => [...prevState, ...newUsers?.data]);
    }
  };

  return (
    <>
      <Typography variant="h6">Dashboard Page</Typography>
      <Grid container spacing={5}>
        {stateUsers.map(({ id, first_name, email }) => (
          <Grid item xs={12} sm={6} lg={4} key={id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="user image"
                  height="200"
                  image={`https://picsum.photos/200/200.jpg?random=${id}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {first_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {email}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {page < totalPages && !loading && (
          <Waypoint bottomOffset="50px" onEnter={handleFetchMore} />
        )}
        {loading ? <CircularProgress /> : null}
      </Grid>
    </>
  );
}

export const getStaticProps = async () => {
  const users = await fetchUsers({ params: { page: 1, per_page: perPage } });
  return {
    props: {
      users: users?.data || [],
      totalPages: users?.total_pages || 0,
    },
  };
};

Dashboard.layout = "private";

Dashboard.propTypes = {
  totalPages: number,
  users: arrayOf(object),
};

export default Dashboard;
