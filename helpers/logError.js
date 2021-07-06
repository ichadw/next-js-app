/**
 * This function will help you to send log when client got error
 * @param {string} module - identify from what module / page
 * @param {string} errorType - type of error oneOf[API_ERROR]
 * @param {string} errorMessage - message of error
 * @param {object} additional - object type when we need more additional value when send log
 *
 */

export const API_ERROR = "API_ERROR";
export const CATCH_ERROR = "CATCH_ERROR";
export const SOCKET_ERROR = "SOCKET_ERROR";
export const VALIDATION_ERROR = "VALIDATION_ERROR";

export default ({ module, errorType, errMessage, additional }) => {
  console.error({
    module,
    errorType,
    errMessage,
    ...(additional && { ...additional }),
  });
};
