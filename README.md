A sample website showing how to use ImageEngine to display highly optimized images on your React NextJS application.

To install it locally:

`git clone https://github.com/mnussbaumer/ie-nextjs-sample.git`

Followed by:

```
cd ie-nextjs-sample
npm install
npm run dev
```


To build a static website for deployment, once you have an ImageEngine distribution:

`DELIVERY_ADDRESS="https://your-image-engine.cdn.imgeng.in" npm run static`

or

`DELIVERY_ADDRESS="https://your-image-engine.cdn.imgeng.in" NON_OPTIMIZED_ADDRESS="http://bucket-name.s3-website-us-west-2.amazonaws.com" npm run static`

