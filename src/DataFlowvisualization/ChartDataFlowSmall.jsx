import React, { useState, useEffect, useRef } from 'react';
// import { Card, message, Radio, Typography } from 'antd';
import styles from '../index.less';
import * as echarts from 'echarts';
// import { getDataProperty } from '@/pages/task/definitions/taskConfig';

// const { Text } = Typography;

const ChartDataFlowSmall = (props) => {
  const { nodeData, linkData,getDatasetDetail } = props;
  const chartRef = useRef(null);
  let myChart = null;

  const colorList = ['#13A8A8', '#2F54EB', '#FA8C16', '#F5222D',  '#8BBB11', '#722ED1','#EB2F96'];
  

  
  const loadChart = () => {
    myChart = echarts.init(chartRef.current);
    myChart.setOption(option);
  };


  useEffect(() => {
    if (nodeData?.length > 0 && linkData?.length > 0) {
      loadChart();
    } 
  },[nodeData,linkData])



  
  useEffect(() => {
    myChart = echarts.init(chartRef.current);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }, []);



  let option = {
    title: {
      // subtext: 'Data From lisachristina1234 on GitHub',
      left: 'center',
    },
    backgroundColor: '#FFFFFF',
    series: [
      {
        type: 'sankey',
        draggable: false, // 禁止移动
        focusNodeAdjacency: "inEdges",
        left: 0,
        top:0,
        right: 0,
        bottom: 0, 
        data: nodeData,
        links: linkData, 
        label: {
          show:false
        },
        silent: true,
        nodeWidth: 8,
        nodeGap: 2,
        nodeAlign: "left",
        layoutIterations: 50,
      },
    ],
  };

  return <div ref={chartRef} style={{ height: '100%', width:'100%' }}></div>;
};

export default ChartDataFlowSmall;
