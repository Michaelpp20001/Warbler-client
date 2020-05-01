import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import DeafaultProfileImg from  "../images/default-profile-image.jpg";

const MessageItem = ({date, profileImageUrl, text, username}) => (
    <div>
        <img src={profileImageUrl || DeafaultProfileImg} alt={username} height="100" width="100"></img>
        <div className="message-area">
            <Link to="/">@{username} </Link>
            <span className="text-muted">
                <Moment className="text-muted" format="Do MMM YYYY">
                    {date}
                </Moment>
            </span>
            <p>{text}</p>
        </div>
    </div>
)

export default MessageItem;