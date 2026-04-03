const questions = [

/* ===== BASIC (10) ===== */

{
question: "Which command lists all files including hidden ones?",
options: ["ls -l", "ls -a", "ls -R", "ls -h"],
answer: 1
},
{
question: "Which command changes directory to parent directory?",
options: ["cd /", "cd ~", "cd ..", "cd -"],
answer: 2
},
{
question: "Which command shows current working directory?",
options: ["dir", "pwd", "cwd", "where"],
answer: 1
},
{
question: "Which command copies directories recursively?",
options: ["cp -v", "cp -r", "cp -d", "cp -a"],
answer: 1
},
{
question: "Which command removes directory with contents?",
options: ["rmdir", "rm -r", "remove", "delete"],
answer: 1
},
{
question: "Which command displays file content?",
options: ["more", "less", "cat", "view"],
answer: 2
},
{
question: "Which command searches inside files?",
options: ["find", "locate", "grep", "search"],
answer: 2
},
{
question: "Which command shows manual pages?",
options: ["help", "doc", "info", "man"],
answer: 3
},
{
question: "Which command creates empty file?",
options: ["newfile", "touch", "create", "file"],
answer: 1
},
{
question: "Which command shows disk usage?",
options: ["du -h", "ls -lh", "df -h", "top"],
answer: 2
},

/* ===== MEDIUM (10) ===== */

{
question: "Which file stores user account details?",
options: ["/etc/shadow", "/etc/passwd", "/etc/group", "/etc/users"],
answer: 1
},
{
question: "Which file stores encrypted passwords?",
options: ["/etc/passwd", "/etc/group", "/etc/shadow", "/etc/login"],
answer: 2
},
{
question: "Which command shows memory usage in human readable format?",
options: ["top", "free -h", "ps", "vmstat"],
answer: 1
},
{
question: "Which command lists all processes?",
options: ["ps", "jobs", "ps aux", "top"],
answer: 2
},
{
question: "Which command changes file permissions?",
options: ["chown", "chmod", "chgrp", "perm"],
answer: 1
},
{
question: "Which command changes file ownership?",
options: ["chmod", "owner", "chown", "access"],
answer: 2
},
{
question: "Which command displays IP address?",
options: ["netstat", "ip addr", "route", "ifconfig"],
answer: 1
},
{
question: "Which command tests network connectivity?",
options: ["route", "netstat", "ping", "ip"],
answer: 2
},
{
question: "Which command schedules repeated tasks?",
options: ["at", "job", "crontab", "schedule"],
answer: 2
},
{
question: "Which command shows open ports?",
options: ["top", "ls", "netstat -tuln", "ps"],
answer: 2
},

/* ===== HARD (15) ===== */

{
question: "Which command shows disk usage per directory?",
options: ["df -h", "du -sh", "ls -lh", "top"],
answer: 1
},
{
question: "Which command displays kernel version?",
options: ["uname -a", "kernel", "uname -r", "version"],
answer: 2
},
{
question: "Which command shows full system information?",
options: ["details", "info", "uname -a", "system"],
answer: 2
},
{
question: "Which command finds executable location?",
options: ["where", "find", "which", "path"],
answer: 2
},
{
question: "Which command shows command history?",
options: ["commands", "log", "history", "list"],
answer: 2
},
{
question: "Which command clears terminal?",
options: ["reset", "clean", "clear", "cls"],
answer: 2
},
{
question: "Which command monitors real-time processes?",
options: ["ps", "htop", "uptime", "free"],
answer: 1
},
{
question: "Which command shows routing table?",
options: ["netstat", "ping", "ip route", "route"],
answer: 2
},
{
question: "Which command creates new user?",
options: ["adduser", "useradd", "newuser", "createuser"],
answer: 1
},
{
question: "Which command deletes user?",
options: ["removeuser", "delete", "userdel", "deluser"],
answer: 2
},
{
question: "Which command locks user account?",
options: ["disable", "stop", "passwd -l", "lock"],
answer: 2
},
{
question: "Which command shows logged users?",
options: ["users", "all", "who", "w"],
answer: 1
},
{
question: "Which command shows file permissions?",
options: ["stat", "chmod", "ls -l", "perm"],
answer: 2
},
{
question: "Which command checks disk IO?",
options: ["du", "iostat", "df", "top"],
answer: 1
},
{
question: "Which command displays CPU information?",
options: ["cpuinfo", "top", "lscpu", "ps"],
answer: 2
},

/* ===== SCENARIO (15) ===== */

{
question: "Server CPU usage is high. What is first step?",
options: [
"Restart system immediately",
"Check running processes using top",
"Delete unnecessary files",
"Increase disk space"
],
answer: 1
},
{
question: "Disk is full. What should you check first?",
options: [
"Restart application immediately",
"Increase RAM allocation",
"Find large files using du command",
"Change permissions"
],
answer: 2
},
{
question: "SSH login not working. What is first step?",
options: [
"Delete user account",
"Restart system",
"Check SSH service status",
"Change firewall rules"
],
answer: 2
},
{
question: "Application not starting after reboot. What to check?",
options: [
"Reinstall OS",
"Check service status using systemctl",
"Delete configuration files",
"Change ownership"
],
answer: 1
},
{
question: "Memory usage suddenly high. What to do?",
options: [
"Delete logs immediately",
"Restart system",
"Check processes consuming high memory",
"Change disk partitions"
],
answer: 2
},
{
question: "Logs are growing rapidly. What should you do?",
options: [
"Restart system",
"Disable logging permanently",
"Check logs and configure log rotation",
"Delete all logs blindly"
],
answer: 2
},
{
question: "Cron job not running. What should you verify?",
options: [
"Delete cron file",
"Restart system",
"Check cron service status and logs",
"Change hostname"
],
answer: 2
},
{
question: "Website not accessible. What to check first?",
options: [
"Delete app files",
"Restart server",
"Check service status and open ports",
"Change permissions"
],
answer: 2
},
{
question: "Permission denied error appears. What to check?",
options: [
"Restart system",
"Delete file",
"Verify file permissions and ownership",
"Change network settings"
],
answer: 2
},
{
question: "Server slow but CPU normal. What to check?",
options: [
"Delete data",
"Restart system",
"Check disk IO and memory usage",
"Change user settings"
],
answer: 2
},
{
question: "Port 80 not responding. What to verify?",
options: [
"Restart system",
"Delete config",
"Check service running and port binding",
"Change timezone"
],
answer: 2
},
{
question: "Unexpected reboot happened. What to check?",
options: [
"Restart again",
"Delete logs",
"Check system logs in /var/log",
"Change partitions"
],
answer: 2
},
{
question: "Slow login reported. What should you analyze?",
options: [
"Delete users",
"Restart system",
"Check authentication logs and load",
"Change permissions"
],
answer: 2
},
{
question: "Service fails repeatedly. What to check?",
options: [
"Restart server",
"Delete config",
"Check service logs and errors",
"Change user settings"
],
answer: 2
},
{
question: "Network unstable. What should you check?",
options: [
"Restart system",
"Delete configs",
"Check network configuration and routing",
"Change permissions"
],
answer: 2
}

];
