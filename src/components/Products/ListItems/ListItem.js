import { Fragment, useState } from "react";
import AddToCart from "../../../assets/add_cart.svg";
import Modal from "../../UI/Modal";

const ListItem = ({ data, onAdd , onRemove }) => {
    const [showModal, setShowModal] = useState(false)
    // const [counter, count] = useState(0)
    const handleClickAdd = event => {
        event.stopPropagation();
        onAdd(data.id)
        // count(counter + 1)
    }
    const handleClickMinus = event => {
        event.stopPropagation();
        onRemove(data.id)
        // if (counter === 0) { return; }
        // if (counter==1) {onRemove(data.id)}
        // count(counter - 1)
    }
    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }
    return (
        <Fragment>
            <div onClick={handleModal} className={"item-card"}>
                <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
                <div className={"item-card__imformation"}>
                    <div className="pricing">
                        <span>₹{data.discountedPrice} </span>
                        <small>
                            <strike>₹{data.price} </strike>
                        </small>
                    </div>
                    <div className={"title"}>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                {/* <button onClick={() => updateItemTitle(data.id)}>Update the title</button> */}
                {
                    data.quantity < 1 ?
                        <button className={"cart-add"} onClick={handleClickAdd}>
                            <span>Add to Cart</span>
                            <img src={AddToCart} />
                        </button>
                        :
                        <div className={"cart-addon"}>
                            <button onClick={handleClickMinus}><span>-</span></button>
                            <span className={"counter"}>{data.quantity}</span>
                            <button onClick={handleClickAdd}><span>+</span></button>
                        </div>

                }
                {/* <small> {message} </small> */}
                {/* <button className={"cart-add"} onClick={ (handleClick) }>
                    <span>Add to Cart</span>
                    <img src={AddToCart} />
                </button> */}

                {/* <div className={"cart-addon"}>
                <button onClick={handleClickMinus}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={handleClickAdd}><span>+</span></button>
                
    </div> */}
            </div>
            {showModal &&
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className="pricing">
                                <span>₹{data.discountedPrice} </span>
                                <small>
                                    <strike>₹{data.price} </strike>
                                </small>
                            </div>
                            <p>{data.description} </p>
                            {
                                data.quantity < 1 ?
                                    <button className={"cart-add card-add__modal"} onClick={handleClickAdd}>
                                        <span>Add to Cart</span>
                                        <img src={AddToCart} />
                                    </button>
                                    :
                                    <div className={"cart-addon card-addon__modal"}>
                                        <button onClick={handleClickMinus}><span>-</span></button>
                                        <span className={"counter"}>{data.quantity}</span>
                                        <button onClick={handleClickAdd}><span>+</span></button>
                                    </div>

                            }
                        </div>
                    </div>
                </Modal>
            }

        </Fragment>
    )
}

export default ListItem;


