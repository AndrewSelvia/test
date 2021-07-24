function openGitHub() {
    open(
        document
            .URL
            .replace(location.origin, "https://github.com/andrew-selvia")
            .replace("journal/", "journal/edit/main/")
            .replace(".html", ".md"))
}
