const questions = [

/* ===== SIMPLE (5) ===== */

{
question: "What is Docker?",
options: ["Container platform", "Operating system", "Database tool", "Network tool"],
answer: 0
},
{
question: "What is a container?",
options: ["Lightweight environment", "Virtual machine", "Storage device", "Operating system"],
answer: 0
},
{
question: "Docker uses which architecture?",
options: ["Client server model", "Peer to peer", "Standalone system", "Monolithic system"],
answer: 0
},
{
question: "What is docker.io?",
options: ["Cloud image registry", "Local engine", "CLI tool", "Operating system"],
answer: 0
},
{
question: "Container is based on?",
options: ["Kernel namespaces", "BIOS system", "Hypervisor", "Firmware"],
answer: 0
},

/* ===== MEDIUM (10) ===== */

{
question: "docker run command does?",
options: ["Run container from image", "Build image", "Delete container", "Push image"],
answer: 0
},
{
question: "docker build command does?",
options: ["Build image from Dockerfile", "Run container", "Delete image", "Push image"],
answer: 0
},
{
question: "docker ps shows?",
options: ["Running containers list", "Images list", "Volumes", "Networks"],
answer: 0
},
{
question: "docker exec is used for?",
options: ["Run command inside container", "Delete container", "Build image", "Push image"],
answer: 0
},
{
question: "docker logs command does?",
options: ["View container logs", "Delete logs", "Push logs", "Build logs"],
answer: 0
},
{
question: "docker stop does?",
options: ["Stop running container", "Delete container", "Build image", "Push image"],
answer: 0
},
{
question: "docker start does?",
options: ["Start stopped container", "Run new container", "Delete container", "Push image"],
answer: 0
},
{
question: "docker rm does?",
options: ["Remove container permanently", "Run container", "Build image", "Push image"],
answer: 0
},
{
question: "docker pull means?",
options: ["Download image from registry", "Upload image", "Delete image", "Run container"],
answer: 0
},
{
question: "docker push means?",
options: ["Upload image to registry", "Download image", "Delete image", "Run container"],
answer: 0
},

/* ===== HARD (15) ===== */

{
question: "CMD vs ENTRYPOINT difference?",
options: ["ENTRYPOINT fixed CMD override allowed", "Same behavior", "CMD fixed only", "ENTRYPOINT ignored"],
answer: 0
},
{
question: "COPY vs ADD difference?",
options: ["ADD supports URL extraction", "Same commands", "COPY downloads files", "ADD local only"],
answer: 0
},
{
question: "What are Docker layers?",
options: ["Read only image layers", "Network layers", "Storage volumes", "Logs"],
answer: 0
},
{
question: "What is Dockerfile?",
options: ["Script to build image", "Config file", "Log file", "Volume file"],
answer: 0
},
{
question: "What is Docker volume?",
options: ["Persistent data storage", "Network storage", "Image layer", "Temporary storage"],
answer: 0
},
{
question: "Volume helps in?",
options: ["Persist data after restart", "Delete data", "Run container", "Build image"],
answer: 0
},
{
question: "Docker networking provides?",
options: ["Container communication network", "Storage", "Logging", "Monitoring"],
answer: 0
},
{
question: "Bridge network is?",
options: ["Default container network", "External network", "Host network", "Overlay"],
answer: 0
},
{
question: "Port mapping means?",
options: ["Link container port to host", "Storage mapping", "Network delete", "Volume mapping"],
answer: 0
},
{
question: "Docker ensures portability by?",
options: ["Packaging app with dependencies", "Using OS", "Using BIOS", "Using hardware"],
answer: 0
},
{
question: "Docker isolation uses?",
options: ["Namespaces and cgroups", "VM only", "BIOS", "Firmware"],
answer: 0
},
{
question: "Reduce image size best way?",
options: ["Use multi stage builds", "Add more layers", "Large base image", "Ignore optimization"],
answer: 0
},
{
question: "docker-compose used for?",
options: ["Multi container management", "Single container", "Delete containers", "Build images"],
answer: 0
},
{
question: "Microservices architecture means?",
options: ["Loosely coupled services", "Single large app", "Monolithic design", "Standalone system"],
answer: 0
},
{
question: "Docker used in microservices because?",
options: ["Easy deploy and scale services", "Reduce storage", "Delete services", "Reduce CPU"],
answer: 0
},

/* ===== SCENARIO (20) ===== */

{
question: "Container stops immediately after start?",
options: ["No foreground process running", "No internet", "Volume missing", "Network issue"],
answer: 0
},
{
question: "App not accessible from browser?",
options: ["Port mapping not configured", "Image missing", "Volume issue", "Restart needed"],
answer: 0
},
{
question: "Data lost after container restart?",
options: ["Volume not used for storage", "Network issue", "Image deleted", "Container stopped"],
answer: 0
},
{
question: "Need multiple containers together?",
options: ["Use docker compose tool", "Use docker run", "Use docker ps", "Use docker rm"],
answer: 0
},
{
question: "Same environment dev and prod?",
options: ["Use container based deployment", "Use VM only", "Use OS config", "Manual setup"],
answer: 0
},
{
question: "Image size too large?",
options: ["Use multi stage build", "Add layers", "Use large base", "Ignore issue"],
answer: 0
},
{
question: "Container cannot connect another container?",
options: ["Check docker network configuration", "Restart container", "Delete image", "Build again"],
answer: 0
},
{
question: "Need persistent database storage?",
options: ["Use docker volume mount", "Restart container", "Use image", "Delete container"],
answer: 0
},
{
question: "Application crashes after deploy?",
options: ["Check container logs output", "Delete image", "Restart system", "Ignore logs"],
answer: 0
},
{
question: "Need to run command inside container?",
options: ["Use docker exec command", "Use docker build", "Use docker push", "Use docker stop"],
answer: 0
},
{
question: "Container uses wrong config file?",
options: ["Mount correct config using volume", "Restart container", "Delete image", "Reboot system"],
answer: 0
},
{
question: "Need to debug running container?",
options: ["Use docker exec shell access", "Delete container", "Push image", "Restart system"],
answer: 0
},
{
question: "Port conflict between containers?",
options: ["Change host port mapping", "Delete container", "Use volume", "Restart OS"],
answer: 0
},
{
question: "Image build taking long time?",
options: ["Optimize Dockerfile layer caching", "Add layers", "Restart system", "Ignore"],
answer: 0
},
{
question: "Need automatic restart on failure?",
options: ["Use restart policy in docker", "Manual restart", "Delete container", "Ignore"],
answer: 0
},
{
question: "Multiple services scaling needed?",
options: ["Use container orchestration tools", "Use single container", "Restart service", "Ignore"],
answer: 0
},
{
question: "Container memory usage high?",
options: ["Limit resources using docker flags", "Delete container", "Ignore usage", "Restart OS"],
answer: 0
},
{
question: "Need secure secrets handling?",
options: ["Use docker secrets management", "Store in image", "Hardcode values", "Ignore security"],
answer: 0
},
{
question: "Container logs too large?",
options: ["Configure log rotation settings", "Delete container", "Restart system", "Ignore logs"],
answer: 0
},
{
question: "Need container to talk external service?",
options: ["Configure proper network access", "Delete container", "Restart OS", "Ignore"],
answer: 0
}

];
