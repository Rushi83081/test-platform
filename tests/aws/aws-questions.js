const questions = [
  
{
question:"What is IAM?",
options:[
"AWS identity and access management service",
"Compute service for running virtual machines",
"Object storage service used for storing files",
"Monitoring service for logs and metrics"
],
answer:0
},

{
question:"Difference between IAM user and IAM role?",
options:[
"User permanent identity role temporary permissions",
"Both are same identity management components",
"Role only used for S3 access control",
"User automatically rotates credentials daily"
],
answer:0
},

{
question:"What is IAM policy?",
options:[
"JSON document defining permissions for AWS resources",
"Service used for monitoring EC2 instances",
"Storage service for application logs",
"Tool for managing DNS records"
],
answer:0
},

{
question:"What is Amazon S3?",
options:[
"Scalable object storage service for files and backups",
"Service used to run virtual machines",
"Managed relational database service",
"Content delivery network service"
],
answer:0
},

{
question:"Difference between S3 bucket and object?",
options:[
"Bucket container object stored data inside bucket",
"Bucket compute instance object application process",
"Bucket database object table record",
"Bucket DNS zone object domain record"
],
answer:0
},

{
question:"What is S3 versioning?",
options:[
"Feature keeping multiple versions of stored objects",
"Automatic scaling feature for S3 buckets",
"Encryption mechanism for S3 objects",
"Monitoring tool for S3 performance"
],
answer:0
},

{
question:"What is EC2 instance?",
options:[
"Virtual server running applications in AWS cloud",
"Object storage location for large files",
"DNS routing service for applications",
"Serverless compute execution environment"
],
answer:0
},

{
question:"What is AMI?",
options:[
"Template used to launch EC2 instances",
"Monitoring agent for application logs",
"Networking configuration for VPC",
"Database snapshot backup system"
],
answer:0
},

{
question:"Difference between AMI and Snapshot?",
options:[
"AMI instance template snapshot volume backup image",
"Both represent identical AWS storage resources",
"Snapshot creates EC2 instance automatically",
"AMI stores application logs only"
],
answer:0
},

{
question:"Difference between Security Group and NACL?",
options:[
"Security group stateful instance level NACL stateless subnet level",
"Both control only outbound traffic rules",
"NACL attached directly to EC2 instance",
"Security group applied to entire VPC"
],
answer:0
},

{
question:"What is VPC?",
options:[
"Isolated virtual network environment in AWS cloud",
"Object storage service for application data",
"Monitoring system for application metrics",
"Serverless compute environment"
],
answer:0
},

{
question:"Difference between public subnet and private subnet?",
options:[
"Public subnet internet gateway private subnet internal access",
"Both subnets allow direct internet connectivity",
"Private subnet automatically creates NAT gateway",
"Public subnet blocks external traffic"
],
answer:0
},

{
question:"What is Auto Scaling?",
options:[
"Service automatically adjusts EC2 capacity based workload",
"Monitoring tool for server health metrics",
"Database backup service in AWS",
"Static DNS routing configuration"
],
answer:0
},

{
question:"Difference between ALB and NLB?",
options:[
"ALB layer seven routing NLB layer four routing",
"Both operate only at application layer",
"NLB supports only HTTP traffic",
"ALB supports only TCP traffic"
],
answer:0
},

{
question:"What is Route53?",
options:[
"Managed DNS service for domain routing",
"Object storage system for application backups",
"Virtual machine hosting platform",
"Serverless compute execution engine"
],
answer:0
},

{
question:"Difference between A record and CNAME?",
options:[
"A record maps domain to IP CNAME alias",
"Both map domain directly to storage buckets",
"CNAME maps domain directly to IP address",
"A record creates DNS subdomains automatically"
],
answer:0
},

{
question:"Difference between EBS and EFS?",
options:[
"EBS block storage EFS shared file storage",
"EBS object storage EFS archive storage",
"EFS single instance storage EBS distributed storage",
"EBS CDN service EFS monitoring service"
],
answer:0
},

{
question:"What is RDS?",
options:[
"Managed relational database service in AWS",
"Object storage service for application logs",
"Serverless compute execution service",
"DNS routing service"
],
answer:0
},

{
question:"What is AWS Lambda?",
options:[
"Serverless compute service running code without servers",
"Virtual machine hosting platform",
"Database replication system",
"Monitoring and logging service"
],
answer:0
},

{
question:"What is CloudWatch?",
options:[
"AWS monitoring service for metrics logs and alarms",
"Object storage service for application files",
"Identity management system for AWS users",
"DNS routing platform for domains"
],
answer:0
}, 

{
question:"You cannot SSH into EC2 instance. What should you check first?",
options:[
"Verify security group inbound rule allows SSH port twenty two",
"Restart the EC2 instance immediately without checking configuration",
"Delete the instance and create a completely new one",
"Disable CloudWatch monitoring and retry SSH connection"
],
answer:0
},

{
question:"EC2 instance cannot access internet from private subnet. What is the issue?",
options:[
"Private subnet missing NAT gateway or proper route table configuration",
"Security group must allow inbound SSH traffic from internet",
"EC2 instance requires larger instance type for networking",
"Route53 DNS configuration is missing for instance"
],
answer:0
},

{
question:"Your EC2 instance CPU is constantly above 90%. What solution should you implement?",
options:[
"Configure Auto Scaling group to automatically launch additional instances",
"Restart instance daily to clear CPU utilization metrics",
"Delete application logs stored inside the instance",
"Disable monitoring to reduce system overhead"
],
answer:0
},

{
question:"Your EC2 instance shows kernel panic during boot. How do you troubleshoot it?",
options:[
"Check system logs and verify AMI compatibility or corrupted kernel",
"Increase instance memory size without checking system logs",
"Delete EBS volume and relaunch the instance",
"Disable security group rules temporarily"
],
answer:0
},

{
question:"Your EC2 instance disk space is full. How do you resolve it?",
options:[
"Increase EBS volume size then extend filesystem inside instance",
"Restart EC2 instance to clear disk space automatically",
"Delete the EC2 instance and launch another instance",
"Disable CloudWatch agent to free storage space"
],
answer:0
},

{
question:"Application running on EC2 suddenly becomes slow. What steps will you take?",
options:[
"Analyze CPU memory disk metrics using CloudWatch monitoring",
"Restart Route53 DNS service to improve application performance",
"Delete application logs stored on the instance",
"Increase S3 bucket storage capacity"
],
answer:0
},

{
question:"EC2 instance loses data after reboot. What might be the cause?",
options:[
"Instance using temporary instance store instead of persistent EBS",
"EBS volumes automatically delete data after reboot",
"Security group rules remove stored application data",
"CloudWatch logs automatically clear storage volumes"
],
answer:0
},

{
question:"How would you migrate an EC2 instance to another region?",
options:[
"Create AMI from instance copy AMI to target region",
"Restart EC2 instance with new security group configuration",
"Move EBS volume directly to another region manually",
"Use Route53 to migrate compute resources"
],
answer:0
},

{
question:"Your EC2 instance fails status checks. What does it indicate?",
options:[
"Underlying hardware issue or operating system failure detected",
"Security group rules blocking SSH access temporarily",
"DNS configuration error in Route53 records",
"CloudWatch monitoring disabled for the instance"
],
answer:0
},

{
question:"How would you securely give another user SSH access to EC2?",
options:[
"Create new Linux user add public SSH key authorized_keys",
"Share existing private key file through email communication",
"Disable SSH authentication and use password login",
"Allow anonymous SSH login for development team"
],
answer:0
},

{
question:"Your organization wants least privilege access for developers. How would you implement this?",
options:[
"Create IAM roles with minimal permissions using least privilege",
"Give developers full administrator access for faster work",
"Disable IAM policies and rely on manual monitoring",
"Allow unrestricted access to all AWS resources"
],
answer:0
},

{
question:"How would you securely provide EC2 access to S3 without access keys?",
options:[
"Attach IAM role to EC2 instance with S3 permissions",
"Store AWS access keys directly inside application configuration",
"Allow public access to the S3 bucket",
"Use static credentials stored inside environment variables"
],
answer:0
},

{
question:"Your access keys were leaked. What immediate steps should you take?",
options:[
"Immediately deactivate compromised keys rotate credentials and audit usage",
"Restart EC2 instances to invalidate the access keys",
"Delete all IAM users inside the account",
"Disable CloudWatch logging temporarily"
],
answer:0
},

{
question:"How would you enforce MFA for all IAM users?",
options:[
"Enable MFA requirement in IAM policies for user authentication",
"Disable IAM login access for all users permanently",
"Create multiple access keys for every IAM user",
"Allow login without authentication for trusted networks"
],
answer:0
},

{
question:"Your company uses multiple AWS accounts. How would you manage cross-account access?",
options:[
"Use IAM roles with trust policy for cross account access",
"Share root account credentials across all AWS accounts",
"Create identical IAM users in every account",
"Disable IAM and rely on manual credential sharing"
],
answer:0
},

{
question:"How would you audit IAM permission changes across your AWS account?",
options:[
"Enable CloudTrail logging to track IAM permission modifications",
"Monitor EC2 CPU utilization using CloudWatch metrics",
"Enable VPC flow logs for permission monitoring",
"Restart IAM service periodically"
],
answer:0
},

{
question:"How would you prevent developers from deleting critical S3 buckets?",
options:[
"Apply restrictive IAM policies and enable S3 bucket versioning",
"Allow full administrator access to all developers",
"Disable S3 logging completely",
"Move buckets to another AWS region"
],
answer:0
},

{
question:"How would you implement temporary credentials for third-party applications?",
options:[
"Use AWS STS to generate temporary security credentials",
"Create permanent IAM access keys for external partners",
"Store credentials inside application source code",
"Allow public access to AWS resources"
],
answer:0
},

{
question:"A developer accidentally deletes important objects from S3. How do you prevent data loss?",
options:[
"Enable S3 versioning so previous object versions can be restored",
"Restart the S3 service to recover deleted files",
"Increase bucket storage capacity immediately",
"Disable S3 logging service"
],
answer:0
},

{
question:"Your application needs extremely low latency global file access. What solution would you use?",
options:[
"Use CloudFront CDN distribution caching content across global edge locations",
"Increase EC2 instance size for faster network performance",
"Move S3 bucket to another AWS region",
"Disable Route53 DNS routing policies"
],
answer:0
}, 

{
question:"Your load balancer shows instances as unhealthy. What could cause this?",
options:[
"Incorrect health check path port or application not responding",
"Security group allows only outbound traffic to instances",
"Route53 DNS records incorrectly configured for domain",
"EC2 instance missing SSH key pair configuration"
],
answer:0
},

{
question:"Your application requires path-based routing. Which load balancer should you use?",
options:[
"Application Load Balancer supporting advanced layer seven routing rules",
"Network Load Balancer optimized for ultra low latency TCP traffic",
"Classic Load Balancer supporting legacy application deployments",
"Route53 DNS load balancing using weighted routing policies"
],
answer:0
},

{
question:"Users must maintain session stickiness. How would you configure this?",
options:[
"Enable sticky sessions using load balancer generated session cookies",
"Restart EC2 instances to preserve user session data",
"Disable health checks on load balancer configuration",
"Move sessions to Route53 DNS configuration"
],
answer:0
},

{
question:"Your website must handle millions of connections with low latency. Which load balancer fits best?",
options:[
"Network Load Balancer optimized for extreme performance and low latency",
"Application Load Balancer handling only HTTP traffic requests",
"Classic Load Balancer supporting legacy architecture patterns",
"Route53 DNS routing distributing traffic across servers"
],
answer:0
},

{
question:"Traffic spikes every day at noon. How would you configure scaling?",
options:[
"Configure scheduled Auto Scaling policy increasing capacity during peak hours",
"Restart EC2 instances every day during traffic spikes",
"Disable load balancer health checks during traffic peaks",
"Increase instance storage capacity during peak hours"
],
answer:0
},

{
question:"Your Auto Scaling group keeps terminating instances unexpectedly. What should you check?",
options:[
"Review health check configuration scaling policies and instance lifecycle events",
"Delete the Auto Scaling group and recreate infrastructure",
"Restart Route53 DNS service immediately",
"Disable CloudWatch metrics collection"
],
answer:0
},

{
question:"Your instances launch but fail health checks. What could be wrong?",
options:[
"Application not responding correctly to load balancer health check path",
"Security group allowing outbound traffic only",
"DNS configuration missing for application domain",
"EBS volume size insufficient for application"
],
answer:0
},

{
question:"How would you design Auto Scaling for unpredictable workloads?",
options:[
"Use dynamic scaling policies triggered by CloudWatch performance metrics",
"Manually increase EC2 instance capacity every few hours",
"Disable scaling policies to avoid unexpected infrastructure changes",
"Use static EC2 instance count without scaling configuration"
],
answer:0
},

{
question:"How would you minimize cost while maintaining high availability with Auto Scaling?",
options:[
"Use mixed instances policy combining spot instances and on demand",
"Disable Auto Scaling and manually manage instance capacity",
"Run only largest EC2 instance types available",
"Store application workloads inside S3 buckets"
],
answer:0
},

{
question:"Your application CPU spikes suddenly. How would you automate scaling or alerts?",
options:[
"Create CloudWatch alarm triggering Auto Scaling or SNS notification",
"Restart the EC2 instance when CPU utilization increases",
"Delete application logs from instance storage",
"Disable monitoring to reduce CPU usage"
],
answer:0
},

{
question:"How would you centralize logs from multiple EC2 instances?",
options:[
"Install CloudWatch agent sending logs to centralized CloudWatch log group",
"Store logs locally on each EC2 instance disk",
"Upload logs manually to S3 buckets periodically",
"Disable logging to reduce storage consumption"
],
answer:0
},

{
question:"How would you monitor application-level metrics not provided by AWS?",
options:[
"Publish custom metrics to CloudWatch using application monitoring agents",
"Restart application servers when monitoring metrics unavailable",
"Disable application logging to reduce system load",
"Move monitoring configuration to Route53 DNS"
],
answer:0
},

{
question:"Your database requires high availability across data centers. What solution should you implement?",
options:[
"Enable RDS multi availability zone deployment for automatic failover",
"Store database backups manually inside S3 buckets",
"Run database directly on single EC2 instance",
"Disable database replication to reduce latency"
],
answer:0
},

{
question:"Your application requires heavy read traffic on database. How would you scale it?",
options:[
"Create read replicas to distribute database read workloads efficiently",
"Increase database storage capacity only",
"Restart database instance during heavy read traffic",
"Disable query logging to improve database performance"
],
answer:0
},

{
question:"Your RDS instance storage is running out of space. What should you do?",
options:[
"Increase allocated storage and enable storage autoscaling feature",
"Restart database instance to free disk space",
"Delete database logs from application server",
"Disable database backups permanently"
],
answer:0
},

{
question:"Your RDS instance becomes slow during peak hours. What optimization steps can you take?",
options:[
"Analyze performance insights enable read replicas optimize database queries",
"Restart database instance every hour during traffic spikes",
"Disable database monitoring tools permanently",
"Move database tables to S3 storage"
],
answer:0
},

{
question:"You accidentally deleted records from database. How would you restore them?",
options:[
"Restore database using automated backups or point in time recovery",
"Restart database instance to restore deleted records",
"Disable database replication services",
"Delete remaining records to maintain consistency"
],
answer:0
},

{
question:"Your application should process images automatically after S3 upload. How would you design this?",
options:[
"Trigger Lambda function using S3 event notification for processing",
"Restart EC2 instance when new files uploaded",
"Store images temporarily inside Route53 records",
"Disable S3 versioning feature"
],
answer:0
},

{
question:"Your Lambda function is timing out. What troubleshooting steps would you perform?",
options:[
"Increase timeout memory allocation and analyze CloudWatch logs",
"Restart Lambda function service manually",
"Disable Lambda logging configuration",
"Move function execution to Route53"
],
answer:0
},

{
question:"Your Lambda function must run every night for maintenance tasks. How would you implement it?",
options:[
"Create EventBridge scheduled rule triggering Lambda function execution",
"Restart Lambda service manually every night",
"Upload schedule configuration inside S3 bucket",
"Disable Lambda concurrency limits"
],
answer:0
},

{
question:"Your serverless application receives sudden traffic spikes. How does Lambda handle scaling?",
options:[
"Lambda automatically scales concurrent executions based on incoming requests",
"Lambda requires manual scaling configuration like EC2 instances",
"Lambda runs only one function execution at a time",
"Lambda disables execution when traffic spikes"
],
answer:0
},

{
question:"Design highly available web architecture on AWS.",
options:[
"Use multi AZ EC2 auto scaling load balancer and RDS",
"Deploy single EC2 instance without load balancer",
"Store application code inside Route53 DNS service",
"Disable database replication for faster performance"
],
answer:0
},

{
question:"Design scalable architecture for global users.",
options:[
"Use CloudFront CDN Route53 latency routing auto scaling EC2",
"Deploy single server inside one AWS region",
"Disable caching to simplify infrastructure design",
"Host application on single EC2 instance"
],
answer:0
},

{
question:"Design disaster recovery architecture using AWS services.",
options:[
"Use multi region replication backups failover routing policies",
"Store all data only in single region",
"Disable backups to reduce infrastructure cost",
"Use only local storage for application data"
],
answer:0
},

{
question:"How would you design secure architecture for sensitive workloads?",
options:[
"Use private subnets encryption IAM roles security monitoring services",
"Allow public internet access for all application servers",
"Disable logging to protect sensitive information",
"Share root account credentials among administrators"
],
answer:0
},

{
question:"How would you design architecture for high traffic e-commerce website?",
options:[
"Use auto scaling load balancer caching CDN database replicas",
"Deploy single EC2 instance handling all application requests",
"Disable caching to simplify system architecture",
"Store product data inside DNS records"
],
answer:0
},

{
question:"How would you detect suspicious activity in AWS account?",
options:[
"Enable GuardDuty CloudTrail and security monitoring alerts",
"Disable IAM authentication logging completely",
"Restart EC2 instances periodically",
"Delete CloudWatch metrics automatically"
],
answer:0
},

{
question:"How would you protect your web application from SQL injection attacks?",
options:[
"Deploy AWS WAF rules filtering malicious application requests",
"Disable application firewall protections entirely",
"Restart EC2 instance during suspicious activity",
"Move application servers to public subnets"
],
answer:0
},

{
question:"How would you protect infrastructure from DDoS attacks?",
options:[
"Use AWS Shield CloudFront and scalable load balancing architecture",
"Disable monitoring services to reduce attack visibility",
"Deploy application on single server only",
"Remove load balancer from architecture"
],
answer:0
},

{
question:"Your company wants blue-green deployments. How would you implement them?",
options:[
"Use two environments switch traffic using load balancer",
"Restart EC2 instances sequentially during application deployment",
"Deploy application only in production environment directly",
"Disable monitoring tools during deployment process"
],
answer:0
},

{
question:"Your application requires zero downtime deployments. What strategies would you use?",
options:[
"Use rolling deployments load balancers and auto scaling groups",
"Stop entire application before deploying new version",
"Restart database server before each deployment",
"Disable load balancer health checks during deployment"
],
answer:0
},

{
question:"Your logs must be stored cheaply but available for audit. What solution would you design?",
options:[
"Store logs in S3 with lifecycle policy moving to Glacier",
"Store logs locally on EC2 instance disks",
"Disable logging to reduce storage costs",
"Store logs only inside CloudWatch temporary logs"
],
answer:0
},

{
question:"Your company wants centralized logging across multiple AWS accounts. How would you implement it?",
options:[
"Use CloudWatch logs aggregation or centralized S3 logging bucket",
"Store logs separately in each EC2 instance",
"Disable cross account logging completely",
"Move logs to Route53 hosted zones"
],
answer:0
},

{
question:"Your application requires distributed microservices communication. What AWS services would you use?",
options:[
"Use SNS SQS EventBridge and service discovery mechanisms",
"Store communication messages directly in S3 buckets",
"Restart microservices manually for communication",
"Disable messaging between microservices"
],
answer:0
},

{
question:"Website returns 403 Forbidden. What debugging steps would you take?",
options:[
"Check web server permissions IAM policies and security rules",
"Restart Route53 DNS service immediately",
"Increase EC2 instance storage capacity",
"Disable load balancer health checks"
],
answer:0
},

{
question:"Website returns 502 Bad Gateway from load balancer. What could be wrong?",
options:[
"Backend application not responding or health check path incorrect",
"Route53 DNS records misconfigured for domain",
"S3 bucket storage capacity exceeded",
"CloudWatch metrics disabled"
],
answer:0
},

{
question:"EC2 instance stuck in initializing state checks. How would you troubleshoot?",
options:[
"Check system status instance logs and underlying hardware issues",
"Restart Route53 DNS configuration",
"Disable CloudWatch monitoring services",
"Increase S3 storage capacity"
],
answer:0
},

{
question:"S3 upload works but download fails. What could cause this?",
options:[
"S3 bucket policy or object permissions blocking download access",
"EC2 instance storage size too small",
"CloudWatch metrics disabled for bucket",
"Route53 DNS record missing"
],
answer:0
},

{
question:"CloudWatch alarms not triggering Auto Scaling. What could be wrong?",
options:[
"Incorrect alarm threshold metric configuration or scaling policy",
"Load balancer disabled for application servers",
"S3 bucket versioning disabled",
"EC2 instance missing SSH key"
],
answer:0
},

{
question:"How would you optimize AWS infrastructure cost across multiple services?",
options:[
"Use cost explorer rightsizing reserved instances and lifecycle policies",
"Disable monitoring and security services completely",
"Deploy only largest EC2 instances available",
"Store all data in expensive storage classes"
],
answer:0
},

{
question:"How would you migrate a monolithic application to microservices in AWS?",
options:[
"Break services deploy containers use API gateway messaging",
"Move entire monolith to larger EC2 instance",
"Disable load balancer for simplicity",
"Store application inside S3 bucket"
],
answer:0
},

{
question:"How would you secure communication between microservices in AWS?",
options:[
"Use VPC private networking TLS encryption and IAM authentication",
"Allow public internet access for all services",
"Disable authentication between services",
"Store credentials directly inside source code"
],
answer:0
},

{
question:"How would you implement centralized secrets management?",
options:[
"Use AWS Secrets Manager or Parameter Store encrypted secrets",
"Store secrets directly in application configuration files",
"Share database passwords through email communication",
"Store credentials in plain text files"
],
answer:0
},

{
question:"How would you design multi-region failover architecture?",
options:[
"Deploy resources across regions use Route53 failover routing",
"Run application in single region only",
"Disable backups and replication services",
"Store application data locally on EC2"
],
answer:0
},

{
question:"How would you implement canary deployments using AWS services?",
options:[
"Gradually shift traffic using weighted load balancer routing",
"Deploy new version directly to all servers simultaneously",
"Disable monitoring during deployment process",
"Restart all servers before deploying"
],
answer:0
},

{
question:"How would you build event-driven architecture in AWS?",
options:[
"Use Lambda SNS SQS EventBridge and serverless integrations",
"Store events inside EC2 instance local storage",
"Disable messaging services completely",
"Use only Route53 DNS events"
],
answer:0
},

{
question:"How would you automate infrastructure provisioning in AWS?",
options:[
"Use CloudFormation Terraform or infrastructure as code tools",
"Manually create resources from AWS console every time",
"Disable infrastructure automation tools",
"Restart EC2 instances during provisioning"
],
answer:0
},

{
question:"How would you design log analytics pipeline on AWS?",
options:[
"Send logs to S3 process using Athena Elasticsearch",
"Store logs locally on EC2 servers",
"Disable logging to reduce system load",
"Move logs to Route53 hosted zones"
],
answer:0
},

{
question:"How would you secure APIs exposed through AWS infrastructure?",
options:[
"Use API Gateway authentication WAF throttling and IAM policies",
"Allow anonymous public access to APIs",
"Disable logging for API requests",
"Expose API directly through EC2 public IP"
],
answer:0
},

{
question:"Your EC2 instance suddenly cannot resolve DNS names. What should you check?",
options:[
"Verify VPC DNS resolution and DNS hostnames enabled",
"Restart EC2 instance to refresh DNS configuration",
"Increase instance CPU to improve DNS performance",
"Delete security groups and recreate network rules"
],
answer:0
},

{
question:"Your application deployed in multiple AZs still goes down. What could be missing?",
options:[
"Auto Scaling group not configured across multiple zones",
"Use only one EC2 instance for simplicity",
"Disable load balancer health checks for stability",
"Store logs in local disk instead of S3"
],
answer:0
},

{
question:"Your S3 bucket is publicly accessible accidentally. What immediate action should you take?",
options:[
"Block public access and update bucket policy immediately",
"Restart S3 bucket to remove public access settings",
"Delete all objects from S3 bucket permanently",
"Move bucket to another region for security"
],
answer:0
},

{
question:"Your application requires secure communication between microservices. What should you use?",
options:[
"Use internal load balancer with HTTPS and security groups",
"Use public IP communication between services",
"Store communication logs in S3 bucket",
"Disable encryption to reduce latency"
],
answer:0
},

{
question:"Your application logs are increasing rapidly and storage cost is high. What should you do?",
options:[
"Apply lifecycle policy to move logs to Glacier storage",
"Delete all logs every day automatically",
"Increase EC2 storage capacity continuously",
"Disable logging to reduce cost"
],
answer:0
},

{
question:"Your EC2 instances are launched but not registering with load balancer. What should you check?",
options:[
"Verify target group health check path and security group rules",
"Restart load balancer multiple times",
"Delete EC2 instances and recreate manually",
"Disable Auto Scaling for stability"
],
answer:0
},

{
question:"Your application needs zero downtime deployments. What approach should you use?",
options:[
"Use blue-green deployment with load balancer switching",
"Stop old server then deploy new server",
"Deploy application directly on production instance",
"Restart EC2 instance after deployment"
],
answer:0
},

{
question:"Your database needs to handle sudden heavy read traffic. What should you implement?",
options:[
"Add read replicas to distribute database read traffic",
"Increase only storage size of database instance",
"Restart database frequently during peak load",
"Move database to EC2 instance manually"
],
answer:0
},

{
question:"Your EC2 instance is compromised. What is the first step?",
options:[
"Detach instance from network and analyze logs immediately",
"Restart instance to remove attacker access",
"Increase instance size for better security",
"Delete logs to prevent further attacks"
],
answer:0
},

{
question:"Your application requires asynchronous communication between services. What should you use?",
options:[
"Use SQS queue to decouple service communication reliably",
"Use EC2 direct communication between services",
"Use Route53 for message routing",
"Store messages in S3 bucket"
],
answer:0
},

{
question:"Your company wants to reduce AWS cost without affecting performance. What should you do?",
options:[
"Use reserved instances and right-size underutilized resources",
"Delete all EC2 instances during night hours",
"Disable monitoring services to save cost",
"Move all workloads to single instance"
],
answer:0
}

];
