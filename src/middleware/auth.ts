import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import { getUserByAuth0IdModel } from "../models/userModel";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

export const jwtParse = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { authorization } = req.headers; //authorization
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.sendStatus(401);
  }
  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = decoded.sub;
    console.log(auth0Id);

    const user = await getUserByAuth0IdModel(auth0Id as string);
    if (!user) {
      return res.sendStatus(401);
    }
    console.log(user);
    req.auth0Id = auth0Id as string;
    req.userId = user.user_id.toString();
    next();

  } catch(error) {
    return res.sendStatus(401);
  }
};