import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

const generateToken = (id, string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '2h'
  })
  return jwt
}

const verifyToken = (jwt: string) => {
  const isVerified = verify(jwt, JWT_SECRET)
  return isVerified
}

export { generateToken, verifyToken }
