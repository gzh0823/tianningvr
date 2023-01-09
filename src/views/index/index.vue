<template>
  <div class="index-bg flex-col">
    <Header />
    <div v-if="active=='园区首页'" class="flex-row index-content">
      <div class="index-part">
        <div class="index-title title1">经开区介绍</div>
        <p>
          江苏常州天宁经济开发区位于常州市的主城区东部，天宁区的核心区域，区位优越，交通便捷，是江苏省最具竞争力的省级开发区之一。随着东扩区域融合发展，天宁经济开发区区域面积将有原来的25平方公里扩增到50平方公里，人口预计3-5年内将增至30万人。
        </p>
        <div class="index-title title2">区位优势</div>
        <img
          @click="advantageDialog=true"
          style="margin: 20px 30px;cursor:pointer"
          src="@/assets/index/advantage-mini.png"
          alt=""
        />
        <div>
          <img
            style="margin-left: 30px; vertical-align: middle"
            src="@/assets/index/icon1.png"
            alt=""
          />&emsp;两小时都市圈&emsp;&emsp;<img
            style="vertical-align: middle"
            src="@/assets/index/icon2.png"
            alt=""
          />&nbsp;长三角几何中心
        </div>
        <br />
        <img
          style="margin-left: 30px; vertical-align: middle"
          src="@/assets/index/icon3.png"
          alt=""
        />&emsp;苏南交通枢纽
      </div>
      <div class="index-center">
        <img src="@/assets/index/index-map.png" alt="">
        <img style="position:absolute;top:50px;right:80px" src="@/assets/index/tooltip.png" alt="">
        <img style="position:absolute;top:280px;right:-50px" src="@/assets/index/label.png" alt="">
      </div>
      <div class="index-part">
        <div class="index-title title3">地区生产总值</div>
        <div id="GDPChart" style="width:400px;height:300px"></div>
        <div class="index-title title4">经济产业结构</div>
        <div id="industryChart" style="width:400px;height:300px"></div>
        <div class="industry-bg"></div>
      </div>
    </div>
    <Cluster v-if="active=='产业集群'"></Cluster>
    <Basic v-else-if="active=='基础配套'"></Basic>
    <Space v-else-if="active=='承载空间'"></Space>
    <Brain v-else-if="active=='产业大脑'"></Brain>
    <div class="index-bottom flex-row">
        <div @click="active='园区首页'" :style='active=="园区首页"?"background:url("+activeImg+")":""'>园区首页</div>
        <div @click="active='产业集群'" :style='active=="产业集群"?"background:url("+activeImg+")":""'>产业集群</div>
        <div @click="active='基础配套'" :style='active=="基础配套"?"background:url("+activeImg+")":""'>基础配套</div>
        <div @click="active='承载空间'" :style='active=="承载空间"?"background:url("+activeImg+")":""'>承载空间</div>
        <div @click="active='产业大脑'" :style='active=="产业大脑"?"background:url("+activeImg+")":""'>产业大脑</div>
    </div>
    <div class="advantage-bg flex-row" v-show="advantageDialog">
        <div class="advantage-dialog">
            <div class="advantage-title flex-row"><span>区位优势</span><img @click="advantageDialog=false" src="@/assets/index/close.png" alt=""> </div>
            <div style="text-align:center">
                <img src="@/assets/index/advantage-big.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import Cluster from "@/views/cluster";
