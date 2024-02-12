import { useState, useEffect } from 'react';

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var paginate = function paginate(items, currentPage, resultPerPage) {
  if (items instanceof Array) {
    var startIndex = (currentPage - 1) * resultPerPage;
    return {
      items: items.slice(startIndex, startIndex + resultPerPage)
    };
  } else {
    throw new Error("Array is required.");
  }
};
var usePagination = function usePagination() {
  var initialArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    _ref$resultPerPage = _ref.resultPerPage,
    resultPerPage = _ref$resultPerPage === void 0 ? 1 : _ref$resultPerPage,
    _ref$alwaysVisible = _ref.alwaysVisible,
    alwaysVisible = _ref$alwaysVisible === void 0 ? true : _ref$alwaysVisible;
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    totalPage = _useState4[0],
    setTotalPage = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    pageCount = _useState6[0],
    setPageCount = _useState6[1];
  var _paginate = paginate(initialArray, currentPage, resultPerPage),
    items = _paginate.items;
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    pages = _useState8[0],
    setPages = _useState8[1];
  useEffect(function () {
    setTotalPage(Math.ceil(initialArray.length / resultPerPage));
    setPageCount(totalPage === 1 && !alwaysVisible ? 0 : totalPage);
    setPages(_toConsumableArray(Array(pageCount).keys()).map(function (key) {
      return key + 1;
    }));
  }, [alwaysVisible, pageCount, initialArray.length, totalPage, resultPerPage]);
  return {
    items: items,
    pages: pages,
    setCurrentPage: setCurrentPage,
    currentPage: currentPage
  };
};

export default usePagination;
//# sourceMappingURL=index.es.js.map
