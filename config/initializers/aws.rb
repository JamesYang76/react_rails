

Aws.config.update({
  region: 'us-west-2',
  credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
})

#S3_BUCKET = Aws::S3.new.buckets[ENV['S3_BUCKET']]