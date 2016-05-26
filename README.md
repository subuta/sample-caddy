### Sample repository of jspm with caddy

#### Prerequisites
```
node: v5.5.0
```

#### how to install
```
npm install jspm@beta -g
brew install caddy
NODE_ENV=development npm i
jspm i
```

#### run file-watcher(for hot-reloading)
```
npm run watch
```

#### (optional) run file-watcher in Atom.
if you want to do this step, previous step should be ignored.
- install [jspm-dev-buddy](https://atom.io/packages/jspm-dev-buddy)
- press `ctrl+shift+j` to show setting dialog
- set Port to `8090` and press `Start up` button.
- open app http://localhost:3000

#### run
```
caddy
```
