importScripts('webworker.js');

onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", async (e) => {
    if (e.data[0] === "create") {
      await testCommit(e.data[1]);
      return;
    }

    if (e.data[0] === "list") {
      const list = await findAll();
      console.log(list);
      port.postMessage(list);
    }
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};

