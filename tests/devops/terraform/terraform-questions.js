const questions = [

/* ===== SIMPLE (5) ===== */

{
question: "What is the primary purpose of Terraform in DevOps?",
options: ["Infrastructure automation tool", "Container runtime engine", "Configuration database system", "Network routing service"],
answer: 0
},
{
question: "Terraform follows which concept for managing infrastructure?",
options: ["Infrastructure as code", "Virtual machine cloning", "Manual provisioning process", "Container orchestration system"],
answer: 0
},
{
question: "Which file extension is used for Terraform configuration files?",
options: [".tf files", ".yaml files", ".json files", ".cfg files"],
answer: 0
},
{
question: "What is Terraform state file used for?",
options: ["Track infrastructure current state", "Store container logs data", "Manage application configuration", "Store cloud credentials data"],
answer: 0
},
{
question: "Which command formats Terraform code properly?",
options: ["terraform fmt", "terraform validate", "terraform plan", "terraform apply"],
answer: 0
},

/* ===== MEDIUM (8) ===== */

{
question: "You want to initialize your Terraform working directory and download providers. Which command should you use?",
options: ["terraform init", "terraform apply", "terraform plan", "terraform destroy"],
answer: 0
},
{
question: "You want to preview infrastructure changes before applying them. Which command should you use?",
options: ["terraform plan", "terraform apply", "terraform destroy", "terraform init"],
answer: 0
},
{
question: "You want to apply infrastructure changes after reviewing them. Which command should you use?",
options: ["terraform apply", "terraform plan", "terraform validate", "terraform fmt"],
answer: 0
},
{
question: "Which combination of commands initializes and applies Terraform configuration?",
options: ["terraform init followed by terraform apply", "terraform apply followed by terraform init", "terraform plan followed by terraform validate", "terraform destroy followed by terraform init"],
answer: 0
},
{
question: "Which combination helps preview and then apply infrastructure changes?",
options: ["terraform plan followed by terraform apply", "terraform apply followed by terraform plan", "terraform init followed by terraform destroy", "terraform validate followed by terraform apply"],
answer: 0
},
{
question: "You want to validate Terraform configuration syntax without applying changes. Which command should you use?",
options: ["terraform validate", "terraform apply", "terraform destroy", "terraform init"],
answer: 0
},
{
question: "Which command removes all Terraform-managed infrastructure?",
options: ["terraform destroy", "terraform apply", "terraform plan", "terraform init"],
answer: 0
},
{
question: "AWS CLI is configured using which command before Terraform usage?",
options: ["aws configure command", "aws init command", "aws setup command", "aws start command"],
answer: 0
},

/* ===== HARD (12) ===== */

{
question: "What is the main difference between Terraform and CloudFormation?",
options: ["Terraform supports multi cloud deployments", "CloudFormation supports multi cloud deployments", "Both tools work exactly same", "Terraform works only on AWS"],
answer: 0
},
{
question: "What happens when terraform init is executed?",
options: ["Providers and modules are downloaded", "Infrastructure is created immediately", "State file is deleted permanently", "Configuration is validated automatically"],
answer: 0
},
{
question: "What is the purpose of terraform.tfstate file?",
options: ["Maintain mapping of resources and state", "Store Terraform configuration code", "Store cloud credentials securely", "Store module definitions only"],
answer: 0
},
{
question: "Why should terraform.tfstate file not be edited manually?",
options: ["It may corrupt state tracking information", "It improves performance significantly", "It deletes infrastructure automatically", "It updates provider versions"],
answer: 0
},
{
question: "What is the purpose of Terraform modules?",
options: ["Reuse infrastructure code across projects", "Store application logs data", "Manage container networking rules", "Execute shell scripts automatically"],
answer: 0
},
{
question: "What files are typically present inside a Terraform module?",
options: ["main.tf variables.tf outputs.tf", "Dockerfile and compose.yml files", "index.html and style.css files", "package.json and app.js files"],
answer: 0
},
{
question: "What is the purpose of Terraform workspace?",
options: ["Manage multiple environments using same code", "Store application logs data", "Handle container networking rules", "Manage cloud provider credentials"],
answer: 0
},
{
question: "Which command creates a new Terraform workspace?",
options: ["terraform workspace new", "terraform workspace create", "terraform workspace init", "terraform workspace apply"],
answer: 0
},
{
question: "What happens if instance_type is not in quotes?",
options: ["Terraform syntax error occurs", "Instance created successfully", "State file gets deleted", "Provider fails to load"],
answer: 0
},
{
question: "Identify error:\nresource \"aws_instance\" \"web\" {\n instance_type = t2.micro\n ami = \"ami-123\"\n}",
options: ["Missing quotes around instance type", "Invalid resource block name", "Wrong ami format used", "Missing provider block"],
answer: 0
},
{
question: "What is backend configuration used for?",
options: ["Store state file remotely and securely", "Store application configuration locally", "Run Terraform commands automatically", "Execute shell scripts remotely"],
answer: 0
},
{
question: "What is terraform.tfvars file used for?",
options: ["Provide variable values externally", "Store logs and metrics data", "Define provider configuration", "Manage state file location"],
answer: 0
},

/* ===== SCENARIO (25) ===== */

{
question: "You want to initialize your Terraform project and deploy infrastructure. Which sequence should you follow?",
options: ["terraform init followed by terraform apply", "terraform apply followed by terraform init", "terraform plan followed by terraform validate", "terraform destroy followed by terraform init"],
answer: 0
},
{
question: "You want to review execution plan before applying infrastructure changes. What should you do?",
options: ["Run terraform plan before terraform apply", "Run terraform apply before terraform plan", "Run terraform destroy before init", "Run terraform validate after apply"],
answer: 0
},
{
question: "You accidentally deleted terraform.tfstate file. What is the impact?",
options: ["Terraform loses track of infrastructure state", "Infrastructure gets deleted automatically", "Providers stop working immediately", "Configuration files get corrupted"],
answer: 0
},
{
question: "You want to reuse infrastructure code across multiple environments. What should you use?",
options: ["Terraform modules for reusable code", "Terraform state file only", "Terraform logs command", "Terraform destroy command"],
answer: 0
},
{
question: "You want to manage dev and prod environments using same codebase. What feature should you use?",
options: ["Terraform workspaces for environment separation", "Terraform destroy for each environment", "Terraform logs command", "Terraform validate command"],
answer: 0
},
{
question: "Terraform apply failed due to syntax error. What should you do first?",
options: ["Run terraform validate to check syntax", "Run terraform destroy immediately", "Delete state file manually", "Restart Terraform process"],
answer: 0
},
{
question: "Your infrastructure changed manually outside Terraform. What is this situation called?",
options: ["Infrastructure drift detected state mismatch", "State file corruption issue", "Provider configuration failure", "Module dependency error"],
answer: 0
},
{
question: "You want to ensure consistent formatting across Terraform files. What should you use?",
options: ["terraform fmt command for formatting", "terraform validate command", "terraform apply command", "terraform destroy command"],
answer: 0
},
{
question: "You want to remove all resources created by Terraform. What should you do?",
options: ["Run terraform destroy command safely", "Run terraform apply again", "Delete configuration files only", "Restart Terraform process"],
answer: 0
},
{
question: "Terraform plan shows unexpected changes. What should you do?",
options: ["Review changes before applying carefully", "Apply changes immediately without review", "Delete state file manually", "Restart Terraform process"],
answer: 0
},
{
question: "You want to store Terraform state remotely for team usage. What should you use?",
options: ["Backend configuration for remote state storage", "Local state file only", "Terraform logs command", "Terraform validate command"],
answer: 0
},
{
question: "Your Terraform code is not formatted properly. What should you run?",
options: ["terraform fmt to fix formatting issues", "terraform plan command", "terraform destroy command", "terraform init command"],
answer: 0
},
{
question: "You want to create new workspace for staging environment. What should you use?",
options: ["terraform workspace new staging", "terraform workspace apply staging", "terraform workspace init staging", "terraform workspace destroy staging"],
answer: 0
},
{
question: "You want to switch between environments in Terraform. What should you use?",
options: ["terraform workspace select command", "terraform workspace apply command", "terraform workspace delete command", "terraform workspace init command"],
answer: 0
},
{
question: "Terraform apply is taking too long. What should you check?",
options: ["Check provider configuration and resource dependencies", "Delete all configuration files immediately", "Restart Terraform process repeatedly", "Ignore execution delay completely"],
answer: 0
},
{
question: "You want to pass variable values dynamically. What should you use?",
options: ["terraform.tfvars file for variable input", "terraform logs command", "terraform destroy command", "terraform fmt command"],
answer: 0
},
{
question: "You need to configure AWS credentials before Terraform usage. What should you do?",
options: ["Run aws configure command properly", "Run terraform init command", "Run terraform validate command", "Run terraform fmt command"],
answer: 0
},
{
question: "Terraform configuration is correct but resources not created. What should you check?",
options: ["Ensure terraform apply executed successfully", "Check formatting using terraform fmt", "Check logs only", "Delete state file manually"],
answer: 0
},
{
question: "You want to check what changes will occur before applying. What should you run?",
options: ["terraform plan command before apply", "terraform apply directly", "terraform destroy command", "terraform fmt command"],
answer: 0
},
{
question: "You want to automate infrastructure creation repeatedly. What approach should you use?",
options: ["Use reusable Terraform modules properly", "Use manual cloud console setup", "Delete and recreate resources manually", "Use only terraform logs command"],
answer: 0
},
{
question: "State file conflicts occur in team environment. What should you use?",
options: ["Remote backend with state locking enabled", "Local state file only", "Delete state file frequently", "Ignore state conflicts"],
answer: 0
},
{
question: "Terraform module not working properly. What should you check?",
options: ["Check module input variables and outputs", "Delete module files immediately", "Restart Terraform always", "Ignore module errors"],
answer: 0
},
{
question: "You want to destroy specific environment resources. What should you use?",
options: ["Select workspace then run destroy command", "Delete all configuration files", "Restart Terraform process", "Ignore environment separation"],
answer: 0
},
{
question: "Terraform configuration uses wrong region. What should you check?",
options: ["Provider configuration region settings", "Terraform logs command only", "State file formatting", "Module file names"],
answer: 0
},
{
question: "Terraform apply partially failed. What should you do next?",
options: ["Review error and reapply safely", "Delete state file immediately", "Restart Terraform always", "Ignore failure completely"],
answer: 0
}

];
