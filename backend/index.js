const express = require("express");
const cors = require("cors");
const fs = require('fs');
const https = require('https');
const path = require('path');
require('dotenv').config();
require('./models/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const postsRouter = require("./routes/posts");
const categoriesRouter = require("./routes/Categories");
const colorRouter = require("./routes/Color");
const orderRouter = require("./routes/Orders");
const itemRouter = require("./routes/Items");
const adminRouter = require("./routes/Admin");

app.use("/posts", postsRouter);
app.use("/admin", adminRouter);
app.use("/categories", categoriesRouter);
app.use("/color", colorRouter);
app.use("/order", orderRouter);
app.use("/item", itemRouter);
app.use(express.static('/usr/local/lsws/Example/html'));


// إعادة توجيه جميع طلبات GET التي لا تطابق الطرق السابقة إ

// أي طلب لا يتطابق مع مسار محدد يعيد index.html
app.get('*', (req, res) => {
  res.sendFile('/usr/local/lsws/Example/html/index.html');
});

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/jalal.store/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/jalal.store/fullchain.pem')
};

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Server listening at https://localhost:${PORT}`);
});
