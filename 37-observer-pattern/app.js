function EventOvserver() {
  this.observers = [];
}

EventOvserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`you are now subscribe to ${fn}.name`);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter((item) => item != fn);
    console.log(`you are now not subscribe to ${fn}.name`);
  },
  fire: function () {
    this.observers.forEach((item) => {
      item.call();
    });
  },
};

const click = new EventOvserver();
document.querySelector(".sub-ms").addEventListener("click", () => {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", () => {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", () => {
  click.subscribe(getSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", () => {
  click.unsubscribe(getSeconds);
});

document.querySelector(".fire").addEventListener("click", () => {
  click.fire();
});

// click handler

const getCurMilliseconds = function () {
  console.log(`Current millisconds ${new Date().getMilliseconds()}`);
};

const getSeconds = function () {
  console.log(`Current seconds ${new Date().getSeconds()}`);
};
