"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./dropdown.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dropdown
 *
 * @param   {object}      props
 * @param   {string}      props.className        [input wrapper className]
 * @param   {string}      props.id               [label "html for" identifiant]
 * @param   {string}      props.label            [label name]
 * @param   {object}      props.select           [select data for mapping]
 * @param   {function}    props.handleChange     [handling input change]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
function Dropdown(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      select = _ref.select,
      handleChange = _ref.handleChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "form-newEmployee--inputWrapper"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "label"), /*#__PURE__*/React.createElement("select", {
    className: "dropdownList",
    id: id,
    onChange: handleChange,
    "aria-required": "true",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    title: "dropdownOption",
    type: "text",
    value: "",
    key: "1"
  }, "label-1"), /*#__PURE__*/React.createElement("option", {
    title: "dropdownOption",
    type: "text",
    value: "",
    key: "2"
  }, "label-2"), /*#__PURE__*/React.createElement("option", {
    title: "dropdownOption",
    type: "text",
    value: "",
    key: "3"
  }, "label-3")));
}

;
/**
 * Dropdown PROPTYPES
 */

Dropdown.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string.isRequired,
  select: _propTypes.default.array.isRequired,
  handleChange: _propTypes.default.func.isRequired
};
var _default = Dropdown;
exports.default = _default;
