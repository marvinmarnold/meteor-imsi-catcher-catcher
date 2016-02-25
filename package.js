Package.describe({
  name: 'marvin:imsi-catcher-catcher',
  version: '0.0.1',
  summary: 'Meteor based plugin to do client + server side IMSI-catcher detection',
  git: 'https://github.com/marvinmarnold/meteor-imsi-catcher',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'check',
    'mongo',
    'underscore'
  ]);

  // Community packages
  api.use([
    'aldeed:collection2@2.8.0',
    'aldeed:simple-schema@1.5.3',
    'marvin:device-id@0.0.1',
    'matb33:collection-hooks@0.8.1',
    'nimble:restivus@0.8.4'
  ]);

  // Lib
  api.addFiles([
    'lib/imsi-catcher.js'
  ]);

  // Schemas
  api.addFiles([
    'common/readings/schemas/common-readings-schema.js',
    'common/readings/schemas/g-s-m-readings-schema.js',
    'common/readings/schemas/s-i-m-readings-schema.js'
  ]);

  // Collections
  api.addFiles([
    'common/readings/collections/g-s-m-readings.js',
    'common/readings/collections/s-i-m-readings.js',
    'common/readings/collections/helpers.js'
  ]);

  // Detections
  api.addFiles([
    'common/detections/detections-schema.js',
    'common/detections/detections-collection.js',
  ]);

  // Detectors
  api.addFiles([
    'common/detectors/gsm/f3.js',
    'common/detectors/detectors.js',
  ]);

  // Server
  api.addFiles([
    'server/detections/detections-publications.js',
    'server/readings/readings-methods.js',
    'server/readings/readings-publications.js',
  ], 'server');

  // REST API
  api.addFiles([
    'server/rest-api/readings.js',
  ], 'server');

  api.export("Catcher")
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest']);

  api.use([
    'marvin:device-id@0.0.1'
  ]);

  api.use('marvin:imsi-catcher')

  api.addFiles([
    'tests/detectors/gsm/f3.js',
    'tests/readings/s-i-m-readings-tests.js'
  ]);
});
