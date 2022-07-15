videoPlayer = document.querySelector("#shorts-player > div.html5-video-container > video")
let nextButton = document.querySelector("#navigation-button-down > ytd-button-renderer > a")

videoPlayer.addEventListener("play", (event) => {
    setTimeout(function(){
        document.querySelector("#shorts-player > div.html5-video-container > video").loop = false;
    }, 5000)
})

videoPlayer.addEventListener("ended", () => {
    nextButton.click()
    document.querySelector("#shorts-player > div.html5-video-container > video").loop = false
})

videoPlayer.loop = false
videoPlayer.autoPlay = true

