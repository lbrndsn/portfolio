import React, {useEffect, useRef} from "react";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";
import linkedIn from "../img/linked-in.svg";
import envelop from "../img/envelope-solid.svg";


const Contact = observer(({id}) => {
    const routeStore = useRouteStore();
    const ref = useRef(null);

    useEffect(() => {
        routeStore[id] = ref;
    }, []);

    return (
        <div className="fixed page" ref={ref}>
            <div className="page-inner">
                <h1>Find me</h1>
                <h2>Contact me anytime! 🛎</h2>
                <p>Seriously, try and contact me at 3 AM. On your own risk, of course. I probably won't reply until the next morning. But still, feel free to try.</p>
                <div className="contact-buttons">

                    <a href="mailto:me@loisberndsen.nl">
                        <svg width="46px" height="35px" viewBox="0 0 46 35" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="envelope-solid" transform="translate(-394.000000, -724.000000)">
                                    <g transform="translate(394.000000, 724.000000)">
                                        <path
                                            d="M45.1285156,11.3921875 C45.4789063,11.1136719 46,11.3742187 46,11.8144531 L46,30.1875 C46,32.5683594 44.0683594,34.5 41.6875,34.5 L4.3125,34.5 C1.93164062,34.5 0,32.5683594 0,30.1875 L0,11.8234375 C0,11.3742187 0.512109375,11.1226562 0.871484375,11.4011719 C2.88398437,12.9644531 5.55234375,14.95 14.7164062,21.6074219 C16.6121094,22.9910156 19.8105469,25.9019531 23,25.8839844 C26.2074219,25.9109375 29.46875,22.9371094 31.2925781,21.6074219 C40.4566406,14.95 43.1160156,12.9554687 45.1285156,11.3921875 Z M23,23 C25.084375,23.0359375 28.0851563,20.3765625 29.5945312,19.2804688 C41.5167969,10.6285156 42.4242187,9.87382813 45.1734375,7.71757813 C45.6945312,7.31328125 46,6.684375 46,6.01953125 L46,4.3125 C46,1.93164063 44.0683594,2.55351296e-15 41.6875,2.55351296e-15 L4.3125,2.55351296e-15 C1.93164062,2.55351296e-15 0,1.93164063 0,4.3125 L0,6.01953125 C0,6.684375 0.30546875,7.30429688 0.8265625,7.71757813 C3.57578125,9.86484375 4.48320313,10.6285156 16.4054688,19.2804688 C17.9148437,20.3765625 20.915625,23.0359375 23,23 Z"
                                            id="Shape" fill="#000000" fill-rule="nonzero"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/loisberndsen/" target="_blank">
                        <svg width="46px" height="46px" viewBox="0 0 46 46" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="linkedin-in-brands" transform="translate(-316.000000, -712.000000)">
                                    <g transform="translate(316.000000, 712.000000)">
                                        <path
                                            d="M10.2966071,46 L0.759821429,46 L0.759821429,15.2881537 L10.2966071,15.2881537 L10.2966071,46 Z M5.52308036,11.0987745 C2.47352679,11.0987745 0,8.57282522 0,5.52320357 C0,2.47282245 2.47276734,0 5.52308036,0 C8.57339338,0 11.0461607,2.47282245 11.0461607,5.52320357 C11.0461607,8.57282522 8.57160714,11.0987745 5.52308036,11.0987745 Z M45.9897321,46 L36.4734821,46 L36.4734821,31.0496663 C36.4734821,27.4866403 36.4016071,22.9173419 31.5151339,22.9173419 C26.5567857,22.9173419 25.7969643,26.7884104 25.7969643,30.7929641 L25.7969643,46 L16.2704464,46 L16.2704464,15.2881537 L25.4170536,15.2881537 L25.4170536,19.4775329 L25.5505357,19.4775329 C26.82375,17.0645326 29.9338839,14.5180472 34.5739286,14.5180472 C44.2257143,14.5180472 46,20.8739927 46,29.1295341 L46,46 L45.9897321,46 Z"
                                            id="Shape" fill="#000000" fill-rule="nonzero"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
});

export default Contact;
