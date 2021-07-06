import { useContext } from 'react';
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { ToasterContext } from '@/context/toaster';

function ProfilePage(props) {
  const { showToaster, hideToaster, open } = useContext(ToasterContext);
  const handleClickOpen = () => {
    showToaster('Testing buka snackbar');
  };

  return (
    <>
      <Typography variant="h6">Profile Page</Typography>
      <Typography variant="subtitle2">State Toaster: {open}</Typography>
      <Button color="primary" onClick={handleClickOpen}>Open</Button>
      <Button color="primary" onClick={hideToaster}>Close</Button>
    </>
  );
}

ProfilePage.layout = "private";

export default ProfilePage;
