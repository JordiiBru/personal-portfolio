variable "terraform" {
  description = "Infrastructure managed by terraform"
  type        = bool
  default     = true
}

variable "author" {
  description = "Author of the infrastructure"
  type        = string
  default     = "jordi"
}