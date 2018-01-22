module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();
  server.loopback.User.settings.acls.shift();
};
