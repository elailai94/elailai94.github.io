// Return the current date in the YYYYMMDD format
function getCurrentDate() {
  return (new Date()).toISOString().slice(0, 10).replace(/-/g, '');
}

export { getCurrentDate };
