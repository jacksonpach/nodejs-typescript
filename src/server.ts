import express from 'express'

import Routes from "./routes";

class Server {
    app: any //@todo implement type

    constructor() {
        this.app = express()
        this.createApp()
        this.initialApp()
    }

    createApp() {
        this.app.use(express.json())
        this.app.use(Routes.router)
    }

    initialApp() {
        this.app.listen(3333, () => 'server running on http://localhost:3333')
    }
}

new Server();