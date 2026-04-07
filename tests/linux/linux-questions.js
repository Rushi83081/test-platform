const questions = [

/* ===== BASIC + COMMAND MIX (10) ===== */

{
question: "You want to check disk usage, memory usage, and block devices in one go. Which combination of commands is correct?",
options: ["df free lsblk commands show disk memory and block devices", "ps top uptime commands show running processes and system load", "ping curl netstat commands are used for network connectivity", "chmod chown ls commands modify permissions and list files"],
answer: 0
},
{
question: "Your system is running slow. Which command helps you check real-time running processes and resource usage?",
options: ["top command shows real-time CPU and memory usage", "ls command lists files in current directory", "pwd command shows current working directory", "df command shows disk usage only"],
answer: 0
},
{
question: "You want to read documentation of a command inside terminal. Which command should you use?",
options: ["man command opens manual pages for any command", "cat command creates new files", "touch command edits files", "echo command prints output"],
answer: 0
},
{
question: "You want to download a file from internet using terminal. Which command is used?",
options: ["wget command downloads file from given URL", "ps command shows process status", "chmod command changes permissions", "mv command moves files"],
answer: 0
},
{
question: "Which command displays information about block devices like disks and partitions?",
options: ["lsblk command shows block devices and partitions", "df command shows filesystem usage", "free command shows memory usage", "top command shows processes"],
answer: 0
},

/* ===== FILE & DIRECTORY (10) ===== */

{
question: "You want to create a file and overwrite its content using output of a command. Which operator is used?",
options: ["Greater than symbol overwrites file content", "Double greater than symbol appends content", "Pipe symbol sends output to another command", "Ampersand symbol runs process in background"],
answer: 0
},
{
question: "You want to append output to an existing file without deleting previous content. Which operator is correct?",
options: ["Double greater than symbol appends output to file", "Single greater than symbol deletes existing content", "Pipe symbol replaces content of file", "Less than symbol reads input from file"],
answer: 0
},
{
question: "You want to delete a directory forcefully along with all files inside it. Which command is correct?",
options: ["rm -rf command removes directory recursively without prompt", "rmdir command removes empty directory only", "cp command copies directory structure", "mv command moves directory to new location"],
answer: 0
},
{
question: "You need to copy a file from one directory to another. Which command should you use?",
options: ["cp command copies file to another location", "mv command deletes file permanently", "rm command moves file to trash", "touch command renames file"],
answer: 0
},
{
question: "You want to rename a file without changing its content. Which command is used?",
options: ["mv command renames file or moves it", "cp command duplicates file", "rm command deletes file", "chmod command changes permissions"],
answer: 0
},

/* ===== USER MANAGEMENT (10) ===== */

{
question: "What is the main difference between useradd and adduser command?",
options: ["useradd creates user with default settings while adduser provides interactive setup", "adduser deletes user accounts and useradd modifies groups", "both commands are exactly same in all distributions", "useradd only works for root user and adduser for normal users"],
answer: 0
},
{
question: "Which file stores encrypted user passwords in Linux system?",
options: ["shadow file stores encrypted passwords securely", "passwd file stores encrypted passwords", "group file stores user passwords", "hosts file stores user login details"],
answer: 0
},
{
question: "Which command is used to change password of a user?",
options: ["passwd command changes user password", "useradd command creates new password", "groupadd command modifies password", "chmod command secures password file"],
answer: 0
},
{
question: "You want to delete a user along with home directory. Which command is correct?",
options: ["userdel -r removes user and home directory", "userdel removes only password", "rm user removes account permanently", "groupdel deletes user account"],
answer: 0
},
{
question: "You want to add a user to an existing group. Which command is used?",
options: ["usermod -aG adds user to group", "groupadd adds user to group", "chmod assigns group permissions", "passwd modifies group"],
answer: 0
},

/* ===== PERMISSIONS (12) ===== */

{
question: "Which command is used to change file ownership?",
options: ["chown command changes ownership of file", "chmod command changes permission bits", "chgrp command changes group only", "ls command displays ownership"],
answer: 0
},
{
question: "What does chmod 777 mean in Linux?",
options: ["Full read write execute permissions for all users", "Only owner has full permissions", "Only group has execute permissions", "File becomes read-only"],
answer: 0
},
{
question: "What is the purpose of umask in Linux?",
options: ["Defines default permission for newly created files", "Deletes old file permissions", "Assigns ownership to file", "Encrypts file content"],
answer: 0
},
{
question: "You want to give execute permission only to owner. Which symbolic command is correct?",
options: ["chmod u+x gives execute permission to owner", "chmod g+x gives execute to group", "chmod o+x gives execute to others", "chmod a-x removes execute permission"],
answer: 0
},

/* ===== LINKS (5) ===== */

{
question: "What is the key difference between hard link and soft link?",
options: ["Hard link shares same inode while soft link has separate inode", "Soft link shares inode and hard link does not", "Both links are identical in structure", "Hard link points to directory only"],
answer: 0
},
{
question: "Which command creates a symbolic link?",
options: ["ln -s command creates symbolic link", "ln command creates soft link automatically", "cp command links files together", "mv command links files"],
answer: 0
},

/* ===== PROCESS (10) ===== */

{
question: "What is the difference between kill and kill -9 command?",
options: ["kill sends graceful signal while kill -9 forcefully terminates process", "kill -9 pauses process execution", "kill deletes process permanently from system", "both commands behave exactly same"],
answer: 0
},
{
question: "You want to run a process in background. Which symbol is used?",
options: ["Ampersand symbol runs process in background", "Pipe symbol sends output to next command", "Greater symbol writes output to file", "Hash symbol comments line"],
answer: 0
},
{
question: "Which command brings background process to foreground?",
options: ["fg command brings process to foreground", "bg command stops process", "ps command lists processes", "top command monitors system"],
answer: 0
},

/* ===== NETWORKING (10) ===== */

{
question: "What is the main difference between TCP and UDP protocols?",
options: ["TCP is connection oriented and reliable while UDP is faster but unreliable", "UDP is connection oriented and TCP is not", "Both protocols are identical in behavior", "TCP is used only for local networks"],
answer: 0
},
{
question: "Which command is used to test connectivity between two systems?",
options: ["ping command checks network connectivity", "df command checks disk usage", "top command checks CPU usage", "chmod command changes permissions"],
answer: 0
},

/* ===== SCENARIO BASED (13) ===== */

{
question: "Your application is failing with permission denied error. What should you check first?",
options: ["File permissions and ownership settings", "Network configuration settings", "Disk partition size availability", "CPU usage statistics"],
answer: 0
},
{
question: "Disk is full and system is slow. What should you do?",
options: ["Check large files using disk usage commands and clean unnecessary data", "Restart system immediately without checking", "Delete system files randomly", "Ignore issue until crash happens"],
answer: 0
},
{
question: "A process is consuming too much CPU. What is the best action?",
options: ["Identify process using top and terminate if required", "Delete all running processes", "Restart server without checking logs", "Disable CPU usage completely"],
answer: 0
}

];
