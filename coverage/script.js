if (location.protocol === 'file:') {
  // If protocol is 'file:', do nothing
} else {
  document.body.classList.add('production');
}
