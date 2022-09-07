import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";

/**
 *
 * @param {{type: 'IMAGE'|'VIDEO', list : string[], currentIndex:number, setClose:Function}} param0
 * @returns
 */
export const MediaDisplayer = ({ type, list, currentIndex, setClose }) => {
    const [index, setIndex] = useState(currentIndex);
    const next = () => setIndex((i) => i + 1);
    const prev = () => setIndex((i) => i - 1);
    const close = () => setClose(index);
    useEffect(() => {
        /**
         *
         * @param {KeyboardEvent} e
         */
        const handleKeyPress = (e) => {
            console.log(index);
            if (e.key === "Escape") {
                console.log("escape");
                close();
            } else if (e.key === "ArrowLeft" && index > 0) {
                console.log("left");
                prev();
            } else if (e.key === "ArrowRight" && index < list.length - 1) {
                console.log("right");
                next();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [index, list.length, close]);
    return (
        <div className="media-displayer">
            <button
                className="prev-button"
                onClick={prev}
                disabled={!(index > 0)}
            >
                <IoIosArrowBack style={{ color: "white" }} size={30} />
                {/* <GrPrevious/> */}
            </button>

            {type === "IMAGE" ? (
                <>
                    <img src={list[index]} alt={`file${index}`} />
                </>
            ) : (
                <>video {index}</>
            )}
            <div className="image-close">
                <div>
                    <button onClick={close}>
                        <IoIosClose style={{ color: "white" }} size={30} />
                    </button>
                </div>
                <button
                    className="next-button"
                    onClick={next}
                    disabled={!(index < list.length)}
                >
                    <IoIosArrowForward style={{ color: "white" }} size={30} />
                </button>
                <button style={{ background: "inherit" }}>.</button>
            </div>
        </div>
    );
};
