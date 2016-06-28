define([
  './datasource',
  './query_ctrl'
],
function(KairosDBDatasource, KairosDBQueryCtrl) {
  'use strict';

  var KairosDBConfigCtrl = function() {}
  KairosDBConfigCtrl.templateUrl = "partials/config.html";

  var KairosDBQueryOptionsCtrl = function() {}
  KairosDBQueryOptionsCtrl.templateUrl = "partials/query.options.html";

  var KairosDBAnnotationsQueryCtrl = function() {}
  KairosDBQueryOptionsCtrl.templateUrl = 'partials/annotations.editor.html'

  return {
    'Datasource': KairosDBDatasource,
    'QueryCtrl': KairosDBQueryCtrl,
    'ConfigCtrl': KairosDBConfigCtrl,
    'QueryOptionsCtrl': KairosDBQueryOptionsCtrl
    'AnnotationsQueryCtrl': KairosDBAnnotationsQueryCtrl
  };
});
