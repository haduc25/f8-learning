import PropTypes from 'prop-types';

function Menu({ children }) {
    return <nav>{children}</nav>;
}

// PropTypes
Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
