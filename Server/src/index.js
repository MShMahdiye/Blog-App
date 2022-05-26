import express from 'express'
import cors from 'cors'
import _applyRoutes from './router'
import _applyMiddlewares from './lib/middlewares'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export async function decodeToken(token) {
  const arr = token.split(' ');

  // console.log(arr)

  try {
    if (arr[0] === 'ut') {
      return jwt.verify(arr[1], 'SECRET');
    }
  
    throw new Error('Please Re-Sign In')
  } catch (error) { 
    throw error
  }
}

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

app.use(async (req, res, next) => {
  try {
    const token = req.headers.auth;

    console.log('token : ',token);

    if (token != null) {
      const user = await decodeToken(token);
      req.user = user;
    } else {
      req.user = null;
    }
    return next(); 
  } catch (error) {
    req.user = null;
    return next(); 
  }
})


_applyMiddlewares(app)
_applyRoutes(app)

app.listen(4000, () => console.log(`app is ready on port 4000`))