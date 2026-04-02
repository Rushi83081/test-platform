const questions = [

/* ===== BASIC (BUT TRICKY) ===== */

{
question: "Which command lists files including hidden files?",
options: [
"ls -a",
"ls -l",
"ls -h",
"ls -R"
],
answer: 0
},
{
question: "Which command changes directory to parent directory?",
options: [
"cd ..",
"cd /",
"cd ~",
"cd -"
],
answer: 0
},
{
question: "Which command shows current working directory?",
options: [
"pwd",
"cwd",
"dir",
"where"
],
answer: 0
},
{
question: "Which command copies directory recursively?",
options: [
"cp -r",
"cp -d",
"cp -a",
"cp -v"
],
answer: 0
},

/* ===== MEDIUM ===== */

{
question: "Which command shows only running processes of current user?",
options: [
"ps",
"ps aux",
"top",
"ps -ef"
],
answer: 0
},
{
question: "Which file stores encrypted passwords?",
options: [
"/etc/shadow",
"/etc/passwd",
"/etc/group",
"/etc/login"
],
answer: 0
},
{
question: "Which command checks memory usage in human readable format?",
options: [
"free -h",
"free -m",
"top",
"vmstat"
],
answer: 0
},
{
question: "Which command shows open network connections?",
options: [
"netstat -tuln",
"ifconfig",
"ping",
"ip addr"
],
answer: 0
},

/* ===== HARD / SCENARIO ===== */

{
question: "Disk usage is high. Which command helps find large directories?",
options: [
"du -sh *",
"df -h",
"ls -lh",
"top"
],
answer: 0
},
{
question: "Service is not starting. First step?",
options: [
"Check logs using journalctl",
"Restart system",
"Delete service",
"Change directory"
],
answer: 0
},
{
question: "Which command shows real-time CPU usage per process?",
options: [
"top",
"ps",
"htop",
"uptime"
],
answer: 2
},
{
question: "Which command helps debug network connectivity issues?",
options: [
"ping",
"netstat",
"traceroute",
"all"
],
answer: 3
}
];
