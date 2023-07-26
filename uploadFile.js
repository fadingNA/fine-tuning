import {openai} from './api.js'
import fs from 'fs'

async function upload() {
    console.log("Start Upload Function")
    try {
        const res = await openai.createFile(
            fs.createReadStream('./datasets_prepared.jsonl'),
            "fine-tune"
        )
        // debug
        console.log('File ID : <', res.data.id, '>')
    } catch (err) {
        console.log('err: ', err)
    }
}

upload()