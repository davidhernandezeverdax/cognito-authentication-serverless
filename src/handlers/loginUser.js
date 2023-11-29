const cognitoGateway = require('../gateway/cognito.gateway');

exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  try {
    const { idToken } = await cognitoGateway.loginUser(email, password);
    return { statusCode: 200, body: JSON.stringify({idToken}) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};

