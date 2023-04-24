import * as React from "react";

const LiveBacground = () => (
    <div class="animateme opacity-30">
        <ul class="bg-bubbles">
            {Array.from({ length: 13 }).map((_, i) => (
                <li key={i}></li>
            ))}
        </ul>
    </div>
);

export default LiveBacground;
