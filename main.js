class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <head>
                <title>Terna notes</title>
                <link rel="stylesheet" type="text/css" href="style.css">
            </head>

            <header>

                <div class="main">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href=#>Contact</a></li>
                    </ul>
                </div>
                <div class="logo">
                    <u>
                        <li>
                            <a href="index.html">TEC NOTES</a>
                        </li>
                    </u>
                </div>

            </header>
        `
    }
}

customElements.define('my-header', MyHeader)