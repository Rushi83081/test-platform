const questions = [

/* ===== BASICS + CI/CD (4) ===== */

{
question: "What is the primary purpose of Jenkins in a DevOps workflow?",
options: ["Automate build test and deployment pipelines", "Manage container runtime execution", "Provide cloud infrastructure services", "Store application configuration data"],
answer: 0
},
{
question: "What is stored inside the JENKINS_HOME directory?",
options: ["Jobs configuration plugins and build history", "Only container images and logs data", "Only pipeline scripts and code", "Only system configuration files"],
answer: 0
},
{
question: "What is the role of Jenkins master node?",
options: ["Manage jobs and assign work to agents", "Execute all builds directly on node", "Store application database data", "Handle network routing in cluster"],
answer: 0
},

/* ===== AGENTS (NEW 🔥) ===== */

{
question: "What is the primary role of an agent node in Jenkins architecture?",
options: ["Execute build jobs assigned by master", "Store Jenkins configuration files", "Manage plugin installations", "Handle webhook requests"],
answer: 0
},
{
question: "You want to run builds on separate machines instead of master. What should you configure?",
options: ["Configure Jenkins agent nodes properly", "Run all builds on master node", "Restart Jenkins server frequently", "Delete existing jobs"],
answer: 0
},
{
question: "What does 'agent any' mean in Jenkins pipeline?",
options: ["Run pipeline on any available agent node", "Run pipeline only on master node", "Disable agent usage in pipeline", "Run pipeline on specific container only"],
answer: 0
},
{
question: "Which type of Jenkins agent is created on demand and destroyed after build?",
options: ["Dynamic agent using containers or pods", "Static agent permanently configured", "Master node acting as agent", "Manual agent configuration only"],
answer: 0
},
{
question: "Which agent type provides clean isolated environment for each build?",
options: ["Docker based agent execution", "Static agent on local machine", "Freestyle job execution", "Webhook based execution"],
answer: 0
},

/* ===== FREESTYLE vs PIPELINE (3) ===== */

{
question: "What is the key difference between freestyle job and pipeline job in Jenkins?",
options: ["Pipeline supports code defined workflows", "Freestyle supports complex scripting pipelines", "Both provide identical functionality", "Pipeline only supports Docker builds"],
answer: 0
},
{
question: "Why are pipeline jobs preferred in modern CI/CD?",
options: ["Provide version controlled and reusable workflows", "Require less configuration always", "Execute faster than freestyle jobs", "Only support manual triggers"],
answer: 0
},

/* ===== DECLARATIVE vs SCRIPTED (4) ===== */

{
question: "What is the advantage of declarative pipeline over scripted pipeline?",
options: ["Simpler syntax with structured format", "More flexible for complex logic", "Runs faster in execution", "Supports fewer plugins"],
answer: 0
},
{
question: "When should scripted pipeline be preferred?",
options: ["When advanced custom logic is required", "When simple pipeline is enough", "When no scripting is needed", "When using freestyle jobs"],
answer: 0
},
{
question: "Which keyword defines declarative pipeline structure?",
options: ["pipeline block declaration", "stage block declaration", "steps block declaration", "agent block declaration"],
answer: 0
},
{
question: "Scripted pipeline is written using which language?",
options: ["Groovy scripting language", "Python programming language", "Shell scripting language", "Java programming language"],
answer: 0
},

/* ===== PLUGINS (4) ===== */

{
question: "Why are plugins essential in Jenkins?",
options: ["Extend functionality and integrate external tools", "Improve system performance automatically", "Store application data securely", "Replace pipeline scripts completely"],
answer: 0
},
{
question: "Which plugin integrates Jenkins with Git repository?",
options: ["Git plugin for repository integration", "Docker plugin for container builds", "Pipeline plugin for scripting", "Email plugin for notifications"],
answer: 0
},
{
question: "What happens if required plugin is missing?",
options: ["Feature depending on plugin will fail", "Jenkins server crashes immediately", "All jobs stop permanently", "Pipeline syntax changes automatically"],
answer: 0
},
{
question: "How are plugins installed in Jenkins?",
options: ["Through Jenkins dashboard plugin manager", "Using docker command execution", "Using kubectl apply command", "Through terraform configuration"],
answer: 0
},

/* ===== JENKINSFILE ERRORS (7) ===== */

{
question: "Identify error:\npipeline {\n agent any\n stages {\n stage('Build') {\n steps {\n echo Hello\n }\n }\n }\n}",
options: ["Missing quotes around string Hello", "Invalid stage syntax used", "Agent declaration missing", "Steps block incorrect"],
answer: 0
},
{
question: "Identify error:\nstage('Test') {\n echo \"Testing\"\n}",
options: ["Missing steps block inside stage", "Invalid echo command used", "Agent block missing", "Pipeline block missing"],
answer: 0
},
{
question: "Identify error:\npipeline {\n stages {\n stage('Build') {\n steps {\n sh 'mvn clean install'\n }\n }\n }\n}",
options: ["Missing agent declaration at pipeline level", "Invalid shell command used", "Stage syntax incorrect", "Steps block missing"],
answer: 0
},
{
question: "Identify error:\npipeline {\n agent any\n stage('Build') {\n steps {\n echo \"Build\"\n }\n }\n}",
options: ["Missing stages block wrapping stage", "Invalid agent declaration used", "Echo command incorrect", "Pipeline syntax invalid"],
answer: 0
},
{
question: "Identify error:\npipeline {\n agent any\n stages {\n stage('Deploy') {\n echo \"Deploying\"\n }\n }\n}",
options: ["Missing steps block inside stage", "Invalid stage name used", "Agent block incorrect", "Pipeline structure invalid"],
answer: 0
},
{
question: "Identify error:\npipeline {\n agent any\n stages {\n stage('Build') {\n steps {\n sh mvn clean install\n }\n }\n }\n}",
options: ["Missing quotes around shell command", "Invalid stage definition used", "Agent missing", "Steps block incorrect"],
answer: 0
},
{
question: "Identify error:\npipeline {\n agent any\n stages {\n stage('Test') {\n steps {\n sh 'pytest'\n }\n }\n }\n}",
options: ["No syntax error pipeline is correct", "Missing agent block", "Invalid stage syntax", "Steps block missing"],
answer: 0
},

/* ===== WEBHOOK (4) ===== */

{
question: "You want Jenkins to trigger build automatically on Git push. What should you configure?",
options: ["Webhook integration in repository settings", "Manual trigger for each commit", "Restart Jenkins server", "Delete existing jobs"],
answer: 0
},
{
question: "Webhook not triggering Jenkins job. What should you check?",
options: ["Correct webhook URL and Jenkins accessibility", "Delete Jenkins job immediately", "Restart Git repository", "Ignore webhook configuration"],
answer: 0
},
{
question: "What is the role of webhook in Jenkins integration?",
options: ["Trigger build on external events automatically", "Store logs inside Jenkins system", "Run container inside pipeline", "Delete old builds automatically"],
answer: 0
},

/* ===== SCENARIO (24) ===== */

{
question: "Your Jenkins build failed during execution. What should you check first?",
options: ["Check console output logs for error details", "Restart Jenkins server immediately", "Delete job and recreate", "Ignore failure temporarily"],
answer: 0
},
{
question: "Pipeline is stuck at one stage. What should you do?",
options: ["Check stage logs and pipeline configuration", "Restart Jenkins blindly", "Delete pipeline job", "Ignore execution"],
answer: 0
},
{
question: "Jenkins not detecting new Git commits. What is likely issue?",
options: ["Webhook or polling configuration problem", "Pipeline syntax error", "Plugin already installed", "Agent configuration correct"],
answer: 0
},
{
question: "Build failing due to dependency issue. What should you check?",
options: ["Check build tool configuration and dependencies", "Restart Jenkins server", "Delete pipeline job", "Ignore failure"],
answer: 0
},
{
question: "Pipeline needs environment specific variables. What should you use?",
options: ["Use environment variables inside pipeline", "Hardcode values in script", "Delete configuration", "Ignore variables"],
answer: 0
},
{
question: "Build triggered but deployment failed. What should you check?",
options: ["Check deployment stage logs and steps", "Restart Jenkins server", "Delete job immediately", "Ignore deployment"],
answer: 0
},
{
question: "Multiple builds running slowly. What should you check?",
options: ["Check system resources and agent configuration", "Delete jobs immediately", "Restart Jenkins randomly", "Ignore performance"],
answer: 0
},
{
question: "Pipeline not executing steps correctly. What should you verify?",
options: ["Check Jenkinsfile syntax and structure", "Restart Jenkins server", "Delete plugin", "Ignore pipeline"],
answer: 0
},
{
question: "Need to schedule builds automatically at intervals. What should you use?",
options: ["Configure cron based build triggers", "Run manually always", "Restart Jenkins daily", "Delete job"],
answer: 0
},
{
question: "Jenkins plugin not working properly. What should you do?",
options: ["Check plugin version and compatibility", "Delete Jenkins server", "Restart system always", "Ignore issue"],
answer: 0
},
{
question: "Pipeline requires secure credentials. What should you use?",
options: ["Jenkins credentials store securely", "Hardcode credentials in script", "Store credentials in logs", "Ignore security"],
answer: 0
},
{
question: "Pipeline fails at Git checkout stage. What should you verify?",
options: ["Check repository URL and credentials", "Delete pipeline job", "Restart Jenkins", "Ignore stage"],
answer: 0
},
{
question: "You want parallel execution of stages. What should you use?",
options: ["Parallel stages in pipeline configuration", "Freestyle job always", "Single stage execution", "Ignore parallelism"],
answer: 0
},
{
question: "Build artifacts need to be stored. What should you configure?",
options: ["Archive artifacts in Jenkins job", "Delete artifacts always", "Ignore storage", "Restart pipeline"],
answer: 0
},
{
question: "Jenkins job running on wrong node. What should you fix?",
options: ["Check node label and agent configuration", "Restart Jenkins server", "Delete node", "Ignore execution"],
answer: 0
},
{
question: "Pipeline execution slow due to repeated builds. What should you optimize?",
options: ["Use caching and efficient pipeline stages", "Delete pipeline always", "Restart Jenkins", "Ignore performance"],
answer: 0
},
{
question: "Deployment stage needs manual approval. What should you use?",
options: ["Use input step for approval", "Deploy automatically always", "Delete approval step", "Ignore control"],
answer: 0
},
{
question: "Jenkins server down frequently. What should you check?",
options: ["System resources and logs for issues", "Delete all jobs", "Restart blindly", "Ignore health"],
answer: 0
},
{
question: "Need to trigger another job after build. What should you use?",
options: ["Build trigger or pipeline chaining", "Manual execution always", "Delete downstream job", "Ignore chaining"],
answer: 0
},
{
question: "Pipeline failing due to syntax error. What should you do?",
options: ["Fix Jenkinsfile syntax before rerun", "Restart Jenkins always", "Delete pipeline", "Ignore error"],
answer: 0
},
{
question: "Build succeeds but app not deployed. What should you check?",
options: ["Check deployment stage execution logic", "Delete job", "Restart Jenkins", "Ignore deployment"],
answer: 0
},
{
question: "You want builds to run in isolated environments. What should you use?",
options: ["Use Docker based agents for isolation", "Run builds on master always", "Disable agents", "Ignore isolation"],
answer: 0
},
{
question: "You want Jenkins to scale builds dynamically. What should you use?",
options: ["Use dynamic agents with Kubernetes or Docker", "Use only static agents", "Restart Jenkins server", "Ignore scaling"],
answer: 0
}

];
