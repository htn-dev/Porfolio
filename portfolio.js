
function subdomainRedirect(){
    const project1 = document.getElementById('project1')
    const project2 = document.getElementById('project2')
    const project3 = document.getElementById('project3')

   
    project1.addEventListener('click', ()=>{
        if(document.url === "http://donnab.info/beautybox.donnab.info" || document.url === "donnab.info/beautybox.donnab.info"){
            window.location.assign("beautybox.donnab.info");
        }
    })
    
    project2.addEventListener('click', ()=>{
        if(document.url === "http://donnab.info/noteboard.donnab.info" || document.url === "donnab.info/noteboard.donnab.info"){
            window.location.assign("noteboard.donnab.info");
        }
    })

    project3.addEventListener('click', ()=>{
        if(document.url === "http://donnab.info/cryptopair.donnab.info" || document.url === "donnab.info/cryptopair.donnab.info"){
            window.location.assign("cryptopair.donnab.info");
        }
    })
}

subdomainRedirect()
