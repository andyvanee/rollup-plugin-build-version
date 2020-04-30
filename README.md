# rollup-plugin-build-version

This plugin will write a version file each time rollup runs. You will likely
only need this if you have another build or automation tool (such as Make,
nodemon, etc) that needs to be aware of when rollup has run.

## Usage

```javascript
// rollup.config.js

import version from "rollup-plugin-build-version"

export default {
    input: "src/index.js",
    output: {
        file: "dist/app.js",
        format: "esm"
    },
    plugins: [version()]
}
```

This will write a file named `build-version.txt` to the project directory with
the current timestamp in milliseconds.

### Configuration

**path**

Type: `String`

If you want to write to a different file:

```javascript
version({ path: "my-file.txt" })
```

**formatter**

Type: `Function`

If you want to write something different to the file:

```javascript
version({ formatter: () => `Hello world ${Date.now()}` })
```

## License

MIT
