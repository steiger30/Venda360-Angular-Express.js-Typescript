import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
  id: number;
  email: string;
  nome: string;
  iat: number;
  exp: number;
};
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Token not provided" });
  }
  const [, token] = authorization.split(" ");


  try {

    const chaveSecreta = process.env.SECRET;

    if (!chaveSecreta) {
      throw new Error('Chave secreta não encontrada');
    }

    const decoded = verify(token, chaveSecreta);
    const { id } = decoded as TokenPayload;

    Object.defineProperty(req, "userid", {
      value: id,
      writable: false,
      enumerable: true,
      configurable: false,
    });


    return next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized" });
  }
}