locals {
  content_types = {
    ".css": "text/css"
    ".html": "text/html"
    ".js": "application/javascript"
    ".json": "application/json"
    ".txt": "text/plain"
    ".ico": "image/vnd.microsoft.icon"
    ".woff2": "binary/octet-stream"
  }
}
resource "aws_s3_bucket" "tf_portfolio" {
  bucket = "jordibru.cloud"

  tags = {
    terraform = "true"
    author    = "jordi"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.tf_portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.tf_portfolio.id
  policy = data.aws_iam_policy_document.allow_access_from_another_account.json
}

data "aws_iam_policy_document" "allow_access_from_another_account" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.tf_portfolio.arn}/*",
    ]
  }
}

resource "aws_s3_object" "upload_static_files" {
  for_each = fileset("./../../out/", "**")
  bucket = aws_s3_bucket.tf_portfolio.id
  key = each.value
  source = "./../../out/${each.value}"
  etag = filemd5("./../../out/${each.value}")
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.key), null)
}

resource "aws_s3_object" "upload_images" {
  for_each = fileset("./../../src/public/icons/", "**")
  bucket = aws_s3_bucket.tf_portfolio.id
  key = "images/${each.value}"
  source = "./../../src/public/icons/${each.value}"
  etag = filemd5("./../../src/public/icons/${each.value}")
  content_type =  "image/png"
}

resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.tf_portfolio.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}