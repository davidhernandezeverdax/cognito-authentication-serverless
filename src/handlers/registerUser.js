const cognitoGateway = require('../gateway/cognito.gateway');

exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  try {
    await cognitoGateway.registerUser(email, password);
    return { statusCode: 200, body: JSON.stringify({message: 'User registered successfully'})};
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
