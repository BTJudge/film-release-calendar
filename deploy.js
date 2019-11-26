const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const s3MasterConfig = {
  Bucket: 'film-release-calendar.co.uk'
};

const s3 = new S3();

async function deploy() {
  await emptyBucket();
  fillBucket();
}
async function emptyBucket() {
  const { Contents: objectsInBucket } = await s3
    .listObjectsV2(s3MasterConfig)
    .promise();

  const objectsToDelete = objectsInBucket.map(object => {
    return { Key: object.Key };
  });

  await s3
    .deleteObjects({
      ...s3MasterConfig,
      Delete: {
        Objects: objectsToDelete
      }
    })
    .promise();
}

function fillBucket() {
  const baseDir = './build'
  uploadFiles(getAllFiles(baseDir));
}

function getAllFiles(directory) {
  let filePaths = [];
  fs.readdirSync(directory).forEach((result) => {
    const testPath = path.join(directory, result);
    if (fs.statSync(testPath).isDirectory()) {
      Array.prototype.push.apply(filePaths,getAllFiles(testPath));
    }
    else filePaths.push(testPath);
  });
  return filePaths;
}

function uploadFiles(filePaths) {
  filePaths.forEach((file) => {
    const params = {
      ...s3MasterConfig,
      Body: fs.readFileSync(file),
      Key: generateKey(file),
      ContentType: generateContentType(file)
    }
    s3.putObject(params).send();
  });
}

function generateKey(filePath) {
  let removeBuildDirectory = filePath.split(path.sep);
  removeBuildDirectory.shift();
  return Array.isArray(removeBuildDirectory) ? removeBuildDirectory.join(path.sep) : removeBuildDirectory;

}

function generateContentType(file) {
  let extn = file.split('.').pop();
  let contentType = 'application/octet-stream';
  if (extn == 'html') contentType = 'text/html';
  if (extn == 'css') contentType = 'text/css';
  if (extn == 'map') contentType = 'application/json'
  if (extn == 'js') contentType = 'application/javascript';
  if (extn == 'png' || extn == 'jpg' || extn == 'gif') contentType = `image/${extn}`;
  return contentType;
}

deploy();