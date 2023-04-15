import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";

const Messenger = () => {
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMsg(true);
        }, 1200);
        return () => timer;
    });

    return (
        <Link
            aria-label="messenger"
            className={
                !msg
                    ? "fixed right-4 bottom-8 transition-transform duration-1000 z-50 translate-x-[200%]"
                    : "fixed right-4 hover:scale-110 bottom-8 translate-x-0 transition-transform duration-500 z-50"
            }
            to="https://www.facebook.com/profile.php?id=100090402000669"
        >
            <div className="flex items-center justify-center bg-gradient-to-tr from-blue-600 to-blue-800 py-2 px-4 rounded-xl">
                <svg
                    className="h-auto w-5 md:w-6"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 48.5C0 20.6313 21.8313 0 50 0C78.1687 0 100 20.6313 100 48.5C100 76.3688 78.1687 97 50 97C44.9375 97 40.0875 96.3313 35.525 95.0813C34.6403 94.8351 33.6978 94.9013 32.8562 95.2688L22.9312 99.6562C22.3318 99.9207 21.6766 100.034 21.0232 99.9857C20.3698 99.9376 19.7383 99.7298 19.184 99.3804C18.6298 99.0311 18.1698 98.551 17.8446 97.9822C17.5193 97.4135 17.3388 96.7736 17.3187 96.1187L17.0437 87.225C17.0248 86.6837 16.8958 86.1518 16.6648 85.6619C16.4338 85.1719 16.1055 84.7341 15.7 84.375C5.975 75.675 0 63.075 0 48.5ZM34.6625 39.3813L19.975 62.6813C18.5688 64.9188 21.3125 67.4375 23.4187 65.8437L39.2 53.8688C39.719 53.4745 40.3524 53.26 41.0042 53.2578C41.6559 53.2555 42.2907 53.4656 42.8125 53.8562L54.4937 62.6188C55.3226 63.2403 56.2711 63.6834 57.2797 63.9201C58.2883 64.1568 59.3349 64.182 60.3537 63.9941C61.3725 63.8062 62.3413 63.4092 63.1991 62.8283C64.0568 62.2474 64.7849 61.4951 65.3375 60.6188L80.025 37.3188C81.4375 35.0813 78.6875 32.5625 76.5813 34.1563L60.8 46.1313C60.2809 46.5255 59.6476 46.7399 58.9958 46.7422C58.3441 46.7445 57.7093 46.5344 57.1875 46.1437L45.5063 37.375C44.6774 36.7535 43.7289 36.3104 42.7203 36.0737C41.7117 35.837 40.6651 35.8118 39.6463 35.9997C38.6275 36.1876 37.6587 36.5845 36.8009 37.1654C35.9432 37.7464 35.2151 38.5049 34.6625 39.3813Z"
                        fill="#f3f4f6"
                    />
                </svg>
                <p className="text-gray-100 ml-2">Chat</p>
            </div>
        </Link>
    );
};

export default Messenger;
