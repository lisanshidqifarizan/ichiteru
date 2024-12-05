import React from "react";
import '../style/popup.css'

const Popup = ({ onClose, onGo }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p>Halo Chii udah siap liat?</p>
                <div>
                    <button onClick={onGo} id="button-yes">Let's goo ^o^/</button>
                    <button onClick={onClose} id="button-no">Nahhh :[</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;