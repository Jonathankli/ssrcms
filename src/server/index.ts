import express from 'express'
import path from "path";
import { getPageData } from './controller/pageConroller';
import renderController from './controller/renderController';

const app = express();
const port = process.env.PORT || 3000

app.use("/assets", express.static(path.join(__dirname, "..", "..", "build", "assets")));

app.get('/api/pageData', getPageData);
app.get('*', renderController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

