(function () {
    document.querySelectorAll(".filter-control").forEach(function (control) {
        var button = control.querySelector(".filter-button");
        var options = control.querySelectorAll("[data-level]");
        var defaultLabel = "⚙ Filter";

        button.addEventListener("click", function () {
            var isOpen = control.classList.toggle("open");
            button.setAttribute("aria-expanded", String(isOpen));
        });

        options.forEach(function (option) {
            option.addEventListener("click", function () {
                var level = option.dataset.level;
                button.textContent = level === "Semua level" ? defaultLabel : "⚙ " + level;
                options.forEach(function (item) {
                    item.classList.toggle("selected", item === option);
                });
                control.classList.remove("open");
                button.setAttribute("aria-expanded", "false");
            });
        });
    });

    document.addEventListener("click", function (event) {
        document.querySelectorAll(".filter-control.open").forEach(function (control) {
            if (!control.contains(event.target)) {
                control.classList.remove("open");
                control.querySelector(".filter-button").setAttribute("aria-expanded", "false");
            }
        });
    });
})();
