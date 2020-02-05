import React from "react";

const BaseSVG = {
    file: 
        <svg xmlns="http://www.w3.org/2000/svg"
            width = "18"
            height = "18"
            viewBox = "0 0 18 18"
        >
            <g 
                fill="none"
                fillRule="evenodd"
            >
                <rect
                    width="18"
                    height="18"
                />
                <path
                    fill="#4F545C"
                    d="M13.5,8.25 L13.5,12.75 C13.5,13.5784271 12.8284271,14.25 12,14.25 L1.5,14.25 C0.671572875,14.25 0,13.5784271 0,12.75 L0,2.25 C0,1.42157288 0.671572875,0.75 1.5,0.75 L9,0.75 L6,0.75 L6,2.25 L1.5,2.25 L1.5,12.75 L12,12.75 L12,8.25 L13.5,8.25 Z M8.22,7.7175 L10.875,11.25 L2.625,11.25 L4.6875,8.6025 L6.1575,10.3725 L8.22,7.7175 Z M12,2.25 L14.25,2.25 L14.25,3.75 L12,3.75 L12,6 L10.5,6 L10.5,3.75 L8.25,3.75 L8.25,2.25 L10.5,2.25 L10.5,0 L12,0 L12,2.25 Z"
                    transform = "translate(2.25 1.5)"
                />
            </g>
        </svg>,
    close:
        <svg
            name="Close"
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 12 12"
        >
            <g
                fill="none"
                fillRule="evenodd"
                aria-hidden="true"
            >
                <path
                    d="M0 0h12v12H0"
                >
                </path>
                <path
                    className="fill"
                    fill="#9e84be"
                    d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
                >
                </path>
            </g>
        </svg>,
    dropdown: ({menuOpen, message}) => (
        <svg
            className={`${menuOpen ? "visible" : ""} message-${message.id}`}
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <g
                fill="none"
                fillRule="evenodd"
            >
                <path
                    d="M24 0v24H0V0z"
                >
                </path>
                <path
                    fill="currentColor"
                    d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                >
                </path>
            </g>
        </svg>
    )
};

export default BaseSVG;