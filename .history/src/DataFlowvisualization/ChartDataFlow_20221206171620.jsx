import React, { useState, useEffect, useRef } from 'react';
import { Card, message, Radio, Typography } from 'antd';
import styles from '../index.less';
import * as echarts from 'echarts';
import { getDataProperty } from '@/pages/task/definitions/taskConfig';
import { FormattedDateParts } from 'umi';
import { CalculatorFilled } from '@ant-design/icons';

const { Text } = Typography;

const ChartDataFlow = (props) => {
  const { nodeData, linkData,getDatasetDetail,resetHeightPercent,resetWidthPercent } = props;
  const chartRef = useRef(null);
  let myChart = null;

 

  
  const loadChart = () => {
    myChart = echarts.init(chartRef.current);
    myChart.setOption(option);
  };


  useEffect(() => {
    if (nodeData?.length > 0 && linkData?.length > 0) {
      loadChart();
      onEventClick();  
    }
 
  },[nodeData,linkData])

  // 根据缩略图设置调整chart大小
  useEffect(() => {
    myChart = echarts.init(chartRef.current);
    myChart.resize();
},[resetHeightPercent,resetWidthPercent])

  
  useEffect(() => {
    myChart = echarts.init(chartRef.current);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }, []);

  let isSelected = false, cacheName = '';
  const onEventClick = () => {
    // 点击事件
    myChart.on('click', (e) => {
      getDatasetDetail(e?.data?.key);

      if(e.data.source) return;
      let {name} = e;
      let links = linkData.slice();
      let nodes = nodeData.slice();
      let options = myChart.getOption();
      if(cacheName !== name){
          isSelected = false;
      }
      
      cacheName = name;     
        if(!isSelected){
          let selectedNodes = [], selectedLinks = [];
          selectedNodes = links.filter(item => {
                return item.source === name || item.target === name;
            }).map(item => {
                return [{
                    name: item.source,
                    itemStyle: {
                        // color: '#1DFA7C',
                        opacity: 1
                    },
                    label: {
                        fontSize: 12,
                    }
                },{
                    name: item.target,
                    itemStyle: {
                        // color: '#1DFA7C',
                        opacity: 0.7
                    },
                    label: {
                        fontSize: 12,
                    }
                }];
            })
            nodes = nodes.map(item => {
                if(!item.itemStyle){
                  item.itemStyle = {
                      
                        opacity: 0.1
                    };
                    item.label = {
                        show: false
                    };
                }
                return item;
            });  
            selectedLinks = links.map(item => {
                if(item.source === name){
                    return {
                        ...item,
                        lineStyle: {
                            opacity: .7
                        }
                    }
                }else{
                    return {
                        ...item,
                        lineStyle: {
                            opacity: 0.35
                        }
                    }
                }
            });
            options.series[0].data = nodes;
            options.series[0].links = selectedLinks;
            isSelected = true;
        }else{
            options.series[0].data = nodes;
            options.series[0].links = links;
            isSelected = false;
      }

        myChart.setOption(options);
    });
  }



  let option = {
    grid: {
      left:0
    },
    title: {
      left: 'center',
    },
    backgroundColor: '#FFFFFF',
    series: [
      {
        type: 'sankey',
        // draggable: false, // 禁止移动
        left: 0,
        top: 20.0,
        right: 0,
        bottom: 25.0,
        emphasis: {
          focus: 'adjacency'
        },
        focusNodeAdjacency: 'allEdges',
        data: nodeData,
        links: linkData,
        lineStyle: {
          color: 'source',
          curveness: 0.5,
          opacity: 0.2,
        },
        itemStyle: {
          color: '#1f77b4',
          // borderColor: '#1f77b4',          
        },
  
        label: {
          color: 'rgba(0,0,0,0.7)',
          fontFamily: 'Arial',
          fontSize: 10,
        },
        nodeWidth: 30,
        nodeAlign: "left",
        layoutIterations: 50,
      },
    ],
    tooltip: {
      trigger: 'item',
    },
  //   dataZoom: {
  //     show: true,
  //     realtime: true,
  //     y: 36,
  //     height: 20,
  //     start: 20,
  //     end: 80
  // }
  };

  return <div ref={chartRef} style={{ height: `${resetHeightPercent}%`, width:`${resetWidthPercent}%` }}></div>;
};

export default ChartDataFlow;
