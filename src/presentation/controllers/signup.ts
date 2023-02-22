import { HttpRequest } from './../protocols/http'
export class SignUpController {
  handle(httpRequest: HttpRequest) {
    if (!httpRequest.body.name) {
      return {
        statusCode: 401,
        body: new Error('Missing param: name'),
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 401,
        body: new Error('Missing param: email'),
      }
    }
  }
}
