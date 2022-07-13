import React, { useEffect } from 'react'

const Chatbot = () => {
    useEffect(() => {
        // (function (d, m) {
        //     var kommunicateSettings =
        //         { "appId": "35ea2d749bd6e08c2053ac004d2c0e41f", "popupWidget": true, "automaticChatOpenOnNavigation": true };
        //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        //     window.kommunicate = m; m._globals = kommunicateSettings;
        // })(document, window.kommunicate || {});
        (function (d, m) {
            var kommunicateSettings =
                { "appId": "2502a353fc511270616c9b6d38e8235d", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }, [])

    return (
        <div></div>
    )
}

export default Chatbot