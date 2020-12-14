// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDwK_ZWHAziY8oOAuLzi0FMuordnO5euzg",
    authDomain: "onliceryshop.firebaseapp.com",
    projectId: "onliceryshop",
    storageBucket: "onliceryshop.appspot.com",
    messagingSenderId: "516454773457",
    appId: "1:516454773457:web:682b7accb60b195f6fcbf0",
    measurementId: "G-9XPSY5MJPJ"
  },
  onesignal: {
    appId: '87d07397-1874-4887-a098-17363a72e727',
    googleProjectNumber: '',
    restKey: 'M2ZkNmM5MWYtMWUxNS00Yjc4LWFkMzAtODIyMWM0MTU5ZWUw'
  },
  general: {
    symbol: '$',
    code: 'USD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
