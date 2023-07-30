import config from './config';

const url = {};
// authentication
url.signUp = `${config.baseUrl}api/v1/auth/register`;
url.signIn = `${config.baseUrl}api/v1/auth/login`;


export default url;