import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import { testRouter } from "./routes/index";

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(cors());

app.use(testRouter.routes());

export const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
