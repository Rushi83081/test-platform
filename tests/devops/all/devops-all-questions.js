const questions = [
{
  question: "Why are containers considered more efficient than virtual machines in DevOps environments?",
  options: [
    "They eliminate the need for an operating system",
    "They run on hypervisors for better performance",
    "They share the host OS kernel, reducing overhead",
    "They include a full guest OS for isolation"
  ],
  answer: 2
},
{
  question: "A developer accidentally committed secrets to a Git repository. What is the BEST immediate action?",
  options: [
    "Delete the repository permanently",
    "Remove the file in next commit",
    "Use git filter-repo/BFG and rotate credentials",
    "Ignore since history cannot be changed"
  ],
  answer: 2
},
{
  question: "What distinguishes Continuous Deployment from Continuous Delivery?",
  options: [
    "Continuous Delivery deploys automatically without approval",
    "Continuous Deployment requires manual approval",
    "Continuous Deployment pushes every change to production automatically",
    "There is no difference between them"
  ],
  answer: 2
},
{
  question: "In Docker, what is the purpose of ENTRYPOINT?",
  options: [
    "To define default executable of container",
    "To expose ports",
    "To copy files",
    "To set environment variables"
  ],
  answer: 0
},
{
  question: "A container exits immediately after running. What is the MOST likely reason?",
  options: [
    "Network is not configured",
    "Main process inside container finished execution",
    "Image is corrupted",
    "Volume is not attached"
  ],
  answer: 1
},
{
  question: "What does 'git rebase' primarily do?",
  options: [
    "Merges two branches",
    "Deletes commits",
    "Reapplies commits on top of another base",
    "Creates new repository"
  ],
  answer: 2
},
{
  question: "Which Docker instruction is best for defining runtime command arguments?",
  options: [
    "RUN",
    "ENTRYPOINT",
    "CMD",
    "COPY"
  ],
  answer: 2
},
{
  question: "A CI pipeline is failing due to dependency issues. What is the BEST fix?",
  options: [
    "Remove build stage",
    "Add dependency installation in pipeline",
    "Restart CI server",
    "Skip tests"
  ],
  answer: 1
},
{
  question: "What does docker run -d -p 8080:80 nginx do?",
  options: [
    "Runs container in foreground",
    "Builds nginx image",
    "Runs container in detached mode mapping port 8080 to 80",
    "Stops nginx container"
  ],
  answer: 2
},
{
  question: "Which Git command helps temporarily save uncommitted changes?",
  options: [
    "git commit",
    "git stash",
    "git push",
    "git merge"
  ],
  answer: 1
},
{
  question: "A Jenkins pipeline skipped deployment stage. What is the MOST likely cause?",
  options: [
    "Jenkins server crash",
    "Syntax error in Jenkinsfile",
    "Conditional stage evaluated to false",
    "Git repository issue"
  ],
  answer: 2
},
{
  question: "Which stage is typically first in CI/CD?",
  options: [
    "Deploy",
    "Test",
    "Build",
    "Monitor"
  ],
  answer: 2
},
{
  question: "A Docker image build is very slow. What is the BEST optimization?",
  options: [
    "Disable cache",
    "Use multi-stage builds",
    "Add more layers",
    "Use larger base image"
  ],
  answer: 1
},
{
  question: "What is the purpose of .gitignore?",
  options: [
    "Track all files",
    "Delete files",
    "Ignore specific files from version control",
    "Merge branches"
  ],
  answer: 2
},
{
  question: "Which command shows running containers?",
  options: [
    "docker ps",
    "docker build",
    "docker images",
    "docker stop"
  ],
  answer: 0
},
{
  question: "What happens when both CMD and ENTRYPOINT are defined?",
  options: [
    "CMD overrides ENTRYPOINT",
    "ENTRYPOINT provides executable and CMD provides arguments",
    "Both are ignored",
    "Container fails to run"
  ],
  answer: 1
},
{
  question: "A container works locally but fails in production. What is MOST likely issue?",
  options: [
    "Different environment variables or configs",
    "Docker is not installed",
    "CPU is overloaded",
    "Git conflict"
  ],
  answer: 0
},
{
  question: "Which Git command updates local repo and merges changes?",
  options: [
    "git fetch",
    "git init",
    "git pull",
    "git clone"
  ],
  answer: 2
},
{
  question: "A pipeline is slow due to repeated builds. Best solution?",
  options: [
    "Disable tests",
    "Use caching mechanism",
    "Restart Jenkins",
    "Remove pipeline"
  ],
  answer: 1
},
{
  question: "What is Docker Compose mainly used for?",
  options: [
    "Running multi-container apps",
    "Managing Kubernetes clusters",
    "Monitoring containers",
    "Building images"
  ],
  answer: 0
},
{
  question: "Which instruction copies files into Docker image?",
  options: [
    "RUN",
    "CMD",
    "ADD/COPY",
    "ENTRYPOINT"
  ],
  answer: 2
},
{
  question: "A merge conflict occurs in Git. What should you do?",
  options: [
    "Delete branch",
    "Ignore conflict",
    "Manually resolve conflicts and commit",
    "Re-clone repo"
  ],
  answer: 2
},
{
  question: "Which command builds Docker image?",
  options: [
    "docker start",
    "docker run",
    "docker build",
    "docker ps"
  ],
  answer: 2
},
{
  question: "What is tagging in Docker?",
  options: [
    "Deleting images",
    "Running containers",
    "Versioning images",
    "Stopping containers"
  ],
  answer: 2
},
{
  question: "What is the role of CI/CD pipeline?",
  options: [
    "Only testing",
    "Automating build, test, and deployment",
    "Monitoring servers",
    "Managing users"
  ],
  answer: 1
},

{
  question: "A Kubernetes Pod is stuck in 'Pending' state. What is the MOST likely cause?",
  options: [
    "Container crashed during execution",
    "Image pull failed",
    "Insufficient cluster resources or scheduling issue",
    "Service not created"
  ],
  answer: 2
},
{
  question: "A Pod shows 'CrashLoopBackOff'. What is the FIRST thing you should check?",
  options: [
    "Cluster autoscaling",
    "Pod logs using kubectl logs",
    "Service configuration",
    "Ingress rules"
  ],
  answer: 1
},
{
  question: "What is the primary purpose of a Kubernetes Deployment?",
  options: [
    "Expose application externally",
    "Manage stateless application replicas",
    "Store persistent data",
    "Manage cluster nodes"
  ],
  answer: 1
},
{
  question: "Which Kubernetes object is used to expose Pods to external traffic?",
  options: [
    "ConfigMap",
    "Secret",
    "Service",
    "Volume"
  ],
  answer: 2
},
{
  question: "A Service is not routing traffic to Pods. What is the MOST likely issue?",
  options: [
    "Node failure",
    "Label selector mismatch",
    "Pod CPU limit exceeded",
    "Cluster upgrade issue"
  ],
  answer: 1
},
{
  question: "What does 'kubectl apply -f file.yaml' do?",
  options: [
    "Deletes resource",
    "Creates or updates resource",
    "Scales deployment",
    "Restarts pod"
  ],
  answer: 1
},
{
  question: "What is the purpose of ConfigMap in Kubernetes?",
  options: [
    "Store sensitive data",
    "Store configuration data",
    "Manage storage volumes",
    "Expose services"
  ],
  answer: 1
},
{
  question: "Which Terraform command initializes a working directory?",
  options: [
    "terraform plan",
    "terraform apply",
    "terraform init",
    "terraform validate"
  ],
  answer: 2
},
{
  question: "What does 'terraform plan' do?",
  options: [
    "Applies changes",
    "Shows execution plan before applying",
    "Destroys infrastructure",
    "Initializes project"
  ],
  answer: 1
},
{
  question: "Two engineers run terraform apply simultaneously. What is the BEST solution?",
  options: [
    "Disable Terraform",
    "Use state locking with remote backend",
    "Run manually one by one",
    "Delete state file"
  ],
  answer: 1
},
{
  question: "A Terraform deployment creates duplicate resources. What is the likely issue?",
  options: [
    "State file is not properly managed",
    "Provider is missing",
    "Variables are incorrect",
    "Network issue"
  ],
  answer: 0
},
{
  question: "What is the purpose of Terraform state file?",
  options: [
    "Store credentials",
    "Store infrastructure mapping",
    "Store logs",
    "Store variables"
  ],
  answer: 1
},
{
  question: "Which Kubernetes object ensures Pods are always running?",
  options: [
    "Service",
    "Deployment",
    "Namespace",
    "Ingress"
  ],
  answer: 1
},
{
  question: "A Pod cannot pull image due to authentication error. What is the fix?",
  options: [
    "Increase CPU",
    "Use imagePullSecrets",
    "Restart cluster",
    "Delete pod"
  ],
  answer: 1
},
{
  question: "What is a Namespace in Kubernetes?",
  options: [
    "A storage unit",
    "A cluster node",
    "Logical separation of resources",
    "Load balancer"
  ],
  answer: 2
},
{
  question: "Which command is used to get pod details?",
  options: [
    "kubectl logs",
    "kubectl describe pod",
    "kubectl delete pod",
    "kubectl apply"
  ],
  answer: 1
},
{
  question: "A Deployment rollout failed. What command helps rollback?",
  options: [
    "kubectl restart",
    "kubectl rollback",
    "kubectl rollout undo",
    "kubectl delete"
  ],
  answer: 2
},
{
  question: "What is the purpose of Ingress in Kubernetes?",
  options: [
    "Store configs",
    "Expose HTTP/HTTPS routes",
    "Manage nodes",
    "Store secrets"
  ],
  answer: 1
},
{
  question: "A container cannot access environment variables. What is the issue?",
  options: [
    "ConfigMap not mounted or referenced",
    "Service not running",
    "Node failure",
    "Pod scaling issue"
  ],
  answer: 0
},
{
  question: "What does 'terraform destroy' do?",
  options: [
    "Deletes infrastructure",
    "Builds infrastructure",
    "Validates config",
    "Shows plan"
  ],
  answer: 0
},
{
  question: "Which Terraform feature allows reusable code?",
  options: [
    "Providers",
    "Modules",
    "Variables",
    "Outputs"
  ],
  answer: 1
},
{
  question: "A Kubernetes node is not scheduling Pods. What could be reason?",
  options: [
    "Taints or resource constraints",
    "Service failure",
    "ConfigMap issue",
    "Ingress misconfiguration"
  ],
  answer: 0
},
{
  question: "What is Helm used for?",
  options: [
    "Monitoring",
    "Package manager for Kubernetes",
    "Container runtime",
    "Logging tool"
  ],
  answer: 1
},
{
  question: "A Helm chart deployment failed due to missing values. What is solution?",
  options: [
    "Delete cluster",
    "Provide required values.yaml",
    "Restart pod",
    "Increase memory"
  ],
  answer: 1
},
{
  question: "What is the function of liveness probe?",
  options: [
    "Check if container is ready",
    "Check if container is alive and restart if needed",
    "Expose service",
    "Scale pods"
  ],
  answer: 1
},

{
  question: "A server shows high latency but CPU and memory usage are normal. What is the MOST likely issue?",
  options: [
    "Application code inefficient under concurrent load",
    "Memory leak in background system processes",
    "CPU throttling due to container limits applied",
    "Network or disk I/O bottleneck causing delays"
  ],
  answer: 3
},
{
  question: "What is the primary purpose of Prometheus in DevOps monitoring?",
  options: [
    "Centralized logging and visualization platform",
    "Time-series metrics collection and alerting system",
    "Continuous integration and deployment automation tool",
    "Infrastructure provisioning and configuration management"
  ],
  answer: 1
},
{
  question: "Grafana is mainly used for which functionality in DevOps?",
  options: [
    "Running CI/CD pipelines and deployment automation",
    "Managing Kubernetes clusters and container scheduling",
    "Visualizing metrics through dashboards and charts",
    "Provisioning infrastructure using configuration scripts"
  ],
  answer: 2
},
{
  question: "What does the 'top' command in Linux primarily display?",
  options: [
    "Active network ports and open connections",
    "Disk usage and mounted file systems",
    "Real-time system processes and resource usage",
    "System boot logs and initialization messages"
  ],
  answer: 2
},
{
  question: "A process is consuming excessive CPU resources. Which command helps identify it?",
  options: [
    "Display running processes with CPU utilization details",
    "List directory contents with file permissions",
    "Show disk usage statistics across partitions",
    "Monitor network traffic across system interfaces"
  ],
  answer: 0
},
{
  question: "Which Linux command shows disk usage in human-readable format?",
  options: [
    "Show active processes consuming CPU resources",
    "Display disk usage in human readable format",
    "List files and directories with detailed view",
    "Monitor memory usage of running processes"
  ],
  answer: 1
},
{
  question: "A system service fails to start repeatedly. What should you check FIRST?",
  options: [
    "Restart entire system without analyzing logs",
    "Modify service configuration blindly without logs",
    "Check logs using journalctl for root cause",
    "Delete and reinstall the service package immediately"
  ],
  answer: 2
},
{
  question: "What is the primary purpose of ELK Stack in DevOps?",
  options: [
    "Continuous deployment and release automation platform",
    "Centralized logging, indexing, and visualization system",
    "Container orchestration and cluster management system",
    "Infrastructure provisioning and configuration automation"
  ],
  answer: 1
},
{
  question: "Which Linux command is used to change file permissions?",
  options: [
    "Change file ownership and associated user group",
    "Display file contents in terminal output",
    "Modify file permissions using numeric or symbolic modes",
    "Create new directories and manage file hierarchy"
  ],
  answer: 2
},
{
  question: "A log file is consuming excessive disk space rapidly. What is the BEST solution?",
  options: [
    "Delete logs manually every time disk is full",
    "Disable logging completely to save disk usage",
    "Increase disk size without addressing root cause",
    "Implement log rotation and retention policies properly"
  ],
  answer: 3
},
{
  question: "Which command retrieves logs from a Kubernetes pod?",
  options: [
    "Describe pod configuration and metadata information",
    "Retrieve logs of specific pod container instance",
    "Delete pod and recreate new instance automatically",
    "List all services running inside cluster namespace"
  ],
  answer: 1
},
{
  question: "A container’s memory usage increases continuously over time. What is the MOST likely issue?",
  options: [
    "CPU throttling caused by incorrect resource limits",
    "Memory leak in application running inside container",
    "Network latency causing delayed data processing",
    "Disk I/O bottleneck affecting container performance"
  ],
  answer: 1
},
{
  question: "What is systemd responsible for in Linux systems?",
  options: [
    "Managing system processes and service lifecycle",
    "Providing file system hierarchy and disk structure",
    "Handling network communication protocols securely",
    "Acting as command-line interpreter for user inputs"
  ],
  answer: 0
},
{
  question: "Which command restarts a service using systemd in Linux?",
  options: [
    "Stop service permanently without restarting it",
    "List all active services running in system",
    "Restart service using systemctl restart command",
    "Check logs of service without restarting process"
  ],
  answer: 2
},
{
  question: "What is the purpose of 'tail -f' command in Linux?",
  options: [
    "Delete last few lines of file permanently",
    "Continuously monitor file updates in real time",
    "Copy file contents to another directory location",
    "Rename file and change its ownership permissions"
  ],
  answer: 1
},
{
  question: "A monitoring alert shows sudden spike in application errors. What should you do FIRST?",
  options: [
    "Restart all services immediately without investigation",
    "Scale infrastructure resources aggressively to handle load",
    "Disable alerts temporarily to reduce noise",
    "Check application logs to identify root cause"
  ],
  answer: 3
},
{
  question: "Which tool is commonly used for application performance monitoring?",
  options: [
    "Infrastructure provisioning using declarative templates",
    "Application performance monitoring and distributed tracing",
    "Container runtime environment for executing workloads",
    "Version control system for managing source code"
  ],
  answer: 1
},
{
  question: "A server disk is full and causing failures. What should you do FIRST?",
  options: [
    "Format disk immediately without checking data",
    "Restart system to clear temporary files automatically",
    "Increase CPU allocation to reduce disk usage",
    "Identify large files using disk usage analysis command"
  ],
  answer: 3
},
{
  question: "Which command shows active network connections in Linux?",
  options: [
    "Display network connections and listening ports",
    "List files in current working directory path",
    "Monitor CPU usage of running processes continuously",
    "Display memory usage statistics in human readable format"
  ],
  answer: 0
},
{
  question: "What is the main purpose of log management in DevOps?",
  options: [
    "Delete logs periodically to save storage space",
    "Collect, store, and analyze logs for insights",
    "Monitor CPU and memory performance metrics only",
    "Manage container lifecycle and orchestration tasks"
  ],
  answer: 1
},
{
  question: "A Kubernetes pod is slow due to CPU limits being too restrictive. What should you adjust?",
  options: [
    "Increase memory limits without modifying CPU configuration",
    "Restart pod multiple times to improve performance temporarily",
    "Modify CPU requests and limits for better allocation",
    "Delete pod and recreate without resource configuration"
  ],
  answer: 2
},
{
  question: "Which command checks memory usage in Linux systems?",
  options: [
    "Display memory usage statistics in megabytes",
    "List files and directories in current path",
    "Show active network connections and ports",
    "Monitor running processes with CPU utilization"
  ],
  answer: 0
},
{
  question: "A service crashes frequently under heavy traffic load. What is the BEST solution?",
  options: [
    "Restart service repeatedly during high load conditions",
    "Ignore issue and monitor logs for future failures",
    "Implement horizontal scaling and load balancing strategy",
    "Reduce logging level to improve performance slightly"
  ],
  answer: 2
},
{
  question: "Which directory typically contains system log files in Linux?",
  options: [
    "User home directories storing personal user data",
    "Executable binaries and system command files",
    "Configuration files for system services and applications",
    "System log files and application generated logs"
  ],
  answer: 3
},
{
  question: "What is the primary goal of monitoring in DevOps practices?",
  options: [
    "Deploy applications faster into production environments",
    "Track system health, performance, and reliability metrics",
    "Write application code and manage repositories",
    "Configure infrastructure manually on remote servers"
  ],
  answer: 1
},

{
  question: "What is the primary goal of Site Reliability Engineering (SRE)?",
  options: [
    "Manage version control and branching strategies",
    "Ensure system reliability scalability and performance",
    "Develop application features rapidly and frequently",
    "Write infrastructure automation scripts for deployment"
  ],
  answer: 1
},
{
  question: "What does SLO (Service Level Objective) represent?",
  options: [
    "Internal reliability targets defined for services",
    "Monitoring tools used for collecting metrics",
    "External contractual agreement with customers",
    "Actual measured performance of production systems"
  ],
  answer: 0
},
{
  question: "What is an error budget in SRE practices?",
  options: [
    "Number of bugs fixed during development cycles",
    "Allowed failure tolerance based on SLO targets",
    "Threshold for CPU and memory utilization limits",
    "Budget allocated for infrastructure scaling costs"
  ],
  answer: 1
},
{
  question: "A deployment caused production outage. What is the FIRST step?",
  options: [
    "Assign responsibility to development team immediately",
    "Disable monitoring alerts to reduce noise temporarily",
    "Rollback to previous stable deployment version",
    "Increase infrastructure resources to stabilize system"
  ],
  answer: 2
},
{
  question: "What is the purpose of blue-green deployment strategy?",
  options: [
    "Scale applications automatically during traffic spikes",
    "Deploy new version alongside existing version safely",
    "Improve logging and monitoring system visibility",
    "Reduce infrastructure cost using shared resources"
  ],
  answer: 1
},
{
  question: "What is canary deployment mainly used for?",
  options: [
    "Gradually release changes to limited user subset",
    "Deploy application to all users at once",
    "Rollback application instantly after failure",
    "Monitor logs without affecting production traffic"
  ],
  answer: 0
},
{
  question: "What is GitOps in DevOps practices?",
  options: [
    "Automating tests without deployment integration",
    "Manual infrastructure management using shell scripts",
    "Using Git as source of truth for deployments",
    "Running CI pipelines without version control"
  ],
  answer: 2
},
{
  question: "A production issue occurs repeatedly. What is BEST long-term solution?",
  options: [
    "Ignore issue if system recovers automatically",
    "Increase server resources to handle failures",
    "Perform root cause analysis and fix permanently",
    "Restart services whenever issue appears again"
  ],
  answer: 2
},
{
  question: "What is MTTR (Mean Time To Recovery)?",
  options: [
    "Time taken to detect system performance issues",
    "Average time required to recover from failures",
    "Frequency of deployments in production environment",
    "Time required to deploy new application versions"
  ],
  answer: 1
},
{
  question: "What does deployment frequency indicate in DevOps metrics?",
  options: [
    "Time required for each deployment cycle",
    "How often code is deployed to production",
    "Average time to recover from outages",
    "Number of system failures over time"
  ],
  answer: 1
},
{
  question: "A system fails often but recovers quickly. What does it indicate?",
  options: [
    "Perfect system with zero performance issues",
    "No monitoring configured for failure detection",
    "Low reliability but strong recovery processes",
    "Highly stable and reliable system architecture"
  ],
  answer: 2
},
{
  question: "What is the purpose of rate limiting in APIs?",
  options: [
    "Reduce memory consumption in backend services",
    "Prevent system overload and misuse by clients",
    "Increase request processing speed significantly",
    "Improve database query performance efficiency"
  ],
  answer: 1
},
{
  question: "What is Zero Trust Security model?",
  options: [
    "Never trust any request without proper verification",
    "Disable authentication for internal applications",
    "Trust internal network traffic without verification",
    "Allow unrestricted access within private network"
  ],
  answer: 0
},
{
  question: "What is the role of API Gateway in architecture?",
  options: [
    "Deploy applications inside Kubernetes clusters",
    "Store logs and monitoring metrics centrally",
    "Act as entry point for all API requests",
    "Manage database connections and transactions"
  ],
  answer: 2
},
{
  question: "A system requires high availability. What is BEST approach?",
  options: [
    "Disable monitoring to reduce overhead",
    "Use single high-performance server instance",
    "Multiple instances with load balancing setup",
    "Manual failover without automation"
  ],
  answer: 2
},
{
  question: "What is RTO (Recovery Time Objective)?",
  options: [
    "Maximum acceptable downtime after failure",
    "Amount of data loss allowed during failure",
    "Frequency of backups taken in system",
    "Time required to detect system failures"
  ],
  answer: 0
},
{
  question: "What is RPO (Recovery Point Objective)?",
  options: [
    "Time required to restore system operations",
    "Maximum acceptable data loss during failure",
    "Time required to deploy applications",
    "Frequency of system monitoring alerts"
  ],
  answer: 1
},
{
  question: "What is serverless computing?",
  options: [
    "Applications run only on local infrastructure",
    "Cloud provider manages infrastructure automatically",
    "Servers are completely removed from architecture",
    "Running applications without any execution environment"
  ],
  answer: 1
},
{
  question: "What is AWS Lambda?",
  options: [
    "Monitoring tool for infrastructure performance",
    "Database service for structured data storage",
    "Function-as-a-Service to run code without servers",
    "Virtual machine service in cloud platform"
  ],
  answer: 2
},
{
  question: "A system is under heavy traffic. What is BEST scaling approach?",
  options: [
    "Restart system frequently during peak traffic",
    "Reduce user traffic by blocking requests",
    "Horizontal scaling by adding more instances",
    "Vertical scaling by increasing server resources"
  ],
  answer: 2
},
{
  question: "What is toil in SRE practices?",
  options: [
    "Automated processes that reduce manual effort",
    "Manual repetitive operational work with no value",
    "Monitoring metrics collected from systems",
    "Deployment strategies for production releases"
  ],
  answer: 1
},
{
  question: "What is Service Level Indicator (SLI)?",
  options: [
    "Measured metric indicating system performance",
    "Agreement between provider and customer",
    "Target objective for system reliability",
    "Tool used for monitoring infrastructure"
  ],
  answer: 0
},
{
  question: "What is change failure rate in DevOps metrics?",
  options: [
    "Percentage of deployments causing failures",
    "Time taken to recover from system outages",
    "Number of deployments per unit time",
    "Frequency of monitoring alerts triggered"
  ],
  answer: 0
},
{
  question: "What is lead time for changes?",
  options: [
    "Time taken from code commit to production deployment",
    "Time required to recover from system failures",
    "Time taken to detect production issues",
    "Frequency of deployments in production"
  ],
  answer: 0
},
{
  question: "What is the main goal of DevOps culture?",
  options: [
    "Separate development and operations responsibilities",
    "Increase manual processes for better control",
    "Improve collaboration between development and operations teams",
    "Reduce automation to maintain system stability"
  ],
  answer: 2
}
];
