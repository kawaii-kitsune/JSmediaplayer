new Vue({
    el: '#app',
    data: function () {
        return {
            isPlaying: false,
            myAudio: null,
            volume_change_prefix: 0.1,
            sliderValue: 1, //initial value
        }
    },
    mounted: function () {
        this.myAudio = document.getElementById("myAudio")
        this.myAudio.volume = this.sliderValue
    },
    methods: {
        stopHandler: function() {
            this.myAudio.pause()

            this.sliderValue = 0
        },
        playHandler: function() {
            this.myAudio.play()
            
            this.myAudio.volume = this.sliderValue = 1
        },
        increaseSound: function () {
            this.sliderValue = this.myAudio.volume += this.myAudio.volume + this.volume_change_prefix <= 1 ? this.volume_change_prefix : 0
        },
        decreaseSound: function () {
            this.sliderValue = this.myAudio.volume -= this.myAudio.volume - this.volume_change_prefix > 0 ? this.volume_change_prefix : 0
        },
        muteSound: function () {
            this.myAudio.volume = this.sliderValue = 0
        },
        changeValue: function() {
            this.myAudio.volume = this.sliderValue
        }
    },
    template: 
    `
        <div>
            <div class="player">
                <div class="player-main" style="background-image:url(buttons/6.png">
                    <div class="player-cont">
                        <div class="player-head">
                            <div class="options">
                                <div class="settings"><img src="buttons/14.png"></div>
                                <div class="power"><img src="buttons/13.png"></div>
                            </div>
                            <div class="logo"><img src="images/logo.jpg"></div>
                            <div class="player-body" style="width:75%;/*! padding-left: 20%; */"></div>
                            <div style="width:100%; display:flex;padding-left: 20%;" class="volume">
                                <div style="/*! width:33.3% */   " class="incr-volume" @click="increaseSound"><img src="buttons/12.png"></div>
                                <div style="/*! width:33.3%; */  " class="mute-volume" @click="muteSound"><img src="buttons/10.png"></div>
                                <div style="/*! width:33.3%; */  " class="decr-volume" @click="decreaseSound"><img src="buttons/11.png"></div>
                            </div>
                            <div class="stream-controls" style="width:100%; display:flex;padding-left: 25%;">
                                <div class="play" style="width:30%;" @click="playHandler"><img src="buttons/1.png" style="width:100px"></div>
                                <div class="stop" style="width:30%;" @click="stopHandler"><img src="buttons/3.png" style="width:100px"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
