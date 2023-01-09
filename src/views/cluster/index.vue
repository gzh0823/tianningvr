<template>
  <div class="cluster flex-row">
    <div class="index-content-left flex-row">
      <div v-if="active == '检验检测认证产业集群'" class="index-part">
        <div class="index-title title1">{{ active }}</div>
        <img
          style="margin-left:20px;margin-top:30px"
          src="@/assets/cluster/clusterone-img.jpg"
          alt=""
        />
        <p>
          依托江苏省首批国际合作园区——中欧(常州)检验检测认证国际合作产业园，检验
          检测认证产业集群紧密围绕能源汽车、新材料、轨道交通等领域，形成了技术实力领先、
          产业优势突出、特色应用引领、软硬发展均衡的产业体系。
          目前产业集群已招引了爱回收、SGS、intertek 天祥、中汽认证、坛墨质检
          等龙头企业 2019 年，产业集群实现纳税销售 28.5 亿元，力争到 2023
          年，打造成 为国际检验检测认证产业的先行示范和战略高地。
        </p>
        <div class="flex-row cluster-img">
          <img src="@/assets/cluster/clusterone-1.png" alt="" />
          <img src="@/assets/cluster/clusterone-2.png" alt="" />
          <img src="@/assets/cluster/clusterone-3.png" alt="" />
          <img src="@/assets/cluster/clusterone-4.png" alt="" />
          <img src="@/assets/cluster/clusterone-5.png" alt="" />
          <img src="@/assets/cluster/clusterone-6.png" alt="" />
        </div>
      </div>
      <div v-else-if="active == '工业互联网产业集群'" class="index-part">
        <div class="index-title title1">{{ active }}</div>
        <img
          style="margin-left:20px;margin-top:30px"
          src="@/assets/cluster/clustertwo-img.jpg"
          alt=""
        />
        <p>
          依托航天云网科技发展有限公司，打造国家级区域性工业互联网平台，全力推进“一
          基地两中心”建设，即:云制造技术产业化示范基地，“智能制造、协同制造、云制造”
          协同发展示范中心，云制造创新模式示范中心。在制造资源集聚、产业链协同、制造
          业模式创新、制造业“双创”等方面开展先导创新，打造云制造线上支持平台和线下
          综合服务模式。
          目前产业集群已招引了国佳云为、巨细信息科技、百芝龙、聚玻网、迈迪网等
          知名企业，预计 3 年内纳税销售突破 100 亿元。
        </p>
        <div class="flex-row cluster-img">
          <img src="@/assets/cluster/clustertwo-1.png" alt="" />
          <img src="@/assets/cluster/clustertwo-2.png" alt="" />
          <img src="@/assets/cluster/clustertwo-3.png" alt="" />
          <img src="@/assets/cluster/clustertwo-4.png" alt="" />
          <img src="@/assets/cluster/clustertwo-5.png" alt="" />
          <img src="@/assets/cluster/clustertwo-6.png" alt="" />
        </div>
      </div>
      <div v-else-if="active == '智能驾驶产业集群'" class="index-part">
        <div class="index-title title1">{{ active }}</div>
        <img
          style="margin-left:20px;margin-top:30px"
          src="@/assets/cluster/clusterthree-img.jpg"
          alt=""
        />
        <p>
          依托国家 ITS
          中心智能驾驶及智能交通产业研究院和智能驾驶产业布局，智能驾驶产
          业集群在商用车 +
          智能驾驶领域已基本建成涵盖政策标准、产品研发、行业准入、示
          范运营、产业发展一体化的智能汽车产业基础平台 ,
          打造智能汽车及交通装备产业集群 初见成效。
          目前产业集群已招引了车联天下、小马立行、中天安驰、灵动飞扬等知名企业，
          2019 年实现纳税销售 10.74 亿元，预计 3 年内纳税销售突破 100 亿元。
        </p>
        <div class="flex-row cluster-img">
          <img src="@/assets/cluster/clusterthree-1.png" alt="" />
          <img src="@/assets/cluster/clusterthree-2.png" alt="" />
          <img src="@/assets/cluster/clusterthree-3.png" alt="" />
          <img src="@/assets/cluster/clusterthree-4.png" alt="" />
          <img src="@/assets/cluster/clusterthree-5.png" alt="" />
          <img src="@/assets/cluster/clusterthree-6.png" alt="" />
        </div>
      </div>
      <div v-else-if="active == '视音频进出口产业集群'" class="index-part">
        <div class="index-title title1">{{ active }}</div>
        <img
          style="margin-left:20px;margin-top:30px"
          src="@/assets/cluster/clusterfour-img.jpg"
          alt=""
        />
        <p>
          依托省重点项目中国江苏常州网络视听产业基地，视音频进出口产业集群围绕视音频内
          容进出口平台以及安全体系建设，加快推动信息安全研究院等业务板块，力争通过
          5 年
          时间组成文化创意，影视制作、人工智能辅助、数字发行、海外输出、交易和结算，周
          边衍生产品的完整产业链格局。
          目前产业集群已招引了产业龙头企业网博视界、视博云信息技术等，2020
          年完成 投资 2.45 亿元，力争在 5 年内实现纳税销售突破 100 亿元。
        </p>
        <div class="flex-row cluster-img">
          <img src="@/assets/cluster/clusterfour-1.png" alt="" />
          <img src="@/assets/cluster/clusterfour-2.png" alt="" />
          <img src="@/assets/cluster/clusterfour-3.png" alt="" />
          <img src="@/assets/cluster/clusterfour-4.png" alt="" />
          <img src="@/assets/cluster/clusterfour-5.png" alt="" />
          <img src="@/assets/cluster/clusterfour-6.png" alt="" />
        </div>
      </div>
      <div v-else-if="active == '军民融合产业集群'" class="index-part">
        <div class="index-title title1">{{ active }}</div>
        <img
          style="margin-left:20px;margin-top:30px"
          src="@/assets/cluster/clusterfive-img.jpg"
          alt=""
        />
        <p>
          依托“基地 +
          基金”的运营模式，军民融合产业集群重点引进新一代信息技术产业和
          智能制造方向的企业和项目，致力于军民深度融合，打造军民融合先行示范和战略高地。
          目前产业集群已招引了一批优质涉军企业，如弘量电子、仁千电气、泛腾电子、
          凯汀精密和江苏怀业等，2019 年实现纳税销售 36 亿元，预计到 2020
          年底突破 100 亿元。
        </p>
        <div class="flex-row cluster-img">
          <img src="@/assets/cluster/clusterfive-1.png" alt="" />
          <img src="@/assets/cluster/clusterfive-2.png" alt="" />
          <img src="@/assets/cluster/clusterfive-3.png" alt="" />
          <img src="@/assets/cluster/clusterfive-4.png" alt="" />
          <img src="@/assets/cluster/clusterfive-5.png" alt="" />
          <img src="@/assets/cluster/clusterfive-6.png" alt="" />
        </div>
      </div>
      <div v-else-if="active == '互联网新经济产业集群'" class="index-part">
        <div class="index-title title1">{{ active }}</div>
        <img
          style="margin-left:20px;margin-top:30px"
          src="@/assets/cluster/clustersix-img.jpg"
          alt=""
        />
        <p>
          依托三大江苏省电子商务示范基地——互联网 +
          新经济产业园、常州恒生科技园和常 州新动力电子商务产业园，互联网 +
          新经济产业集群主要围绕平台经济、电子商务、
          计算机软件、大数据云计算等具有互联网总部性质的产业进行集聚。
          目前产业集群已招引了千家万铺、京东云、摩塑网、唱游旅游大数据等知名企业，
          2019 年实现纳税销售 28 亿元，预计 2020 年突破 100 亿元。
        </p>
        <div class="flex-row cluster-img">
          <img src="@/assets/cluster/clustersix-1.png" alt="" />
          <img src="@/assets/cluster/clustersix-2.png" alt="" />
          <img src="@/assets/cluster/clustersix-3.png" alt="" />
          <img src="@/assets/cluster/clustersix-4.png" alt="" />
          <img src="@/assets/cluster/clustersix-5.png" alt="" />
          <img src="@/assets/cluster/clustersix-6.png" alt="" />
        </div>
      </div>
    </div>
    <div class="index-content-right">
      <div class="cluster-right">
        <div
          @click="active = '检验检测认证产业集群'"
          :style="
            active == '检验检测认证产业集群'
              ? 'background:url(' + activeImg + ')'
              : ''
          "
        >
          检验检测认证产业集群
        </div>
        <div
          @click="active = '工业互联网产业集群'"
          :style="
            active == '工业互联网产业集群'
              ? 'background:url(' + activeImg + ')'
              : ''
          "
        >
          工业互联网产业集群
        </div>
        <div
          @click="active = '智能驾驶产业集群'"
          :style="
            active == '智能驾驶产业集群'
              ? 'background:url(' + activeImg + ')'
              : ''
          "
        >
          智能驾驶产业集群
        </div>
        <div
          @click="active = '视音频进出口产业集群'"
          :style="
            active == '视音频进出口产业集群'
              ? 'background:url(' + activeImg + ')'
              : ''
          "
        >
          视音频进出口产业集群
        </div>
        <div
          @click="active = '军民融合产业集群'"
          :style="
            active == '军民融合产业集群'
              ? 'background:url(' + activeImg + ')'
              : ''
          "
        >
          军民融合产业集群
        </div>
        <div
          @click="active = '互联网新经济产业集群'"
          :style="
            active == '互联网新经济产业集群'
              ? 'background:url(' + activeImg + ')'
              : ''
          "
        >
          互联网新经济产业集群
        </div>
      </div>
    </div>
    <div class="cluster-bg flex-row" v-show="clusterDialog">
      <div v-if="park == 1" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>琉璃光生物科技产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>琉璃光生物科技产业园</span>占地面积
          <span>62 亩</span>，总建筑面积
          <span>6.5 万平方米</span>。园区为常州琉璃光
          生物科技有限公司总部基地，致力于生物科技领域技术开发，园区未来 3
          年纳税销售预计可突破
          <span>30 亿元</span>，成为天宁区生物医药产业高地。
        </p>
      </div>
      <div v-else-if="park == 2" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>中欧(常州)检验检测认证国际合作产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>中欧(常州)检验检测认证国际合作产业园</span>为江苏省<span
            >首批</span
          >
          9
          家国际合作园区之一，荣获国家检验检测高技术服务业集聚区、江苏省生产性服务业集聚示范区等多项荣誉，主要招引检验检测认证产业及其上下游相关企业，力争到
          2020 年底，载体面积达 <span>40 万平方米</span>，入驻企业数量突破
          <span>120 家</span>，从业人员规模达 <span>5000 人</span>，产业规模达
          <span>100 亿元</span>。
        </p>
        <div class="detail-btn" @click="$router.push({name:'zhongou'})">查看详细</div>
      </div>
      <div v-else-if="park == 4" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>福北工业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>福北工业园</span>占地面积 <span>26.5 亩</span>，总建筑面积
          <span>3.9 万平方米</span>。主要招商方向为电子商务及物流、
          轻型机电类、新型材料产业、机械零部件加工等产业，拟引进相关企业
          <span>10 家</span>以上，园区投产 运营后 5 年内预计实现年纳税销售
          <span>10 亿元</span>，成为天宁综合性园区示范基地。
        </p>
      </div>
      <div v-else-if="park == 5" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>弘辉加速器</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>弘辉加速器</span>占地 <span>17070 平方米</span>，总建筑面积为
          <span>4 万平方米</span>，主要招商方向为新一代信息
          技术、轻型机电类、新型材料等产业，园区投产运营后 5 年内预计完成总投资
          <span>10 亿元以上</span>， 实现纳税销售 <span>30 亿元</span>。
        </p>
      </div>
      <div v-else-if="park == 6" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>天宁智造园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>天宁智造园</span>占地 <span>78 亩</span>，总建筑面积
          <span>5.3 万平方米</span>，园区以智能制造、人工智能及智能制
          造解决方案等为主导的产业发展方向，拟引进智能制造相关企业
          <span>10 家</span>以上，园区投产运营后 5 年内预计实现年产值
          <spna>20 亿元</spna>，利税
          <span>2 亿元</span>，努力成为开发区智能制造产业发展的生力军，
          全市智能制造产业先导区。
        </p>
      </div>
      <div v-else-if="park == 7" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>工业互联网产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>工业互联网产业园(一期 )</span> 占地
          <span>75.5 亩</span>，建筑面积约
          <span>18 万m²</span>。园区围绕行业龙头平台、
          标识解析二级节点、先进装备制造方向进行产业招引，致力于将其打造成工业互联网创新示范区，预计
          <span>3 年内</span>产值突破 <span>100 亿元</span>。
        </p>
      </div>
      <div v-else-if="park == 8" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>汽车智能零部件产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>汽车零部件产业园</span>用地面积
          <span>18.73 万平方米</span>，总建筑面积 <span>49 万平方米</span>，预计
          2021 年
          底竣工。园区计划招引智能驾驶核心零部件生产类企业、软件及解决方案类企业、平台研发检
          测类企业等，园区建成后将成为多样化用途融合示范园区、四新产业集聚示范园区、绿色建筑
          材料应用示范园区、智慧智能管理示范园区、土地集约利用示范园区、建设、招商、运营一体
          化示范园区。2020 年拟引入企业 <spna>30 余家</spna>，计划运营 5
          年内实现年产值 <span>100 亿元</span>。
        </p>
      </div>
      <div v-else-if="park == 9" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>中国江苏常州网络视听产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>中国江苏常州网络视听产业园</span>占地约
          <span>200 亩</span>，总建筑面积 <span>47.7 万平方米</span>，计划于
          2021 年 5 月底全部封顶，2022 年 4
          月交付使用。未来五年内，产业园将形成文化创意、影视
          制作、人工智能辅助、数字发行、海外输出、交易和结算及周边衍生产品的完整产业链格局，
          实现产业园年营收超过百亿元，带动江苏省整体数字文化产业<span>千亿产值</span>。
        </p>
      </div>
      <div v-else-if="park == 10" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>军民融合产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>常州军民融合产业园</span>一期建筑面积 2.9
          万平方米，已交付使用，二期规划用地 <span>148.2 亩</span>，
          新建建筑面积 <span>28.7 平方米</span>，预计 2021
          年底交付使用。产业园荣获省级军民融合产业示范
          基地、省级小型微型企业双创基地、省级科技企业孵化器等称号。产业园招引方向为新一代信息技术产业和智能制造方向的企业，预计到
          2020 年底，园区产值突破 <span>100 亿元</span>。
        </p>
      </div>
      <div v-else-if="park == 11" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>互联网 + 新经济产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>互联网 + 新经济产业园</span>占地 <span>60 亩</span>，总建筑面积
          <span>7 万平方米</span>，2019 年获得江苏省电子商
          务示范基地荣誉。园区围绕电子商务、平台经济、智慧物流、云计算、大数据、软件开发等产业方向进行产业集聚，目前已招引
          <span>40 家</span>互联网类企业，拟引进互联网 + 新经济产业
          <span>60 家</span>， 力争 3 年内成为<span>百亿级园区</span>。
        </p>
      </div>
      <div v-else-if="park == 12" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>新一代信息技术产业园</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>新一代信息技术产业园</span>占地面积
          <span>40.6 亩</span>，总建筑面积
          <span>7.3 万平方米</span>。园区主要招引人
          工智能、大数据、云计算、物联网等新一代信息技术产业企业。目前已入驻仁千科技、晖朗电子、
          荣升富达、一数光电科技等一批优质企业，在 5G
          通信、光伏元器件、精密轴承、投影光机设
          备等行业领域独具特色和优势，未来 3 年内将会集中实现
          <span>IPO</span>，预计年纳税销售突破 <span>10 亿元</span>。
        </p>
      </div>
      <div v-else-if="park == 13" class="cluster-dialog">
        <div class="cluster-title flex-row">
          <span>弘辉二期标准厂房</span
          ><img
            @click="clusterDialog = false"
            src="@/assets/index/close.png"
            alt=""
          />
        </div>
        <p>
          <span>弘辉二期标准厂房</span>占地
          <span>3595 平方米</span>，总建筑面积为
          <span>3.4 万平方米</span>，主要招商方向为智
          能制造、智能装备、机械零部件加工等产业，园区投产运营后 5
          年内预计完成总投资 <span>10 亿元</span> 以上，实现纳税销售
          <span>30 亿元</span>。
        </p>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import "./cluster.css";
