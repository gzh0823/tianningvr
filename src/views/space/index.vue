<template>
  <div class="space flex-row">
    <div class="park-bg flex-row" v-if="active != 0">
      <div class="park-dialog" v-if="active == 1">
        <div class="flex-row park-title">
          <span>琉璃光生物科技产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-9.jpg" alt="" />
        <div class="data-table five-item">
          <div class="flex-row">
            <span>单体</span><span>单体层数</span><span>层高（m）</span
            ><span>承重（kg/㎡）</span><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1-4号</span><span>4</span><span>3.8-8</span
            ><span>500-1500</span><span>8125</span>
          </p>
          <p class="flex-row">
            <span>5号</span><span>5</span><span>4.6</span><span>500</span
            ><span>68125</span>
          </p>
          <p class="flex-row">
            <span>6号</span><span>5</span><span>4.2-4.6</span><span>300</span
            ><span>11358</span>
          </p>
          <p class="flex-row">
            <span>7号</span><span>5</span><span>3.2-4.2</span
            ><span>200-500</span><span>11551</span>
          </p>
          <p class="flex-row">
            <span>8号</span><span>3</span><span>3.8-4</span><span>300</span
            ><span>1343</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 2">
        <div class="flex-row park-title">
          <span>中欧(常州)检验检测认证国际合作产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-1.jpg" alt="" />
        <div class="data-table four-item">
          <div class="flex-row">
            <span>单体</span><span>单体层数</span><span>层高（m）</span
            ><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1-6号</span><span>8</span><span>4.8-5.4</span
            ><span>20600-24900</span>
          </p>
          <p class="flex-row">
            <span>7-9号</span><span>3</span><span>4.8-5.4</span
            ><span>2400-2900</span>
          </p>
        </div>
        <span class="viewbtn" @click="$router.push({name:'park',params:{park:2}})">查看720</span>
      </div>
      <div class="park-dialog" v-else-if="active == 3">
        <div class="flex-row park-title">
          <span>福北工业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-10.jpg" alt="" />
        <div class="data-table five-item">
          <div class="flex-row">
            <span>单体</span><span>单体层数</span><span>层高（m）</span
            ><span>承重（kg/㎡）</span><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1号</span><span>9</span><span>4.5-5</span><span>500-1500</span
            ><span>13034</span>
          </p>
          <p class="flex-row">
            <span>2、3号</span><span>5</span><span>4.5-5.4</span
            ><span>700-1000</span><span>10844</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 4">
        <div class="flex-row park-title">
          <span>弘辉加速器</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-11.jpg" alt="" />
        <div class="data-table five-item">
          <div class="flex-row">
            <span>单体</span><span>单体层数</span><span>层高（m）</span
            ><span>承重（kg/㎡）</span><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1、2号</span><span>6</span><span>4.8-6</span
            ><span>600-1000</span><span>39945</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 5">
        <div class="flex-row park-title">
          <span>天宁智造园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-6.jpg" alt="" />
        <div class="data-table five-item">
          <div class="flex-row">
            <span>单体</span><span>性质</span><span>单体层数</span
            ><span>建筑高度（m）</span><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1号</span><span>办公</span><span>7</span><span>29.7</span
            ><span>8696</span>
          </p>
          <p class="flex-row">
            <span>2、3号</span><span>车间</span><span>5</span><span>19.8</span
            ><span>2979-3041</span>
          </p>
          <p class="flex-row">
            <span>4、6号</span><span>车间</span><span>2</span
            ><span>11.8-15.7</span><span>11358</span>
          </p>
          <p class="flex-row">
            <span>5号</span><span>车间</span><span>4</span><span>23.5</span
            ><span>11551</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 6">
        <div class="flex-row park-title">
          <span>工业互联网产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-2.jpg" alt="" />
        <div class="data-table five-item">
          <div class="flex-row">
            <span>单体</span><span>单体层数</span><span>层高（m）</span
            ><span>承重（kg/㎡）</span><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1-6号</span><span>11</span><span>4.8-4.8</span><span>500</span
            ><span>29500</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 7">
        <div class="flex-row park-title">
          <span>汽车智能零部件产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-4.jpg" alt="" />
        <div class="data-table four-item">
          <div class="flex-row">
            <span>单体</span><span>性质</span><span>层数</span
            ><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>A-1、A-2</span><span>商办</span><span>18</span
            ><span>20860-45007</span>
          </p>
          <p class="flex-row">
            <span>A-3、A-4</span><span>生产研发</span><span>12</span
            ><span>21021</span>
          </p>
          <p class="flex-row">
            <span>B-1、B-2、B-3、B-4、C-1、C-2、C-3</span><span>生产研发</span
            ><span>7</span><span>10914</span>
          </p>
          <p class="flex-row">
            <span>C-4、D-1、D-2、D-3、D-4</span><span>生产研发</span
            ><span>9</span><span>21028-35321</span>
          </p>
          <p class="flex-row">
            <span>E-1、E-2、E-3</span><span>车间</span><span>3</span
            ><span>21029</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 8">
        <div class="flex-row park-title">
          <span>中国江苏常州网络视听产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-5.jpg" alt="" />
        <div class="data-table three-item">
          <div class="flex-row">
            <span>幢数</span><span>性质</span><span>建筑面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>38</span><span>研发</span><span>73000</span>
          </p>
          <p class="flex-row">
            <span>7</span><span>办公</span><span>228000</span>
          </p>
          <p class="flex-row">
            <span>1</span><span>数据中心</span><span>32000</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 9">
        <div class="flex-row park-title">
          <span>军民融合产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-3.jpg" alt="" />
        <div class="data-table four-item">
          <div class="flex-row">
            <span>单体</span><span>性质</span><span>层数</span
            ><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1号</span><span>公寓</span><span>16</span><span>24393</span>
          </p>
          <p class="flex-row">
            <span>2-4号</span><span>生产研发</span><span>8</span
            ><span>17907-20885</span>
          </p>
          <p class="flex-row">
            <span>5、10号</span><span>生产研发</span><span>16</span
            ><span>20787-22495</span>
          </p>
          <p class="flex-row">
            <span>6-9号</span><span>车间</span><span>6</span
            ><span>20787-22495</span>
          </p>
          <p class="flex-row">
            <span>11-14号</span><span>生产研发</span><span>4</span
            ><span>9786</span>
          </p>
          <p class="flex-row">
            <span>15-18号</span><span>商办</span><span>4</span><span>2784</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 10">
        <div class="flex-row park-title">
          <span>互联网 + 新经济产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-7.jpg" alt="" />
        <div class="data-table">
          <div class="flex-row">
            <span>单体</span><span>性质</span><span>单体层数</span
            ><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1号</span><span>办公</span><span>8</span><span>26515</span>
          </p>
          <p class="flex-row">
            <span>2号</span><span>车间</span><span>5</span><span>17500</span>
          </p>
          <p class="flex-row">
            <span>3号</span><span>车间</span><span>5</span><span>10000</span>
          </p>
          <p class="flex-row">
            <span>5-8号</span><span>车间</span><span>5</span><span>5000</span>
          </p>
          <p class="flex-row">
            <span>10号</span><span>车间</span><span>1</span><span>3672</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 11">
        <div class="flex-row park-title">
          <span>新一代信息技术产业园</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-8.jpg" alt="" />
        <div class="data-table five-item">
          <div class="flex-row">
            <span>单体</span><span>性质</span><span>单体层数</span
            ><span>建筑高度（m）</span><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1号</span><span>办公</span><span>7</span><span>29.7</span
            ><span>8696</span>
          </p>
          <p class="flex-row">
            <span>2、3号</span><span>办公</span><span>5</span><span>19.8</span
            ><span>2979-3041</span>
          </p>
        </div>
      </div>
      <div class="park-dialog" v-else-if="active == 12">
        <div class="flex-row park-title">
          <span>弘辉二期标准厂房</span
          ><img
            @click="active = 0"
            style="cursor:pointer"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <img src="@/assets/space/space-dialog-1.jpg" alt="" />
        <div class="data-table four-item">
          <div class="flex-row">
            <span>单体</span><span>单体层数</span><span>层高（m）</span
            ><span>单体面积（㎡）</span>
          </div>
          <p class="flex-row">
            <span>1号</span><span>9</span><span>5.4-6.5</span><span>34200</span>
          </p>
        </div>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import "./space.css";
