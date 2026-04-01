function selectTool(tool){

// SAVE SELECTED TOOL
localStorage.setItem("devopsTool", tool);

// ROUTING
if(tool === "git"){
window.location.href = "git/git.html";
}
else if(tool === "docker"){
window.location.href = "docker/docker.html";
}
else if(tool === "kubernetes"){
window.location.href = "kubernetes/k8s.html";
}
else if(tool === "terraform"){
window.location.href = "terraform/terraform.html";
}
else if(tool === "jenkins"){
window.location.href = "jenkins/jenkins.html";
}
else{
window.location.href = "all/devops-all.html";
}

}
