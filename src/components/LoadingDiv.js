export const LoadingDiv = ({ height, width, style }) => {
    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                ...style,
            }}
            className="loading-div m-2 p3"
        ></div>
    );
};
