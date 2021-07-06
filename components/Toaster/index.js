import { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { ToasterContext } from '@/context/toaster';

const Toaster = () => {
  const { _toasterProps } = useContext(ToasterContext);

  return (
    <Snackbar {..._toasterProps} />
  );
};

export default Toaster;
