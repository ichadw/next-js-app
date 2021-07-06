import React, { useState, useEffect, useCallback } from 'react';
import { node, object } from 'prop-types';

export const ToasterContext = React.createContext();
const defaultState = {
  autoHideDuration: null,
  message: '',
  open: false,
};

export const ToasterProvider = ({ children, defaultState: defaultFromProps }) => {
  const [state, setState] = useState({ ...defaultState, ...defaultFromProps });

  const showToaster = useCallback(
    (data = '', autoHideDuration = 3000) => {
      if (typeof data === 'object') {
        setState({
          autoHideDuration: data.autoHideDuration || 3000,
          message: data.message,
          open: true,
        });
      } else {
        setState({
          autoHideDuration,
          message: data,
          open: true,
        });
      }
    },
    [],
  );

  const hideToaster = useCallback(
    () => {
      setState(prevState => ({ ...prevState, autoHideDuration: 0, open: false }));
    },
    [],
  );

  useEffect(() => {
    let timeout;

    if (state.autoHideDuration) {
      setTimeout(hideToaster, state.autoHideDuration);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [state.autoHideDuration, hideToaster]);

  const _toasterProps = {
    message: state.message,
    open: state.open,
    autoHideDuration: state.autoHideDuration,
  };

  return (
    <ToasterContext.Provider value={{ showToaster, hideToaster, _toasterProps }}>{children}</ToasterContext.Provider>
  );
};

ToasterProvider.propTypes = {
  children: node.isRequired,
  defaultState: object,
};

ToasterProvider.defaultProps = {
  defaultState: {},
};
