/** 
 *  Render Song - done
 *  Play/ pause/ seek - done
 *  Volume - done
 *  Time - done
 *  CD rotate - done
 *  Next / prev - done
 *  Random - done
 *  Next / repeat when ended - done
 *  Active song - done
 *  Scroll active song into view - done
 *  Play song when click - 
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const timeProgress = $('.progress')
const volumeProgress = $('#audio-progress')
const sidebarElement = $('.sidebar-playlist__songs')
const recommendElement = $('.recommend .row')
const forYouElement = $('.foryou .playlist .row')
const toDayElement = $('.today .playlist .row')
const sidebarIconOverLay = $('.navbar-control__icon--sidebar')
const overlay = $('.overlay')

const currentThumb = $('.current-song__thumb')
const currentName = $('.current-song__name')
const currentSinger = $('.current-song__singer')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const footerControl = $('.footer-controlled')
const startTime = $('.time-start')
const endTime = $('.time-end')

const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playList = $$('.playlist')
let timer = setInterval(this.loadCurrentTime,300)

// const PLAYER_STORAGE_KEY = 'x.h.h.a_ Spotify_UI'

const app = 
{
      currentIndex:0,
      currentVolume: 1,
      isActive:false,
      isPlaying:false,
      isRandom:false,
      isRepeat:false,
      // config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
      // setConfig:function(key, value)
      // {
      //       this.config[key] = value,
      //       localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
      // },
      // Sidebar playlists
      playlists:[
            {
                  name:'Chill Vibes 2024🌄 - House Mix ✨',
                  singer:'We Are Diamond',
                  image:'./Assets/Img/playlist1.jpg'
            },
            {
                  name:'Chill Vibes 2024 🌴 Chill out Mix',
                  singer:'We Are Diamond',
                  image:'./Assets/Img/playlist2.jpg'
            },
            {
                  name:'Good Vibes 🌴 Chill House Music 🌞',
                  singer:'We Are Diamond',
                  image:'./Assets/Img/playlist3.jpg'
            },
            {
                  name:'Chill Lofi Mix [chill lo-fi hip hop beats]',
                  singer:'Settle',
                  image:'./Assets/Img/playlist4.jpg'
            },
      ],
      
      // Recommend
      recommends:[
            {
            name: 'Chill Vibes 2024 🌴 Chill out Mix',
            image: './Assets/Img/rcm1.jpg'
            },
            {
            name: 'Good Vibes 🌴 Chill House Music 🌞',
            image: './Assets/Img/rcm2.jpg'
            },
            {
            name: 'Chill Lofi Mix [chill lo-fi hip hop beats]',
            image: './Assets/Img/rcm3.jpg'
            },
            {
            name: 'Quiet 🍀 Lofi Keep You Safe 🍃 Deep focus Study//Work [ Lofi hip hop - Lofi chill ]',
            image: './Assets/Img/rcm4.jpg'
            },
            {
            name: 'Songs to feel amazing⚡',
            image: './Assets/Img/rcm5.jpg'
            },
            {
            name: 'Songs to sing in the shower 🎤',
            image: './Assets/Img/rcm6.jpg'
            },
            {
            name: 'Songs to sing along 🎤',
            image: './Assets/Img/rcm7.jpg'
            },
            {
            name: 'Quiet 🌳 Lofi Keep You Safe 🍃 Safe Time ~ Lofi hip hop for [ Healing - Study - Relax ]',
            image: './Assets/Img/rcm8.jpg'
            },
      ],
      
      // For You
      songs:[
            {
            index:1,
            name: 'Yêu em 2 ngày',
            singer: 'Duong Domic',
            path:'./Assets/Music/song1.mp3',
            image: './Assets/Img/pic1.jpg'
            },
            {
            index:2,
            name: 'Over',
            singer: 'Khoi Vu',
            path:'./Assets/Music/song2.mp3',
            image: './Assets/Img/pic2.jpg'
            },
            {
            index:3,
            name: 'Rose',
            singer: 'The Chainsmoker',
            path:'./Assets/Music/song3.mp3',
            image: './Assets/Img/pic3.jpg'
            },
            {
            index:4,
            name: 'All we know',
            singer: 'The chainsmoker',
            path:'./Assets/Music/song4.mp3',
            image: './Assets/Img/pic4.jpg'
            },
            {
            index:5,
            name: 'Takeaway',
            singer: 'The Chainsmoker',
            path:'./Assets/Music/song5.mp3',
            image: './Assets/Img/pic5.jpg'
            },
            {
            index:6,
            name: 'Paris',
            singer: 'The chainsmoker',
            path:'./Assets/Music/song6.mp3',
            image: './Assets/Img/pic6.jpg'
            },
            {
            index:7,
            name: 'Lớn Rồi',
            singer: 'DSK',
            path:'./Assets/Music/song7.mp3',
            image: './Assets/Img/pic7.jpg'
            },
            {
            index:8,
            name: 'Tầng Thượng 102',
            singer: 'Cá Hồi Hoang',
            path:'./Assets/Music/song8.mp3',
            image: './Assets/Img/pic8.jpg'
            },
            {
            index:9,
            name: 'Die Alone',
            singer: 'K-391, Hoaprox, Nick Strand',
            path:'./Assets/Music/song9.mp3',
            image: './Assets/Img/pic9.jpg'
            },
            {
            index:10,
            name: 'Love Song x Rj Pasin',
            singer: 'IzRosh',
            path:'./Assets/Music/song10.mp3',
            image: './Assets/Img/pic10.jpg'
            },
            {
            index:11,
            name: 'the 1',
            singer: 'blackbear',
            path:'./Assets/Music/song11.mp3',
            image: './Assets/Img/pic11.jpg'
            },
            {
            index:12,
            name: ' Everybody Hates Me',
            singer: 'The chainsmoker',
            path:'./Assets/Music/song12.mp3',
            image: './Assets/Img/pic12.jpg'
            },
            {
            index:13,
            name: 'Go Flex',
            singer: 'Post Malone',
            path:'./Assets/Music/song13.mp3',
            image: './Assets/Img/pic13.jpg'
            },
            {
            index:14,
            name: 'Treat You Better',
            singer: 'Shawn Mendes',
            path:'./Assets/Music/song14.mp3',
            image: './Assets/Img/pic14.jpg'
            },
            {
            index:15,
            name: 'Remind Me to Forget',
            singer: 'Kygo, Miguel',
            path:'./Assets/Music/song15.mp3',
            image: './Assets/Img/pic15.jpg'
            },
            {
            index:16,
            name: 'Hero',
            singer: 'Cash Cash,Christina Perri',
            path:'./Assets/Music/song16.mp3',
            image: './Assets/Img/pic16.jpg'
            },
      ],


      render()
      {
            // This ở đât là app
            // NOTE: Render sidebar playlists
            const renderHtml = this.playlists.map((list) => {
                  return /*html */`
                  <div class="sidebar-playlist__song">
                        <div class="sidebar-playlist__song-thumb" style="background-image:url(${list.image});"></div>
                        <div class="sidebar-playlist__song-body">
                              <div class="sidebar-playlist__song-name">${list.name}</div>
                              <div class="sidebar-playlist__song-singer"> ${list.singer}</div>
                        </div>
                  </div>
                  `
            })
            sidebarElement.innerHTML = renderHtml.join('')

            // NOTE: Render For You
            const forYouHtml = this.songs.map((song,index) => 
            {
                  if(song.index <= 8)
                  {
                        return /*html*/ `
                        <div class="col pc-1-5 tl-3 mb-6">
                              <div class="song" data-index="${index}">
                                    <div class="song-thumb" style="background-image: url(${song.image});"></div>
                                    <div class="song-body">
                                          <div class="song-name">${song.name}</div>
                                          <div class="song-singer">${song.singer}</div>
                                    </div>
                                    <i class="fa-solid fa-circle-play song-icon"></i>
                              </div>
                        </div>
                        `
                  }
            })

      // NOTE: Render For Today
            const toDayHtml = this.songs.map((song,index)=> {
                  if(song.index > 8)
                  {
                        return/*html*/ `
                        <div class="col pc-1-5 tl-3 mb-6">
                              <div class="song" data-index="${index}">
                                    <div class="song-thumb" style="background-image: url(${song.image});"></div>
                                    <div class="song-body">
                                          <div class="song-name">${song.name}</div>
                                          <div class="song-singer">${song.singer}</div>
                                    </div>
                                    <i class="fa-solid fa-circle-play song-icon"></i>
                              </div>
                        </div>
                        `
                  }
            })
            forYouElement.innerHTML = forYouHtml.join('')
            toDayElement.innerHTML = toDayHtml.join('')

            //NOTE: Render For Recommends
            const recommendHtml = this.recommends.map((rcm) => {
                        return /*html*/ `
                        <div class="col pc-3 tl-6 mb-12">
                              <div class="recommend-item">
                                    <div class="recommend-thumb" style="background-image: url(${rcm.image});"></div>
                                    <div class="recommend-body">
                                          <div class="recommend-name">
                                                ${rcm.name}
                                          </div>
                                          <i class="fa-solid fa-circle-play recommend-icon"></i>
                                    </div>
                              </div>
                        </div>
                        `
            })
            recommendElement.innerHTML = recommendHtml.join('')
      },

      // NOTE: Định nghĩa thuộc tính 
      defineProperties() {
            Object.defineProperty(this, 'currentSong', {
                  get: function () {
                        return this.songs[this.currentIndex]
                  }
            })
      },

      // NOTE: Xử lý sự kiện
      handleEvents () {
            const _this = this;

            // NOTE: Xử lý khi click play 
            playBtn.onclick = () => {
                  if(_this.isPlaying)
                  {
                        audio.pause()
                  } 
                  else 
                  {
                        audio.play()
                  }
            }

            // NOTE: Xử lý khi nhạc đang phát
            audio.onplay = () => {
                  _this.isPlaying = true
                  footerControl.classList.add('footer-controlled--playing')
                  audio.volume = _this.currentVolume
                  timer = setInterval(this.loadCurrentTime,100)
                  if (window.matchMedia("(max-width: 730px)").matches) {
                        cdThumbAnimate.play()
                  }
                  _this.activeSong()
            }

            // NOTE: Xử lý khi nhạc bị dừng
            audio.onpause = () => {
                  _this.isPlaying = false
                  footerControl.classList.remove('footer-controlled--playing')
                  clearInterval(timer)
                  cdThumbAnimate.pause()
            }

            // NOTE: Khi tiến độ bài hát thay đổi
            audio.ontimeupdate = () => {
                  if(audio.duration )
                  {
                        // NOTE: currentTime là thời gian hiện tại 
                        // NOTE: duration là tổng thời gian của bài hát
                        const progressPercent = Math.floor(audio.currentTime / audio.duration  * 100)
                        timeProgress.value = progressPercent
                        timeProgress.style.background = `linear-gradient(to right, #65d36e ${progressPercent}%, #ccc ${progressPercent}%)`;
                  }
            }

            // NOTE: Xử lý khi bài hát được tua 
            timeProgress.oninput = (e) => {
                  // NOTE: thời gian tua sẽ bằng tổng thời gian chia 100 và nhân với số phần trăm muốn tua 
                  const seekTime = audio.duration / 100 * e.target.value
                  audio.currentTime = seekTime
            }
            
            // NOTE: Xử lý khi volume thay đổi
            volumeProgress.oninput = () => {
                  let volumePercent
                  const volumeChange = volumeProgress.value / 100;
                  audio.volume = volumeChange
                  volumePercent = volumeChange * 100
                  volumeProgress.style.background = `linear-gradient(to right, #65d36e ${volumePercent}%, #ccc ${volumePercent}%)`;
            }

            // NOTE: Xử lý cd quay 
            const cdThumbAnimate = currentThumb.animate([
                  {transform: 'rotate(360deg)'}
            ], {
                  duration:8000,
                  iterations:Infinity,
            })
            cdThumbAnimate.pause()

            // NOTE: Xử lý khi bấm vào nút next
            nextBtn.onclick = () => {
                  if(_this.isRandom)
                  {
                        _this.randomSong()
                  }
                  else
                  {
                        _this.nextSong()
                  }
                  audio.play()
                  _this.scrollToActiveSong()
            }

            // NOTE: Xử lý khi bấm nút prev
            prevBtn.onclick = () => {
                  if(_this.isRandom)
                  {
                        _this.randomSong()
                  }
                  else 
                  {
                        _this.prevSong()
                  }
                  audio.play()
                  _this.scrollToActiveSong()
            }

            // NOTE: Xử lý khi bấm nút random
            randomBtn.onclick = () => {
                  _this.isRandom = !_this.isRandom
                  // _this.setConfig('isRandom', _this.isRandom)
                  randomBtn.classList.toggle('btn-random--active',_this.isRandom)
            }

            // NOTE: Xử lý khi bài hát kết thúc
            audio.onended = () => {
                  if(_this.isRepeat)
                  {
                        audio.play()
                  }
                  else
                  {
                        nextBtn.click()
                  }
            }

            // NOTE: Xử lý khi bấm nút repeat
            repeatBtn.onclick = () => {
                  _this.isRepeat = !_this.isRepeat
                  // _this.setConfig('isRepeat', _this.isRepeat)
                  repeatBtn.classList.toggle('btn-repeat--active',_this.isRepeat)
            }

            // NOTE: Xử lý phát nhạc khi click vào bài hát
            playList[0].onclick = (e) =>{
                  _this.playWhenClick(e)
            }
            
            playList[1].onclick = (e) =>{
                  _this.playWhenClick(e)
            }
      },

      // Làm thanh sidebar trượt
      sidebarSlider () {
            sidebarIconOverLay.addEventListener("click",() => {
                  overlay.classList.toggle("active")
                  isActive = true
                  if(isActive)
                  {
                        overlay.addEventListener("click",() =>{
                              overlay.classList.remove("active")
                              isActive = false
                        })
                  }
            })
      },

      // Tải bài hát hiện tại
      loadCurrentSong()
      {
            currentThumb.style.backgroundImage = `url('${this.currentSong.image}')`
            currentName.textContent = this.currentSong.name
            audio.src = this.currentSong.path
            // this.setConfig('currentIndex',this.currentIndex)
      },

      // Tải âm lượng hiện tại
      loadCurrentVolume()
      {
            volumeProgress.style.background = `linear-gradient(to right, #65d36e ${this.currentVolume * 100}%, #ccc ${this.currentVolume * 100}%)`;
      },

      // Tải thời gian của bài hát hiện tại
      loadCurrentTime() 
      {
            // format lại thời gian
            function formatTime(time)
            {
                  const minutes = Math.floor(time / 60)
                  const second = Math.floor(time - minutes * 60)
                  return `${minutes < 10 ? '0' + minutes : minutes}:${second < 10 ? '0' + second : second}`
            }
            // Hiện tổng thời gian của bài hát
            if(!audio.duration)
            {
                  endTime.textContent = "00:00"
            }
            else
            {     
                  endTime.textContent = formatTime(audio.duration)
            }
            // Hiện thời gian đã phát
            startTime.textContent = formatTime(audio.currentTime)
      },

      // Hàm chọn bài hát kế tiếp
      nextSong()
      {
            this.currentIndex++;
            if(this.currentIndex >= this.songs.length)
            {
                  this.currentIndex = 0
            }
            this.loadCurrentSong()
      },

      // Hàm chọn bài phía sau 
      prevSong()
      {
            this.currentIndex--;
            if(this.currentIndex < 0 )
            {
                  this.currentIndex = this.songs.length - 1
            }
            this.loadCurrentSong()
      },

      // Hàm random lại currentIndex
      randomSong()
      {
            let newIndex
            do{
                  newIndex = Math.floor(Math.random() * this.songs.length)
            }while(newIndex === this.currentIndex)
            this.currentIndex = newIndex
            this.loadCurrentSong()
      },

      // Hàm dùng để active song thay vì phải render lại 
      activeSong()
      {
            [...$$('.song')].map((song, index) => {
                  song.classList.remove('song--active')
                  if(index === this.currentIndex)
                  {
                        song.classList.add('song--active')
                  }
            })
      },

      // Hàm dùng để remove active 
      removeActive()
      {
            [...$$('.song')].map((song, index) => {
                  song.classList.remove('song--active')
            })
      },

      // Hàm dùng để scroll đến bài hát đang active
      scrollToActiveSong()
      {
            setTimeout(() => {
                  const songActive = $('.song.song--active')
                  if (window.matchMedia("(max-width: 730px)").matches && songActive) 
                  {
                        songActive.scrollIntoView({
                              behavior:'smooth',
                              block:'center'
                        })
                  }
            }, 300);
      },

      // Hàm dùng để phát bài khi click 
      playWhenClick(e)
      {     
            const songNode = e.target.closest('.song:not(.song--active)')
            if(songNode)
            {
                  this.currentIndex = Number(songNode.dataset.index)
                  this.loadCurrentSong()
                  audio.play()
            }
      },

      // // Hàm dùng để load config
      // loadConfig()
      // {
      //       this.isRandom = this.config.isRandom
      //       this.isRepeat = this.config.isRepeat
      //       this.currentIndex = this.config.currentIndex
      // },

      start()
      {
            // NOTE: Hàm dùng để load config
            // this.loadConfig()
            
            // NOTE: Định nghĩa các thuộc tính trong Object
            this.defineProperties();

            // NOTE: Lắng nghe / Xử lý các sự kiện ( DOM event)
            this.handleEvents();

            // NOTE: load bài hát đầu tiên 
            this.loadCurrentSong()
            
            // NOTE: Load âm lượng mặc định
            this.loadCurrentVolume()

            // NOTE: Load thời gian của bài hát hiện tại
            this.loadCurrentTime()

            // NOTE: Render ra các bài hát 
            this.render();

            // NOTE: Hàm để sidebar trượt ra 
            this.sidebarSlider()

            // NOTE: Hiển thị trạng thai ban đầu của nút repeat và random
            // randomBtn.classList.toggle('btn-random--active',this.isRandom)
            // repeatBtn.classList.toggle('btn-repeat--active',this.isRepeat)
      }
}

app.start()
