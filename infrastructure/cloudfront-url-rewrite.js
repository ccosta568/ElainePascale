/**
 * CloudFront viewer-request function for this Angular site.
 *
 * Associate this function with the distribution's viewer-request event. It
 * makes known client-side routes load index.html while preserving real 404
 * responses for unknown paths.
 */
function handler(event) {
  var request = event.request;
  var routes = {
    '/about': true,
    '/videos': true,
    '/interviews': true,
    '/haunts': true,
    '/podcasts': true,
    '/events': true
  };

  if (request.uri.length > 1 && request.uri.charAt(request.uri.length - 1) === '/') {
    request.uri = request.uri.slice(0, -1);
  }

  if (routes[request.uri]) {
    request.uri = '/index.html';
  }

  return request;
}
