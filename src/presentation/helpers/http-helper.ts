import { HttpResponse } from './../protocols/http'
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error
})
