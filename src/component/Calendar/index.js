import React, { useState } from 'react'
import { connect } from "react-redux";
import { getMonthDat } from './../../config/index'
import { openModalDate } from "../../store/Date/action";
import { Month, Days } from "./../../config/index";

const Calendar = ({selectDates}) => {
    let date = new Date()

    const [monthYear, setMonthYear] = useState(date)
    const [showModal, setShowModal] = useState(false)

    let dateMonth = getMonthDat(monthYear.getFullYear(), monthYear.getMonth())

    const handlePrevMonth = () => {
        const month = new Date(monthYear.getFullYear(), monthYear.getMonth()-1)
        setMonthYear(month)
    }
    const handleNextMonth = () => {
        const month = new Date(monthYear.getFullYear(), monthYear.getMonth()+1)
        setMonthYear(month)
    }
    const handleChangeDate = (date) => {
        setShowModal(!showModal)
        selectDates(date)
    }

    return (
        <div className="calendar_block">
            <div className="calendar_block_header">
                <button onClick={handlePrevMonth}>&#8249;</button>
                <span className="calendar_month">{Month[monthYear.getMonth()]} - {monthYear.getFullYear()}</span>
                <button onClick={handleNextMonth}>&#8250;</button>
            </div>
            <table className="calendar_block_day">
                <tbody>
                    {dateMonth.map((week, index)=>
                        <tr key={index}>
                            {week.map((day,index2)=> day ?
                                <td key={index2}
                                    onClick={()=>handleChangeDate(day)}
                                    className="calendar_date"
                                >
                                    {day.getDate()}
                                </td> :
                                <td key={index2}/>
                            )}
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr className="calendar_week_name">
                        {Days.map((year , index)=> {
                            return <td key={index}>{year}</td>
                        })}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        selectDates: (date) => dispatch(openModalDate(date)),
    }
}

export default connect(null, mapDispatchToProps)(Calendar)
