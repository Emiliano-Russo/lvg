import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { AWS_CONFIG } from './config';
console.log('s3');

const s3Client = new S3Client({
  region: AWS_CONFIG.region,
  credentials: {
    accessKeyId: AWS_CONFIG.accessKeyId,
    secretAccessKey: AWS_CONFIG.secretAccessKey,
  },
});

export const uploadFile = async (fileName: string, fileContent: Buffer) => {
  const command = new PutObjectCommand({
    Bucket: AWS_CONFIG.s3.bucketName,
    Key: fileName,
    Body: fileContent,
  });

  try {
    const data = await s3Client.send(command);
    console.log('File uploaded successfully:', data);
    return data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
