import * as express from 'express';
import * as bodyParser from "body-parser";
import * as path from "path";

require("dotenv").config({ path: path.join(__dirname + "/../", ".env") });
const app = express();
app.use(bodyParser.json());
app.set("env", process.env.NODE_ENV || "development");
app.set("port", process.env.PORT || 5000);
app.get('/',(req,res)=>res.json({
    message:'Welcome to expressjs and Reactjs'
}))
export default app;