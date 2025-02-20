import { computePosition, shift, offset, autoPlacement, arrow, autoUpdate } from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm";


export const updatePosition = (
    referenceElement,
     tooltipClassName,
      arrowElementClassName,
       tooltipValueText,
        arrowPadding,
         allowedPlacements
) => {
        window.addEventListener("DOMContentLoaded", () => {
            let tooltip = document.createElement("div");
            tooltip.classList.add(tooltipClassName);

            let newarrowElement = document.createElement("div");
            newarrowElement.classList.add(arrowElementClassName);

            const textNode = document.createTextNode(tooltipValueText);
            tooltip.append(textNode);

            const fragment = document.createDocumentFragment();
            const container = document.querySelector("main > div");

            tooltip.append(newarrowElement);
            fragment.append(tooltip);
            container.appendChild(fragment);



            const update = () => {
                const arrowElement = document.querySelector(`.${arrowElementClassName}`);

                computePosition(referenceElement, tooltip, {
                    middleware: [
                        offset(6),
                        
                        shift({ padding: 5 }),

                        autoPlacement({
                            allowedPlacements: allowedPlacements
                        }),

                        arrow((state) => ({
                            element: arrowElement,
                            padding: arrowPadding ? 5 : state.reacts.reference.width,
                        })),
                    ],

                }).then(({ x, y, placement, middlewareData }) => {
                        Object.assign(tooltip.style, {
                            left: `${x}px`,
                            top: `${y}px`,
                        });


                        const { x: arrowX, y: arrowY } = middlewareData.arrow;

                        const staticSide = {
                            top: 'bottom',
                            right: 'left',
                            bottom: 'top',
                            left: 'right',
                        }[placement.split('-')[0]];

                        Object.assign(arrowElement.style, {
                            right: arrowX != null ? `${arrowX}px` : '',
                            top: arrowY != null ? `${arrowY}px` : '',
                            left: '',
                            bottom: '',
                            [staticSide]: '-4px',
                        });
                });
            }

            const cleanup = autoUpdate(referenceElement, tooltip, update);

            const showTooltip = () => {
                tooltip.style.display = 'block';
                update();
            }

            const hideTooltip = () => {
                tooltip.style.display = '';
                cleanup();
            }

            referenceElement.addEventListener('mouseenter', showTooltip);
            referenceElement.addEventListener('mouseleave', hideTooltip);
            referenceElement.addEventListener('focus', showTooltip);
            referenceElement.addEventListener('blur', hideTooltip);
        });
    };