export default {
  name: "Map",
  data() {
    return {
      active: "检验检测认证产业集群",
      activeImg: require("../../assets/cluster/cluster-right-active.png"),
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
      },
      clusterDialog: false,
      park: 0
    };
  },
  watch: {
    active(n, o) {
      switch (n) {
        case "检验检测认证产业集群":
          this.cluster1();
          break;
        case "工业互联网产业集群":
          this.cluster2();
          break;
        case "智能驾驶产业集群":
          this.cluster3();
          break;
        case "视音频进出口产业集群":
          this.cluster4();
          break;
        case "军民融合产业集群":
          this.cluster5();
          break;
        case "互联网新经济产业集群":
          this.cluster6();
          break;
        default:
          break;
      }
    }
  },

  mounted() {
    this.initMap();
    setTimeout(() => {
      this.$nextTick(()=>{
        this.cluster1();
      })
    }, 1000);
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
    // 检验检测
    cluster1() {
      this.remove();
      this.map.centerAndZoom("常州市龙城之星染织有限公司", 15);
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
      let marker3 = new BMapGL.Marker(new BMapGL.Point(120.03251, 31.79205), {
        icon: myIcon
      });
      let label3 = new BMapGL.Label("黑牡丹产业园", {
        position: new BMapGL.Point(120.03251, 31.79205),
        offset: new BMapGL.Size(-70, -80)
      });
      label3.setStyle(this.style);
      let heimudan = new BMapGL.Marker(new BMapGL.Point(120.03251, 31.79205), {
        icon: new BMapGL.Icon(
          require("../../assets/cluster/heimudan.png"),
          new BMapGL.Size(95, 95)
        ),
        offset: new BMapGL.Size(0, -120)
      });
      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      this.map.addOverlay(marker2);
      this.map.addOverlay(label2);
      this.map.addOverlay(zhongou);
      this.map.addOverlay(marker3);
      this.map.addOverlay(label3);
      this.map.addOverlay(heimudan);
      // 点标记添加点击事件
      label1.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 1;
      });
      label2.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 2;
      });
      zhongou.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 2;
      });
      label3.addEventListener("click", () => {
        this.$router.push({name:'heimudan'})
      });
      heimudan.addEventListener("click", () => {
        this.$router.push({name:'heimudan'})
      });
    },
    // 工业互联网
    cluster2() {
      this.remove();
      this.map.centerAndZoom("常州市三毛纺织集团", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/cluster/cluster-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(120.03119, 31.82902), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("福北工业园", {
        position: new BMapGL.Point(120.03119, 31.82902),
        offset: new BMapGL.Size(-60, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);
      let marker2 = new BMapGL.Marker(new BMapGL.Point(120.0407, 31.82756), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("弘辉加速器产业园", {
        position: new BMapGL.Point(120.0407, 31.82756),
        offset: new BMapGL.Size(-80, -80)
      });
      label2.setStyle(this.style);
      let marker3 = new BMapGL.Marker(new BMapGL.Point(120.04367, 31.81248), {
        icon: myIcon
      });
      let label3 = new BMapGL.Label("天宁智造园", {
        position: new BMapGL.Point(120.04367, 31.81248),
        offset: new BMapGL.Size(-60, -80)
      });
      label3.setStyle(this.style);
      let marker4 = new BMapGL.Marker(new BMapGL.Point(120.02014, 31.79913), {
        icon: myIcon
      });
      let label4 = new BMapGL.Label("工业互联网产业园", {
        position: new BMapGL.Point(120.02014, 31.79913),
        offset: new BMapGL.Size(-80, -80)
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
      label1.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 4;
      });
      label2.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 5;
      });
      label3.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 6;
      });
      label4.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 7;
      });
    },
    // 智能驾驶
    cluster3() {
      this.remove();
      this.map.centerAndZoom("常州市龙城之星染织有限公司", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/cluster/cluster-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(120.03467, 31.80405), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("汽车智能零部件产业园", {
        position: new BMapGL.Point(120.03467, 31.80405),
        offset: new BMapGL.Size(-100, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);

      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      label1.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 8;
      });
    },
    // 视音频
    cluster4() {
      this.remove();
      this.map.centerAndZoom("常州市苏南智城数字产业中心", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/cluster/cluster-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(120.03383, 31.81819), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("中国江苏常州网络视听产业园", {
        position: new BMapGL.Point(120.03383, 31.81819),
        offset: new BMapGL.Size(-120, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);

      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      label1.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 9;
      });
    },
    // 军民融合
    cluster5() {
      this.remove();
      this.map.centerAndZoom("常州市军民融合产业园", 15);
      let myIcon = new BMapGL.Icon(
        require("../../assets/cluster/cluster-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(120.02601, 31.77955), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("军民融合产业园", {
        position: new BMapGL.Point(120.02601, 31.77955),
        offset: new BMapGL.Size(-80, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);

      // // 将标注添加到地图
      this.map.addOverlay(marker1);
      this.map.addOverlay(label1);
      label1.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 10;
      });
    },
    // 互联网+新经济
    cluster6() {
      this.remove();
      this.map.centerAndZoom("常州市车联天下物流云众创空间", 16);
      let myIcon = new BMapGL.Icon(
        require("../../assets/cluster/cluster-position.png"),
        new BMapGL.Size(22, 62)
      );
      // 创建Marker标注，使用图标
      let marker1 = new BMapGL.Marker(new BMapGL.Point(120.02912, 31.81971), {
        icon: myIcon
      });
      let label1 = new BMapGL.Label("互联网+新经济产业园", {
        position: new BMapGL.Point(120.02912, 31.81971),
        offset: new BMapGL.Size(-100, -80)
      });
      // 自定义文本标注样式
      label1.setStyle(this.style);
      let marker2 = new BMapGL.Marker(new BMapGL.Point(120.0407, 31.82756), {
        icon: myIcon
      });
      let label2 = new BMapGL.Label("弘辉加速器产业园", {
        position: new BMapGL.Point(120.0407, 31.82756),
        offset: new BMapGL.Size(-80, -80)
      });
      label2.setStyle(this.style);
      let marker3 = new BMapGL.Marker(new BMapGL.Point(120.01534, 31.81488), {
        icon: myIcon
      });
      let label3 = new BMapGL.Label("新一代信息技术产业园", {
        position: new BMapGL.Point(120.01534, 31.81488),
        offset: new BMapGL.Size(-100, -80)
      });
      label3.setStyle(this.style);
      let marker4 = new BMapGL.Marker(new BMapGL.Point(120.04189, 31.81746), {
        icon: myIcon
      });
      let label4 = new BMapGL.Label("弘辉二期标准厂房", {
        position: new BMapGL.Point(120.04189, 31.81746),
        offset: new BMapGL.Size(-80, -80)
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
      label1.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 11;
      });
      label2.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 5;
      });
      label3.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 12;
      });
      label4.addEventListener("click", () => {
        this.clusterDialog = true;
        this.park = 13;
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
