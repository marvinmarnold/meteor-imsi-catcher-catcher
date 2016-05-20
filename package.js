Package.describe({
  name: 'marvin:imsi-catcher-catcher',
  version: '0.0.1',
  summary: 'Meteor based plugin for client + server side IMSI-catcher detection',
  git: 'https://github.com/marvinmarnold/meteor-imsi-catcher',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');

  api.use([
    'ecmascript',
    'mongo',
    'underscore',
    'check'
  ]);

  // Community packages
  api.use([
    'aldeed:collection2@2.8.0',
    'aldeed:simple-schema@1.5.3',
    'marvin:device-id@0.0.1',
    'matb33:collection-hooks@0.8.1',
  ]);

  api.addFiles('server/main.js', 'server');
  // api.addFiles('client/main.js', 'client');
  api.mainModule('catcher.js');
});
