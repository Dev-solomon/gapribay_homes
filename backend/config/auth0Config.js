import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-j5niy8d6l7n0dwm3.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck;