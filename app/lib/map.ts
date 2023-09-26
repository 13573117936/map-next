import { dynamicMapKey } from "./constant";
import AMapLoader from "@amap/amap-jsapi-loader";

class Map {
  constructor() {
    AMapLoader.load({
      key: dynamicMapKey, // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        this.map = AMap;
        this.mapInstance = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  map: any = null;
  mapInstance: any = null;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Map();
