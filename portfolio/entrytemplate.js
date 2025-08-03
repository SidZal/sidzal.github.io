var entryReq = new XMLHttpRequest();

entryReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Identify template requests
        var entry = document.getElementsByTagName("entry");
        
        // Store number of elements since length parameter will change dynamically
        var n = entry.length

        // Loop through entries
        for (let i = 0; i < n; i++) {
            // Gather inputs
            // Always at front (item(0)) since entry changes dynamically, and this entry tag is deleted later
            let folderName = entry.item(0).getAttribute("folder");
            let thumbnailFileName = entry.item(0).getAttribute("thumbnail");
            let title = entry.item(0).getAttribute("title");
            let desc = entry.item(0).innerHTML;
            
            // Process inputs
            let folderPath = "/portfolio/" + folderName + "/";
            let thumbnailPath = folderPath + thumbnailFileName;

            // Inject template, delete entry element from document AND from entry collection
            entry.item(0).outerHTML = entryReq.responseText
            
            // Place inputs in template
            document.getElementsByClassName("project-grid").item(i).setAttribute("href", folderPath)
            document.getElementsByClassName("project-thumbnail").item(i).setAttribute("src", thumbnailPath)
            document.getElementsByClassName("project-title").item(i).innerHTML = title
            document.getElementsByClassName("project-desc").item(i).innerHTML = desc
        }

    }
};

entryReq.open("GET", "./portfolioentry.html", true);
entryReq.send();