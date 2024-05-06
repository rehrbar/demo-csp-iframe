(function (d) {
    const t = d.querySelector(".jstarget");
    t.innerHTML = "<storng>JS is enabled</strong>";

    // Add iframe without src param
    const a = d.createElement("iframe");
    d.body.appendChild(a);
    a.contentDocument.write("<h1>injected</h1><script>alert(1)</script>");
    a.contentDocument.close();
})(document);