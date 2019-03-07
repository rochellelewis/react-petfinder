# react-petfinder
Simple React demo app 

You're going to need Petfinder API keys: https://www.petfinder.com/developers/api-key

This project utilizes the Parcel bundler, and it's pretty awesome. https://parceljs.org/ 

After installing npm packages, run `npm run dev` to start local dev server at `localhost:1234`

Full demo project lesson notes here: https://btholt.github.io/complete-intro-to-react-v4/

## Debugging

Parcel is an ever evolving project that's just getting better. If you run into problems with it not respecting changes (particularly to your `.babelrc` or `.env` files) then delete the `dist/` and the `.cache/` directories. You can do this in bash by running from the root directoy of your project `rm -rf dist/ .cache/` or just by deleting those directories in your editor. This will force Parcel to start over and not cache anything.

See [this issue](https://github.com/btholt/complete-intro-to-react-v4/issues/3#issuecomment-425124265) for more specific instructions.
