/*
 * @Author: kingford
 * @Date: 2021-05-19 10:37:22
 * @LastEditTime: 2021-06-13 01:03:01
 */
import { isObject } from '../validate/instanceof';
/**
 * 数组转树结构
 * @param arr 数组
 * @param id 条件id
 * @param pid 父级id
 * @param childName 子节点集合属性名
 */
export function arrToTree(arr, id = 'id', pid = 'parentId', childName = 'children') {
  const tree = [];
  let tempnode = {};
  const map = {};
  for (const node of arr) {
    map[node[id]] = node;
    node[childName] = [];
  }
  for (const node of arr) {
    tempnode = node[pid];
    if (tempnode) {
      map[tempnode][childName].push(node);
    } else {
      tree.push(node);
    }
  }
  return tree;
}
/**
 * 数组转Json {'':''}
 * @param arr 数组
 * @param key 字段
 */
export function arrToJson(arr, key = 'id') {
  const pos = {};
  for (const no of arr) {
    pos[no[key]] = no;
  }
  return pos;
}
/**
 *  数组转Json(json嵌套数组) {'':[]}
 * @param arr 数组
 * @param key 字段
 */
export function arrToJsonArr(arr, key = 'id') {
  const pos = {};
  for (const x of arr) {
    if (!pos[x[key]]) {
      pos[x[key]] = [];
    }
    pos[x[key]].push(x);
  }
  return pos;
}
/**
 * json转数组
 * @param value object数组
 */
export function jsonToArr(value) {
  if (!isObject(value)) {
    return [];
  }
  const temps = [];
  let temp = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      temp = value[key];
      temps.push(temp);
    }
  }
  return temps;
}
/**
 * 获取树结构子节点
 * @param arr 数组
 * @param key 字段
 * @param childName 子节点集合属性名
 */
export function getTreeNode(arr, key = 'id', childName = 'children') {
  const arrs = [];
  let temp = [];
  const getChild = array => {
    for (const ar of array) {
      arrs.push(ar[key]);
      temp = ar[childName];
      if (temp && temp.length > 0) {
        getChild(temp);
      }
    }
    return arrs;
  };
  return getChild(arr);
}
