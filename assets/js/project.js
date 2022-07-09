let projects = []
// let checkChecked = [];

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById("input-project-name").value
    let start = document.getElementById("input-start-date").value
    let end = document.getElementById("input-end-date").value
    let description = document.getElementById("description").value
    let image = document.getElementById("input-project-image");

    var img = URL.createObjectURL(image.files[0])

    // let libraryProject = document.getElementById("library");

    // checkChecked = [];
    // for (var i = 0; i < libraryProject.length; i++) {
    //     if (libraryProject[i].checked == true) {
    //         checkChecked.push(libraryProject[i].value)
    //     }
    // }

    let project = {
        name,
        start,
        end,
        description,
        img,
        // checkChecked
    }

    projects.push(project)
    renderProjects()
}



function renderProjects() {
    console.log(projects);

    let containerProjects = document.getElementById("contents")
    // let lib = checkChecked.length

    for (let i = 0; i < projects.length; i++) {
        containerProjects.innerHTML += `
        <div class="card">
        <div class="project-list-item">
        <div class="project-content">
            <h1>
                <a href="project-detail.html" target="_blank">${projects[i].name}</a>
            </h1>
            <div class="project-image">
                <img src="${projects[i].img}" alt="" style="width: 400px; padding: 5px;">
            </div>
            <span style="font-size: 15px; color: grey;">1 hour ago</span>
            <div class="detail-project-content">
                Project Start on "${projects[i].start}"<br>
                Project End on "${projects[i].end}"
            </div>
            <p>
                ${projects[i].description}
            </p>
            <div style="text-align: right;">
                <div class="btn-group">
                    <button class="btn-edit">Edit Project</button>
                    <button class="btn-delete">Delete Project</button>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    }
}
