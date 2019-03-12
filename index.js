var defaultResolver = require("jest-resolve/build/defaultResolver").default;

// Given a module identifier with a trailing slash,
// it returns the last identifier segment
// getTrailingSegment('./foo/bar/') -> "bar"
function getTrailingSegment(path) {
  var parts = path.split("/");
  return parts[parts.length - 2];
}

// trailingSlash : (string, resolverOptions) -> string
module.exports = function trailingSlash(path, resolverOptions) {
  return defaultResolver(
    path.endsWith("/") ? `${path}${getTrailingSegment(path)}` : path,
    resolverOptions
  );
};
