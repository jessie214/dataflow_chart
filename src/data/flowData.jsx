const flowData =[
  {
      "id": "682",
      "name": "数据流演示-任务",
      "dataSourcePath": "1",
      "dataSourcePathName": "上传数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 10,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "683",
      "name": "类型转换0711",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 10,
      "jobType": "类型转换",
      "sourceId": "e7cbeb9b28b7a57730cbc51abd36f090",
      "sourceType": "1",
      "sourceDatasetId": "682",
      "joinSource": [
          {
              "id": "682",
              "name": "数据流演示-任务",
              "size": 10
          }
      ]
  },
  {
      "id": "684",
      "name": "日期时间处理711",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 10,
      "jobType": "时间日期处理",
      "sourceId": "f108657eb13a028eafc875cfd60dcaf4",
      "sourceType": "1",
      "sourceDatasetId": "682",
      "joinSource": [
          {
              "id": "682",
              "name": "数据流演示-任务",
              "size": 10
          }
      ]
  },
  {
      "id": "685",
      "name": "数据分组0711-01",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 7,
      "jobType": "数据分组",
      "sourceId": "d371ca97080b9ac3347039c19b577b0f",
      "sourceType": "1",
      "sourceDatasetId": "682",
      "joinSource": [
          {
              "id": "682",
              "name": "数据流演示-任务",
              "size": 10
          }
      ]
  },
  {
      "id": "686",
      "name": "数据分组0711-02",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "d371ca97080b9ac3347039c19b577b0f",
      "sourceType": "1",
      "sourceDatasetId": "682",
      "joinSource": [
          {
              "id": "682",
              "name": "数据流演示-任务",
              "size": 10
          }
      ]
  },
  {
      "id": "687",
      "name": "数据演示-病理数据",
      "dataSourcePath": "1",
      "dataSourcePathName": "上传数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 10,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "688",
      "name": "二值化0711-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 10,
      "jobType": "二值化",
      "sourceId": "869f8d3b2e695e5669333575185d38a1",
      "sourceType": "1",
      "sourceDatasetId": "687",
      "joinSource": [
          {
              "id": "687",
              "name": "数据演示-病理数据",
              "size": 10
          }
      ]
  },
  {
      "id": "689",
      "name": "离散化0711-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 10,
      "jobType": "离散化",
      "sourceId": "c79bb39c124ae5b60858958b2bd9fb03",
      "sourceType": "1",
      "sourceDatasetId": "687",
      "joinSource": [
          {
              "id": "687",
              "name": "数据演示-病理数据",
              "size": 10
          }
      ]
  },
  {
      "id": "691",
      "name": "离散余玄变换0711-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 7,
      "jobType": "离散余弦变换(DCT)",
      "sourceId": "0994a525bfff47fff06bee8fbabad771",
      "sourceType": "1",
      "sourceDatasetId": "685",
      "joinSource": [
          {
              "id": "685",
              "name": "数据分组0711-01",
              "size": 7
          }
      ]
  },
  {
      "id": "692",
      "name": "多项式转化0711-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "多项式转化",
      "sourceId": "9db45d7a6f6c13aa25e59c5cc8108fa5",
      "sourceType": "1",
      "sourceDatasetId": "686",
      "joinSource": [
          {
              "id": "686",
              "name": "数据分组0711-02",
              "size": 3
          }
      ]
  },
  {
      "id": "697",
      "name": "数据分组0711-3A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 7,
      "jobType": "数据分组",
      "sourceId": "37913f35b0821bac34beffc6f7991988",
      "sourceType": "1",
      "sourceDatasetId": "688",
      "joinSource": [
          {
              "id": "688",
              "name": "二值化0711-1",
              "size": 10
          }
      ]
  },
  {
      "id": "698",
      "name": "数据分组0711-3B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "37913f35b0821bac34beffc6f7991988",
      "sourceType": "1",
      "sourceDatasetId": "688",
      "joinSource": [
          {
              "id": "688",
              "name": "二值化0711-1",
              "size": 10
          }
      ]
  },
  {
      "id": "701",
      "name": "离散余弦变换0704-1-共享",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 20,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "702",
      "name": "共享数据纳排0711-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 14,
      "jobType": "数据纳排",
      "sourceId": "d9bd2cbdeef1ad88e05f36871b8fa014",
      "sourceType": "1",
      "sourceDatasetId": "701",
      "joinSource": [
          {
              "id": "701",
              "name": "离散余弦变换0704-1-共享",
              "size": 20
          }
      ]
  },
  {
      "id": "703",
      "name": "数据分组-共享数据-0711A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 9,
      "jobType": "数据分组",
      "sourceId": "d7d76fc89a9a8cbc913765e366b3b4b7",
      "sourceType": "1",
      "sourceDatasetId": "702",
      "joinSource": [
          {
              "id": "702",
              "name": "共享数据纳排0711-1",
              "size": 14
          }
      ]
  },
  {
      "id": "704",
      "name": "数据分组-共享数据-0711B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "d7d76fc89a9a8cbc913765e366b3b4b7",
      "sourceType": "1",
      "sourceDatasetId": "702",
      "joinSource": [
          {
              "id": "702",
              "name": "共享数据纳排0711-1",
              "size": 14
          }
      ]
  },
  {
      "id": "713",
      "name": "数据流演示-标注数据0711",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": 1,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "714",
      "name": "数据流演示数据-影像数据",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "2",
      "dataTypeName": "影像数据",
      "size": 1,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "715",
      "name": "影像标注-数据流0712",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": 1,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": "714",
      "joinSource": [
          {
              "id": "714",
              "name": "数据流演示数据-影像数据",
              "size": 1
          }
      ]
  },
  {
      "id": "717",
      "name": "特征选择-影像数据0712",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "2",
      "dataTypeName": "影像数据",
      "size": 1,
      "jobType": "特征选择（卡方）",
      "sourceId": "b62d5750b8b15b82e81a248748426d48",
      "sourceType": "1",
      "sourceDatasetId": "714",
      "joinSource": [
          {
              "id": "714",
              "name": "数据流演示数据-影像数据",
              "size": 1
          }
      ]
  },
  {
      "id": "718",
      "name": "类型转换-标注数据-0712",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": 1,
      "jobType": "类型转换",
      "sourceId": "6030ba5358b97d81c2250f3fd36f0870",
      "sourceType": "1",
      "sourceDatasetId": "713",
      "joinSource": [
          {
              "id": "713",
              "name": "数据流演示-标注数据0711",
              "size": 1
          }
      ]
  },
  {
      "id": "719",
      "name": "数据流演示-医生经验",
      "dataSourcePath": "1",
      "dataSourcePathName": "上传数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 10,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "721",
      "name": "数据流演示-组学特征0712",
      "dataSourcePath": "1",
      "dataSourcePathName": "上传数据",
      "dataType": "7",
      "dataTypeName": "组学特征",
      "size": 10,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "722",
      "name": "特征选择-组学0712-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "7",
      "dataTypeName": "组学特征",
      "size": 10,
      "jobType": "特征选择（卡方）",
      "sourceId": "605e8e6adb9fd1f7d18481043708b4c5",
      "sourceType": "1",
      "sourceDatasetId": "721",
      "joinSource": [
          {
              "id": "721",
              "name": "数据流演示-组学特征0712",
              "size": 10
          }
      ]
  },
  {
      "id": "731",
      "name": "缺失值处理-医生经验0712-1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 10,
      "jobType": "缺失值处理",
      "sourceId": "6b773382a91dd5e072e65d9e9b5b147a",
      "sourceType": "1",
      "sourceDatasetId": "719",
      "joinSource": [
          {
              "id": "719",
              "name": "数据流演示-医生经验",
              "size": 10
          }
      ]
  },
  {
      "id": "749",
      "name": "纳排-共享k001-0712",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 23,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "750",
      "name": "离散-k001共享-0712",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 22,
      "jobType": "离散余弦变换(DCT)",
      "sourceId": "d1c522da6995b0affc0a915802c5c7eb",
      "sourceType": "1",
      "sourceDatasetId": "749",
      "joinSource": [
          {
              "id": "749",
              "name": "纳排-共享k001-0712",
              "size": 23
          }
      ]
  },
  {
      "id": "753",
      "name": "离散-k001共享分组0712A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 12,
      "jobType": "数据分组",
      "sourceId": "911047b3fa8ffe9ed91348b9b1aab2a9",
      "sourceType": "1",
      "sourceDatasetId": "750",
      "joinSource": [
          {
              "id": "750",
              "name": "离散-k001共享-0712",
              "size": 22
          }
      ]
  },
  {
      "id": "754",
      "name": "离散-k001共享分组0712B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 10,
      "jobType": "数据分组",
      "sourceId": "911047b3fa8ffe9ed91348b9b1aab2a9",
      "sourceType": "1",
      "sourceDatasetId": "750",
      "joinSource": [
          {
              "id": "750",
              "name": "离散-k001共享-0712",
              "size": 22
          }
      ]
  },
  {
      "id": "755",
      "name": "分组-共享数据0712C",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 8,
      "jobType": "数据分组",
      "sourceId": "79be656f4105e8b0942498a79b645c48",
      "sourceType": "1",
      "sourceDatasetId": "753",
      "joinSource": [
          {
              "id": "753",
              "name": "离散-k001共享分组0712A",
              "size": 12
          }
      ]
  },
  {
      "id": "756",
      "name": "分组-共享数据0712D",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "79be656f4105e8b0942498a79b645c48",
      "sourceType": "1",
      "sourceDatasetId": "753",
      "joinSource": [
          {
              "id": "753",
              "name": "离散-k001共享分组0712A",
              "size": 12
          }
      ]
  },
  {
      "id": "757",
      "name": "分组-k001离散E",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 8,
      "jobType": "数据分组",
      "sourceId": "0603ef24d1a05e3c52d12b77f9ca3d50",
      "sourceType": "1",
      "sourceDatasetId": "753",
      "joinSource": [
          {
              "id": "753",
              "name": "离散-k001共享分组0712A",
              "size": 12
          }
      ]
  },
  {
      "id": "758",
      "name": "分组-k001离散F",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "0603ef24d1a05e3c52d12b77f9ca3d50",
      "sourceType": "1",
      "sourceDatasetId": "753",
      "joinSource": [
          {
              "id": "753",
              "name": "离散-k001共享分组0712A",
              "size": 12
          }
      ]
  },
  {
      "id": "759",
      "name": "分组-k001B-0713A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 7,
      "jobType": "数据分组",
      "sourceId": "3c13c381afe010e8b344320b0441abee",
      "sourceType": "1",
      "sourceDatasetId": "754",
      "joinSource": [
          {
              "id": "754",
              "name": "离散-k001共享分组0712B",
              "size": 10
          }
      ]
  },
  {
      "id": "760",
      "name": "分组-k001B-0713B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "3c13c381afe010e8b344320b0441abee",
      "sourceType": "1",
      "sourceDatasetId": "754",
      "joinSource": [
          {
              "id": "754",
              "name": "离散-k001共享分组0712B",
              "size": 10
          }
      ]
  },
  {
      "id": "761",
      "name": "分组0713A-0713A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "92460509c816572a62d24ff47fb22b4e",
      "sourceType": "1",
      "sourceDatasetId": "759",
      "joinSource": [
          {
              "id": "759",
              "name": "分组-k001B-0713A",
              "size": 7
          }
      ]
  },
  {
      "id": "762",
      "name": "分组0713A-0713B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "92460509c816572a62d24ff47fb22b4e",
      "sourceType": "1",
      "sourceDatasetId": "759",
      "joinSource": [
          {
              "id": "759",
              "name": "分组-k001B-0713A",
              "size": 7
          }
      ]
  },
  {
      "id": "763",
      "name": "分组0713B-0713A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "b0c67185ea78a1f6adca11bd54435f18",
      "sourceType": "1",
      "sourceDatasetId": "760",
      "joinSource": [
          {
              "id": "760",
              "name": "分组-k001B-0713B",
              "size": 3
          }
      ]
  },
  {
      "id": "764",
      "name": "分组0713B-0713B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": -1,
      "jobType": "数据分组",
      "sourceId": "b0c67185ea78a1f6adca11bd54435f18",
      "sourceType": "1",
      "sourceDatasetId": "760",
      "joinSource": [
          {
              "id": "760",
              "name": "分组-k001B-0713B",
              "size": 3
          }
      ]
  },
  {
      "id": "765",
      "name": "分组0713A-共享数据0712C",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 5,
      "jobType": "数据分组",
      "sourceId": "6ad5bb50a2b28cebc1f071929e210ad9",
      "sourceType": "1",
      "sourceDatasetId": "755",
      "joinSource": [
          {
              "id": "755",
              "name": "分组-共享数据0712C",
              "size": 8
          }
      ]
  },
  {
      "id": "766",
      "name": "分组0713B-共享数据0712C",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "6ad5bb50a2b28cebc1f071929e210ad9",
      "sourceType": "1",
      "sourceDatasetId": "755",
      "joinSource": [
          {
              "id": "755",
              "name": "分组-共享数据0712C",
              "size": 8
          }
      ]
  },
  {
      "id": "767",
      "name": "分组0713A-共享数据0712D",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "580e8d17a4cad1eddf125160a580af2b",
      "sourceType": "1",
      "sourceDatasetId": "756",
      "joinSource": [
          {
              "id": "756",
              "name": "分组-共享数据0712D",
              "size": 4
          }
      ]
  },
  {
      "id": "768",
      "name": "分组0713B-共享数据0712D",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 1,
      "jobType": "数据分组",
      "sourceId": "580e8d17a4cad1eddf125160a580af2b",
      "sourceType": "1",
      "sourceDatasetId": "756",
      "joinSource": [
          {
              "id": "756",
              "name": "分组-共享数据0712D",
              "size": 4
          }
      ]
  },
  {
      "id": "769",
      "name": "分组0713A-k001离散E",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 5,
      "jobType": "数据分组",
      "sourceId": "6cf56f5fe34451671a6e5ca30c1c0a5f",
      "sourceType": "1",
      "sourceDatasetId": "757",
      "joinSource": [
          {
              "id": "757",
              "name": "分组-k001离散E",
              "size": 8
          }
      ]
  },
  {
      "id": "770",
      "name": "分组0713B-k001离散E",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "6cf56f5fe34451671a6e5ca30c1c0a5f",
      "sourceType": "1",
      "sourceDatasetId": "757",
      "joinSource": [
          {
              "id": "757",
              "name": "分组-k001离散E",
              "size": 8
          }
      ]
  },
  {
      "id": "771",
      "name": "分组0713A-k001离散F",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "db8077e34170a1387062bad8bf78f72d",
      "sourceType": "1",
      "sourceDatasetId": "758",
      "joinSource": [
          {
              "id": "758",
              "name": "分组-k001离散F",
              "size": 4
          }
      ]
  },
  {
      "id": "772",
      "name": "分组0713B-k001离散F",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 1,
      "jobType": "数据分组",
      "sourceId": "db8077e34170a1387062bad8bf78f72d",
      "sourceType": "1",
      "sourceDatasetId": "758",
      "joinSource": [
          {
              "id": "758",
              "name": "分组-k001离散F",
              "size": 4
          }
      ]
  },
  {
      "id": "797",
      "name": "分组-类型转换0711/A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 7,
      "jobType": "数据分组",
      "sourceId": "9d5121c0c0deedb9bad50e98aed54286",
      "sourceType": "1",
      "sourceDatasetId": "683",
      "joinSource": [
          {
              "id": "683",
              "name": "类型转换0711",
              "size": 10
          }
      ]
  },
  {
      "id": "798",
      "name": "分组-类型转换0711/B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "9d5121c0c0deedb9bad50e98aed54286",
      "sourceType": "1",
      "sourceDatasetId": "683",
      "joinSource": [
          {
              "id": "683",
              "name": "类型转换0711",
              "size": 10
          }
      ]
  },
  {
      "id": "799",
      "name": "分组-离散余玄变换0711-1/A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "ae88cda1717b5c841c47c9bf80ea45bb",
      "sourceType": "1",
      "sourceDatasetId": "691",
      "joinSource": [
          {
              "id": "691",
              "name": "离散余玄变换0711-1",
              "size": 7
          }
      ]
  },
  {
      "id": "800",
      "name": "分组-离散余玄变换0711-1/B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "ae88cda1717b5c841c47c9bf80ea45bb",
      "sourceType": "1",
      "sourceDatasetId": "691",
      "joinSource": [
          {
              "id": "691",
              "name": "离散余玄变换0711-1",
              "size": 7
          }
      ]
  },
  {
      "id": "801",
      "name": "合并",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": 1,
      "jobType": "数据合并",
      "sourceId": "320c80fb2d98e63398d42482713db29d",
      "sourceType": "1",
      "sourceDatasetId": "715,717",
      "joinSource": [
          {
              "id": "715",
              "name": "影像标注-数据流0712",
              "size": 1
          },
          {
              "id": "717",
              "name": "特征选择-影像数据0712",
              "size": 1
          }
      ]
  },
  {
      "id": "802",
      "name": "分组-类型转换0711/A1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "46b033abc992a252db5134e7d6770ef9",
      "sourceType": "1",
      "sourceDatasetId": "797",
      "joinSource": [
          {
              "id": "797",
              "name": "分组-类型转换0711/A",
              "size": 7
          }
      ]
  },
  {
      "id": "803",
      "name": "分组-类型转换0711/A2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "46b033abc992a252db5134e7d6770ef9",
      "sourceType": "1",
      "sourceDatasetId": "797",
      "joinSource": [
          {
              "id": "797",
              "name": "分组-类型转换0711/A",
              "size": 7
          }
      ]
  },
  {
      "id": "804",
      "name": "分组-类型转换0711/A1.1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "4ff93faa84ed7b2545d23345693acf89",
      "sourceType": "1",
      "sourceDatasetId": "802",
      "joinSource": [
          {
              "id": "802",
              "name": "分组-类型转换0711/A1",
              "size": 4
          }
      ]
  },
  {
      "id": "805",
      "name": "分组-类型转换0711/A1.2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 1,
      "jobType": "数据分组",
      "sourceId": "4ff93faa84ed7b2545d23345693acf89",
      "sourceType": "1",
      "sourceDatasetId": "802",
      "joinSource": [
          {
              "id": "802",
              "name": "分组-类型转换0711/A1",
              "size": 4
          }
      ]
  },
  {
      "id": "806",
      "name": "分组-缺失值处理-医生经验/A",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 7,
      "jobType": "数据分组",
      "sourceId": "b038c9707fcd45b29a3b1bef900ccb2c",
      "sourceType": "1",
      "sourceDatasetId": "731",
      "joinSource": [
          {
              "id": "731",
              "name": "缺失值处理-医生经验0712-1",
              "size": 10
          }
      ]
  },
  {
      "id": "807",
      "name": "分组-缺失值处理-医生经验/B",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "b038c9707fcd45b29a3b1bef900ccb2c",
      "sourceType": "1",
      "sourceDatasetId": "731",
      "joinSource": [
          {
              "id": "731",
              "name": "缺失值处理-医生经验0712-1",
              "size": 10
          }
      ]
  },
  {
      "id": "808",
      "name": "分组-缺失值处理-医生经验/A1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "3ea34a2f35c69c48b53d85550b5e6f8f",
      "sourceType": "1",
      "sourceDatasetId": "806",
      "joinSource": [
          {
              "id": "806",
              "name": "分组-缺失值处理-医生经验/A",
              "size": 7
          }
      ]
  },
  {
      "id": "809",
      "name": "分组-缺失值处理-医生经验/A2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "3ea34a2f35c69c48b53d85550b5e6f8f",
      "sourceType": "1",
      "sourceDatasetId": "806",
      "joinSource": [
          {
              "id": "806",
              "name": "分组-缺失值处理-医生经验/A",
              "size": 7
          }
      ]
  },
  {
      "id": "810",
      "name": "数据分组0711-3A.1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 4,
      "jobType": "数据分组",
      "sourceId": "7295b8da9a64a7d4b245be734ee9159d",
      "sourceType": "1",
      "sourceDatasetId": "697",
      "joinSource": [
          {
              "id": "697",
              "name": "数据分组0711-3A",
              "size": 7
          }
      ]
  },
  {
      "id": "811",
      "name": "数据分组0711-3A.2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "7295b8da9a64a7d4b245be734ee9159d",
      "sourceType": "1",
      "sourceDatasetId": "697",
      "joinSource": [
          {
              "id": "697",
              "name": "数据分组0711-3A",
              "size": 7
          }
      ]
  },
  {
      "id": "812",
      "name": "分组-缺失值处理-医生经验/A1.1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "f26d1b31e08909f2cacfcc6093c4ad59",
      "sourceType": "1",
      "sourceDatasetId": "808",
      "joinSource": [
          {
              "id": "808",
              "name": "分组-缺失值处理-医生经验/A1",
              "size": 4
          }
      ]
  },
  {
      "id": "813",
      "name": "分组-缺失值处理-医生经验/A1.2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "4",
      "dataTypeName": "医生经验",
      "size": 1,
      "jobType": "数据分组",
      "sourceId": "f26d1b31e08909f2cacfcc6093c4ad59",
      "sourceType": "1",
      "sourceDatasetId": "808",
      "joinSource": [
          {
              "id": "808",
              "name": "分组-缺失值处理-医生经验/A1",
              "size": 4
          }
      ]
  },
  {
      "id": "814",
      "name": "数据分组-共享数据-0711B1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "ba99846f718fc29efd47e564d4e94a27",
      "sourceType": "1",
      "sourceDatasetId": "704",
      "joinSource": [
          {
              "id": "704",
              "name": "数据分组-共享数据-0711B",
              "size": 4
          }
      ]
  },
  {
      "id": "815",
      "name": "数据分组-共享数据-0711B2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 1,
      "jobType": "数据分组",
      "sourceId": "ba99846f718fc29efd47e564d4e94a27",
      "sourceType": "1",
      "sourceDatasetId": "704",
      "joinSource": [
          {
              "id": "704",
              "name": "数据分组-共享数据-0711B",
              "size": 4
          }
      ]
  },
  {
      "id": "816",
      "name": "数据分组-共享数据-0711B1.1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "22fdcfe2ef6b6b8c30c6f827688d780e",
      "sourceType": "1",
      "sourceDatasetId": "814",
      "joinSource": [
          {
              "id": "814",
              "name": "数据分组-共享数据-0711B1",
              "size": 3
          }
      ]
  },
  {
      "id": "817",
      "name": "数据分组-共享数据-0711B1.2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "6",
      "dataTypeName": "人口学信息",
      "size": 0,
      "jobType": "数据分组",
      "sourceId": "22fdcfe2ef6b6b8c30c6f827688d780e",
      "sourceType": "1",
      "sourceDatasetId": "814",
      "joinSource": [
          {
              "id": "814",
              "name": "数据分组-共享数据-0711B1",
              "size": 3
          }
      ]
  },
  {
      "id": "818",
      "name": "数据分组0711-3A.1.1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "a3487dfdc0a8496f3e1c4d868c1086e8",
      "sourceType": "1",
      "sourceDatasetId": "810",
      "joinSource": [
          {
              "id": "810",
              "name": "数据分组0711-3A.1",
              "size": 4
          }
      ]
  },
  {
      "id": "819",
      "name": "数据分组0711-3A.1.2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "3",
      "dataTypeName": "病理数据",
      "size": 1,
      "jobType": "数据分组",
      "sourceId": "a3487dfdc0a8496f3e1c4d868c1086e8",
      "sourceType": "1",
      "sourceDatasetId": "810",
      "joinSource": [
          {
              "id": "810",
              "name": "数据分组0711-3A.1",
              "size": 4
          }
      ]
  },
  {
      "id": "826",
      "name": "保存数据测试0720",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": 1,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": "714",
      "joinSource": [
          {
              "id": "714",
              "name": "数据流演示数据-影像数据",
              "size": 1
          }
      ]
  },
  {
      "id": "880",
      "name": "数据引入0810-3",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": null,
      "joinSource": null
  },
  {
      "id": "882",
      "name": "引入数据分组1",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 3,
      "jobType": "数据分组",
      "sourceId": "6106c4aa373a0dc5f203516f4e382898",
      "sourceType": "1",
      "sourceDatasetId": "880",
      "joinSource": [
          {
              "id": "880",
              "name": "数据引入0810-3",
              "size": 3
          }
      ]
  },
  {
      "id": "883",
      "name": "引入数据分组2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "1",
      "dataTypeName": "临床数据",
      "size": 0,
      "jobType": "数据分组",
      "sourceId": "6106c4aa373a0dc5f203516f4e382898",
      "sourceType": "1",
      "sourceDatasetId": "880",
      "joinSource": [
          {
              "id": "880",
              "name": "数据引入0810-3",
              "size": 3
          }
      ]
  },
  {
      "id": "886",
      "name": "影像标注0712-2",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": null,
      "jobType": "特征选择（卡方）",
      "sourceId": "b62d5750b8b15b82e81a248748426d48",
      "sourceType": "1",
      "sourceDatasetId": "717",
      "joinSource": [
          {
              "id": "717",
              "name": "特征选择-影像数据0712",
              "size": 1
          }
      ]
  },
  {
      "id": "887",
      "name": "影响标注保存",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": null,
      "jobType": "特征选择（卡方）",
      "sourceId": "b62d5750b8b15b82e81a248748426d48",
      "sourceType": "1",
      "sourceDatasetId": "717",
      "joinSource": [
          {
              "id": "717",
              "name": "特征选择-影像数据0712",
              "size": 1
          }
      ]
  },
  {
      "id": "888",
      "name": "影像数据保存数据04",
      "dataSourcePath": "3",
      "dataSourcePathName": "共享数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": 1,
      "jobType": null,
      "sourceId": null,
      "sourceType": null,
      "sourceDatasetId": "714",
      "joinSource": [
          {
              "id": "714",
              "name": "数据流演示数据-影像数据",
              "size": 1
          }
      ]
  },
  {
      "id": "890",
      "name": "影像数据保存测试02",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": null,
      "jobType": "特征选择（卡方）",
      "sourceId": "b62d5750b8b15b82e81a248748426d48",
      "sourceType": "1",
      "sourceDatasetId": "717",
      "joinSource": [
          {
              "id": "717",
              "name": "特征选择-影像数据0712",
              "size": 1
          }
      ]
  },
  {
      "id": "891",
      "name": "影响标注保存03",
      "dataSourcePath": "2",
      "dataSourcePathName": "生成数据",
      "dataType": "5",
      "dataTypeName": "标注数据",
      "size": null,
      "jobType": "特征选择（卡方）",
      "sourceId": "b62d5750b8b15b82e81a248748426d48",
      "sourceType": "1",
      "sourceDatasetId": "717",
      "joinSource": [
          {
              "id": "717",
              "name": "特征选择-影像数据0712",
              "size": 1
          }
      ]
  }
]


export default flowData;