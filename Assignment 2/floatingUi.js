import { updatePosition } from "./index.js";

const referenceElement = document.querySelector("blockquote");

updatePosition(
    referenceElement,
    'right',
    'arrowRight',
    'Note at the right',
    true,
    ["top-end", "right-start"]
)
updatePosition(
    referenceElement,
    'bottom',
    'arrowBottom',
    'Note Below',
    false,
    ["bottom-start", "left-end"]
)
updatePosition(
    referenceElement,
    'top',
    'arrowTop',
    'Note above',
    false,
    ["top-start", 'left-start']
)