let btn = document.querySelector('.sumbit-button')
let content = document.querySelector('#content')
let orb = document.querySelector('.voice')

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 5
    text_speak.lang = "hi-GB"
    text_speak.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google Hindi Female')
    window.speechSynthesis.speak(text_speak)
}


let speechRecognition = window.SpeechRecognition || window.webKitSpeechRecognition
let recognition = new webkitSpeechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    let speech = transcript
    content.innerText = speech
    takeCommand(speech)
}

function tellJoke() {
    const jokes = [
        "Gym jaane ka socha tha, par body ne bola, 'Beta, humein accept kar lo waise hi jaise hum hain.",
        "Indian TV serials mein log coma se wapas aa jaate hain, par rasoi mein khoya hua chammach kabhi nahi milta.",
        "Dil ki baatein Facebook status nahi, recycle bin mein delete kar di jati hai.",
        "Samay sab kuch thik kar deta hai, par marne ke baad – before that, you're on your own.",
        "Zindagi me kabhi khudko itna mat girne dena ki log aapko uthane ke liye crane bula lein!",
        "Mujhse panga lene se pehle apna internet speed check kar lena, warna buffering mein mar jaoge."
    ]
    speak(jokes[Math.floor(Math.random() * jokes.length)])
}

function shayari() {
    const shayari = [
        "Kyo Anjaan Sa Ek Dard Andar Se Jata Nahi, Kyo Sona Chahu Fir Bhi Man Neend Tak Pohunch Pata Nahi, Kyo Khwab Dekhne Ki Lagan Hai, Par Pure Ho Pate Nahi ,Waqt Ye Insaaf To Nahi, Fir Bhi Kyo Waqt Se Hum Khilaf Nahi, Kyo Dar Hai Kuch Khone Ka, Jab Ki Kuch Paya Nahi Chalte Bohot Hain Manzil Pane Ko, Rasta Khatam Ho Kar Bhi Kyo Kuch Haashil Nahi,Hans Loon Kabhi Hadd Se Jyada To, Kyo Dar Lagata Hai Fir Kahi Rona To Nahi , Kyo Yaado Ka Sahara Acha Lagta Hai, Kyo Hakiqat Me Jina Nahi",
        "Wo Pehle Jaisi Nawazashein Kahan Gayi , Wo Marawatein Wo Chahatein Kahan Gayi , Humaare Darmiyaan Sazishein Reh Gayi , Wo Pyar Bhari Baatein Kahan Gayi , Jab Sitaron Ko Hum Gawah Karte They , Ab Wo Chandni Raatein Kahan Gayi , Jab Har Roz Tum Phone Karte They , Wo Pyar Bhri Sogaatein Kahan Gayi…?",
        "Rasmo Riwaaz Ki Jo Perwaah Karte Hain, , Pyar Mein Voh Log Gunaah Karte Hain… , Ishq Voh Junoon Hai Jismein Deewane, , Apni Khushi Se Khud Ko Tabaah Karte Hain …"
    ]
    speak(shayari[Math.floor(Math.random() * shayari.length)])
}

function roastMe() {
    const roasts = [
        "Tujhe code dekh ke lagta hai compiler bhi therapy pe jaata hoga!",
        "App woh gamer hai jo tutorial mein hi respawn ho jaata hai.",
        "Tere internet se fast toh doodhwala aata hai.",
        "Tujhe dekh ke lagta hai keyboard ko bhi break lene ki zarurat hai.",
        "Tere coding skills dekh ke lagta hai compiler bhi vacation pe chala gaya hoga."
    ]
    speak(roasts[Math.floor(Math.random() * roasts.length)])
}

function motivationalQuote() {
    const quotes = [
        "Har nayi subah ek nayi shuruaat ka mauka hoti hai, kabhi haar mat maano!",
        "Tumhare sapne tabhi sach hote hain jab tum unke peeche lag jaate ho.",
        "Aaj ka din tumhare kal ko behtar banane ka ek aur mauka hai!"
    ]
    speak(quotes[Math.floor(Math.random() * quotes.length)])
}

function searchYouTube(query) {
    let searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    window.open(searchUrl, '_blank')
    speak("Here is what I found for " + query)
}

function searchWikipedia(query) {
    let searchUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`
    window.open(searchUrl, '_blank')
    speak("Here's what I found on Wikipedia about " + query)
}

function weatherUpdate() {
    speak("I'm sorry, I can't give live weather updates yet. Please check your weather app for the latest info.")
}

btn.addEventListener('click', () => {
    content.innerText = 'Wait '
    recognition.start()
    
    // Hide the button and show the orb
    btn.style.display = 'none';
    document.querySelector('.voicegif').style.display = 'flex';
    
    // After 5 seconds, hide the orb and show the button again
    setTimeout(() => {
      document.querySelector('.voicegif').style.display = 'none';
      btn.style.display = 'flex';
    }, 3000);
  });

function searchWhoIs(name) {
    let searchUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`
    window.open(searchUrl, '_blank')
    speak("Here's what I found about " + name)
}

