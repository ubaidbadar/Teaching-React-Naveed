import ReactDOM from 'react-dom';

const Portal = ({children, id = "modals"}) => (
    ReactDOM.createPortal(children, document.getElementById(id))
)

export default Portal;