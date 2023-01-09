<template>
  <div class="basic flex-row">
    <div class="basic-content-left flex-row">
      <div class="basic-part">
        <div class="basic-title title1">公用事业成本</div>
        <div class="basic-cost">
          <div class="cost-title1">水（元/立方米）</div>
          <p class="flex-row"><span>居民生活用水</span><span>3.37</span></p>
          <p class="flex-row">
            <span>生产类（一般工商业）</span><span>4.21</span>
          </p>
          <p class="flex-row">
            <span>生产类（六大行业）</span><span>5.43</span>
          </p>
          <p class="flex-row"><span>特种用水</span><span>5.48</span></p>
        </div>
        <div class="basic-cost">
          <div class="cost-title2">
            电（元/千瓦时）&emsp;&nbsp;一般工商业及其他&emsp;&nbsp;大工业
          </div>
          <p class="flex-row">
            <span style="flex:0 0 30%">1KV以下</span><span>0.6715</span
            ><span>不适用</span>
          </p>
          <p class="flex-row">
            <span style="flex:0 0 30%">1-10KV</span><span>0.6465</span
            ><span>0.6418</span>
          </p>
          <p class="flex-row">
            <span style="flex:0 0 30%">20-35KV以下</span><span>0.6365</span
            ><span>0.6358</span>
          </p>
          <p class="flex-row">
            <span style="flex:0 0 30%">35-11KV以下</span><span>0.6215</span
            ><span>0.6268</span>
          </p>
          <p class="flex-row">
            <span style="flex:0 0 30%">110KV</span><span></span
            ><span>0.6118</span>
          </p>
          <p class="flex-row">
            <span style="flex:0 0 30%">220KV及以上</span><span></span
            ><span>0.5968</span>
          </p>
        </div>
        <div class="basic-cost">
          <div class="cost-title3">气（元/立方米）</div>
          <p class="flex-row">
            <span>居民用气（小于300立方）</span><span>2.72</span>
          </p>
          <p class="flex-row"><span>工商业用气</span><span>3.75</span></p>
          <p class="flex-row"><span>车用天然气</span><span>4.55</span></p>
        </div>
      </div>
    </div>
    <div class="basic-content-right">
      <div class="basic-right">
        <div
          @click="active = '金融商贸'"
          :style="
            active == '金融商贸' ? 'background:url(' + activeImg + ')' : ''
          "
        >
          金融商贸
        </div>
        <div
          @click="active = '交通'"
          :style="active == '交通' ? 'background:url(' + activeImg + ')' : ''"
        >
          交通
        </div>
        <div
          @click="active = '教育'"
          :style="active == '教育' ? 'background:url(' + activeImg + ')' : ''"
        >
          教育
        </div>
        <div
          @click="active = '医疗'"
          :style="active == '医疗' ? 'background:url(' + activeImg + ')' : ''"
        >
          医疗
        </div>
      </div>
    </div>

    <div id="map"></div>
  </div>
</template>

