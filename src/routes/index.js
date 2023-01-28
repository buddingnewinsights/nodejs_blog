const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
    // Local host - Hosting server
  
    //  Action --> Dispatcher --> Function handler (controller)
  app.use("/news", newRouter);
  app.use("/", siteRouter);





}

module.exports = route;
