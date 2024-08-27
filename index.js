import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Configuration = {
  region: 'ap-south-1'
};

const s3 = new S3Client(s3Configuration);

export const handler = async (event) => {
  const command = new PutObjectCommand({ Bucket: 'test-bucket-large-files-19828', Key: "file" + Math.random() });
  const url = await getSignedUrl(s3, command, { expiresIn: 15 * 60 }); // expires in 15 mins.
  console.log('Presigned URL: ', url);
  const response = {
    statusCode: 200,
    body: JSON.stringify({message:"URL created to upload file",url})
  };
  return response;

};