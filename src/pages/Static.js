import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    addImagesUrl,
    baseUrl,
    deleteImageUrl,
    getStaticImagesUrl,
} from "../constants";
import { LoadingDiv } from "../components/LoadingDiv";
import { EditButton } from "../components/EditButton";
import {
    AiOutlineLoading3Quarters,
    AiFillFileAdd,
    AiFillDelete,
} from "react-icons/ai";
import { MediaDisplayer } from "../components/MediaDisplayer";
export const Static = () => {
    const [images, setImages] = useState([]);
    const [height, setHeight] = useState(460);
    const imageRef = useRef();
    const addImageRef = useRef();
    const loggedIn = localStorage.getItem("accessToken");
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [addImageAt, setAddImageAt] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [displayMedia, setDisplayMedia] = useState(-1);
    const closeDisplayImage = (lastIndex) => {
        // console.log(lastIndex, document.getElementsByTagName('img'));
        document.getElementsByTagName("img")[lastIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setDisplayMedia(-1);
    };
    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
        axios
            .get(baseUrl + getStaticImagesUrl)
            .then((data) => {
                const urls = data?.data?.urls;
                if (!urls) {
                    return;
                }
                setImages(urls);
            })
            .catch((e) => console.log(e));
    }, [refresh]);
    const addImagePressed = (index) => {
        setAddImageAt(index);
        addImageRef.current.click();
    };
    const handleUpload = async (files) => {
        setLoading(true);
        const filesArray = Array.from(files);
        const data = new FormData();
        filesArray.forEach((f) => {
            data.append("file[]", f);
        });
        data.append("type", "STATIC");
        data.append("index", addImageAt);
        try {
            await axios.post(baseUrl + addImagesUrl, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${loggedIn}`,
                },
            });
            setLoading(false);
            setRefresh(!refresh);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };
    const deleteImage = async (index) => {
        setLoading(true);
        try {
            await axios.delete(baseUrl + deleteImageUrl, {
                data: {
                    type: "STATIC",
                    removedIndexes: [index],
                },
                headers: {
                    Authorization: `Bearer ${loggedIn}`,
                },
            });
            setLoading(false);
            setRefresh(!refresh);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };
    useEffect(() => {
        if (images.length) {
            // console.log(imageRef.current.clientWidth);
            setHeight(((imageRef?.current?.clientWidth || 430) * 460) / 430);
        }
    }, [imageRef, images]);
    const style = {
        maxWidth: "430px",
        display: "flex",
        height: `${height}px`,
        width: "100%",
        minWidth: "150px",
    };
    const imagesDivs = images.map((elem, index) => (
        <div
            key={`${index}`}
            className="m-1 small-mr-3 small-ml-3 box-hover"
            style={style}
        >
            {editMode && (
                <>
                    {loading ? (
                        <AiOutlineLoading3Quarters />
                    ) : (
                        <div className="operation-buttons">
                            <button onClick={() => addImagePressed(index)}>
                                <AiFillFileAdd fontSize={"xx-large"} />
                            </button>
                            <button onClick={() => deleteImage(index)}>
                                <AiFillDelete fontSize={"xx-large"} />
                            </button>
                        </div>
                    )}
                </>
            )}
            <img
                ref={imageRef}
                style={style}
                alt={`static_${index}`}
                src={elem}
                onClick={() => setDisplayMedia(index)}
                // loading="lazy"
            />
        </div>
    ));
    const loadingDivs = [
        <LoadingDiv key={1} style={style} />,
        <LoadingDiv key={2} style={style} />,
        <LoadingDiv key={3} style={style} />,
        <LoadingDiv key={4} style={style} />,
        <LoadingDiv key={5} style={style} />,
        <LoadingDiv key={6} style={style} />,
    ];
    return (
        <div>
            {Boolean(loggedIn) && (
                <>
                    <input
                        type={"file"}
                        multiple={true}
                        name={`image`}
                        className="small-only big-only"
                        onChange={(e) => handleUpload(e.target.files)}
                        ref={addImageRef}
                    />
                    <EditButton onClick={() => setEditMode(!editMode)} />
                    <button
                        type="submit"
                        className={"submit-button"}
                        onClick={() => {
                            localStorage.removeItem("accessToken");
                            window.location.reload();
                        }}
                        style={{ marginLeft: "10px" }}
                    >
                        Logout
                    </button>
                </>
            )}
            {displayMedia > -1 ? (
                <MediaDisplayer
                    list={images}
                    currentIndex={displayMedia}
                    setClose={(lastIndex) => closeDisplayImage(lastIndex)}
                    type="IMAGE"
                />
            ) : (
                <></>
            )}
            <div
                className="static-images d-flex-wrap flex-center mt-5"
                style={{ minHeight: "100vh" }}
            >
                {imagesDivs.length > 0 ? imagesDivs : loadingDivs}
            </div>
        </div>
    );
};
