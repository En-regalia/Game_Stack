// Holding comment. File ready for CSV import of BoardGameGeek boardgame libary to Games table in db

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const os = require("os");

const zip_URL = `https://geek-export-stats.s3.amazonaws.com/boardgames_export/boardgames_ranks_${date.now()}.zip?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20250923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250923T123327Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=8bc216f6637f3291799408aa418678406ebc653ecabe4b7d07b8746905d9ad33`

async function downloadZIP() {
    const tempZIPPath = path.join(os.tmpdir(),`BGG_Games_${date.now()}`)

    const response = await axios({
        url:zip_URL,
        method:get,
        responseType: 'arraybuffer'

    });

    fs.writeFileSync(tempZIPPath, response.data);
    console.log("BGG ZIP file saved to:" tempZIPPath);

    return tempZIPPath;
    
}