import logError, { API_ERROR, CATCH_ERROR } from "@/helpers/logError";

export default async (url, options) => {
  const pathname = new URL(url).pathname || "";
  const { responseType = "" } = options;

  try {
    const res = await fetch(url, options);

    // return response json on success
    if (res.status >= 200 && res.status <= 299) {
      try {
        if (responseType === "blob") {
          return await res.blob();
        }

        const data = await res.json();
        if (!data) {
          logError({
            module: "fetcher",
            errorType: API_ERROR,
            errMessage: "Wrong data format from API",
            additional: { path: pathname },
          });
          throw new Error("error not formated json api");
        }
        return data;
      } catch (err) {
        logError({
          module: "fetcher",
          errorType: CATCH_ERROR,
          errMessage: err,
          additional: { path: pathname },
        });
        return err;
      }
    } else if (res.status >= 400 && res.status !== 401 && res.status !== 403) {
      logError({
        module: "fetcher",
        errorType: API_ERROR,
        errMessage: "Failed fetching API",
        additional: { path: pathname, apiStatus: res.status },
      });
    }

    // return object on error
    return {
      url: url,
      is_error: true,
      status: res.status,
      response: await res.json(),
    };
  } catch (err) {
    return {
      is_error: true,
      status: 500,
      error: err,
    };
  }
};
