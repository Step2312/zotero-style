import runtime from "./app/runtime";

async function onStartup() {
  await runtime.onStartup();
}

function onShutdown(): void {
  runtime.onShutdown();
}

async function onNotify(
  event: string,
  type: string,
  ids: Array<string>,
  extraData: { [key: string]: any }
) {
  await runtime.onNotify(event, type, ids, extraData);
}

async function onPrefsEvent(type: string, data: { [key: string]: any }) {
  await runtime.onPrefsEvent(type, data);
}

export default {
  onStartup,
  onShutdown,
  onNotify,
  onPrefsEvent,
};
