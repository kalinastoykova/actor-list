readData();

function readData() {
    fetch("./actors.json")
    .then(response => response.json())
    .then(getActors)
}

window.addEventListener("click", function(event) {
    if (event.target == document.querySelector(".modal-bg")) {
    document.querySelector(".modal-bg").style.display = "none";
    }
})

function getActors(actors) {
    console.log(actors);
    actors.forEach((actor) => {
        const temp = document.querySelector("#actor-template").content;
        let templateCopy = temp.cloneNode(true);

        templateCopy.querySelector(".actor-name").textContent = actor.fullname;
        templateCopy.querySelector(".movie").textContent = actor.movie;

        templateCopy.querySelector("#actor-wrapper").addEventListener("click", function() {
            document.querySelector(".modal-bg").style.display = "block";
            document.querySelector(".modal-content .actor-name").textContent = actor.fullname;
            document.querySelector(".modal-content .movie").textContent = actor.movie;
        });

        document.querySelector("#actor-box").appendChild(templateCopy);
    });
};



