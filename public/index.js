window.w1 = new Worker("webworker-isogit.js");

// window.sharedWorker = new SharedWorker("sharedworker11.js", "tiago11");
// window.sharedWorker.port.start();

// window.__create = (f) => window.sharedWorker.port.postMessage(["create", f]);
// window.__list = () => window.sharedWorker.port.postMessage(["list"]);

// window.sharedWorker.port.onmessage = (e) => {
//   console.log("From shared worker:");
//   console.log(e.data);
// };
