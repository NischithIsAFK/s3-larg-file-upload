# AWS S3 very large size file upload
### Introduction
Uploading to AWS S3 via Lambda and API Gateway has lot of restriction has Payload size of Lambda is 10MB and for API Gateway it is 15 MB.
### Description
- If users want to upload file size > 15MB as S3 is used to store large Gigabytes to Terabytes of data.
- Hence, using Presigned URL we can upload directly to S3 Bucket.