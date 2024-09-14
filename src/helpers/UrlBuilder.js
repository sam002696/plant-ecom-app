class UrlBuilderHelper {
  api(path) {
    return path;
  }

  fileUrl(file) {
    return `http://103.4.145.245/IEIMS/GOVT-TEACHER/${file}`;
  }

  authApi(path) {
    return `http://192.168.68.101:9000/api/v1/${path}`; // plant api
  }

  plantApi(path) {
    return `http://192.168.68.101:9000/api/v1/${path}`; // plant api
  }
}

export const UrlBuilder = new UrlBuilderHelper();