import Basic from "@/views/basic";
import Space from "@/views/space";
import Brain from "@/views/brain";
import "./index.css";
export default {
  components: {
    Header,Cluster,Basic,Space,Brain
  },
  data(){
    return{
        activeImg:require('../../assets/index/label-bg-active.png'),
        advantageDialog:false,
        active:'园区首页'
    }
  },
  mounted(){
    this.GDPChart()
    this.industryChart()
  },
  watch:{
    active(n,o){
      if(n=='园区首页'){
          this.$nextTick(()=>{
            this.GDPChart()
            this.industryChart()
          })
      }
    }
  },
  methods: {
    GDPChart() {
      let echarts = this.Echarts.init(document.getElementById("GDPChart"));
      let option = {
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },

        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#363e83",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#363e83",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontWeight: "normal",
              fontSize: "12",
            },
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(22,161,247)",
              },
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#fff",
                fontWeight: "normal",
                fontSize: "12",
              },
            },
            data: ["2014", "2015", "2016", "2017", "2018", "2019","2020"],
          },
          {
            type: "category",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: ["2014", "2015", "2016", "2017", "2018", "2019","2020"],
          },
        ],
        series: [
          {
            type: "bar",
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0.3)",
                borderWidth: 0,
              },
            },
            barWidth: 24,
            data: [8000, 8000, 8000, 8000, 8000, 8000,8000],
          },

          {
            name: "生产总值",
            type: "bar",
            itemStyle: {
              normal: {
                color: new this.Echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(23,165,254,0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(23,165,254,1)",
                  },
                ]),
              },
            },
            zlevel: 2,
            barWidth: 10,
            data: [5000, 5200, 5800,6400, 6800, 7400, 7700],
          },
        ],
      };
      echarts.setOption(option);
    },
    industryChart(){
      var echarts = this.Echarts.init(document.getElementById('industryChart'));
        // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
        function getParametricEquation(startRatio, endRatio, isSelected, isHovered) {
            // 计算
            let midRatio = (startRatio + endRatio) / 2;

            let startRadian = startRatio * Math.PI * 2;
            let endRadian = endRatio * Math.PI * 2;
            let midRadian = midRatio * Math.PI * 2;

            // 如果只有一个扇形，则不实现选中效果。
            if (startRatio === 0 && endRatio === 1) {
                isSelected = false;
            }

            // 计算选中效果分别在 x 轴、y 轴方向上的位移（位移均为 0）
            let offsetX = 0;
            let offsetY = 0;
            // 计算选中效果在 z 轴方向上的位移（未选中，位移均为 0）
            let offsetZ = isSelected ? 0.15 : 0;
            // 计算高亮效果的放大比例（未高亮，则比例为 1）
            let hoverRate = isHovered ? 1.05 : 1;

            let tmp = 0;

            // 返回曲面参数方程
            return {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 100,
                },

                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 50,
                },

                x: function (u, v) {
                    if (midRatio - 0.5 < 0) {
                        if (u < startRadian || u > midRadian + Math.PI) {
                            tmp =
                                u - Math.PI - midRadian < 0
                                    ? u + Math.PI - midRadian
                                    : u - Math.PI - midRadian;
                            return (
                                offsetX +
                                ((Math.sin(startRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                        if (u > endRadian && u < midRadian + Math.PI) {
                            tmp = midRadian + Math.PI - u;
                            return (
                                offsetX +
                                ((Math.sin(endRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                    } else {
                        if (u < startRadian && u > midRadian - Math.PI) {
                            tmp = u + Math.PI - midRadian;
                            return (
                                offsetX +
                                ((Math.sin(startRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                        if (u > endRadian || u < midRadian - Math.PI) {
                            tmp =
                                midRadian - Math.PI - u < 0
                                    ? midRadian + Math.PI - u
                                    : midRadian - Math.PI - u;
                            return (
                                offsetX +
                                ((Math.sin(endRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                    }
                    return offsetX + Math.sin(v) * Math.sin(u) * hoverRate;
                },

                y: function (u, v) {
                    if (midRatio - 0.5 < 0) {
                        if (u < startRadian || u > midRadian + Math.PI) {
                            tmp =
                                u - Math.PI - midRadian < 0
                                    ? u + Math.PI - midRadian
                                    : u - Math.PI - midRadian;
                            return (
                                offsetY +
                                ((Math.cos(startRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                        if (u > endRadian && u < midRadian + Math.PI) {
                            tmp = midRadian + Math.PI - u;
                            return (
                                offsetY +
                                ((Math.cos(endRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                    } else {
                        if (u < startRadian && u > midRadian - Math.PI) {
                            tmp = u + Math.PI - midRadian;
                            return (
                                offsetY +
                                ((Math.cos(startRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                        if (u > endRadian || u < midRadian - Math.PI) {
                            tmp =
                                midRadian - Math.PI - u < 0
                                    ? midRadian + Math.PI - u
                                    : midRadian - Math.PI - u;
                            return (
                                offsetY +
                                ((Math.cos(endRadian) * tmp) /
                                    (Math.PI - midRadian + startRadian)) *
                                hoverRate
                            );
                        }
                    }
                    return offsetY + Math.sin(v) * Math.cos(u) * hoverRate;
                },

                z: function (u, v) {
                    return offsetZ + (Math.cos(v) > 0 ? 0.1 : -0.1);
                },
            };
        }
        // 生成模拟 3D 饼图的配置项
        function getPie3D(pieData) {
            let series = [];
            let sumValue = 0;
            let startValue = 0;
            let endValue = 0;
            let legendData = [];
            // 为每一个饼图数据，生成一个 series-surface 配置
            for (let i = 0; i < pieData.length; i++) {
                sumValue += pieData[i].value;
                let seriesItem = {
                    name:
                        typeof pieData[i].name === "undefined"
                            ? `series${i}`
                            : pieData[i].name,
                    type: "surface",
                    parametric: true,
                    wireframe: {
                        show: false,
                    },
                    pieData: pieData[i],
                    pieStatus: {
                        selected: false,
                        hovered: false,
                    },
                };

                if (typeof pieData[i].itemStyle != "undefined") {
                    let itemStyle = {};
                    if (typeof pieData[i].itemStyle.color != "undefined") {
                        itemStyle.color = pieData[i].itemStyle.color;
                    }
                    if (typeof pieData[i].itemStyle.opacity != "undefined") {
                        itemStyle.opacity = pieData[i].itemStyle.opacity;
                    }
                    seriesItem.itemStyle = itemStyle;
                }
                series.push(seriesItem);
            }
            // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
            // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
            for (let i = 0; i < series.length; i++) {
                endValue = startValue + series[i].pieData.value;
                series[i].pieData.startRatio = startValue / sumValue;
                series[i].pieData.endRatio = endValue / sumValue;
                series[i].parametricEquation = getParametricEquation(
                    series[i].pieData.startRatio,
                    series[i].pieData.endRatio,
                    false,
                    false
                );
                startValue = endValue;
                legendData.push(series[i].name);
            }
            // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
            series.push({
                name: "mouseoutSeries",
                type: "surface",
                parametric: true,
                wireframe: {
                    show: false,
                },
                itemStyle: {
                    opacity: 0,
                },
                parametricEquation: {
                    u: {
                        min: 0,
                        max: Math.PI * 2,
                        step: Math.PI / 20,
                    },
                    v: {
                        min: 0,
                        max: Math.PI,
                        step: Math.PI / 20,
                    },
                    x: function (u, v) {
                        return Math.sin(v) * Math.sin(u) + Math.sin(u);
                    },
                    y: function (u, v) {
                        return Math.sin(v) * Math.cos(u) + Math.cos(u);
                    },
                    z: function (u, v) {
                        return Math.cos(v) > 0 ? 0.1 : -0.1;
                    },
                },
            });
            // 准备待返回的配置项，把准备好的 legendData、series 传入。
            let option = {
                legend: {
                    show: false,
                    data: legendData,
                },
                xAxis3D: {
                    min: -1,
                    max: 1,
                },
                yAxis3D: {
                    min: -1,
                    max: 1,
                },
                zAxis3D: {
                    min: -1,
                    max: 1,
                },
                grid3D: {
                    show: false,
                    boxHeight: 100, // 厚度
                    top: 4,
                    left: 0,
                    boxWidth: 134,
                    viewControl: {
                        //3d效果可以放大、旋转等，请自己去查看官方配置
                        alpha: 36, // 角度
                        beta: 0, // 饼块开始位置角度
                        rotateSensitivity: 0,
                        zoomSensitivity: 0,
                        panSensitivity: 0,
                        autoRotate: false,
                    },
                },
                series: series,
            };
            return option;
        }

        const colorList = ['#a6ffff', '#ffffb8', '#ffb787']
        const dataSource = [{
            name: "第一产业",
            value: 12.1,
        },
        {
            name: "第二产业",
            value: 39.4,
        },
        {
            name: "第三产业",
            value: 48.5,
        },]
        const paramsList = dataSource.map((item, index) => {
            return {
                ...item,
                shading: 'realistic',
                itemStyle: {
                    color: colorList[index]
                },
            }
        })
        // 传入数据生成 option
        let option = getPie3D(paramsList);

        // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
        option.series.push({
            name: '经济产业结构', //自己根据场景修改
            type: 'pie',
            hoverAnimation: true,// 悬停不放大
            label: {
                position: "bottom",
                formatter: function (params) {
                    return `{percentSty|${params.percent}%}\n{nameSty|${params.name}}`;
                },
                rich: {
                    nameSty: {
                        fontSize: 12,
                        lineHeight: 22,
                    },
                    percentSty: {
                        fontSize: 12,
                        lineHeight: 20,
                        color: '#FFFFFF',
                    },
                    countSty: {
                        fontSize: 14,
                        lineHeight: 20,
                        color: '#B9D3ED',
                        padding: [0, 8, 0, 8],
                        backgroundColor: 'rgb(90,156,241,0.3)',
                        borderRadius: 2,
                    },
                },
            },
            labelLine: {
                showAbove: false,
                length: 20, // 视觉引导线第一段的长度
                length2: 40, // 视觉引导项第二段的长度
                lineStyle: {
                    color: "#686868", // 改变标示线的颜色
                    width: 1,
                    type: 'solid', // 线的类型
                },
            },
            startAngle: 60, // 起始角度，支持范围[0, 360]。
            clockwise: true, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
            radius: ['40%', '52%'],
            center: ['50%', '53%'],
            data: paramsList,
            itemStyle: {
                opacity: 0  //这里必须是0，不然2d的图会覆盖在表面
            }
        })

        echarts.setOption(option)
        
    }
  },
};
</script>