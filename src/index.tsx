import * as React from "react";

export interface ProgressiveImageProps {
    preview: string;
    src: string;
    transitionTime?: number;
    timingFunction?: string;
    initialBlur: number;
}

export interface ProgressiveImageState {
    src: string;
    blur: number;
}

export class ProgressiveImage extends React.Component<ProgressiveImageProps, ProgressiveImageState> {

    static defaultProps = {
        transitionTime: 500,
        timingFunction: "ease",
        initialBlur: 10
    };

    componentWillMount() {
        const {src, preview} = this.props;
        const initialBlur = this.props.initialBlur as number;
        this.fetch(preview)
            .then(previewDataURI => this.setState({ src: previewDataURI, blur: initialBlur }))
            .then(() => this.fetch(src))
            .then(srcDataURI => this.setState({ src: srcDataURI, blur: initialBlur }));
    }

    render() {
        const {src} = this.state;
        const {children} = this.props;
        if (!children || typeof children !== 'function') {
            throw new Error("ProgressiveImage requires a function as its only child");
        }
        return children(src, this.getStyle());
    }

    private fetch(src: string): Promise<string> {
        return new Promise(resolve => {
            const image = new Image();
            image.src = src;
            image.addEventListener("load", () => resolve(src), false);
        });
    }

    private getStyle() {
        const {transitionTime, timingFunction} = this.props;
        const {blur} = this.state;
        return {
            filter: `blur(${blur}px)`,
            transition: `filter ${transitionTime}ms ${timingFunction}`
        };
    }
}
