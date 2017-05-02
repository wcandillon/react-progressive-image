# React Progressive Image Loading
Progressively load images using a blur effect.

[![CircleCI](https://circleci.com/gh/wcandillon/react-progressive-image-loading.svg?style=svg)](https://circleci.com/gh/wcandillon/react-progressive-image-loading)
[![npm version](https://badge.fury.io/js/react-progressive-image-loading.svg)](https://badge.fury.io/js/react-progressive-image-loading)

![example](http://i.imgur.com/fL5Qqvj.gif)

## Installation

```bash
$ npm install react-progressive-image-loading --save
```

## Usage

```jsx
<ProgressiveImage preview="/images/tiny-preview.png" src="/images/preview.png">
{(src, style) => <img src={src} style={style} />}
</ProgressiveImage>
```

Instead of using the `img` tag, you can use `background-image` with a `div`.

```jsx
<ProgressiveImage preview="/images/tiny-preview.png" src="/images/preview.png">
{(src, style) => <div style={Object.assign(style, { backgroundImage: `url(${src})` })} />}
</ProgressiveImage>
```

You can also customize the transition time and the timing function used for that transition.

```jsx
<ProgressiveImage
    preview="/images/tiny-preview.png"
    src="/images/preview.png"
    transitionTime={500}
    transitionFunction="ease">
{(src, style) => <img src={src} style={style} />}
</ProgressiveImage>
```
