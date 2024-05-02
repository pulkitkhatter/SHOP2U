import { Fragment } from "react"
import { BackDrop } from "./Loader"
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) =>{
    return(
        <Fragment>
            {
                ReactDOM.createPortal(
                    <Fragment>
                        <BackDrop onClose = {onClose} />
                        <div className="modal">
                            <button type="close" onClick={onClose}>X</button>
                            <div className="content">{children} </div>
                        </div>
                    </Fragment>
                    ,
                    document.getElementById('modal-root')
                )
            }
        </Fragment>
    )
}


export default Modal