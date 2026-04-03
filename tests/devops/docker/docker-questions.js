const questions = [

/* ===== SIMPLE (5) ===== */

{
question: "What is Docker?",
options: ["Containers", "Hypervisor", "Database", "Kernel"],
answer: 0
},
{
question: "Container vs VM key difference?",
options: ["Lightweight", "Hardware", "BIOS", "Firmware"],
answer: 0
},
{
question: "Docker uses which kernel feature?",
options: ["Namespaces", "Threads", "Sockets", "Signals"],
answer: 0
},
{
question: "docker.io is?",
options: ["Registry", "Engine", "CLI", "Kernel"],
answer: 0
},
{
question: "Image is?",
options: ["Template", "Process", "Storage", "Network"],
answer: 0
},

/* ===== MEDIUM (10) ===== */

{
question: "What happens when you run docker run nginx?",
options: ["Pull image and start container", "Only build image locally", "Delete existing containers", "Push image to registry"],
answer: 0
},
{
question: "Why is docker build used?",
options: ["Create image from Dockerfile", "Run container from image", "Remove unused images", "Upload image to registry"],
answer: 0
},
{
question: "docker exec is mainly used for?",
options: ["Execute command inside running container", "Create new container instance", "Push image to registry server", "Stop running container process"],
answer: 0
},
{
question: "docker logs helps in?",
options: ["Viewing container runtime output logs", "Building image layers stepwise", "Monitoring host level CPU usage", "Deleting unused container logs"],
answer: 0
},
{
question: "docker rm removes?",
options: ["Stopped container permanently", "Running container instantly", "Docker image from registry", "Volume attached to container"],
answer: 0
},
{
question: "docker stop vs kill difference?",
options: ["Stop sends signal kill forces immediately", "Both behave exactly same always", "Kill stops gracefully stop force kills", "Stop deletes container kill removes image"],
answer: 0
},
{
question: "docker ps -a shows?",
options: ["All containers including stopped ones", "Only running containers list", "Only images available locally", "Only volumes attached containers"],
answer: 0
},
{
question: "docker pull command used for?",
options: ["Download image from remote registry", "Upload local image to registry", "Delete image from local storage", "Run container from image"],
answer: 0
},
{
question: "docker push requires?",
options: ["Authenticated access to registry", "Running container locally", "Volume mounted to container", "Host network configuration enabled"],
answer: 0
},
{
question: "docker start works on?",
options: ["Previously stopped container instance", "New container from image", "Running container process", "Image stored in registry"],
answer: 0
},

/* ===== HARD (15) ===== */

{
question: "Why use ENTRYPOINT instead of CMD?",
options: ["Ensures fixed executable always runs", "Allows runtime override of command", "Reduces image size significantly", "Improves container network performance"],
answer: 0
},
{
question: "CMD instruction is used for?",
options: ["Default command when container starts", "Mandatory instruction for Dockerfile", "Building image layer dependencies", "Exposing container network ports"],
answer: 0
},
{
question: "COPY vs ADD key difference?",
options: ["ADD supports remote URLs and auto extraction", "COPY works with remote URLs only", "ADD cannot copy local files", "COPY extracts compressed files automatically"],
answer: 0
},
{
question: "Why minimize Docker image layers?",
options: ["Reduce image size and build time", "Improve container network speed", "Increase CPU utilization efficiency", "Enable better volume mounting performance"],
answer: 0
},
{
question: "What is Docker volume used for?",
options: ["Persist data independent of container lifecycle", "Improve container network performance", "Store image layers permanently", "Cache container build instructions"],
answer: 0
},
{
question: "Bind mount differs from volume how?",
options: ["Uses host path directly inside container", "Creates managed storage inside Docker engine", "Only works with Dockerfile instructions", "Cannot persist data after restart"],
answer: 0
},
{
question: "Docker bridge network provides?",
options: ["Isolated communication between containers", "Direct access to host network stack", "Persistent storage across containers", "External routing between clusters"],
answer: 0
},
{
question: "Why use docker-compose?",
options: ["Manage multi container applications together", "Build images faster using cache layers", "Run single container efficiently", "Store logs in centralized system"],
answer: 0
},
{
question: "What happens in multi-stage build?",
options: ["Only required artifacts copied to final image", "All layers merged into single layer", "Images built faster without cache", "Container runs multiple processes simultaneously"],
answer: 0
},
{
question: "Docker networking host mode does?",
options: ["Container shares host network stack directly", "Creates isolated network for containers", "Uses overlay network across hosts", "Maps container ports dynamically"],
answer: 0
},
{
question: "Why containerization improves portability?",
options: ["Packages application with all dependencies together", "Uses same hardware configuration everywhere", "Relies on host OS kernel always", "Avoids using runtime environments"],
answer: 0
},
{
question: "What is overlay network used for?",
options: ["Connect containers across multiple hosts", "Connect only local containers together", "Persist data between container restarts", "Reduce image build size automatically"],
answer: 0
},
{
question: "Docker uses cgroups for?",
options: ["Resource limiting and isolation control", "Managing container file system layers", "Handling network routing internally", "Monitoring container logs continuously"],
answer: 0
},
{
question: "What causes large Docker image size?",
options: ["Unnecessary packages in image layers", "Using bridge network instead of host", "Running multiple containers together", "Using docker-compose configuration"],
answer: 0
},
{
question: "Why microservices benefit from Docker?",
options: ["Each service runs independently in container", "All services share same runtime process", "Monolithic deployment becomes easier", "Reduces need of network communication"],
answer: 0
},

/* ===== SCENARIO (20) ===== */

{
question: "Container exits immediately after start, what likely cause?",
options: ["No foreground process defined in container", "Image not present in local system", "Volume not mounted correctly", "Network configuration missing"],
answer: 0
},
{
question: "Application not reachable on browser after docker run?",
options: ["Port not mapped between host and container", "Container image missing locally", "Volume not created properly", "Docker daemon not restarted"],
answer: 0
},
{
question: "Data lost after restarting container, best solution?",
options: ["Use volume to persist container data", "Restart container with same image", "Rebuild image from Dockerfile", "Use docker logs to recover data"],
answer: 0
},
{
question: "Need to debug running container, what should you do?",
options: ["Use docker exec to access shell", "Restart container multiple times", "Rebuild image from scratch", "Check only docker ps output"],
answer: 0
},
{
question: "Multiple containers need to communicate, solution?",
options: ["Connect containers using same Docker network", "Use separate networks for isolation", "Restart containers together", "Mount same volume to all"],
answer: 0
},
{
question: "Application config changes frequently, best approach?",
options: ["Use bind mount to update config dynamically", "Rebuild image every time config changes", "Store config inside image permanently", "Use docker logs for config changes"],
answer: 0
},
{
question: "Container consuming high memory, what to do?",
options: ["Set memory limits using docker run flags", "Restart container frequently", "Delete container logs regularly", "Use docker-compose always"],
answer: 0
},
{
question: "Need same app behavior in dev and prod?",
options: ["Use same Docker image across environments", "Use different OS configurations", "Change container runtime settings", "Rebuild image in each environment"],
answer: 0
},
{
question: "Image build taking too long repeatedly?",
options: ["Optimize Dockerfile using layer caching properly", "Delete all images before build", "Restart Docker daemon frequently", "Disable cache completely always"],
answer: 0
},
{
question: "Container cannot connect external API?",
options: ["Check network and DNS configuration inside container", "Rebuild image with smaller size", "Restart Docker service on host", "Remove all unused containers"],
answer: 0
},
{
question: "Need to run multiple services together?",
options: ["Use docker-compose to manage services together", "Run containers manually each time", "Use only docker run command", "Restart all services manually"],
answer: 0
},
{
question: "Logs growing too large in container?",
options: ["Configure log rotation and size limits", "Delete container after each run", "Disable logging completely", "Restart container daily"],
answer: 0
},
{
question: "Container fails due to missing dependency?",
options: ["Add dependency in Dockerfile and rebuild image", "Restart container multiple times", "Use docker logs only", "Delete container and ignore issue"],
answer: 0
},
{
question: "Port conflict when running multiple containers?",
options: ["Use different host ports for each container", "Stop all running containers always", "Delete conflicting images", "Restart Docker daemon"],
answer: 0
},
{
question: "Need secure secrets inside container?",
options: ["Use Docker secrets or environment variables securely", "Store secrets directly in image", "Hardcode secrets in application code", "Write secrets in container logs"],
answer: 0
},
{
question: "Container not starting after build?",
options: ["Check CMD or ENTRYPOINT configuration", "Delete all images and rebuild", "Restart Docker service", "Check only network settings"],
answer: 0
},
{
question: "Need to scale multiple instances quickly?",
options: ["Use orchestration tools like Kubernetes or Swarm", "Run containers manually each time", "Restart same container multiple times", "Use docker exec repeatedly"],
answer: 0
},
{
question: "Image pulling fails from registry?",
options: ["Check authentication and network connectivity", "Restart container locally", "Delete all local images", "Rebuild Dockerfile again"],
answer: 0
},
{
question: "Need zero downtime deployment?",
options: ["Use rolling updates with multiple containers", "Stop old container then start new", "Restart container manually", "Use single container always"],
answer: 0
},
{
question: "Container performance inconsistent across hosts?",
options: ["Ensure consistent resource limits and environment", "Restart Docker daemon always", "Delete unused volumes frequently", "Use different base images each time"],
answer: 0
}

];
