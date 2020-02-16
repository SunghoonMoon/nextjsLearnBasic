webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/moonsunghoon/Desktop/Source/react/project-one/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  // const { data, error } = useSWR('/api/randomQuote', fetcher)
  // const author = data?.author
  // console.log('author: ', author)
  // let quote = data?.quote
  if (!data) quote = 'Loading...';
  if (error) quote = 'Faild to fetch the quote.';
  return __jsx("main", {
    className: "jsx-1717259907" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1717259907" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-1717259907" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1717259907",
    __self: this
  }, "main.jsx-1717259907{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1717259907{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1717259907{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb29uc3VuZ2hvb24vRGVza3RvcC9Tb3VyY2UvcmVhY3QvcHJvamVjdC1vbmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUcrQixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXhCLFVBWEEsT0FNQSIsImZpbGUiOiIvVXNlcnMvbW9vbnN1bmdob29uL0Rlc2t0b3AvU291cmNlL3JlYWN0L3Byb2plY3Qtb25lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvcmFuZG9tUXVvdGUnLCBmZXRjaGVyKVxuICAgIC8vIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvclxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRob3I6ICcsIGF1dGhvcilcbiAgICAvLyBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZVxuXG4gICAgaWYgKCFkYXRhKSBxdW90ZSA9ICdMb2FkaW5nLi4uJ1xuICAgIGlmIChlcnJvcikgcXVvdGUgPSAnRmFpbGQgdG8gZmV0Y2ggdGhlIHF1b3RlLidcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbiAgICAgICAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/moonsunghoon/Desktop/Source/react/project-one/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.093c9e455b8c1ffd3079.hot-update.js.map