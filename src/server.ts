import express from 'express'

import Routes from "./routes";

const app = express();

app.use(express.json())

app.use(Routes.router)

app.listen(3333, () => 'server running on http://localhost:3333')