export default {
  name: "Map",
  data() {
    return {
      active: 0,
      map: null,
      style: {
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "10px 20px",
        backgroundImage: "linear-gradient(270deg, #0098FF 0%, #005D9C 100%)",
        border: "1px solid #fff",
        fontSize: "16px",
        boxShadow: "-2px 0px 6px 0px rgba(0,152,255,1)",
        cursor: "pointer"
      }
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    //画地图
    initMap() {
      this.map = new BMapGL.Map("map", {
        mapType: BMAP_SATELLITE_MAP,
        enableMapClick: true,
        minZoom: 12
      }); // 创建Map实例
      this.map.centerAndZoom("常州市广信悦动广场", 15); // 初始化地图,设置中心点坐标和地图级别，数字大-可视范围小
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.setHeading(64.5);
      this.map.setTilt(73);

      let myIcon = new BMapGL.Icon(
        require("../../assets/cluster/cluster-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(120.03406, 31.81137), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("琉璃光生物科技产业园", {
        position: new BMapGL.Point(120.03406, 31.81137),
        offset: new BMapGL.Size(-90, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);

      let marker2 = new BMapGL.Marker(new BMapGL.Point(120.03483, 31.7934), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("中欧(常州)检验检测认证国际合作产业园", {
        position: new BMapGL.Point(120.03483, 31.7934),
        offset: new BMapGL.Size(-160, -80)
      });
      label2.setStyle(this.style);

      let zhongou = new BMapGL.Marker(new BMapGL.Point(120.03483, 31.7934), {
        icon: new BMapGL.Icon(
          require("../../assets/cluster/zhongou.png"),
          new BMapGL.Size(95, 95)
        ),
        offset: new BMapGL.Size(0, -120)
      });
      let marker3 = new BMapGL.Marker(new BMapGL.Point(120.03119, 31.82902), {
        icon: myIcon
      });
      let label3 = new BMapGL.Label("福北工业园", {
        position: new BMapGL.Point(120.03119, 31.82902),
        offset: new BMapGL.Size(-60, -80)
      });
      // 自定义文本标注样式
      label3.setStyle(this.style);

      let marker4 = new BMapGL.Marker(new BMapGL.Point(120.0407, 31.82756), {
        icon: myIcon
      });
      let label4 = new BMapGL.Label("弘辉加速器产业园", {
        position: new BMapGL.Point(120.0407, 31.82756),
        offset: new BMapGL.Size(-80, -80)
      });
      label4.setStyle(this.style);

      let marker5 = new BMapGL.Marker(new BMapGL.Point(120.04367, 31.81248), {
        icon: myIcon
      });
      let label5 = new BMapGL.Label("天宁智造园", {
        position: new BMapGL.Point(120.04367, 31.81248),
        offset: new BMapGL.Size(-60, -80)
      });
      label5.setStyle(this.style);

      let marker6 = new BMapGL.Marker(new BMapGL.Point(120.02014, 31.79913), {
        icon: myIcon
      });
      let label6 = new BMapGL.Label("工业互联网产业园", {
        position: new BMapGL.Point(120.02014, 31.79913),
        offset: new BMapGL.Size(-80, -80)
      });
      label6.setStyle(this.style);

      let marker7 = new BMapGL.Marker(new BMapGL.Point(120.03467, 31.80405), {
        icon: myIcon
      });
      let label7 = new BMapGL.Label("汽车智能零部件产业园", {
        position: new BMapGL.Point(120.03467, 31.80405),
        offset: new BMapGL.Size(-100, -80)
      });
      // 自定义文本标注样式
      label7.setStyle(this.style);

      let marker8 = new BMapGL.Marker(new BMapGL.Point(120.03383, 31.81819), {
        icon: myIcon
      });
      let label8 = new BMapGL.Label("中国江苏常州网络视听产业园", {
        position: new BMapGL.Point(120.03383, 31.81819),
        offset: new BMapGL.Size(-120, -80)
      });
      // 自定义文本标注样式
      label8.setStyle(this.style);

      let marker9 = new BMapGL.Marker(new BMapGL.Point(120.02601, 31.77955), {
        icon: myIcon
      });
      let label9 = new BMapGL.Label("军民融合产业园", {
        position: new BMapGL.Point(120.02601, 31.77955),
        offset: new BMapGL.Size(-80, -80)
      });
      // 自定义文本标注样式
      label9.setStyle(this.style);

      let marker10 = new BMapGL.Marker(new BMapGL.Point(120.02912, 31.81971), {
        icon: myIcon
      });
      let label10 = new BMapGL.Label("互联网+新经济产业园", {
        position: new BMapGL.Point(120.02912, 31.81971),
        offset: new BMapGL.Size(-100, -80)
      });
      // 自定义文本标注样式
      label10.setStyle(this.style);

      let marker11 = new BMapGL.Marker(new BMapGL.Point(120.01534, 31.81488), {
        icon: myIcon
      });
      let label11 = new BMapGL.Label("新一代信息技术产业园", {
        position: new BMapGL.Point(120.01534, 31.81488),
        offset: new BMapGL.Size(-100, -80)
      });
      label11.setStyle(this.style);
      let marker12 = new BMapGL.Marker(new BMapGL.Point(120.04189, 31.81746), {
        icon: myIcon
      });
      let label12 = new BMapGL.Label("弘辉二期标准厂房", {
        position: new BMapGL.Point(120.04189, 31.81746),
        offset: new BMapGL.Size(-80, -80)
      });
      label12.setStyle(this.style);

      let marker13 = new BMapGL.Marker(new BMapGL.Point(120.03251, 31.79205), {
        icon: myIcon
      });
      let label13 = new BMapGL.Label("黑牡丹产业园", {
        position: new BMapGL.Point(120.03251, 31.79205),
        offset: new BMapGL.Size(-70, -80)
      });
      label13.setStyle(this.style);
      let heimudan = new BMapGL.Marker(new BMapGL.Point(120.03251, 31.79205), {
        icon: new BMapGL.Icon(
          require("../../assets/cluster/heimudan.png"),
          new BMapGL.Size(95, 95)
        ),
        offset: new BMapGL.Size(0, -120)
      });
      // // 将标注添加到地图
      setTimeout(() => {
        this.map.addOverlay(marker1);
        this.map.addOverlay(label1);
        this.map.addOverlay(marker2);
        this.map.addOverlay(label2);
        this.map.addOverlay(zhongou);
        this.map.addOverlay(marker3);
        this.map.addOverlay(label3);
        this.map.addOverlay(marker4);
        this.map.addOverlay(label4);
        this.map.addOverlay(marker5);
        this.map.addOverlay(label5);
        this.map.addOverlay(marker6);
        this.map.addOverlay(label6);
        this.map.addOverlay(marker7);
        this.map.addOverlay(label7);
        this.map.addOverlay(marker8);
        this.map.addOverlay(label8);
        this.map.addOverlay(marker9);
        this.map.addOverlay(label9);
        this.map.addOverlay(marker10);
        this.map.addOverlay(label10);
        this.map.addOverlay(marker11);
        this.map.addOverlay(label11);
        this.map.addOverlay(marker12);
        this.map.addOverlay(label12);
        this.map.addOverlay(marker13);
        this.map.addOverlay(label13);
        this.map.addOverlay(heimudan);
      }, 500);
      label1.addEventListener("click", () => {
        this.active = 1;
      });
      label2.addEventListener("click", () => {
        this.active = 2;
        sessionStorage.setItem('park',2)
      });
      zhongou.addEventListener("click", () => {
        this.active = 2;
        sessionStorage.setItem('park',2)
      });
      label3.addEventListener("click", () => {
        this.active = 3;
      });
      label4.addEventListener("click", () => {
        this.active = 4;
      });
      label5.addEventListener("click", () => {
        this.active = 5;
      });
      label6.addEventListener("click", () => {
        this.active = 6;
      });
      label7.addEventListener("click", () => { 
        this.active = 7;
      });
      label8.addEventListener("click", () => {
        this.active = 8;
      });
      label9.addEventListener("click", () => {
        this.active = 9;
      });
      label10.addEventListener("click", () => {
        this.active = 10;
      });
      label11.addEventListener("click", () => {
        this.active = 11;
      });
      label12.addEventListener("click", () => {
        this.active = 12;
      });
      label13.addEventListener("click", () => {
        this.$router.push({name:'park',params:{park:1}})
        sessionStorage.setItem('park',1)
      });
      heimudan.addEventListener("click", () => {
        this.$router.push({name:'park',params:{park:1}})
        sessionStorage.setItem('park',1)
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
