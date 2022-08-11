//Download Card
let btnGenerate = document.querySelector('#btn-generate')
let btnDownload = document.querySelector('#link-download')
let mobileBtnDownload = document.querySelector('.btn-download')

btnGenerate.addEventListener('click', () => {
    html2canvas(document.querySelector('.card-ct'), {allowTaint: true, useCORS: true}).then(canvas => {
        btnDownload.href = canvas.toDataURL('image/png')
        btnDownload.download = 'my-gitcard'
        btnDownload.click()
    })
})

mobileBtnDownload.addEventListener('click', () => {
    html2canvas(document.querySelector('.card-ct'), {allowTaint: true, useCORS: true}).then(canvas => {
        btnDownload.href = canvas.toDataURL('image/png')
        btnDownload.download = 'my-gitcard'
        btnDownload.click()
    })
})