import React, { useEffect, useState,useRef  } from 'react';
import { useDispatch, useSelector, history } from 'umi';
import moment from 'moment';
import { Tabs, List, Space, message, Select, Input, Button, Drawer, Divider, Collapse } from 'antd';
// import projectService from '@/pages/project/services/projectService';
import { MenuUnfoldOutlined } from '@ant-design/icons';
// import SvgIcon from '@/components/SvgIcon';
import ChartDataFlow from './ChartDataFlow';
import ChartDataFlowSmall from './ChartDataFlowSmall';
import { Rnd } from "react-rnd";
import './index.less';
import data from '../data/flowData'

const { Panel } = Collapse;

const Index = (props) => {
  const { projectId, projectDetail } = props;
  const [visible, setVisible] = useState(false);
  const [nodeData, setNodeData] = useState([]);
  const [linkData, setLinkData] = useState([]);
  const [datasetDetail, setDatasetDetail] = useState({});
  const [dataList, setDataList] = useState([]); // 时间轴列表
  const [resetWidthPercent, setResetWidthPercent] = useState(100); // 设置图表显示宽度百分比
  const [resetHeightPercent,setResetHeightPercent] = useState(100); // 设置图表显示百分比
  const chartViewRef = useRef()

  const colorList = ['#44E5FA', '#7188FC', '#38EAB5', '#FFC824', '#A063F4', '#FF826F', '#FF87B4'];

  // 1: '临床数据', '#44E5FA'
  // 2: '影像数据',  '#7188FC'
  // 3: '病理数据','#38EAB5'  
  // 4: '医生经验','#FFC824'
  // 5: '标注数据','#A063F4'  
  // 6: '人口学信息','#FF826F'
  // 7: '组学特征','#FF87B4'

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

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
          });
        }
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

  // 图标渲染
  const renderIcon = () => {
    let iconName = '';
    // 临床 1,影像：2，病理：3，组学7，标注5，医生4，人口6
    switch (datasetDetail?.dataType) {
      case '1':
        iconName = 'icon-linchuangshujuo';
        break;
      case '2':
        iconName = 'icon-yingxiangshujuo';
        break;
      case '3':
        iconName = 'icon-binglishujuo';
        break;
      case '4':
        iconName = 'icon-yishengjingyano';
        break;
      case '5':
        iconName = 'icon-biaozhushujuo';
        break;
      case '6':
        iconName = 'icon-renkouxuexinxio';
        break;
      case '7':
        iconName = 'icon-zuxuetezhengo';
        break;
      default:
        break;
    }
    // dataList?.dataType
    // return <SvgIcon iconName={iconName} iconColor="#A2A2A2" fontSize={'32px'} />;
  };

  // 数据颜色图例渲染
  const renderColorList = () => {
    return (
      <ul className="colorListBox">
        <li>
          <i style={{ backgroundColor: '#44E5FA' }}></i>临床数据
        </li>
        <li>
          <i style={{ backgroundColor: '#7188FC' }}></i>影像标注
        </li>
        <li>
          <i style={{ backgroundColor: '#FF826F' }}></i>人口学信息
        </li>
        <li>
          <i style={{ backgroundColor: '#38EAB5' }}></i>病理数据
        </li>
        <li>
          <i style={{ backgroundColor: '#A063F4' }}></i>标注数据
        </li>
        <li>
          <i style={{ backgroundColor: '#FF87B4' }}></i>组学特征
        </li>
        <li>
          <i style={{ backgroundColor: '#FFC824' }}></i>医生经验
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
          <Panel header="数据流概览" key="1">
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
      <div className="actionBtn" onClick={() => showDrawer()}>
        {/* <MenuUnfoldOutlined /> */}@
      </div>
      <Drawer
        title=" "
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        mask={false}
        maskClosable={false}
        className="drawerDiv"
        style={{
          position: 'absolute',
        }}
      >
        <div className="detailList">
          <div className="title">
            {renderIcon()}
            <div>
              <p>{datasetDetail?.name}</p>
              <p style={{ color: 'rgba(0,0,0,0.65)' }}>{datasetDetail?.createTime}</p>
            </div>
          </div>
          <div className="list">
            <div>
              <span>数据类型</span>
              <Divider type="vertical" />
              {datasetDetail?.dataTypeName}
            </div>
            <div>
              <span>所属课题</span>
              <Divider type="vertical" />
              {datasetDetail?.projectName}
            </div>
            <div>
              <span>所属任务</span>
              <Divider type="vertical" />
              {datasetDetail?.taskName}
            </div>
            <div>
              <span>操作动作</span>
              <Divider type="vertical" />
              {datasetDetail?.jobType}
            </div>
            <div>
              <span>数据属性</span>
              <Divider type="vertical" />
              {datasetDetail?.dataSourcePathName}
            </div>
            <div>
              <span>创建人</span>
              <Divider type="vertical" />
              {datasetDetail?.createUserDisplayName}
            </div>
            <div>
              <span>行数</span>
              <Divider type="vertical" />
              {datasetDetail?.lineCount}
            </div>
            <div>
              <span>列数</span>
              <Divider type="vertical" />
              {datasetDetail?.columnCount}
            </div>
          </div>
        </div>
      </Drawer>
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
      <div className='bgBox'>
        <i className='triangle'></i>
        <p style={{textAlign:'left'}}><span>{moment(projectDetail?.openTime).format('YYYY-MM-DD')}</span></p>
        <p>时间轴</p>
        <p style={{textAlign:'right'}}><span>{moment(projectDetail?.endTime).format('YYYY-MM-DD')} </span></p>
          <i className='rightTriangle'></i>
          </div>
      </div>
      {renderColorList()}
    </div>
  );
};

export default Index;
