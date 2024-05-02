import ReactDOM from "react-dom";

export const BackDrop = props => {
    const handleClick = () =>{
        if(props.onClose){
            props.onClose();
        }
    }
    return(
        <div className="loader-overlay" onClick={handleClick}></div>
    )
}

const Loader = () =>{
    return(
        ReactDOM.createPortal(
            <>
            <BackDrop/>
            <div className="loader-overlay"></div>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
            </>,
            document.getElementById("loader-root")
        )
    
        
    )
}
export default Loader;