import React from "react";
import {connect} from "react-redux";
import {closeModalDate} from "../../store/Date/action";
import { Month } from "../../config";
import { DayWeek } from "../../config";

const Modal = ({date, isModalOpen, closeModal}) => {

    const handleModal = () => {
        closeModal('')
    }

    if (isModalOpen && date) {
        console.log()
        return (
            <div className="modal_block">
                <div className="modal_window">
                    <button className="close_modal_btn" onClick={handleModal}>&times;</button>
                    <div className="modal_window_content">
                        <div className="modal_input_info">
                            <p>Month</p>
                            <input type="text"
                                   defaultValue={Month[date.getMonth()]}
                                   disabled
                            />
                        </div>
                        <div className="modal_input_info">
                            <p>Day</p>
                            <input type="text"
                                   disabled
                                   defaultValue={`${date.getDate()}th ${DayWeek[date.getDay()]}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

const mapStateToProps = (store) => {
    return{
        date: store.date,
        isModalOpen: store.isModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        closeModal: (date) => dispatch(closeModalDate(date))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
