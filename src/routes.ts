import { Router, Request, Response } from 'express';

class Routes{
    router: any

    constructor() {
        this.router = Router();
        this.createRoutes();
    }

    createRoutes() {
        this.router.get('/', (req: Request, res: Response) => res.send("NodeJs with Typescript"));
        this.router.get('/home', (req: Request, res: Response) => res.send("Home"));
    }

}
export default new Routes();

