import PropTypes from 'prop-types';
// import React from 'react'; // ex chỉ cho 1 children
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;

    // ex: chỉ cho phép 1 children / import
    // return React.Children.only(children);
}

// PropTypes
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
