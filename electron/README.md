
## set up

npm install

## run in local

`./node_modules/electron-prebuilt/cli.js ./`

## debug

`open index.html` in your browser

## build(for electron user)

https://github.com/atom/asar

`./node_modules/asar/bin/asar pack ./ ./bin/electronSample.asar`

`./node_modules/electron-prebuilt/cli.js ./bin/electronSample.asar`

## build(for each platform)

https://github.com/maxogden/electron-packager

`./node_modules/electron-packager/cli.js ./ electronSample --platform=linux,win32,darwin --arch=x64 --version=0.36.2`


