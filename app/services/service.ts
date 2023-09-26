import axios from "axios";
import { mapKey } from "../lib/constant";

/**
 * axios封装
 * 1. 每个方法都传入mapkey
 */

const service = axios.create({
  params: {
    key: mapKey,
  },
});

export default service;
