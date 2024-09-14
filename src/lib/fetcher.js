import AsyncStorage from "@react-native-async-storage/async-storage";

const fetcher = async (url, options = {}) => {
  const method = options.method || "get";

  // Construct query parameters for GET requests
  if ((method === "get" || method === "GET") && options.params) {
    const queryString = Object.keys(options.params)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
            options.params[key]
          )}`
      )
      .join("&");

    url = `${url}?${queryString}`;
  }

  // Retrieve the token from AsyncStorage
  const token = await AsyncStorage.getItem("access_token");

  // Default headers
  let headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // If the request has a file, we modify the headers
  if (options.hasFile) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(url, {
    headers: headers,
    ...options,
  });

  // If the response is a 401, return the response as is
  return response.status === 401 ? response : response.json();
};

export default fetcher;