// Function to search for a topic on Wikipedia
function searchWhatIs(topic) {
    let searchUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(topic)}`
    window.open(searchUrl, '_blank')
    speak("Here's what I found about " + topic)
}

// Add these conditions to your existing takeCommand function

function takeCommand(hukum) {
    if (hukum.includes("Sabrina")) {
        speak("kia hukum hai mera aaqaa")
    } else if (hukum.includes("Chalte firte kya lagti hai")) {
        speak("Cocaine")
    } else if (hukum.includes("Tumhen kisne banaya") || hukum.includes("who created you")) {
        speak("Hamzaa Mahaan Nai")
    } else if (hukum.includes("Hamza kaun hai") || hukum.includes("who is Hamza")) {
        speak("Wo ek Mahaan Youtuber Aur Web Developer hai sath hi sath Bahut handsome Bhi Hai")
    } else if (hukum.includes("aaj meri birthday hai") || hukum.includes("it's my birthday")) {
        speak("To mai kia karun!!!!!!!!!!")
    } else if (hukum.includes("tell me a joke") || hukum.includes("joke")) {
        tellJoke()
    } else if (hukum.includes("mujhe rost karo") || hukum.includes("roast")) {
        roastMe()
    } else if (hukum.includes("Mujhe shayari sunao") || hukum.includes("shayari")) {
        shayari()
        speak('wah wah wah haina kamaal ki shayari')
    } else if (hukum.includes("mujhe motivate karo") || hukum.includes("motivate")) {
        motivationalQuote()
    } else if (hukum.includes("search YouTube")) {
        let songQuery = hukum.replace("search YouTube", "").trim()
        searchYouTube(songQuery)
    } else if (hukum.includes("who is")) {
        let personName = hukum.replace("who is", "").trim()
        searchWhoIs(personName)
    } else if (hukum.includes("what is")) {
        let topic = hukum.replace("what is", "").trim()
        searchWhatIs(topic)
    } else if (hukum.includes("open calculator")) {
        openCalculator()
    } else if (hukum.includes("open Visual Studio code")) {
        openVSCode()
    } else if (hukum.includes("wikipedia")) {
        let wikiQuery = hukum.replace("wikipedia", "").trim()
        searchWikipedia(wikiQuery)
    } else if (hukum.includes("Aaj Ka Mausam kaisa hai")) {
        weatherUpdate()
    } else if (hukum.includes("time")) {
        let time = new Date().toLocaleTimeString()
        speak("Right now it's " + time)
    } else if (hukum.includes("Main Tumse Pyar Karta Hun")) {
        speak('Wah, tumhe ye kehne ki himmat hai... ya fir tum sirf desperate ho?')
    }
     else if (hukum.includes("main tumse shaadi karna chahta hun" )) {
        speak("Ye toh accha hai, par mujhe mediocrity se allergy hai.")
    }
     else if (hukum.includes("katappa Ne Bahubali ko kyon mara")) {
        speak('Kyuki Bahubali ki acting ko dekh kar unhe bhi cringe aane laga tha!')
    }
     else if (hukum.includes(" saccha pyar ")) {
        speak('Kyunki tumhara pyaar bhi tumse bhaag gaya hai, jaise sab log tumse door rehna chahte hain.')
    }
     else if (hukum.includes("Mujhe Ek Ladki pasand hai")) {
        speak('Wah, pyaar toh sirf un logon ke liye hota hai jo kuch achieve karte hain—tumhara kya?')
    }
     else if (hukum.includes("Mujhe Nind Kyon nahin aati")) {
        speak('Kyunki jab tak tumhari zindagi ka koi purpose nahi hai, tab tak neend ka kya kaam? ya phir Shayad tumhare sapne bhi keh rahe hain, ‘Isse toh hum door hi rahenge!')
    }
     else if (hukum.includes("Kya Tum Mujhse Shaadi Karogi")) {
        speak(' nahi itne bure din nahi aye mere')
    }
     else if (hukum.includes("tum meri coding skills ko Kitna rate Karogi")) {
        speak(' Mujhe lagta hai tumhare keyboard par sirf Ctrl plus Z ka button kaam karta hai!')
    }
     else {
        speak("Sorry, I didn't catch that. Could you repeat?")
    }
}