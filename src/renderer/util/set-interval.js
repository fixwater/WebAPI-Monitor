export function setInterval2(cb, delay, ...args) {
  // 记录所有正在运行的 interval 用于撤销
  let pool = window[Symbol.for("IntervalPool")];
  if (!pool) {
    pool = {};
    window[Symbol.for("IntervalPool")] = pool;
  }

  // interval 最低 10ms，虽然每 frame 至少得 16ms
  delay = delay >= 10 ? delay : 10;
  // interval id
  let ticket = Date.now();
  // 每次 interval 开始时间
  let startTime = ticket;
  pool[ticket] = true;
  loop();
  return ticket;

  function loop() {
    if (!pool[ticket]) {
      return;
    }
    const now = Date.now();
    if (now - startTime >= delay) {
      startTime = now;
      cb(...args);
    }
    requestAnimationFrame(loop);
  }
}

export function clearInterval2(ticket) {
  let pool = window[Symbol.for("IntervalPool")];
  if (pool && pool[ticket]) {
    delete pool[ticket];
  }
}
