const fetch = require('node-fetch-commonjs')
const fs = require('fs')

const assetId = ''

async function download(asset, headers) {
return await fetch(`https://assetdelivery.roblox.com/v1/asset?id=${asset}`, headers ? headers : {})
}
                
async function steal(asset){
response = await download(asset).then(res => res.text())
newId = response.split("<url>").join().split("</url>").join().split(",")[1].replace(/\D/g, '')

res = await download(newId)
res.body.pipe(fs.createWriteStream(`${newId}.png`))
}

steal(assetId)
