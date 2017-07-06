'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var NextLink = require('next/link').default;

var Children = React.Children;

var Link = function (_NextLink) {
  _inherits(Link, _NextLink);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string
      // (<Link>example</Link>) we wrap it in an <a> tag
      // if (typeof children === 'string') {
      //   children = <a>{children}</a>;
      // }

      // This will return the first child, if multiple are provided it will throw an error

      var child = Children.only(children);
      var props = {
        onClick: this.linkClicked
      };

      // If child is an <a> tag and doesn't have a href attribute we specify it so that
      // repetition is not needed by the user

      // if (child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
      // }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      // if (
      //   props.href &&
      //   typeof __NEXT_DATA__ !== 'undefined' &&
      //   __NEXT_DATA__.nextExport
      // ) {
      //   props.href = _rewriteUrlForNextExport(props.href);
      // }

      return React.cloneElement(child, props);
    }
  }]);

  return Link;
}(NextLink);

module.exports = Link;