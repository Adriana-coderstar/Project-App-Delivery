import React from 'react';
import PropTypes from 'prop-types';

export default function Select({
  name,
  value,
  options,
  dataTestId,
  onChange,
  className,
  labelText,
  // defaultValue,
}) {
  return (
    <section>
      <label
        htmlFor={ name }
      >
        {labelText}
      </label>
      <select
        id={ name }
        name={ name }
        value={ value }
        data-testid={ dataTestId }
        onChange={ onChange }
        className={ className }
        // defaultValue={ defaultValue }
      >
        {/* <option>
          Selecione
        </option> */}
        {options.map((option) => (
          <option
            key={ option.id }
            value={ option.id }
          >
            {option.name}
          </option>
        ))}
      </select>
    </section>
  );
}

Select.propTypes = {
  className: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  dataTestId: PropTypes.string.isRequired,
  // defaultValue: PropTypes.string,
};

Select.defaultProps = {
  onChange: () => {},
  // defaultValue: 'Selecione',
};
