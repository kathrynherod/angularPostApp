// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyAXzHzF_UhXqpdE1oV1qTrZsUekwqXJ_E8',
    authDomain: 'angulargrocery-cf3d9.firebaseapp.com',
    databaseURL: 'https://angulargrocery-cf3d9.firebaseio.com',
    projectId: 'angulargrocery-cf3d9',
    storageBucket: 'angulargrocery-cf3d9.appspot.com',
    messagingSenderId: '253615274342'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
