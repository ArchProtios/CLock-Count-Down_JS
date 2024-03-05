const endDate = document.getElementById("end-date").innerText =
` 00:00:00
1 January 2025 `

const input = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end-now) / 1000

    input[0].value = Math.floor(diff / 3600 / 24)
    input[1].value = Math.floor(diff / 3600) % 24
    input[2].value = Math.floor(diff/60) % 60
    input[3].value = Math.floor(diff) % 60
}

clock()