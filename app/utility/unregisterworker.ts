if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}
