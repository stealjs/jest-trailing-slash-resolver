
// Given a module identifier with a trailing slash, 
// it returns the last identifier segment 
// getTrailingSegment('./foo/bar/') -> "bar"
function getTrailingSegment(path) {
  var parts = path.split('/');
  return lastIdSegment = parts[parts.length - 2];
}

// trailingSlash : (string, resolverOptions) -> string
module.exports = function trailingSlash(path, resolverOptions) {
  return path.endsWith('/')
    ? `${path}${getTrailingSegment(path)}`
    : path;
};