<script>
import "./basic.css";
export default {
  name: "Map",
  data() {
    return {
      active: "金融商贸",
      activeImg: require("../../assets/basic/basic-right-active.png"),
      map: null,
      style: {
        color: "#5D3D17",
        fontWeight: "bold",
        borderRadius: "5px",
        backgroundImage: "linear-gradient(270deg, #E7D6A8 0%, #E0BB71 100%)",
        border: "1px solid #fff",
        fontSize: "16px",
        textAlign: "center",
        lineHeight: "40px",
        width: "133px",
        boxShadow: "-2px 0px 6px 0px rgba(255,229,170,1)"
      }
    };
  },
  mounted() {
    this.initMap();
    setTimeout(() => {
      this.$nextTick(()=>{
        this.finance();
      })
    }, 300);
  },
  watch: {
    active(n, o) {
      switch (n) {
        case "金融商贸":
          this.finance();
          break;
        case "交通":
          this.traffic();
          break;
        case "教育":
          this.education()
          break;
        case "医疗":
          this.medical()
          break;
        default:
          break;
      }
    }
  },
  methods: {
    //画地图
    initMap() {
      this.map = new BMapGL.Map("map", {
        mapType: BMAP_SATELLITE_MAP,
        enableMapClick: true,
        minZoom: 12
      }); // 创建Map实例
      this.map.centerAndZoom("常州市天宁区", 14); // 初始化地图,设置中心点坐标和地图级别，数字大-可视范围小
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.setHeading(64.5);
      this.map.setTilt(73);
    },
    remove() {
      this.map.clearOverlays();
    },
    // 金融商贸
    finance() {
      this.remove();
      this.map.centerAndZoom("常州市青山湾", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/basic/basic-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(119.96928, 31.80641), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("交银大厦", {
        position: new BMapGL.Point(119.96928, 31.80641),
        offset: new BMapGL.Size(-67, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);
      let marker2 = new BMapGL.Marker(new BMapGL.Point(119.96966, 31.78057), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("常州购物中心", {
        position: new BMapGL.Point(119.96966, 31.78057),
        offset: new BMapGL.Size(-67, -80)
      });
      label2.setStyle(this.style);
      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      this.map.addOverlay(marker2);
      this.map.addOverlay(label2);
    },
    // 交通
    traffic() {
      this.remove();
      this.map.centerAndZoom("常州市花语江南", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/basic/basic-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(119.97781, 31.79484), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("地铁", {
        position: new BMapGL.Point(119.97781, 31.79484),
        offset: new BMapGL.Size(-67, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);
      let marker2 = new BMapGL.Marker(new BMapGL.Point(119.98741, 31.79607), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("火车站", {
        position: new BMapGL.Point(119.98741, 31.79607),
        offset: new BMapGL.Size(-67, -80)
      });
      label2.setStyle(this.style);

      let marker3 = new BMapGL.Marker(new BMapGL.Point(119.97572, 31.79609), {
        icon: myIcon
      });
      let label3 = new BMapGL.Label("沪宁城际高铁", {
        position: new BMapGL.Point(119.97572, 31.79609),
        offset: new BMapGL.Size(-67, -80)
      });
      label3.setStyle(this.style);
      let marker4 = new BMapGL.Marker(new BMapGL.Point(120.04425, 31.81853), {
        icon: myIcon
      });
      let label4 = new BMapGL.Label("沪宁高速", {
        position: new BMapGL.Point(120.04425, 31.81853),
        offset: new BMapGL.Size(-67, -80)
      });
      label4.setStyle(this.style);
      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      this.map.addOverlay(marker2);
      this.map.addOverlay(label2);
      this.map.addOverlay(marker3);
      this.map.addOverlay(label3);
      this.map.addOverlay(marker4);
      this.map.addOverlay(label4);
    },
    // 教育
    education() {
      this.remove();
      this.map.centerAndZoom("常州市中山大厦", 16);
      let myIcon = new BMapGL.Icon(
        require("../../assets/basic/basic-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(119.97503, 31.79427), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("博爱路小学", {
        position: new BMapGL.Point(119.97503, 31.79427),
        offset: new BMapGL.Size(-67, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);
      let marker2 = new BMapGL.Marker(new BMapGL.Point(119.9737, 31.7831), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("常州高级中学", {
        position: new BMapGL.Point(119.9737, 31.7831),
        offset: new BMapGL.Size(-67, -80)
      });
      label2.setStyle(this.style);

      let marker3 = new BMapGL.Marker(new BMapGL.Point(119.96899 , 31.78203), {
        icon: myIcon
      }); 
      let label3 = new BMapGL.Label("局前街小学", {
        position: new BMapGL.Point(119.96899 , 31.78203),
        offset: new BMapGL.Size(-67, -80)
      });
      label3.setStyle(this.style);
      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      this.map.addOverlay(marker2);
      this.map.addOverlay(label2);
      this.map.addOverlay(marker3);
      this.map.addOverlay(label3);
    },
    // 医疗
    medical() {
      this.remove();
      this.map.centerAndZoom("常州市怀德苑", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/basic/basic-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(119.96542 , 31.78720), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("市一院", {
        position: new BMapGL.Point(119.96542 , 31.78720),
        offset: new BMapGL.Size(-67, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);
      let marker2 = new BMapGL.Marker(new BMapGL.Point(119.96659 , 31.78038), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("市二院", {
        position: new BMapGL.Point(119.96659 , 31.78038),
        offset: new BMapGL.Size(-67, -80)
      });
      label2.setStyle(this.style);

      let marker3 = new BMapGL.Marker(new BMapGL.Point(119.93180 , 31.77836), {
        icon: myIcon
      });
      let label3 = new BMapGL.Label("市三院", {
        position: new BMapGL.Point(119.93180 , 31.77836),
        offset: new BMapGL.Size(-67, -80)
      });
      label3.setStyle(this.style);
      let marker4 = new BMapGL.Marker(new BMapGL.Point(119.96407 , 31.77979), {
        icon: myIcon
      });
      let label4 = new BMapGL.Label("中医院", {
        position: new BMapGL.Point(119.96407 , 31.77979),
        offset: new BMapGL.Size(-67, -80)
      });
      label4.setStyle(this.style);
      let marker5 = new BMapGL.Marker(new BMapGL.Point(119.95426 , 31.78113), {
        icon: myIcon
      });
      let label5 = new BMapGL.Label("妇婴保健院", {
        position: new BMapGL.Point(119.95426 , 31.78113),
        offset: new BMapGL.Size(-67, -80)
      });
      label5.setStyle(this.style);
      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      this.map.addOverlay(marker2);
      this.map.addOverlay(label2);
      this.map.addOverlay(marker3);
      this.map.addOverlay(label3);
      this.map.addOverlay(marker4);
      this.map.addOverlay(label4);
      this.map.addOverlay(marker5);
      this.map.addOverlay(label5);
    },
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
