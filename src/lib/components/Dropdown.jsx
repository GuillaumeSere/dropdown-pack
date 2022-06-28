import PropTypes from 'prop-types';
import './dropdown.css';

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
 function Dropdown({
  className,
  id,
  label,
  select,
  handleChange,
})

{
  return (
    <div className={`form-newEmployee--inputWrapper`}>
      <label htmlFor="">label</label>
      <select
        className="dropdownList"
        id={id}
        onChange={handleChange}
        aria-required="true"
        required
      >
          <option
            title="dropdownOption"
            type="text"
            value=""
            key="1"
          >
            label-1
          </option>
          <option
            title="dropdownOption"
            type="text"
            value=""
            key="2"
          >
            label-2
          </option>
          <option
            title="dropdownOption"
            type="text"
            value=""
            key="3"
          >
            label-3
          </option>
      </select>
    </div>
  );
};

/**
 * Dropdown PROPTYPES
 */
Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  select: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Dropdown;