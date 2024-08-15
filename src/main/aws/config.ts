import dotenv from 'dotenv';
dotenv.config();

export const AWS_CONFIG = {
  region: process.env.AWS_REGION || 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_SCHEMA || 'default_db',
  },
  s3: {
    bucketName: process.env.S3_BUCKET_NAME || 'default-bucket-name',
  },
};
