import express from 'express'

import { Router } from 'express';
import router from "./routes";

const app = express();

const route = Router()

app.use(express.json())

app.use(router)

app.use(route)

app.listen(3333, () => 'server running on http://localhost:3333')