<template>
  <div class="control">
    <div class="list">
      <Item v-for="text in inputGroup" :key="text.key" :label-text="text"></Item>
    </div>
    <div class="repeat-control">
      <div class="repeat-time">
        <span>重复次数:&nbsp;&nbsp;</span>
        <Input :change="repeatTimechange" size-type="auto" type="number"/>
      </div>
      <div class="repeat-interval">
        <span>重复间隔:&nbsp;&nbsp;</span>
        <Input :change="repeatIntervalChange" size-type="auto" type="number"/>
      </div>
    </div>
    <div class="start-block">
      <div
        @click="requestStart"
        :class="['start-btn', runState ? 'open' :'close' ]"
      >{{runState ? '停止' : '开始获取'}}</div>
    </div>
  </div>
</template>

<script>
import Item from "./item.vue";
import Input from "./input.vue";
import Vue from "vue";
import { mapActions } from "vuex";
import { data, validator } from "../config/form";
import { getLength } from "../util/request";
import { RequestStore } from "../store";
import { setInterval2, clearInterval2 } from "../util/set-interval";

export default {
  store: RequestStore,
  components: {
    Item,
    Input
  },
  data: () => {
    return {
      inputGroup: ["host", "path"],
      runState: false
    };
  },
  methods: {
    ...mapActions(["sayHello"]),
    repeatIntervalChange(e) {
      data.repeatInterval = e.target.value;
    },
    repeatTimechange(e) {
      data.repeatTime = e.target.value;
    },
    reset() {
      this.$data.runState = false;
      clearInterval2(this.$data.timeIntervalId);
      this.$data.timeIntervalId = 0;
    },
    clearTerminal() {
      data.infos.splice(0, data.infos.length);
    },
    async pushInTerminal(host, path = "") {
      let result = await getLength(`${host}${path}`);
      data.infos.push(result);
    },
    async requestStart() {
      if (!validator()) {
        alert("输入信息有误，请检查后重新输入");
        return;
      }

      this.$data.runState = !this.$data.runState;
      if (!this.$data.runState) {
        this.reset();
        return;
      }

      /** infos init */
      this.clearTerminal();
      let { host, path, repeatInterval, repeatTime } = data;
      let time = 0;

      this.$data.timeIntervalId = setInterval2(async () => {
        console.info("before");
        if (time === Number(repeatTime)) {
          this.reset();
          return;
        }

        console.info(time);
        await this.pushInTerminal(host, path);

        ++time;
      }, Number(repeatInterval) * 1000);
    }
  },
  destroyed() {
    clearInterval2(this.$data.timeIntervalId);
  }
};
</script>

<style>
.control {
  width: 100%;
  height: auto;
  padding: 2rem 1rem;
  background: #cecece;
}

.list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.repeat-control {
  margin-top: 20px;
}

.repeat-time,
.repeat-control,
.repeat-interval {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.start-block {
  padding: 20px;
  padding-bottom: 0;
}

.start-btn {
  border-radius: 1000px;
  color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s background;
}

.close {
  background: #2ecc71;
}
.close:hover {
  background: #27ae60;
}

.open {
  background: #e74c3c;
}
.open :hover {
  background: #c0392b;
}
</style>
