<template>
  <div>
    <custom name="日历" bg-color="bg-gradual-pink fixed"></custom>

    <calendar
      :date="date"
      :lunar="true"
      :disable-before="true"
      :fixed-height="true"
      :start-date="'2019-3-2'"
      @change="change"
      @to-click="toClick"
    />
  </div>
</template>

<script>
import Calendar from "@/components/uni-calendar/uni-calendar";
import Custom from "@/components/custom";
export default {
  components: {
    Calendar,
    Custom
  },
  data() {
    return {
      date: "2019-03-10"
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
    toClick(e) {
      console.log(e);
    }
  }
};
</script>

<style>
.calendar-wrapper {
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  position: relative;
}
.calendar {
  width: 100%;
  max-width: 430px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.calendar-next,
.calendar-prev {
  cursor: pointer;
}
.box {
  margin-top: 40px;
}
.setToday {
  padding: 4px 6px;
  background-color: #00a2d4;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.calendar-years > span {
  cursor: pointer;
}
.xiu {
  background-color: #fff0f0;
}
.xiu span {
  color: red;
}
.xiu .slot-element {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 12px;
  background-color: #ff4433;
  color: #fff;
  padding: 0px 2px;
  border-radius: 3px;
  display: inline-block;
}
.ban {
  background-color: #f5f5f5;
}
.ban span {
  color: #333 !important;
}
.ban .slot-element {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 12px;
  background-color: #969799;
  color: #fff;
  padding: 0px 2px;
  border-radius: 3px;
  display: inline-block;
}
.mpvue-calendar td {
  padding: 4px;
  box-sizing: border-box;
}
.mc-text {
  bottom: 8px !important;
}
.selected {
  background-color: rgba(0, 0, 0, 0) !important;
}
.data-info {
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
.data-info p span {
  width: 100px;
  display: inline-block;
  margin-right: 10px;
}
.mc-range-begin .mc-text,
.mc-range-end .mc-text {
  display: none !important;
}
.mc-range-begin:after,
.mc-range-begin:after {
  content: "开始";
  display: block;
  box-sizing: border-box;
  height: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  z-index: 4;
  color: #fff;
}
.mc-range-end:after {
  content: "结束";
  display: block;
  box-sizing: border-box;
  height: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  z-index: 4;
  color: #fff;
}
.disabled .calendar-date {
  color: #ccc !important;
}
.selected .calendar-date {
  color: #fff !important;
}
@media screen and (max-width: 420px) {
  .mpvue-calendar .lunarStyle span {
    line-height: 1.9 !important;
  }
  .box-mode .data-info {
    display: none !important;
  }
  .box {
    margin-top: 60px;
  }
  .box div {
    font-size: 12px;
  }
  .box-mode {
    left: 0px;
    top: -80px;
    position: relative !important;
  }
}
@media screen and (max-width: 320px) {
  .mpvue-calendar .lunarStyle span {
    line-height: 1.4 !important;
    font-size: 13px;
  }
  .mpvue-calendar .lunarStyle .mc-text {
    font-size: 12px !important;
  }
}
</style>
