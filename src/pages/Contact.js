import React, {useRef} from "react";

const Contact = () => {
    const pageEl = useRef(null);

    return (
        <div className="fixed page" ref={pageEl}>
            <div className="page-inner">
                <h1>Contact</h1>
            </div>
        </div>
    )
};

export default Contact;
