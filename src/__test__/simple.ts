// import Tardigrade, { Builder, image } from "../index";
// import Service from "../Service";

// const compose = new Tardigrade();
// const redisService = new Service("redisDB").useImage("redis");

// const myApp = new Service("my-app").useBuild(
//   new Builder("./")
//     .dockerFile("docker-alternative")
//     .arguments({ buildno: 1, gitcommithash: "cdc3b19" })
//     .cacheFrom(image("alpine", "latest"), image("corp/web_app", "3.14"))
//     .labels({
//       "com.example.description": "Accounting webapp",
//       "com.example.department": "Finance",
//       "com.example.label-with-empty-value": "",
//     })
//     .network("host")
//     .shmSize("2gb")
// );

// const myCompose = compose
//   .useVersion(3.7)
//   .addService(redisService)
//   .addServices(...[myApp, aaa, nginx, aa]);

// const output = myCompose.print();
// myCompose.printToFile("./aarararytya.yml");
