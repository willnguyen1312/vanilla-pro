/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

export const add = (a: number, b: number) => a + b;

type Callback = typeof import("./mainWorker").callback;

export async function executeCallback(callback: Callback) {
  callback("A string from a worker");
}
