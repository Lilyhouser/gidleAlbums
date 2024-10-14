function changeLeftCover(element){
    const leftCover = document.querySelector('.main_left');
    const imgUrl = element.style.backgroundImage;
    leftCover.style.backgroundImage = imgUrl;
}

function changeText(element){
    const text1 = document.querySelector('.main_right-header h2');
    const text2 = document.querySelector('.main_right-header p');

    if(element.style.backgroundImage == 'url("img/am.jpg")'){
        text1.innerHTML = 'I Am';
        text2.innerHTML = "Cube Entertainment presents a six-piece multinational girl group, (G)I-DLE. The hottest new girl group of 2018 formed with members from different nationality. The group is led by SOYEON JEON, a talented rapper who made appearances in highly popular television shows such as M.net's 'Produce 101' and 'Unpretty Rapstar'. Alongside SOYEON, MIYEON, SOOJIN, YUQI, SHUHUA, and MINNIE from the six-piece girl group. With the group's pre-debut marketing contents gone viral, fans' anticipation for (G)I-DLE debut built up to Its maximum rate."
    } else if(element.style.backgroundImage == 'url("img/made.jpg")'){
        text1.innerHTML = 'I Made';
        text2.innerHTML = '(G)I-DLE second mini album "I made" has a meaning since the entire album is produced by the members themselves, which includes the lead single "Senorita". The title "I made" was also created by the members, as they wanted the title to be a continuation of their first mini album, "I am", and also gives a peek of what come in the future. While in "I am" the group introduced who they are as a group and their individual personality, in "I made", (G)I-DLE presents a more mature and captivating performance.'
    } else if(element.style.backgroundImage == 'url("img/neverdie.jpg")'){
        text1.innerHTML = 'I Never Die';
        text2.innerHTML = '[I NEVER DIE] is an album that contains not only what was given to (G)I-DLE, but also their feelings and thoughts about all prejudices in the world. (G)I-DLE who face the world without backing down say that I am only me and never lose their worth.</br> The nine tracks of various genres such as alternative rock, pop, R&B, and hip-hop included in the album clearly reveal the free-spirited and intense colors of (G)I-DLE, foreshadowing the birth of another alum. (G)I-DLE, who participated in composing and writing lyrics for all songs, including the title song “TOMBOY”, is also enough to attract global fans attention.'
    } else if(element.style.backgroundImage == 'url("img/love.png")'){
        text1.innerHTML = 'I Love';
        text2.innerHTML = 'A post-breakup track, “Love” is both the calmest track, and the one with the strongest punk vibe, thanks to a crunchy guitar lick and mostly organic instrumentation. Of course, it is easy to be calm when you won the breakup. “Love” is a celebration of (G)I-DLE current position on top of the world, and they have no qualms about thanking the trash for taking itself out. Sardonic and sarcastic, “Love” is the embodiment of revenge by living well, showing (G)I-DLE focusing on themselves and their career as they savor their success. Yet, the bridge shows a glimmer of vulnerability, where they admit to keeping people out to ensure they don not get hurt again.'
    } else if(element.style.backgroundImage == 'url("img/feel.jpeg")'){
        text1.innerHTML = 'I Feel';
        text2.innerHTML = 'While the pre-release song "Allergy" reflects the duality of resenting myself for comparing myself to others but wanting to love myself nonetheless, the title song "Queencard" realizes that what matters is accepting myself for who I am, not what I look like. To truly love who I am, that is how to be a "Queencard" as defined by (girls).'
    } else if(element.style.backgroundImage == 'url("img/heat.jpg")'){
        text1.innerHTML = 'Heat';
        text2.innerHTML = 'HEAT is the first fully English EP by South Korean girl group (G)I-DLE. It was released on October 6, 2023 with the title track "I Want That". "I Do" was pre-released on July 14, 2023. The physical album comes in eight versions: Blaze, Flare, and five individual member and group digipacks.'
    }
}