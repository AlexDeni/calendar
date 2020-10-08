import React from "react";
import Calendar from "../component/Calendar";

const Home = () => {

    return(
        <section className="main_block">
            <div className="meeting_date">
                <div className="meeting_block">
                    <h3>Choose the day<br/>for the meeting</h3>
                    <p>We encourage you to book your<br/>
                        appointment online.<br/>
                        This will save you time.
                    </p>
                </div>
                <Calendar />
            </div>

        </section>
    )
}

export { Home }