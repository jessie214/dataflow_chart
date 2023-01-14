import React, { useEffect, useState,useRef  } from 'react';
// import moment from 'moment';
import {Collapse } from 'antd';
import ChartDataFlow from './ChartDataFlow';
import ChartDataFlowSmall from './ChartDataFlowSmall';
import { Rnd } from "react-rnd";
import './index.css';
import data from '../data/flowData'
import 'antd/dist/reset.css';

const { Panel } = Collapse;

const Index = (props) => {
  // const [visible, setVisible] = useState(false);
  const [nodeData, setNodeData] = useState([]);
  const [linkData, setLinkData] = useState([]);
  // const [datasetDetail, setDatasetDetail] = useState({});
  // const [dataList, setDataList] = useState([]); // 时间轴列表
  const [resetWidthPercent, setResetWidthPercent] = useState(100); // 设置图表显示宽度百分比
  const [resetHeightPercent,setResetHeightPercent] = useState(100); // 设置图表显示百分比
  const chartViewRef = useRef()

  const colorList = ['#44E5FA', '#7188FC', '#38EAB5', '#FFC824', '#A063F4', '#FF826F', '#FF87B4'];

  // 1: '临床数据', '#44E5FA'
  // 2: '影像数据',  '#7188FC' Image annotation
  // 3: '病理数据','#38EAB5'   Pathological data
  // 4: '医生经验','#FFC824' doctor experience
  // 5: '标注数据','#A063F4'  annotation data
  // 6: '人口学信息','#FF826F' Demographic information
  // 7: '组学特征','#FF87B4' radiomic feature

  // const showDrawer = () => {
  //   setVisible(!visible);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };

  // 数据格式处理
  const formatData = (datasetList) => {
    let dataArr = [];
    let linkArr = [];
    if (datasetList?.length > 0) {
      datasetList.map((item) => {
        let jobList = [];
        jobList = item?.joinSource && item?.joinSource?.slice();
        // 合成data数据
        let newDataArr = {
          key: item?.id,
          name: item?.name + '('+item?.id+')', // 防止name重复报错
          value: item?.size?item?.size:1,
          // value:1,
          itemStyle: {                                                                                                                                                                                                                                                                                                                                                                                                
            color: colorList[Number(item?.dataType)-1],
          },
        };

        dataArr.push(newDataArr);
        if (jobList && jobList?.length > 0) {

          jobList.map((job) => {
            let newLinkArr = {
              source: job?.name + '('+job?.id+')', // 防止name重复报错
              target: item?.name + '('+item?.id+')', // 防止name重复报错
              // value: job?.size?job?.size:1,
              value:item?.size,
            };
            linkArr.push(newLinkArr);
            return linkArr;
          });
        }
        return dataArr;
      });
    }
    setNodeData(dataArr);
    setLinkData(linkArr);
  };


  useEffect(() => {
    formatData(data);
    // 请求获取数据
    // projectService.fetchFlowData({ projectId: projectId }).then((res) => {
    //   if (res && res.code === '000000') {
    //     // 数据格式化
    //     formatData(res?.data);
    //   } else {
    //     if (res && res.code === '999999') {
    //       res?.msg && message.error(res?.msg) 
    //     }
    //   }
    // });
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDatasetDetail = (id) => {
    if (id) {
      // projectService.fetchDatasetDetailById(id).then((res) => {
      //   if (res?.code == '000000') {
      //     setDatasetDetail(res?.data);
      //     setVisible(true);
      //   }
      // });
    }
  };


  // 数据颜色图例渲染
  const renderColorList = () => {
    return (
      <ul className="colorListBox">
        <li>
          <i style={{ backgroundColor: '#44E5FA' }}></i>Clinical data
        </li>
        <li>
          <i style={{ backgroundColor: '#7188FC' }}></i>Image annotation
        </li>
        <li>
          <i style={{ backgroundColor: '#FF826F' }}></i>Demographic information
        </li>
        <li>
          <i style={{ backgroundColor: '#38EAB5' }}></i>Pathological data
        </li>
        <li>
          <i style={{ backgroundColor: '#A063F4' }}></i>Annotation data
        </li>
        <li>
          <i style={{ backgroundColor: '#FF87B4' }}></i>Radiomic feature
        </li>
        <li>
          <i style={{ backgroundColor: '#FFC824' }}></i>Doctor experience
        </li>
      </ul>
    );
  };



  // 移动缩略图上工具后的回调
  const dragStop = (e, d) => {
    // x坐标比例
    let toolX = d.x/168;
    // y坐标比例
    let toolY = d.y/100;
    // 设置滚动条位置
    chartViewRef.current.scrollTop = toolY * chartViewRef.current.offsetHeight * 2;
    chartViewRef.current.scrollLeft = toolX * chartViewRef.current.offsetWidth * 2;
  }

  
  // 拖拽缩略图上设置大小工具后的回调
  const resizeStop = (e, direction, ref, delta, position) => {
    let width = ref.offsetWidth;
    let height = ref.offsetHeight;
    // 配置放大缩小比例 
    setResetWidthPercent(  168/width * 100);
    setResetHeightPercent(100/height * 100);
  }

  return (
    <div className="DataFlowvisualizationDiv">
      <div className="smallChart">
        <Collapse bordered={false} defaultActiveKey={['1']} >
          <Panel header="overview" key="1">
            <p style={{ width: '100%', height: '100%', marginBottom: '0px',position:'relative' }} className='resetBox'>
            <Rnd
             default={{
              x: 0,
              y: 0,
              width: 168,
              height: 100,
            }}
            minWidth={84}
            minHeight={50}
            maxWidth={168}
            maxHeight={100}
            lockAspectRatio={168/100}
            bounds="parent"
            // position={{x:x,y:y}}
                onDrag={(e, d) => { dragStop(e, d) }}   // 移动后的回调
                onResize = {(e,direction,ref,delta,position) => { resizeStop(e,direction,ref,delta,position) }} // 拖拽后的回调
            >
             <div style={{backgroundColor:`rgba(47,84,235,0.1)`}} className='setToolBox'>
              </div>
            </Rnd>
              <ChartDataFlowSmall nodeData={nodeData} linkData={linkData} />
            </p>
          </Panel>
        </Collapse>
      </div>
    
      <div className='chartMainBox' ref={chartViewRef}>
        <ChartDataFlow
          nodeData={nodeData}
          linkData={linkData}
          getDatasetDetail={(id) => getDatasetDetail(id)}
            resetWidthPercent={resetWidthPercent}
            resetHeightPercent={resetHeightPercent}  
          />
      </div>

      <div className="timelinebox">
      {/* <div className='bgBox'>
        <i className='triangle'></i>
        <p style={{textAlign:'left'}}><span>{moment(projectDetail?.openTime).format('YYYY-MM-DD')}</span></p>
        <p>时间轴</p>
        <p style={{textAlign:'right'}}><span>{moment(projectDetail?.endTime).format('YYYY-MM-DD')} </span></p>
          <i className='rightTriangle'></i>
          </div> */}
      </div>
      {renderColorList()}
    </div>
  );
};

export default Index;
