<template>
  <div style="height:100vh">
    <div class="space-header flex-row">
      <p>
        {{
          park == 1
            ? "黑牡丹产业园"
            : "中欧（常州）检验检测认证国际合作产业园区"
        }}
      </p>
      <div @click="$router.back()">返回经开区</div>
      <span
        >{{ date }}&emsp;星期{{
          weekDay == 1
            ? "一"
            : weekDay == 2
            ? "二"
            : weekDay == 3
            ? "三"
            : weekDay == 4
            ? "四"
            : weekDay == 5
            ? "五"
            : weekDay == 6
            ? "六"
            : "日"
        }}&emsp;{{ time }}</span
      >
    </div>
    <div v-if="park == 1" class="left-intro">
      <div class="intro-title">一期承载空间介绍</div>
      <img
        style="margin-left:20px;margin-top:20px"
        src="@/assets/space/phase1.jpg"
        alt=""
      />
      <p class="intro-content">
        园区1.2.1期
        项目总投资2.98亿元，占地面积2.3万平方米，总建筑面积5.8万平方米，2019年开始建设。
      </p>
    </div>
    <div v-else-if="park == 2" class="left-intro">
      <div class="intro-title">二期承载空间介绍</div>
      <img
        style="margin-left:20px;margin-top:20px"
        src="@/assets/space/phase2.jpg"
        alt=""
      />
      <p class="intro-content">
        产业园二期项目总建筑面积约15.6万平方米，共9幢建筑，1-6幢为8层高层建筑，每幢建筑约2.1万平方米，7-9幢为配套建筑，每幢建筑面积2300至3300平方米，于2019年11月竣工验收。
      </p>
    </div>
    <div class="building-bg flex-row" v-if="active != 0">
      <div class="building-dialog" v-if="active == 1">
        <div class="flex-row building-title">
          <span>一期楼宇平面图</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/building1.jpg" alt="" />
        <p>《35号楼平面图》</p>
      </div>
      <div class="building-dialog" v-else-if="active == 2">
        <div class="flex-row building-title">
          <span>一期楼宇平面图</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/building2.jpg" alt="" />
        <p>《41号楼平面图》</p>
      </div>
      <div class="building-dialog" v-else-if="active == 3">
        <div class="flex-row building-title">
          <span>空置办公室</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <div style="width:960px;height:600px;margin:20px auto">
          <a-scene
            embedded
            environment
            cursor="rayOrigin: mouse; fuse: false"
            raycaster="objects: .clickable"
            info-message="htmlSrc: #messageText"
            renderer="colorManagement: false;"
          >
            <a-sky
              :src="require('../../assets/space/office.jpg')"
              rotation="0 260 0"
            ></a-sky>
          </a-scene>
        </div>

        <p>《空置办公室》</p>
      </div>
    </div>
    <a-scene
      background="color: #fff"
      environment
      cursor="rayOrigin: mouse; fuse: false"
      raycaster="objects: .clickable"
      info-message="htmlSrc: #messageText"
      renderer="colorManagement: false;"
    >
      <!-- 加载全景 -->
      <a-sky
        v-if="park == 1"
        :src="require('../../assets/space/park1.jpg')"
        rotation="10 60 30"
      ></a-sky>
      <a-sky
        v-else-if="park == 2"
        :src="require('../../assets/space/park2.jpg')"
        rotation="0 250 -20"
      ></a-sky>

      <a-image
        v-if="park == 1"
        :src="require('../../assets/space/building-mask.png')"
        geometry="primitive: plane; height: 4; width: 5.5"
        position="1 0.8 -4"
        rotation="0 0 5"
      ></a-image>
      <a-image
        v-if="park == 1"
        id="building1"
        class="clickable"
        :src="require('../../assets/space/building35.png')"
        geometry="primitive: plane; height: 2.5; width: 2.5"
        position="4 4 -12"
        rotation="0 -15 0"
        material="depthTest:false"
      ></a-image>
      <a-image
        v-if="park == 1"
        id="building2"
        class="clickable"
        :src="require('../../assets/space/building41.png')"
        geometry="primitive: plane; height: 2.5; width: 2.5"
        position="0.5 4 -12"
        rotation="10 0 0"
        material="depthTest:false"
      ></a-image>

      <a-image
        v-if="park == 2"
        :src="require('../../assets/space/office-mask.png')"
        geometry="primitive: plane; height: 3; width: 8.5"
        position="0.8 0.1 -4"
        rotation="0 0 5"
      ></a-image>
      <a-image
        v-if="park == 2"
        id="office"
        class="clickable"
        :src="require('../../assets/space/office.png')"
        geometry="primitive: plane; height: 2.5; width: 2.5"
        position="2.4 0.5 -11"
        rotation="0 0 2"
        material="depthTest:false"
      ></a-image>
    </a-scene>
  </div>
</template>

<script>
import "./park.css";
export default {
  name: "park",
  data() {
    return {
      park: 1,
      active: 0,
      date: `${new Date().getFullYear()}.${new Date().getMonth() +
        1}.${new Date().getDate()}`,
      weekDay: new Date().getDay(),
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      timer: null
    };
  },
  created() {
    this.park = this.$route.params.park
      ? this.$route.params.park
      : sessionStorage.getItem("park");
    this.timer = setInterval(() => {
      this.date = `${new Date().getFullYear()}.${new Date().getMonth() +
        1}.${new Date().getDate()}`;
      this.weekDay = new Date().getDay();
      this.time = `${new Date().getHours()}:${
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()
      }`;
    }, 60000);
  },
  mounted() {
    let building1 = document.querySelector("#building1");
    building1 && building1.setAttribute("cursor", "pointer");
    building1 &&
      building1.addEventListener("click", () => {
        this.active = 1;
      });
    let building2 = document.querySelector("#building2");
    building2 && building2.setAttribute("cursor", "pointer");
    building2 &&
      building2.addEventListener("click", () => {
        this.active = 2;
      });
    let office = document.querySelector("#office");
    office.setAttribute("cursor", "pointer");
    office.addEventListener("click", () => {
      this.active = 3;
    });
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>
