const projects = [
    {
        name: "Prayer Schedule Parser",
        year: "2019",
        github: "https://github.com/ichsanna/jadwalsholatkmt",
        website: "",
        tech: ["NodeJS", "ExpressJS"],
        description: "This is my first app built using NodeJS. I built this in order to understand NodeJS, REST API " +
            "concept, and some npm modules. This app purpose is to automate the process of parsing the xls file " +
            "of monthly prayer schedule into text broadcast-ready format."
    },
    {
        name: "QRPresence - Web",
        year: "2019",
        github: "https://github.com/ichsanna/QRPresence",
        website: "",
        tech: ["NodeJS", "ExpressJS", "MongoDB"],
        description: "I developed QRPresence along with my 2 other friends as semester project in specific college " +
            "subject. This web app provides digital attendance service using QR Code. QRPresence lets users " +
            "create classes along with their QR Code. Then the QR Code can be scanned by the mobile app to do an " +
            "attendance."
    },
    {
        name: "Hospital Management Information System",
        year: "2019-2020",
        github: "",
        website: "",
        tech: ["NodeJS", "ExpressJS", "MongoDB"],
        description: "I did this project as an intern at PT Nusantera Teknologi Indonesia. " +
            "This web app purpose is to provide various hospital services flow in RS PKU Muhammadiyah Wonosobo. " +
            "I developed the backend part of radiology module of the system."
    },
    {
        name: "Sistem Informasi GAMA Press (SIGAP)",
        year: "2020-2021",
        github: "",
        website: "",
        tech: ["PHP", "CodeIgniter", "MySQL"],
        description: "This information system is used by UGM Press to manage various business flow. I " +
            "developed this project along with my 2 friends as a Capstone Project(Undergraduate Thesis). We added " +
            "and developed a postproduction warehouse management system into SIGAP which consists of features " +
            "such as book stock, book asset, book receive, book transfer, book order, and book transaction."
    }
]

function fetchproject() {
    projects.reverse()
    let selector = $(".projects")
    let techs
    selector.append('<h1 class="section-name">PROJECTS</h1>')
    for (i = 0; i < projects.length; i++) {
        techs = ""
        github = ""
        website = ""
        for (j = 0; j < projects[i].tech.length; j++) {
            techs += '<span class="badge">' + projects[i].tech[j] + '</span>'
        }
        if (projects[i].github) {
            github = '<a href="' + projects[i].github + '" target="_blank">' +
                '<i class="fa-brands fa-github fa-2x"></i>' +
                '</a>'
        }
        if (projects[i].website) {
            website = '<a href="' + projects[i].website + '" target="_blank">' +
                '<i class="fa-solid fa-up-right-from-square fa-2x"></i>' +
                '</a>'
        }
        selector.append(
            '<div class="container">' +
            '<h3 class="project-name">' + projects[i].name + '</h3>' +
            '<p class="project-desc">' + projects[i].description +
            '</p>' +
            '<div class="container d-flex project-badges">' +
            '<span class="badge project-year">' + projects[i].year + '</span>' +
            github + website +
            '<span class="vr"></span>' +
            techs +
            '</div>' +
            '</div>'
        )

    }
}
$(document).ready(function () {
    fetchproject()
});