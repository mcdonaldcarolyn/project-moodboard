export const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }
  return false;
};
/*see if the device the user is using is touch enabled */