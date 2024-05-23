import "./notification.css";

const Notification = () => {
   return(
      <div id="notify">
        <div className="d-flex align-items-center">
            <div className="notify-status d-flex justify-content-center align-items-center px-3 px-md-4 fs-1">
                <i className="fa-solid fa-circle-check"></i>
                <i className="fa-solid fa-bug"></i>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <i className="fa-regular fa-comment-dots"></i>
            </div>
    
            <div className="notify-content">
                <div id="notify-title">This is title</div>
                <div id="notify-message">This is a example message.</div>
            </div>
             
            <div id="notify-close-button" className="justify-content-center align-items-center px-2 px-md-3 fs-3">
                <i className="w-75 p-3 text-secondary fa-solid fa-xmark"></i>
            </div>
        </div>

        <div className="w-100 py-3 pe-4 justify-content-end notify-response" id="notify-response">
            <button className="ok me-2 fw-bold" id="ok">Ok</button>
            <button className="cancell fw-bold" id="cancell">Hủy</button>
        </div>
    </div>
   )
};

export default Notification;
