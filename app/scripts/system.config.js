(function(global) {

  var map = {
    'app':                        'app/scripts', // 'dist',
    'vendor':                     'app/vendor',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'axios':                      'node_modules/axios/dist'
  };

  var packages = {
    'app':                        { main: 'boot.js',  defaultExtension: 'js' },
    'vendor':                     { main: 'annyang.js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'axios':                      { main: 'axios' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];

  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
