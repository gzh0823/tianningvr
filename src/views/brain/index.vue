<template>
  <div class="brain flex-row">
    <div class="brain-left">
      <div class="brain-title">{{ active }}</div>
      <p
        class="flex-row cluster-item"
        @click="active = '检验检测认证产业集群'"
        :style="active == '检验检测认证产业集群' ? 'color:#FFBD2C;' : ''"
      >
        <span>检验检测认证产业集群</span
        ><img
          :src="
            active == '检验检测认证产业集群'
              ? require('@/assets/brain/arrow-active.png')
              : require('@/assets/brain/arrow.png')
          "
          alt=""
        />
      </p>
      <p
        class="flex-row cluster-item"
        @click="active = '工业互联网产业集群'"
        :style="active == '工业互联网产业集群' ? 'color:#FFBD2C;' : ''"
      >
        <span>工业互联网产业集群</span
        ><img
          :src="
            active == '工业互联网产业集群'
              ? require('@/assets/brain/arrow-active.png')
              : require('@/assets/brain/arrow.png')
          "
          alt=""
        />
      </p>
      <p
        class="flex-row cluster-item"
        @click="active = '智能驾驶产业集群'"
        :style="active == '智能驾驶产业集群' ? 'color:#FFBD2C;' : ''"
      >
        <span>智能驾驶产业集群</span
        ><img
          :src="
            active == '智能驾驶产业集群'
              ? require('@/assets/brain/arrow-active.png')
              : require('@/assets/brain/arrow.png')
          "
          alt=""
        />
      </p>
      <p
        class="flex-row cluster-item"
        @click="active = '视音频进出口产业集群'"
        :style="active == '视音频进出口产业集群' ? 'color:#FFBD2C;' : ''"
      >
        <span>视音频进出口产业集群</span
        ><img
          :src="
            active == '视音频进出口产业集群'
              ? require('@/assets/brain/arrow-active.png')
              : require('@/assets/brain/arrow.png')
          "
          alt=""
        />
      </p>
      <p
        class="flex-row cluster-item"
        @click="active = '军民融合产业集群'"
        :style="active == '军民融合产业集群' ? 'color:#FFBD2C;' : ''"
      >
        <span>军民融合产业集群</span
        ><img
          :src="
            active == '军民融合产业集群'
              ? require('@/assets/brain/arrow-active.png')
              : require('@/assets/brain/arrow.png')
          "
          alt=""
        />
      </p>
      <p
        class="flex-row cluster-item"
        @click="active = '互联网+新经济产业集群'"
        :style="active == '互联网+新经济产业集群' ? 'color:#FFBD2C;' : ''"
      >
        <span>互联网+新经济产业集群</span
        ><img
          :src="
            active == '互联网+新经济产业集群'
              ? require('@/assets/brain/arrow-active.png')
              : require('@/assets/brain/arrow.png')
          "
          alt=""
        />
      </p>
    </div>
    <div v-if="active == '检验检测认证产业集群'">
      <div class="plate">
        <div class="brain-plate">产业图谱</div>
        <div class="flex-row plate-list">
          <div style="background:#13426D">
            <p class="reaches">上游</p>
            <div class="chain-list">
              <span v-for="(i, index) in upstream1" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D;">
            <p class="reaches">中游</p>
            <div class="chain-list">
              <span v-for="(i, index) in midstream1" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D">
            <p class="reaches">下游</p>
            <div class="chain-list">
              <span v-for="(i, index) in downstream1" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">技术动向</div>
        <div class="flex-row techway">
          <div id="techChart" style="width:350px;height:350px;"></div>
          <div style="flex:0 0 38%;font-size: 14px;color: #C1DFFF;">
            全球质量检验检测前十大热门技术词包括预处理、起重机、试剂盒、控制系统、食品检测、固定架、建筑工程、检测设备、测量装置和计算机。进一步细分来看，质量检验检测技术热门词包括检测装置、检测仪、便携式、工作台、测试装置、食品安全等。
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '工业互联网产业集群'">
      <div class="plate">
        <div class="brain-plate">产业图谱</div>
        <div class="flex-row plate-list">
          <div style="background:#13426D">
            <p class="reaches">上游</p>
            <div class="chain-list">
              <span v-for="(i, index) in upstream2" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D;">
            <p class="reaches">中游</p>
            <div class="chain-list">
              <span v-for="(i, index) in midstream2" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D">
            <p class="reaches">下游</p>
            <div class="chain-list">
              <span v-for="(i, index) in downstream2" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">技术动向</div>
        <div class="flex-row techway">
          <div id="techChart2" style="width:350px;height:350px;"></div>
          <div style="flex:0 0 38%;font-size: 14px;color: #C1DFFF;">
            全球质量检验检测前十大热门技术词包括预处理、起重机、试剂盒、控制系统、食品检测、固定架、建筑工程、检测设备、测量装置和计算机。进一步细分来看，质量检验检测技术热门词包括检测装置、检测仪、便携式、工作台、测试装置、食品安全等。
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '智能驾驶产业集群'">
      <div class="plate">
        <div class="brain-plate">产业图谱</div>
        <div class="flex-row plate-list">
          <div style="background:#13426D">
            <p class="reaches">上游</p>
            <div class="chain-list">
              <span v-for="(i, index) in upstream3" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D;">
            <p class="reaches">中游</p>
            <div class="chain-list">
              <span v-for="(i, index) in midstream3" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D">
            <p class="reaches">下游</p>
            <div class="chain-list">
              <span v-for="(i, index) in downstream3" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">技术动向</div>
        <div class="flex-row techway">
          <div id="techChart3" style="width:350px;height:350px;"></div>
          <div style="flex:0 0 38%;font-size: 14px;color: #C1DFFF;">
            全球质量检验检测前十大热门技术词包括预处理、起重机、试剂盒、控制系统、食品检测、固定架、建筑工程、检测设备、测量装置和计算机。进一步细分来看，质量检验检测技术热门词包括检测装置、检测仪、便携式、工作台、测试装置、食品安全等。
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '视音频进出口产业集群'">
      <div class="plate">
        <div class="brain-plate">产业图谱</div>
        <div class="flex-row plate-list">
          <div style="background:#13426D">
            <p class="reaches">上游</p>
            <div class="chain-list">
              <span v-for="(i, index) in upstream4" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D;">
            <p class="reaches">中游</p>
            <div class="chain-list">
              <span v-for="(i, index) in midstream4" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D">
            <p class="reaches">下游</p>
            <div class="chain-list">
              <span v-for="(i, index) in downstream4" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">进出口情况</div>
        <div class="flex-row techway">
          <div id="importChart" style="width:350px;height:300px;"></div>
          <div id="exportChart" style="width:350px;height:300px;"></div>
        </div>
        <p class="summary" style="width:94%;margin:0 20px">
          根据统计局数据，2015 年我国电视剧<span>进口额 2.95 亿元</span
          >，进口数量 <span>126</span> 部，<span>出口额 3.77 亿元</span
          >，出口<span>数量381</span>部，出口额自2008年以来首次超过进口额。我国电视剧出口总体情况保持良好增长态势，但总贸易额仅为6.72亿元，相比整体影视剧市场占比较小，未来依旧存在巨大空间。
        </p>
      </div>
    </div>
    <div v-else-if="active == '军民融合产业集群'">
      <div class="plate">
        <div class="brain-plate">产业图谱</div>
        <div class="flex-row plate-list">
          <div style="background:#13426D">
            <p class="reaches">上游</p>
            <div class="chain-list">
              <span v-for="(i, index) in upstream5" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D;">
            <p class="reaches">中游</p>
            <div class="chain-list">
              <span v-for="(i, index) in midstream5" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D">
            <p class="reaches">下游</p>
            <div class="chain-list">
              <span v-for="(i, index) in downstream5" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">技术动向</div>
        <div class="flex-row techway">
          <div id="techChart4" style="width:350px;height:350px;"></div>
          <div style="flex:0 0 38%;font-size: 14px;color: #C1DFFF;">
            全球质量检验检测前十大热门技术词包括预处理、起重机、试剂盒、控制系统、食品检测、固定架、建筑工程、检测设备、测量装置和计算机。进一步细分来看，质量检验检测技术热门词包括检测装置、检测仪、便携式、工作台、测试装置、食品安全等。
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '互联网+新经济产业集群'">
      <div class="plate">
        <div class="brain-plate">产业图谱</div>
        <div class="flex-row plate-list">
          <div style="background:#13426D">
            <p class="reaches">上游</p>
            <div class="chain-list">
              <span v-for="(i, index) in upstream6" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D;">
            <p class="reaches">中游</p>
            <div class="chain-list">
              <span v-for="(i, index) in midstream6" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
          <div style="background:#13426D">
            <p class="reaches">下游</p>
            <div class="chain-list">
              <span v-for="(i, index) in downstream6" :key="index"
                >{{ i }}&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">技术动向</div>
        <div class="flex-row techway">
          <div id="techChart5" style="width:350px;height:350px;"></div>
          <div style="flex:0 0 38%;font-size: 14px;color: #C1DFFF;">
            全球质量检验检测前十大热门技术词包括预处理、起重机、试剂盒、控制系统、食品检测、固定架、建筑工程、检测设备、测量装置和计算机。进一步细分来看，质量检验检测技术热门词包括检测装置、检测仪、便携式、工作台、测试装置、食品安全等。
          </div>
        </div>
      </div>
    </div>

    <div v-if="active == '检验检测认证产业集群'">
      <div class="plate">
        <div class="brain-plate">市场风口</div>
        <div
          class="flex-row"
          style="padding:20px;justify-content: space-between;"
        >
          <div>
            <div id="incomeChart" style="width:320px;height:250px"></div>
            <p class="summary">
              检验检测市场空间大，增速较为稳定。2021年我国检验检测机构实现营业收入<span>4090.22亿元</span>，同比增长<span>14.1%</span>，2015-2021年CAGR为
              14.7%，增速较为平稳。
            </p>
          </div>
          <div>
            <div id="organChart" style="width:320px;height:250px"></div>
            <p class="summary">
              检验检测行业持续扩容，截至2021年底，我国从事各类检验检测的机构数量达到51949家，同比增长<span>6.2%</span>，相比2015年的31122家增加了<span>20827</span>家，2015-2021年期间年均复合增长率为8.9%。
            </p>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">政策支持</div>
        <div class="policy-content">
          <div class="policy-item flex-row" v-for="(i, index) in policyList">
            &nbsp;{{ index + 1 }}&emsp;<span class="policy-name">{{
              i.name
            }}</span
            >&emsp;&emsp;{{ i.date }}&emsp;{{ i.code }}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '工业互联网产业集群'">
      <div class="plate">
        <div class="brain-plate">市场风口</div>
        <div
          class="flex-row"
          style="padding:20px;justify-content: space-between;"
        >
          <div id="scaleChart" style="width:340px;height:350px"></div>
          <p class="summary" style="font-size:16px">
            2021年，我国工业互联网直接产业增加值<span>规模为1.17万亿元</span>，名义增速16.07%，预计2022年将达到1.30万亿元，名义增速达10.95%。<br /><br />根据Gartner技术成熟曲线，工业互联网相关信息技术目前正逐渐抵达生产力成熟期，产业发展已拨开过热的迷雾，目前处于稳健增长阶段。<br /><br />2021年，工业互联网渗透产业增加值规模为2.93万亿元，名义增速为13.94%。<br /><br />预计2022年，渗透产业增加值规模将达到<span>3.16万亿元</span>，占总增加值的比例达到<span>71%</span>，名义增速达到<span>7.77%</span>。
          </p>
        </div>
      </div>
      <div class="plate">
        <div class="brain-plate">政策支持</div>
        <div class="policy-content">
          <div class="policy-item flex-row" v-for="(i, index) in policyList">
            &nbsp;{{ index + 1 }}&emsp;<span class="policy-name">{{
              i.name
            }}</span
            >&emsp;&emsp;{{ i.date }}&emsp;{{ i.code }}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '智能驾驶产业集群'">
      <div class="plate">
        <div class="brain-plate">市场风口</div>
        <div
          class="flex-row"
          style="padding:20px;justify-content: space-between;"
        >
          <div>
            <div id="infiltrateChart" style="width:320px;height:250px"></div>
          </div>
          <div>
            <div id="salesChart" style="width:320px;height:250px"></div>
          </div>
        </div>
        <p class="summary" style="width:94%;font-size:16px;margin:0 20px;">
          2021年我国乘用车市场<span>销量为2148万辆</span>，其中L2级别汽车销量为365.6万辆，渗透率为18%。预计到2025年我国L2级乘用车渗透率有望达到50%，销量达到1305.5万辆，L3级渗透率为维持在较低的水平，预计2025年L3级乘用车渗透率为4%。
        </p>
      </div>
      <div class="plate">
        <div class="brain-plate">政策支持</div>
        <div class="policy-content">
          <div class="policy-item flex-row" v-for="(i, index) in policyList">
            &nbsp;{{ index + 1 }}&emsp;<span class="policy-name">{{
              i.name
            }}</span
            >&emsp;&emsp;{{ i.date }}&emsp;{{ i.code }}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '视音频进出口产业集群'">
      <div class="plate">
        <div class="brain-plate">市场风口</div>
        <div class="flex-row" style="padding:20px;justify-content: center;">
          <div>
            <div id="marketChart" style="width:380px;height:250px"></div>
          </div>
        </div>
        <p class="summary" style="width:94%;font-size:16px;margin:0 20px;">
          近年来，随着中国可支配收入的持续上升，影视娱乐对人们的生活日益重要。2019年中国影视娱乐行业市场规模达到<span>2131亿元</span>左右。其中，<span>电影市场的份额为38.6%</span>;<span>连续剧市场的份额为61.4%</span>。未来，随着人们历年的提升以及新技术的应用，影视娱乐行业将会持续发展。
        </p>
      </div>
      <div class="plate">
        <div class="brain-plate">政策支持</div>
        <div class="policy-content">
          <div class="policy-item flex-row" v-for="(i, index) in policyList">
            &nbsp;{{ index + 1 }}&emsp;<span class="policy-name">{{
              i.name
            }}</span
            >&emsp;&emsp;{{ i.date }}&emsp;{{ i.code }}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '军民融合产业集群'">
      <div class="plate">
        <div class="brain-plate">市场风口</div>
        <div class="flex-row" style="padding:20px;justify-content: center;">
          <div>
            <div id="marketChart2" style="width:380px;height:250px"></div>
          </div>
        </div>
        <p class="summary" style="width:94%;font-size:16px;margin:0 20px;">
          当前，我国军民融合市场正处在高速成长期，数据显示，2018年我国军民融合总产值达<span>3.41万亿元</span>，较2.84万亿元增长<span>20.07%</span>。2019年我国军民融合总产值达3.98万亿元，同比增长16.72%。
        </p>
      </div>
      <div class="plate">
        <div class="brain-plate">政策支持</div>
        <div class="policy-content">
          <div class="policy-item flex-row" v-for="(i, index) in policyList">
            &nbsp;{{ index + 1 }}&emsp;<span class="policy-name">{{
              i.name
            }}</span
            >&emsp;&emsp;{{ i.date }}&emsp;{{ i.code }}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="active == '互联网+新经济产业集群'">
      <div class="plate">
        <div class="brain-plate">市场风口</div>
        <div class="flex-row" style="padding:20px;justify-content: center;">
          <div>
            <div id="marketChart3" style="width:380px;height:230px"></div>
          </div>
        </div>
        <p class="summary" style="width:94%;font-size:16px;margin:0 20px;">
            根据中国信息通信研究院发布的《全球数字经济白皮书——疫情冲击下的复苏新曙光》显示，2020年，测算的47个国家数字经济增加值规模达到<span>32.6万亿美元</span>，同比名义增长3.0%，占GDP比重为43.7%。随着云计算、人工智能、大数据、物联网等新技术的蓬勃兴起，全球数字经济进入高速发展阶段。预测2021年全球数字经济规模为<span>33.9万亿美元</span>。
        </p>
      </div>
      <div class="plate">
        <div class="brain-plate">政策支持</div>
        <div class="policy-content">
          <div class="policy-item flex-row" v-for="(i, index) in policyList">
            &nbsp;{{ index + 1 }}&emsp;<span class="policy-name">{{
              i.name
            }}</span
            >&emsp;&emsp;{{ i.date }}&emsp;{{ i.code }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./brain.css";
export default {
  data() {
    return {
      active: "检验检测认证产业集群",
      upstream1: ["试剂", "设备", "实验室设计", "技术标准", "管理系统"],
      midstream1: [
        "综合",
        "认证",
        "机动车检测",
        "环境检测",
        "建筑材料检测",
        "食品检测",
        "建筑工程检测",
        "新能源汽车检测",
        "轨道交通检测",
        "消费品检测",
        "生物检验检测"
      ],
      downstream1: [
        "农产品",
        "环境",
        "建筑工程",
        "高端设备",
        "新材料",
        "轨道交通",
        "消费品",
        "互联网",
        "新能源汽车",
        "汽车零部件"
      ],

      upstream2: [
        "智能设备",
        "工业传感器",
        "标伤解析",
        "工业自动化与边缘计算 "
      ],
      midstream2: ["大数据分析", "工业互联网安全", "工业软件"],
      downstream2: [
        "农林牧渔业",
        "采矿业",
        "制造业",
        "建筑业",
        "金融业",
        "房地产业",
        "教育业"
      ],

      upstream3: ["光学镜片", "滤光片", "保护膜", "晶圆"],
      midstream3: ["镜头组", "胶合材料", "CMOS", "DSP"],
      downstream3: ["模组供应商", "系统集成商"],

      upstream4: ["电影制作", "音频制作", "电视剧制作"],
      midstream4: ["宣传发行", "内容出品", "影院放映", "视频网站"],
      downstream4: ["衍生品开发", "影音主题城", "进出口贸易"],

      upstream5: ["基础器件", "基础软件", "原材料"],
      midstream5: ["系统集成", "终端集成", "平台建设", "设备制造"],
      downstream5: ["民航", "汽车", "轨道交通", "通信", "船舶", "电子电器"],

      upstream6: ["传感器", "MCU芯片", "控制器","无线模组","数控系统"],
      midstream6: ["物联网", "区块链", "虚拟技术", "人工智能","5G","云计算"],
      downstream6: ["元宇宙", "电商消费", "文化娱乐", "社交", "生活服务"],

      policyList: [
        {
          name:
            "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaafdsafasfdsa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        },
        {
          name: "市场监管总局关于印发 《市场监督管理综合行政执法aaaaaaa",
          date: "2022年11月17日",
          code: "国市监稽发〔2022〕99号"
        }
      ]
    };
  },
  watch: {
    active(n, o) {
      switch (n) {
        case "检验检测认证产业集群":
          this.$nextTick(() => {
            this.incomeChart();
            this.organChart();
            this.techChart();
          });
          break;
        case "工业互联网产业集群":
          this.$nextTick(() => {
            this.techChart2();
            this.scaleChart();
          });
        case "智能驾驶产业集群":
          this.$nextTick(() => {
            this.techChart3();
            this.infiltrateChart();
            this.salesChart();
          });
          break;
        case "视音频进出口产业集群":
          this.$nextTick(() => {
            this.importChart();
            this.exportChart();
            this.marketChart();
          });
          break;
        case "军民融合产业集群":
          this.$nextTick(() => {
            this.techChart4();
            this.marketChart2();
          });
          break;
          case "互联网+新经济产业集群":
          this.$nextTick(() => {
            this.techChart5();
            this.marketChart3();
          });
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    this.incomeChart();
    this.organChart();
    this.techChart();
  },
  methods: {
    // 市场风口-检验检测
    incomeChart() {
      let echarts = this.Echarts.init(document.getElementById("incomeChart"));
      let option = {
        legend: {
          data: ["营业收入（亿元）", "增速（%）"],
          textStyle: {
            color: "#fff"
          },
          top: "0%"
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "15%",
          containLabel: true
        },

        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "12"
              }
            }
          },
          {
            splitLine: { show: false },
            max: 20,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              formatter: "{value}%",
              textStyle: {
                color: "#C1DFFF",
                fontSize: "12"
              }
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "10"
              }
            },
            data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            xAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0.3)",
                borderWidth: 0
              }
            },
            barWidth: 20,
            data: [5000, 5000, 5000, 5000, 5000, 5000, 5000]
          },

          {
            name: "营业收入（亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            barWidth: 10,
            data: [1800, 2065, 2377, 2811, 3225, 3586, 4090]
          },
          {
            name: "增速（%）",
            type: "line",
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 5,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FFBD2C"
              }
            },
            data: ["", 14, 15, 17, 14, 12, 14]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 机构数量
    organChart() {
      let echarts = this.Echarts.init(document.getElementById("organChart"));
      let option = {
        legend: {
          data: ["机构数量（家）", "增速（%）"],
          textStyle: {
            color: "#fff"
          },
          top: "0%"
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "15%",
          containLabel: true
        },

        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "12"
              }
            }
          },
          {
            splitLine: { show: false },
            max: 14,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              formatter: "{value}%",
              textStyle: {
                color: "#C1DFFF",
                fontSize: "12"
              }
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "10"
              }
            },
            data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"]
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            xAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0.3)",
                borderWidth: 0
              }
            },
            barWidth: 20,
            data: [60000, 60000, 60000, 60000, 60000, 60000, 60000]
          },

          {
            name: "机构数量（家）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            barWidth: 10,
            data: [31122, 33235, 36327, 39472, 44007, 48919, 51949]
          },
          {
            name: "增速（%）",
            type: "line",
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 5,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FFBD2C"
              }
            },
            data: ["", 8, 9, 8.5, 10, 9.5, 7.5]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 技术动向-检验检测
    techChart() {
      let data = [
        {
          name: "Flora",
          children: [
            {
              name: "Black Tea",
              value: 1
            },
            {
              name: "Floral",
              value: 1
            }
          ]
        },
        {
          name: "Sour/\nFermented",
          children: [
            {
              name: "Sour",
              value: 1
            },
            {
              name: "Alcohol/\nFremented",
              value: 1
            }
          ]
        },

        {
          name: "Sweet",
          children: [
            {
              name: "Brown Sugar"
            },
            {
              name: "Vanilla",
              value: 1
            },
            {
              name: "Vanillin",
              value: 1
            },
            {
              name: "Overall Sweet",
              value: 1
            },
            {
              name: "Sweet Aromatics",
              value: 1
            }
          ]
        }
      ];
      let echarts = this.Echarts.init(document.getElementById("techChart"));
      let option = {
        color: [
          "#4d59e6",
          "#FF66CC",
          "#FFCC33",
          "#4eb2d4",
          "#0472d9",
          "#5c63c5",
          "#C7E907",
          "#3c13a8",
          "#42947f"
        ],
        series: {
          type: "sunburst",
          data: data,
          label: {
            color: "#000",
            fontSize: 12
          },
          radius: [0, "100%"],
          sort: undefined,
          emphasis: {
            focus: "ancestor"
          },
          levels: [
            {},
            {
              r0: "30%",
              r: "60%",
              itemStyle: {
                borderWidth: 2
              }
            },
            {
              r0: "60%",
              r: "90%"
            }
          ]
        }
      };
      echarts.setOption(option);
    },
    // 技术动向-工业互联网
    techChart2() {
      let data = [
        {
          name: "Flora",
          children: [
            {
              name: "Black Tea",
              value: 1
            },
            {
              name: "Floral",
              value: 1
            }
          ]
        },
        {
          name: "Sour/\nFermented",
          children: [
            {
              name: "Sour",
              value: 1
            },
            {
              name: "Alcohol/\nFremented",
              value: 1
            }
          ]
        },

        {
          name: "Sweet",
          children: [
            {
              name: "Brown Sugar"
            },
            {
              name: "Vanilla",
              value: 1
            },
            {
              name: "Vanillin",
              value: 1
            },
            {
              name: "Overall Sweet",
              value: 1
            },
            {
              name: "Sweet Aromatics",
              value: 1
            }
          ]
        }
      ];
      let echarts = this.Echarts.init(document.getElementById("techChart2"));
      let option = {
        color: [
          "#4d59e6",
          "#FF66CC",
          "#FFCC33",
          "#4eb2d4",
          "#0472d9",
          "#5c63c5",
          "#C7E907",
          "#3c13a8",
          "#42947f"
        ],
        series: {
          type: "sunburst",
          data: data,
          label: {
            color: "#000",
            fontSize: 12
          },
          radius: [0, "100%"],
          sort: undefined,
          emphasis: {
            focus: "ancestor"
          },
          levels: [
            {},
            {
              r0: "30%",
              r: "60%",
              itemStyle: {
                borderWidth: 2
              }
            },
            {
              r0: "60%",
              r: "90%"
            }
          ]
        }
      };
      echarts.setOption(option);
    },
    // 市场风口-工业互联网
    scaleChart() {
      let echarts = this.Echarts.init(document.getElementById("scaleChart"));
      let option = {
        grid: {
          left: "2%",
          right: "4%",
          bottom: "14%",
          top: "5%",
          containLabel: true
        },
        legend: {
          type: "scroll",
          data: [
            "上中游产业增加值规模（万亿元）",
            "下游产业增加值规模（万亿元）",
            "上中游产业增加值规模名义增速（%）",
            "下游产业增加值规模名义增速（%）"
          ],
          left: "7%",
          bottom: "5%",
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          type: "category",
          data: ["2018", "2019", "2020", "2021", "2022"],
          axisLine: {
            lineStyle: {
              color: "#16A1F7"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#C1DFFF"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            max: 10,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          {
            type: "value",
            name: "",
            min: -10,
            max: 25,
            position: "right",
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "上中游产业增加值规模（万亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,0)"
                  }
                ])
              }
            },
            data: [0.77, 0.87, 1.01, 1.17, 1.3]
          },
          {
            name: "下游产业增加值规模（万亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,211,255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(83,194,217,0.3)"
                  }
                ])
              }
            },
            data: [2.02, 2.32, 2.57, 2.93, 3.16]
          },
          {
            name: "上中游产业增加值规模名义增速（%）",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            symbol: "emptyCircle", //标记的图形为实心圆
            symbolSize: 5, //标记的大小
            label: {
              show: true,
              formatter: "{c}%"
            },
            itemStyle: {
              normal: {
                color: "#FFBD2C"
              }
            },
            lineStyle: {
              color: "#ffa43a"
            },
            data: [15.3, 12.58, 16.14, 16.07, 10.95]
          },
          {
            name: "下游产业增加值规模名义增速（%）",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            symbol: "emptyCircle", //标记的图形为实心圆
            symbolSize: 5, //标记的大小
            label: {
              show: true,
              formatter: "{c}%"
            },
            itemStyle: {
              normal: {
                color: "#FFBD2C"
              }
            },
            lineStyle: {
              type: "dashed",
              color: "#ffa43a"
            },

            data: [19.58, 15.14, 10.76, 13.94, 7.77]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 市场风口-智能驾驶-渗透率
    infiltrateChart() {
      let echarts = this.Echarts.init(
        document.getElementById("infiltrateChart")
      );
      let option = {
        title: {
          text: "中国自动驾驶汽车渗透率",
          x: "center",
          top: "0%",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        legend: {
          selectedMode: false, //取消图例上的点击事件
          bottom: "0%",
          data: ["L0及以下", "L1", "L2", "L3"],
          textStyle: {
            fontSize: "12",
            color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 12
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          top: "12%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["2020", "2021", "2022", "2023", "2024", "2025"],
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#16A1F7"
              }
            },
            axisTick: {
              show: false //隐藏X轴刻度
            },
            axisLabel: {
              textStyle: {
                fontSize: "12",
                color: "#C1DFFF"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            }, //设置横线样式
            axisLabel: {
              show: true,
              color: "#C1DFFF",
              formatter: "{value}%"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "L0及以下",
            type: "bar",
            stack: "渗透率",
            data: [70, 60, 50, 40, 30, 20],
            barWidth: 20,
            itemStyle: {
              color: "#17A5FE"
            }
          },
          {
            name: "L1",
            type: "bar",
            stack: "渗透率",
            data: [20, 20, 25, 25, 25, 25],
            itemStyle: {
              color: "#5453FF"
            }
          },
          {
            name: "L2",
            type: "bar",
            stack: "渗透率",
            data: [10, 20, 25, 35, 43, 51],
            itemStyle: {
              color: "#C7962A"
            }
          },
          {
            name: "L3",
            type: "bar",
            stack: "渗透率",
            data: [0, 0, 0, 0, 2, 4],
            itemStyle: {
              color: "#2AC7B0"
            }
          }
        ]
      };
      echarts.setOption(option);
    },
    // 市场风口-智能驾驶-销量
    salesChart() {
      let echarts = this.Echarts.init(document.getElementById("salesChart"));
      let option = {
        title: {
          text: "中国自动驾驶汽车销量（万辆）",
          x: "center",
          top: "0%",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          top: "12%",
          containLabel: true
        },
        legend: {
          data: ["L0及以下", "L1", "L2", "L3"],
          bottom: "0%",
          textStyle: {
            color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 12
        },
        xAxis: {
          type: "category",
          data: ["2020", "2021", "2022", "2023", "2024", "2025"],
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: "#16A1F7"
            }
          },
          axisTick: {
            show: false //隐藏X轴刻度
          },
          axisLabel: {
            textStyle: {
              fontSize: "12",
              color: "#C1DFFF"
            }
          }
        },

        yAxis: {
          type: "value",
          splitLine: {
            show: false
          }, //设置横线样式
          max: 1500,
          axisLabel: {
            show: true,
            color: "#C1DFFF"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },

        series: [
          {
            name: "L0及以下",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              color: "#1491E1"
            },
            data: [1400, 1300, 1200, 1000, 900, 400]
          },
          {
            name: "L1",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              color: "#474BE1"
            },
            data: [500, 400, 500, 600, 800, 900]
          },
          {
            name: "L2",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              color: "#C7962A"
            },
            data: [250, 400, 550, 750, 1000, 1300]
          },
          {
            name: "L3",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              color: "#2AC7B0"
            },
            data: [0, 0, 0, 500, 500, 400]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 技术动向-智能驾驶
    techChart3() {
      let data = [
        {
          name: "Flora",
          children: [
            {
              name: "Black Tea",
              value: 1
            },
            {
              name: "Floral",
              value: 1
            }
          ]
        },
        {
          name: "Sour/\nFermented",
          children: [
            {
              name: "Sour",
              value: 1
            },
            {
              name: "Alcohol/\nFremented",
              value: 1
            }
          ]
        },

        {
          name: "Sweet",
          children: [
            {
              name: "Brown Sugar"
            },
            {
              name: "Vanilla",
              value: 1
            },
            {
              name: "Vanillin",
              value: 1
            },
            {
              name: "Overall Sweet",
              value: 1
            },
            {
              name: "Sweet Aromatics",
              value: 1
            }
          ]
        }
      ];
      let echarts = this.Echarts.init(document.getElementById("techChart3"));
      let option = {
        color: [
          "#4d59e6",
          "#FF66CC",
          "#FFCC33",
          "#4eb2d4",
          "#0472d9",
          "#5c63c5",
          "#C7E907",
          "#3c13a8",
          "#42947f"
        ],
        series: {
          type: "sunburst",
          data: data,
          label: {
            color: "#000",
            fontSize: 12
          },
          radius: [0, "100%"],
          sort: undefined,
          emphasis: {
            focus: "ancestor"
          },
          levels: [
            {},
            {
              r0: "30%",
              r: "60%",
              itemStyle: {
                borderWidth: 2
              }
            },
            {
              r0: "60%",
              r: "90%"
            }
          ]
        }
      };
      echarts.setOption(option);
    },
    // 进口情况
    importChart() {
      let echarts = this.Echarts.init(document.getElementById("importChart"));
      let option = {
        legend: {
          data: ["电视剧进口额（亿元）", "电视剧进口数量（部）"],
          textStyle: {
            color: "#fff"
          },
          top: "5%"
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "20%",
          containLabel: true
        },

        yAxis: [
          {
            type: "value",
            max: 18,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "12"
              }
            }
          },
          {
            splitLine: { show: false },
            max: 700,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#C1DFFF",
                fontSize: "12"
              }
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "10"
              }
            },
            data: [
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: [
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          }
        ],
        series: [
          {
            name: "电视剧进口额（亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            barWidth: 8,
            data: [2.43, 2.69, 2.14, 3.46, 3.96, 2.45, 16.98, 2.95]
          },
          {
            name: "电视剧进口数量（部）",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FFBD2C"
              }
            },
            data: [100, 100, 150, 130, 100, 200, 600, 150]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 出口情况
    exportChart() {
      let echarts = this.Echarts.init(document.getElementById("exportChart"));
      let option = {
        legend: {
          data: ["电视剧出口额（亿元）", "电视剧出口数量（部）"],
          textStyle: {
            color: "#fff"
          },
          top: "5%"
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "20%",
          containLabel: true
        },

        yAxis: [
          {
            type: "value",
            max: 4.0,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "12"
              }
            }
          },
          {
            splitLine: { show: false },
            max: 450,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#C1DFFF",
                fontSize: "12"
              }
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "10"
              }
            },
            data: [
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: [
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          }
        ],
        series: [
          {
            name: "电视剧出口额（亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            barWidth: 8,
            data: [0.75, 0.36, 0.75, 1.46, 1.5, 0.92, 2.06, 3.77]
          },
          {
            name: "电视剧出口数量（部）",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#FFBD2C"
              }
            },
            data: [120, 100, 270, 290, 300, 220, 270, 340]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 市场风口-进出口
    marketChart() {
      let echarts = this.Echarts.init(document.getElementById("marketChart"));
      let option = {
        title: {
          text: "2014-2019年中国影视娱乐行业市场规模（单位：亿元）",
          x: "center",
          top: "0%",
          left: "2%",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "20%",
          containLabel: true
        },
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "14"
              }
            },
            data: ["2014", "2015", "2016", "2017", "2018", "2019"]
          }
        ],
        series: [
          {
            name: "2014-2019年中国影视娱乐行业市场规模（单位：亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            data: [951, 1252, 1382, 1631, 1849, 2131]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 市场风口-军民融合
    marketChart2() {
      let echarts = this.Echarts.init(document.getElementById("marketChart2"));
      let option = {
        title: {
          text: "2013-2019年中国军民融合行业市场规模（万亿元）",
          x: "center",
          top: "0%",
          left: "2%",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "20%",
          containLabel: true
        },
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "14"
              }
            },
            data: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]
          }
        ],
        series: [
          {
            name: "2013-2019年中国军民融合行业市场规模（万亿元）",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "white"
            },
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            data: [1.25, 1.66, 2.02, 2.35, 2.84, 3.41, 3.98]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 技术动向-军民融合
    techChart4() {
      let data = [
        {
          name: "Flora",
          children: [
            {
              name: "Black Tea",
              value: 1
            },
            {
              name: "Floral",
              value: 1
            }
          ]
        },
        {
          name: "Sour/\nFermented",
          children: [
            {
              name: "Sour",
              value: 1
            },
            {
              name: "Alcohol/\nFremented",
              value: 1
            }
          ]
        },

        {
          name: "Sweet",
          children: [
            {
              name: "Brown Sugar"
            },
            {
              name: "Vanilla",
              value: 1
            },
            {
              name: "Vanillin",
              value: 1
            },
            {
              name: "Overall Sweet",
              value: 1
            },
            {
              name: "Sweet Aromatics",
              value: 1
            }
          ]
        }
      ];
      let echarts = this.Echarts.init(document.getElementById("techChart4"));
      let option = {
        color: [
          "#4d59e6",
          "#FF66CC",
          "#FFCC33",
          "#4eb2d4",
          "#0472d9",
          "#5c63c5",
          "#C7E907",
          "#3c13a8",
          "#42947f"
        ],
        series: {
          type: "sunburst",
          data: data,
          label: {
            color: "#000",
            fontSize: 12
          },
          radius: [0, "100%"],
          sort: undefined,
          emphasis: {
            focus: "ancestor"
          },
          levels: [
            {},
            {
              r0: "30%",
              r: "60%",
              itemStyle: {
                borderWidth: 2
              }
            },
            {
              r0: "60%",
              r: "90%"
            }
          ]
        }
      };
      echarts.setOption(option);
    },
    // 市场风口-互联网+新经济
    marketChart3() {
      let echarts = this.Echarts.init(document.getElementById("marketChart3"));
      let option = {
        title: {
          text: "2018-2021年全球数字经济规模（单位：亿美元）",
          x: "center",
          top: "0%",
          left: "2%",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "5%",
          top: "20%",
          containLabel: true
        },
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#C1DFFF",
                fontWeight: "normal",
                fontSize: "14"
              }
            },
            data: ["2018", "2019","2020","2021"]
          }
        ],
        series: [
          {
            name: "2018-2021年全球数字经济规模（单位：亿美元）",
            type: "bar",
            label: {
              show: false,
            },
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)"
                  }
                ])
              }
            },
            data: [25, 30, 32.6, 33.9]
          }
        ]
      };
      echarts.setOption(option);
    },
    // 技术动向-互联网+新经济
    techChart5() {
      let data = [
        {
          name: "Flora",
          children: [
            {
              name: "Black Tea",
              value: 1
            },
            {
              name: "Floral",
              value: 1
            }
          ]
        },
        {
          name: "Sour/\nFermented",
          children: [
            {
              name: "Sour",
              value: 1
            },
            {
              name: "Alcohol/\nFremented",
              value: 1
            }
          ]
        },

        {
          name: "Sweet",
          children: [
            {
              name: "Brown Sugar"
            },
            {
              name: "Vanilla",
              value: 1
            },
            {
              name: "Vanillin",
              value: 1
            },
            {
              name: "Overall Sweet",
              value: 1
            },
            {
              name: "Sweet Aromatics",
              value: 1
            }
          ]
        }
      ];
      let echarts = this.Echarts.init(document.getElementById("techChart5"));
      let option = {
        color: [
          "#4d59e6",
          "#FF66CC",
          "#FFCC33",
          "#4eb2d4",
          "#0472d9",
          "#5c63c5",
          "#C7E907",
          "#3c13a8",
          "#42947f"
        ],
        series: {
          type: "sunburst",
          data: data,
          label: {
            color: "#000",
            fontSize: 12
          },
          radius: [0, "100%"],
          sort: undefined,
          emphasis: {
            focus: "ancestor"
          },
          levels: [
            {},
            {
              r0: "30%",
              r: "60%",
              itemStyle: {
                borderWidth: 2
              }
            },
            {
              r0: "60%",
              r: "90%"
            }
          ]
        }
      };
      echarts.setOption(option);
    },
  }
};
</script>
