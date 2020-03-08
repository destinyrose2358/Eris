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
    dropdown: ({menuOpen, message, toggleMenu}) => (
        <svg
            className={`${menuOpen ? "visible" : ""} message-${message.id}`}
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={e => {
                toggleMenu(e);
            }}
        >
            <g
                fill="none"
                className={`message-${message.id}`}
                fillRule="evenodd"
            >
                <path
                    d="M24 0v24H0V0z"
                    className={`message-${message.id}`}
                >
                </path>
                <path
                    fill="currentColor"
                    className={`message-${message.id}`}
                    d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                >
                </path>
            </g>
        </svg>
    ),
    erisLogo: (
        <svg
            width="35"
            height="35"
            version="1.1"
            viewBox="0 0 800 850"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m268.01 17.125c-0.4246 0.0047-0.82584 0.01937-1.2031 0.04687l-4.2363 0.30859-3.1523 11.277c-1.7342 6.202-2.8795 11.433-2.543 11.623 0.33653 0.19043 2.8231 0.66635 5.5254 1.0586 6.9398 1.0073 20.769 6.0084 29.588 10.701 23.683 12.602 54.352 36.769 74.107 58.396 7.4534 8.1596 18.893 22.639 18.893 23.914 0 1.7785-21.759-3.149-51.41-11.643-45.052-12.905-67.668-16.738-91.066-15.432-36.993 2.0653-69.456 15.268-102.85 41.826-52.847 42.026-82.815 88.798-98.525 153.78-8.4127 34.796-9.7291 57.809-4.832 84.5 9.697 52.853 35.051 133.25 64.518 204.59 16.574 40.125 41.345 93.549 55.191 119.03 8.492 15.628 21.497 33.423 37.303 51.195 2.6342 2.9621 5.3471 5.9243 8.1289 8.875 2.7818 2.9507 5.6333 5.8894 8.5469 8.8086 10.26 10.28 20.356 19.035 30.355 26.301 0.90903 0.66057 1.8171 1.3074 2.7246 1.9434 15.427 10.813 30.634 18.081 45.857 21.945 0.89547 0.22732 1.7899 0.44268 2.6856 0.64648 1.7919 0.40778 3.5838 0.76807 5.377 1.082 3.025 0.52964 12.25 0.82117 20.5 0.64844 18.598-0.38936 26.74-2.3969 53.947-13.299 10.807-4.3304 20.567-7.6434 22.553-7.6562 2.0826-0.0135 11.195 3.0752 22.5 7.627 3.1449 1.2662 6.0575 2.4164 8.7793 3.4609 1.3609 0.52226 2.6731 1.0175 3.9434 1.4883 1.2709 0.47103 2.4973 0.91769 3.6875 1.3398 1.1897 0.42197 2.3417 0.81953 3.4609 1.1953 12.313 4.134 20.667 5.5526 31.781 6.0117 7.4991 0.30975 16.053 0.0357 21-0.67383 3.6268-0.52014 8.1772-1.573 12.928-2.9258 1.5837-0.45103 3.1913-0.93577 4.793-1.4453 6.4067-2.0382 12.744-4.4753 17.299-6.7695 2.7152-1.3674 5.4704-2.8818 8.2598-4.5332 0.92997-0.55059 1.8655-1.116 2.8027-1.6973 0.93679-0.58098 1.8767-1.1779 2.8203-1.7891 0.94404-0.61147 1.8914-1.2377 2.8418-1.8789 24.709-16.672 51.47-43.331 76.016-76.023 11.877-15.818 37.571-67.117 59.727-118.15 3.4085-7.8514 6.7323-15.696 9.9102-23.404 1.5889-3.8543 3.1428-7.6755 4.6504-11.445 3.1203-7.8026 6.1906-15.702 9.1953-23.643s5.9436-15.924 8.8008-23.895c24.762-69.077 43.384-137.21 45.475-168.96 1.8866-28.651-9.6906-80.197-26.281-117.03-14.377-31.913-37.387-62.321-65.748-87.428-1.1817-1.0461-2.3722-2.0819-3.5723-3.1094-8.4002-7.192-17.244-13.921-26.449-20.09-25.013-16.763-47.284-25.597-72.85-28.898-8.3987-1.0846-19.32-2.854-24.27-3.9316-17.944-3.9065-22.29-4.396-39.5-4.4473-14.81-0.0442-19.11 0.30663-27.975 2.2832-21.373 4.7654-38.72 11.933-55.777 23.047l-9.1703 8.8067c-4.6699 3.6269-14.61 11.344-21.29 11.04-16.995-0.77314-29.533-4.4022 0.20796-2.5186 4.7791 0.0946 12.454-7.8128 18.703-13.912-3.7431-7.3867-17.573-29.596-26.859-41.824-0.67107-0.86436-1.3782-1.7958-1.998-2.5664-22.815-28.364-53.179-52.739-77.27-62.029-8.7482-3.3737-20.182-5.8217-26.551-5.752zm285.82 97.984c0.90992-0.0485 12.832 2.7576 17.111 5.0542 16.923 9.0848 23.928 14.945 34.492 30.305 73.228 106.47 46.552 158.19 46.552 158.19s-61.65-4.3136-131.75-36.26c-21.282-9.782-40.997-19.773-63.815-36.786-28.586-26.319-51.319-41.068-56.859-91.009 1.0827-5.6106 6.7572 3.158 7.7064 10.56 2.426 16.311 8.2433 25.956 18.592 39.814 13.247 17.739 34.296 36.417 57.703 51.197 24.825 15.675 64.813 33.27 96.928 42.648 22.712 6.6323 47.593 11.587 61.986 12.342l5.9863 0.3125 1.4102-4c1.8065-5.1193 1.9159-23.456 0.19922-33.5-4.5373-26.546-17.629-60.056-33.6-86-18.994-30.856-31.719-47.264-55.734-57.748-5.67-2.4754-8.4247-5.0422-6.9082-5.123zm-285.01 41.904c18.31-0.43337 34.509 10.829 34.576 26.594 0.0316 7.3866-3.4654 12.294-11.629 16.312-5.1998 2.5599-8.5859 3.3568-19.326 4.5488-20.433 2.2678-33.503 7.2451-49.951 19.021-10.647 7.6229-17.252 13.477-40.303 35.736-20.732 20.02-28.726 26.639-36.697 30.385-3.2832 1.5428-6.8365 2.3534-10.35 2.3594-4.7204 9e-3 -5.737-0.37559-8.6348-3.2734-8.0036-8.0036-6.4344-25.106 4.2422-46.229 8.6686-17.15 26.438-34.572 52.936-51.898 19.571-12.797 48.989-26.505 60.426-28.156 2.4097-0.34803 7.75-1.7635 11.869-3.1445 4.278-1.4343 8.6164-2.1558 12.842-2.2559z"/>
        </svg>
    )
};

export default BaseSVG;