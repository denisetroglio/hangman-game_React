import "../styles/components/_loading.scss"

const Loading = (props) => {
    if (props.loading === true) {
        return <span className="loading" />
    } else { return null }
}

export default Loading