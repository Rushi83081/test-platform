const questions = [

{
question: "Your application fails with 'Permission denied' while executing a script. What is the most appropriate first step to troubleshoot?",
options: [
"Verify execute permission and file ownership of the script",
"Restart the application service immediately",
"Check network connectivity to the server",
"Reinstall the application binaries"
],
answer: 0
},
{
question: "You want to identify which directories are consuming the most disk space on a server. Which approach is most suitable?",
options: [
"Use du command with sorting to analyze directory sizes",
"Use free command to monitor memory usage",
"Use uptime command to check system load",
"Use ps command to list running processes"
],
answer: 0
},
{
question: "A process is not stopping using normal kill command. What is the best next action?",
options: [
"Send a SIGKILL signal to forcefully terminate the process",
"Restart the entire operating system immediately",
"Delete the process binary from filesystem",
"Change file permissions of the process"
],
answer: 0
},
{
question: "You accidentally ran a command that overwrote a file. Which operator likely caused this issue?",
options: [
"Single greater-than symbol redirected output and replaced content",
"Double greater-than symbol appended content safely",
"Pipe symbol transferred output between commands",
"Ampersand symbol executed process in background"
],
answer: 0
},
{
question: "You need to give a user permission to run administrative commands without switching to root. What is the best approach?",
options: [
"Add the user to sudo group for elevated privileges",
"Change ownership of all system files to the user",
"Assign full permission using chmod 777",
"Disable root account completely"
],
answer: 0
},
{
question: "Which file contains encrypted passwords and is restricted from normal user access?",
options: [
"/etc/shadow file stores hashed passwords securely",
"/etc/passwd file stores encrypted passwords",
"/etc/group file stores user passwords",
"/etc/hosts file stores authentication data"
],
answer: 0
},
{
question: "A background job needs to be brought back to foreground for interaction. Which command should be used?",
options: [
"fg command resumes job in foreground",
"bg command stops execution of job",
"ps command lists background jobs",
"kill command terminates background jobs"
],
answer: 0
},
{
question: "You want to schedule a task to run every day at midnight. What is the correct tool to use?",
options: [
"crontab scheduler for periodic task execution",
"systemctl command for managing services",
"top command for monitoring processes",
"chmod command for scheduling execution"
],
answer: 0
},
{
question: "A file needs to be accessible through another name without duplicating data. What should you use?",
options: [
"Create a hard link to share same inode reference",
"Copy file using cp command for duplication",
"Move file using mv command to rename it",
"Create directory and store file again"
],
answer: 0
},
{
question: "You want to monitor CPU, memory, and running processes in real-time. Which command is most suitable?",
options: [
"top command provides dynamic system monitoring",
"df command shows disk usage information",
"ls command lists files in directory",
"cat command displays file content"
],
answer: 0
}
/*
{
question: "What is the main advantage of using a symbolic link instead of a hard link?",
options: [
"Symbolic link can reference files across different filesystems",
"Symbolic link shares same inode as original file",
"Symbolic link improves disk performance",
"Symbolic link encrypts file content automatically"
],
answer: 0
},
{
question: "A user reports that newly created files have restricted permissions. What should you check?",
options: [
"umask value controlling default permission settings",
"system uptime affecting file creation",
"disk partition usage statistics",
"network configuration of the system"
],
answer: 0
},
{
question: "You want to compress and archive multiple files into a single file. Which command combination is correct?",
options: [
"tar with compression flags creates archive file",
"cp command compresses files automatically",
"mv command converts files into archive",
"chmod command secures archive files"
],
answer: 0
},
{
question: "A process is consuming high CPU continuously. What is the best way to reduce its priority?",
options: [
"Adjust nice value to lower scheduling priority",
"Kill the process immediately without analysis",
"Restart the system to clear CPU usage",
"Move process to another directory"
],
answer: 0
},
{
question: "Which command is used to check memory usage of a system?",
options: [
"free command displays memory statistics",
"df command shows disk usage",
"lsblk command lists block devices",
"ps command lists processes"
],
answer: 0
},
{
question: "You need to verify network connectivity to a remote server. Which command should you use?",
options: [
"ping command tests reachability of remote host",
"df command checks disk usage remotely",
"top command monitors remote system load",
"chmod command verifies network access"
],
answer: 0
},
{
question: "A user accidentally deleted an important directory using rm -rf. What is the key reason for data loss?",
options: [
"rm -rf removes files permanently without recovery option",
"rm command moves files to recycle bin",
"rm command only hides files temporarily",
"rm command encrypts files before deletion"
],
answer: 0
},
{
question: "Which command allows you to change group ownership of a file?",
options: [
"chgrp command modifies group ownership",
"chmod command changes file permissions",
"chown command modifies user ownership only",
"ls command displays ownership details"
],
answer: 0
},
{
question: "You want to append logs to an existing file without losing previous data. Which operator is correct?",
options: [
"Double greater-than operator appends data safely",
"Single greater-than operator overwrites file",
"Pipe operator redirects output incorrectly",
"Ampersand operator runs background process"
],
answer: 0
},
{
question: "Which tool helps you view all currently logged-in users and their activity?",
options: [
"w command shows logged-in users and system activity",
"df command shows disk usage details",
"ls command lists directory contents",
"free command displays memory usage"
],
answer: 0
},
{
question: "A service is not running and needs to be started. Which command should you use?",
options: [
"systemctl start service_name starts the service",
"ps command restarts services automatically",
"chmod command enables service execution",
"kill command activates stopped service"
],
answer: 0
},
{
question: "What is the primary purpose of the /etc/passwd file?",
options: [
"Stores user account information and login details",
"Stores encrypted user passwords securely",
"Stores system logs and error messages",
"Stores network configuration settings"
],
answer: 0
},
{
question: "Which command helps you display block devices like disks and partitions?",
options: [
"lsblk command lists block devices and partitions",
"free command shows memory usage",
"df command shows filesystem usage",
"top command shows processes"
],
answer: 0
},
{
question: "You want to run a process in the background while continuing to use terminal. What should you do?",
options: [
"Use ampersand symbol to run process in background",
"Use pipe symbol to separate commands",
"Use greater symbol to redirect output",
"Use kill command to detach process"
],
answer: 0
},
{
question: "Which protocol provides reliable communication with error checking and retransmission?",
options: [
"TCP protocol ensures reliable data transmission",
"UDP protocol guarantees delivery of packets",
"IP protocol manages routing only",
"HTTP protocol handles file permissions"
],
answer: 0
}
*/

];
