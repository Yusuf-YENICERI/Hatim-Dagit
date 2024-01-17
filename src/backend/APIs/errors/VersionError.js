class VersionError extends Error {
  constructor (message) {
    super (message);
    this.name = 'VersionError';
    this.message = message;
  }
}

export default VersionError;
