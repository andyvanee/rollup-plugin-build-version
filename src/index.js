"use strict"

var fs = require("fs")

const defaultFormatter = () => {
    return Date.now()
}

const version = (opts = {}) => {
    const { path = "./build-version.txt", formatter = null } = opts

    const fmt = formatter ? formatter : defaultFormatter

    if (typeof fmt != "function") {
        throw "formatter must be a function!"
    }

    return {
        name: "build-version",
        writeBundle: () => {
            setImmediate(async () => {
                const v = fmt().toString()
                const f = await fs.promises.open(path, "w")
                await f.writeFile(`${v}\n`)
                await f.close()
                console.log(`build-version ${v} → ${path}`)
            })
        }
    }
}

module.exports = version
