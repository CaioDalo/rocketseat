import http from "node:http"
import { json } from '../middleware/json.js'
import { routes } from "./routes.js"

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => route.method === method && route.path === url)

  if(route) {
    route.handler(req, res)
  }
  
})

server.listen(3333, () => {
  console.log('Server is running 🚀')
})