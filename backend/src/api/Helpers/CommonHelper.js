
const extractJwtToken = (authorizationHeader) => {
    if (!authorizationHeader) {
      return null;
    }
    const tokenRegex = /^Bearer\s+(.+)$/i;
    const match = authorizationHeader.match(tokenRegex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  module.exports={extractJwtToken}