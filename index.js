function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

window.addEventListener("load", function (){
    waitForElm("#shorts-player > div.html5-video-container > video").then((elm) => {
        let videoPlayer = document.querySelector("#shorts-player > div.html5-video-container > video")
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
    });
})