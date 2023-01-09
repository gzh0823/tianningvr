<template>
    <div class="heimudan">
      <div class="space-header flex-row">
        <p>黑牡丹科技园</p>
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
      <div class="left-part1">
        <div class="intro-title">产业布局</div>
        <div class="layout">
          <p>上游基础层</p>
          <span
            @click="active = '试剂耗材'"
            :style="active == '试剂耗材' ? 'background:rgba(255,189,44,0.8)' : ''"
            >试剂耗材</span
          ><span
            @click="active = '仪器设备'"
            :style="active == '仪器设备' ? 'background:rgba(255,189,44,0.8)' : ''"
            >仪器设备</span
          >
          <p>中游核心层</p>
          <span
            @click="active = '综合检验检测'"
            :style="
              active == '综合检验检测' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >综合检验检测</span
          ><span
            @click="active = '食品检验检测'"
            :style="
              active == '食品检验检测' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >食品检验检测</span
          ><span
            @click="active = '电子设备检验检测'"
            :style="
              active == '电子设备检验检测'
                ? 'background:rgba(255,189,44,0.8)'
                : ''
            "
            >电子设备检验检测</span
          ><span
            @click="active = '生物检验检测'"
            :style="
              active == '生物检验检测' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >生物检验检测</span
          ><span
            @click="active = '环境检验检测'"
            :style="
              active == '环境检验检测' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >环境检验检测</span
          ><span
            @click="active = '纺织检验检测'"
            :style="
              active == '纺织检验检测' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >纺织检验检测</span
          ><span
            @click="active = '新材料检验检测'"
            :style="
              active == '新材料检验检测' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >新材料检验检测</span
          >
          <p>下游服务层</p>
          <span
            @click="active = '半导体制造'"
            :style="
              active == '半导体制造' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >半导体制造</span
          ><span
            @click="active = '环境保护工程'"
            :style="
              active == '环境保护工程' ? 'background:rgba(255,189,44,0.8)' : ''
            "
            >环境保护工程</span
          ><span
            @click="active = '新材料'"
            :style="active == '新材料' ? 'background:rgba(255,189,44,0.8)' : ''"
            >新材料</span
          ><span
            @click="active = '生物医药'"
            :style="active == '生物医药' ? 'background:rgba(255,189,44,0.8)' : ''"
            >生物医药</span
          ><span
            @click="active = '家用电器'"
            :style="active == '家用电器' ? 'background:rgba(255,189,44,0.8)' : ''"
            >家用电器</span
          ><span
            @click="active = '信息科技'"
            :style="active == '信息科技' ? 'background:rgba(255,189,44,0.8)' : ''"
            >信息科技</span
          >
        </div>
      </div>
      <div class="left-part2">
        <div class="intro-title">园区荣誉</div>
        <div class="layout flex-row">
          <div class="honor flex-row">
            江苏省服务外包示范区
          </div>
          <div class="honor flex-row">
            江苏省工业旅游区
          </div>
          <div class="honor flex-row">
            常州市服务外包公共服务示范平台
          </div>
          <div class="honor flex-row">
            常州市科技企业加速器
          </div>
          <div class="honor flex-row">
            常州市创业孵化基地
          </div>
          <div class="honor flex-row">
            江苏省小型微型企业创业创新基地
          </div>
        </div>
      </div>
      <div class="right-part1">
        <div class="intro-title">园区建设</div>
        <div class="intro-content flex-row">
          <div class="building-part flex-col">
            <img src="@/assets/cluster/building-part1.png" alt="" />
            <p>共享实验室平台</p>
          </div>
          <div class="building-part flex-col">
            <img src="@/assets/cluster/building-part2.png" alt="" />
            <p>智慧管理平台</p>
          </div>
          <div class="building-part flex-col">
            <img src="@/assets/cluster/building-part3.png" alt="" />
            <p>综合服务平台</p>
          </div>
          <div class="building-part flex-col">
            <img src="@/assets/cluster/building-part4.png" alt="" />
            <p>检验检测大数据云平台</p>
          </div>
          <div class="building-part flex-col">
            <img src="@/assets/cluster/building-part3.png" alt="" />
            <p>信息安全平台</p>
          </div>
          <div class="building-part flex-col">
            <img src="@/assets/cluster/building-part4.png" alt="" />
            <p>科技金融平台</p>
          </div>
        </div>
      </div>

      <div class="company-bg flex-row" v-show="companyDialog">
        <div class="company-dialog">
          <div class="company-title flex-row">
            <span>爱回收</span
            ><img
              @click="companyDialog = false"
              src="@/assets/index/close.png"
              alt=""
            />
          </div>
          <div class="company-content">
            <div class="flex-row">
              <img
                src="@/assets/cluster/ahs.png"
                alt=""
                style="margin-right:20px;"
              />
              <div
                class="flex-col"
                style="justify-content:space-between;flex:0 0 70%"
              >
                <p class="company-name">上海万物新生环保科技集团有限公司</p>
                <p class="flex-row" style="justify-content:space-between">
                  <span>法人：陈逸轲</span><span>注册资本：5000万</span
                  ><span>实缴资本：5000万</span><span>成立日期：2010-05-21</span>
                </p>
                <p>注册地址：上海市杨浦区淞沪路433号1101-1103室</p>
              </div>
            </div>
            <p style="margin-top:20px;line-height:24px">
              万物新生集团是国内最大的二手3C电子产品交易平台，旗下四大业务线，涵盖电子产品回收及环保处置平台"爱回收"，全球二手3C产品线上交易平台"拍机堂"，二手产品销售平台"拍拍"以及海外业务AHS
              DEVICE。爱回收是一个电子产品竞价回收平台，采用回收商竞价模式，并与京东、1号店、沃尔玛等品牌合作，为用户提供上门回收服务和一站式手机升级置换服务。
            </p>
                <div id="companyRelation" style="margin:20px auto"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import "./heimudan.css";
  export default {
    name: "heimudan",
    data() {
      return {
        active: "",
        companyDialog: true,
        date: `${new Date().getFullYear()}.${new Date().getMonth() +
          1}.${new Date().getDate()}`,
        weekDay: new Date().getDay(),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        timer: null,
        companyName:'上海万物新生环保科技集团有限公司',
        summary: {
          chainRel: [
            {
              title: "传统金融",
              version: 1,
              status: true,
              child: [{ title: "产权交易所", version: 1 }]
            },
            {
              title: "传统金融",
              version: 1,
              status: true,
              child: [{ title: "产权交易所", version: 1 }]
            },
            {
              title: "城市生活",
              version: 1,
              status: true,
              child: [{ title: "公益服务", version: 1 }]
            },
            {
              title: "企业服务",
              version: 1,
              status: true,
              child: [{ title: "事业单位后勤服务", version: 1 }]
            }
          ]
        }
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
          this.companyRelation()
    },
    methods: {
      // 企业图
      companyRelation() {
        let chart = this.Echarts.init(document.getElementById("companyRelation"));
        let children = JSON.parse(
          JSON.stringify(this.summary.chainRel)
            .replace(/child/g, "children")
            .replace(/title/g, "name")
        );
        let number = 0; //二级行业数量（判断图高度）
        children.map((i, index) => {
          if (!i.name) {
            children.splice(index, 1);
          }
        });
        children.map(i => {
          i.post = 1;
          i.children.map(j => {
            number++;
            j.status = i.status;
            j.level = 2;
          });
        });
        let data = [
          {
            name:
              this.companyName.length > 12
                ? this.companyName.slice(0, this.companyName.length / 2) +
                  "\n" +
                  this.companyName.slice(this.companyName.length / 2)
                : this.companyName,
            symbolSize: 210,
            symbol:
              "image://" + require("@/assets/cluster/company-bg.png"),
            label: {
              show: true,
              position: "inside",
              borderWidth: 0,
              textStyle: {
                color: "white",
                fontSize: 18,
                padding: 20
              },
              backgroundColor: "transparent",
            },
            children: children
          }
        ];
        let option = {};
        if (data[0].children.length <= 10) {
          option.series = [
            {
              type: "tree",
              left: "20%",
              width: "60%",
              right: "20%",
              top: 0,
              bottom: 0,
              orient: "LR",
              symbolSize: [80, 20],
              symbol: "roundRect",
              edgeShape: "polyline",
              initialTreeDepth: 2,
              itemStyle: {
                color: "transparent",
                borderColor: "transparent"
              },
              expandAndCollapse: false,
              animationDuration: 550,
              animationDurationUpdate: 750,
              //线条的颜色
              lineStyle: {
                normal: {
                  color: "#fff",
                  width: 1
                }
              },
              label: {
                show: true,
                position: "inside",
                normal: {
                  fontSize: 16,
                  lineHeight:20,
                  backgroundColor: "#193348",
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 15,
                  color: "#fff",
                  padding: [5, 20]
                }
              },
              leaves: {
                label: {
                  position: "inside",
                  color: "#fff",
                  backgroundColor: "#193348"
                }
              },
              data: data
            }
          ];
        } else {
          let childs = data[0].children,
            data1 = JSON.parse(JSON.stringify(data)),
            data2 = JSON.parse(JSON.stringify(data));
          data1[0].children = childs.slice(0, childs.length / 2);
          data2[0].children = childs.slice(childs.length / 2);
          data2[0].symbolSize = 0;
          data2[0].label.show = false;
          option.series = [
            {
              type: "tree",
              left: "50%",
              width: "40%",
              right: "10%",
              top: 140,
              bottom: 0,
              orient: "LR",
              symbolSize: [80, 20],
              symbol: "roundRect",
              edgeShape: "polyline",
              initialTreeDepth: 2,
              itemStyle: {
                color: "transparent",
                borderColor: "transparent"
              },
              expandAndCollapse: false,
              animationDuration: 550,
              animationDurationUpdate: 750,
              //线条的颜色
              lineStyle: {
                normal: {
                  color: "#42ACEA",
                  width: 1
                }
              },
              label: {
                show: true,
                position: "inside",
                normal: {
                  fontSize: 16,
                  lineHeight:20,
                  backgroundColor: "#193348",
                  borderColor: "#42ACEA",
                  borderWidth: 1,
                  borderRadius: 15,
                  color: "#42ACEA",
                  padding: [5, 20]
                }
              },
              leaves: {
                label: {
                  position: "inside",
                  color: "#42ACEA",
                  backgroundColor: "#193348",
                }
              },
              data: data1
            },
            {
              type: "tree",
              left: "10%",
              width: "40%",
              right: "45%",
              orient: "RL",
              bottom: 0,
              top: 0,
              symbolSize: [80, 20],
              symbol: "roundRect",
              edgeShape: "polyline",
              initialTreeDepth: 2,
              itemStyle: {
                color: "transparent",
                borderColor: "transparent"
              },
              expandAndCollapse: false,
              animationDuration: 550,
              animationDurationUpdate: 750,
              //线条的颜色
              lineStyle: {
                normal: {
                  color: "#42ACEA",
                  width: 1
                }
              },
              label: {
                show: true,
                position: "inside",
                normal: {
                  fontSize: 16,
                  backgroundColor: "#193348",
                  borderColor: "#42ACEA",
                  borderWidth: 1,
                  borderRadius: 15,
                  color: "#42ACEA",
                  padding: [5, 20]
                }
              },
              leaves: {
                label: {
                  position: "inside",
                  color: "#42ACEA",
                  backgroundColor: "#193348",
                }
              },
              data: data2
            }
          ];
        }
        chart.setOption(option);
        // chart.getDom().style.width = "75%";
        chart.getDom().style.height = 200 + number * 45 + "px";
        chart.resize();
      }
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  };
  </script>
  