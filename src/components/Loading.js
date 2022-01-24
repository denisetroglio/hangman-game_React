import "../styles/components/_loading.scss"
import PropTypes from 'prop-types';

const Loading = (props) => {
    if (props.loading === true) {
        return <span className="loading" />
    } else { return null }
}


Loading.defaultProps = {
    loading: false
};

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loading