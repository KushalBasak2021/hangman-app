export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 1000);
}
