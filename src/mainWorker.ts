import * as Comlink from "comlink";

type WorkerModule = typeof import("./worker");

// Create Worker
const workerInstance = new ComlinkWorker<WorkerModule>(
  new URL("./worker", import.meta.url)
);

export const callback = (string: string) => console.log(string);

async function run() {
  const result = await workerInstance.add(2, 3);
  console.log(result);

  const proxiedCallback = Comlink.proxy(callback);

  await workerInstance.executeCallback(proxiedCallback);
}

run();
