/**
 * Aya server.
 */
export class Server {
  constructor() {
    
  }
  /**
   * Handler api.
   */
  handler(request: Request): Response {
    return new Response("Hello world!")
  }
}
