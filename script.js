// document.querySelector('button').onclick = myClick;


// value - получить текст из input
// innerHTML - получить - записать текст в парный тег

setTimeout(function(){
navigator.virtualKeyboard.show()
})

let pos = 1

po = 0

let i = 0
word='aaa'



tt=(document.URL)
word2=tt.substr(tt.length-8,6)

if (word2=='rdle/')
word=''
else
word=word2

addEventListener("keydown", function(event) {



    if ((event.key == event.key.replace(/[^a-z]/i, "") || event.keyCode == 8 || event.keyCode == 13) && po == 0)

    {
        if (pos > 6)
            pass

        if (event.keyCode == 8)

        {
            if (pos == 1)
                pass
            else {
                pos -= 1;
                document.getElementsByClassName('b' + po + '-' + pos)[0].innerText = '';
                pos -= 1;
            }
        } else if ((pos == 6 && event.keyCode == 13) || word.length==5)

        {
            word = (document.getElementsByClassName('b0-1')[0].innerText +

                document.getElementsByClassName('b0-2')[0].innerText +

                document.getElementsByClassName('b0-3')[0].innerText +

                document.getElementsByClassName('b0-4')[0].innerText +

                document.getElementsByClassName('b0-5')[0].innerText)
            document.getElementsByClassName('b0-0')[0].innerText = 'СЛОВО ЗАГАДАНО'
            document.getElementsByClassName('b0-0')[0].style.background = '#c9f2c9'




            {
                for (i = 0; i < 5; i++)

                {

                    document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#ffffff';
                    document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText = '';
                }




            }
            po += 1
            pos = 0
        } else if (event.keyCode == 13)
            pass

        else
            document.getElementsByClassName('b' + po + '-' + pos)[0].innerText = event.key;
        pos += 1


    }




    if ((event.key == event.key.replace(/[^а-яё]/i, "") || event.keyCode == 8 || event.keyCode == 13) && po > 0)

    {
        if (pos > 6)
            pass

        if (event.keyCode == 8)

        {
            if (pos == 1)
                pass
            else {
                pos -= 1;
                document.getElementsByClassName('b' + po + '-' + pos)[0].innerText = '';
                pos -= 1;
            }
        } else if (pos == 6 && event.keyCode == 13) 

        {
            if (document.getElementsByClassName('b' + po + '-1')[0].innerText +
                document.getElementsByClassName('b' + po + '-2')[0].innerText +
                document.getElementsByClassName('b' + po + '-3')[0].innerText +
                document.getElementsByClassName('b' + po + '-4')[0].innerText +
                document.getElementsByClassName('b' + po + '-5')[0].innerText == word || po == 6)

            {
                document.getElementsByClassName('final')[0].innerText = 'ЗАГАДАННОЕ СЛОВО - ' + word

                document.getElementsByClassName('b0-0')[0].innerText = 'ЗАГАДАЙ СЛОВО'
                document.getElementsByClassName('b0-0')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-1')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-2')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-3')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-4')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-5')[0].style.background = '#e6e6fa'


            }




            {
                for (let i = 0; i < 5; i++)

                {

                    document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#ededed';



                    if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == word[i])

                        document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#c9f2c9';
                    else if (word.indexOf(document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText) > -1)
                        document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#ffed94';

                    for (let l = 1; l < 33; l++) {

                        if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == document.getElementsByClassName('l' + l)[0].innerText &&
                            document.getElementsByClassName('l' + l)[0].style.background == '' &&
                            word.indexOf(document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText) < 0
                        )

                        {
                           

                            document.getElementsByClassName('l' + l)[0].style.background = '#ededed';

                            

                        }



                        if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == document.getElementsByClassName('l' + l)[0].innerText &&
                            document.getElementsByClassName('l' + l)[0].style.background == '' &&
                            document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText != word[i]
                        )

                        {
                           

                            document.getElementsByClassName('l' + l)[0].style.background = '#ffed94';

                            

                        }


                        if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == document.getElementsByClassName('l' + l)[0].innerText &&
                            document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == word[i]
                        )

                        {
                            

                            document.getElementsByClassName('l' + l)[0].style.background = '#c9f2c9';

                           

                        }
                   

                    }
                  
                   //if (po==6 &&pos == 6 && event.keyCode == 13)
                    //po=0
                    


                }




            }
            po += 1
            pos = 0
        } else if (event.keyCode == 13)
            pass

        else
            document.getElementsByClassName('b' + po + '-' + pos)[0].innerText = event.key;
        pos += 1

    }


});



l1 = document.getElementsByClassName('l1')[0]
l1.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l1.innerText
    pos += 1
}



l2 = document.getElementsByClassName('l2')[0]
l2.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l2.innerText
    pos += 1
}
l3 = document.getElementsByClassName('l3')[0]
l3.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l3.innerText
    pos += 1
}
l4 = document.getElementsByClassName('l4')[0]
l4.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l4.innerText
    pos += 1
}
l5 = document.getElementsByClassName('l5')[0]
l5.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l5.innerText
    pos += 1
}
l6 = document.getElementsByClassName('l6')[0]
l6.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l6.innerText
    pos += 1
}
l7 = document.getElementsByClassName('l7')[0]
l7.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l7.innerText
    pos += 1
}
l8 = document.getElementsByClassName('l8')[0]
l8.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l8.innerText
    pos += 1
}
l9 = document.getElementsByClassName('l9')[0]
l9.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l9.innerText
    pos += 1
}
l10 = document.getElementsByClassName('l10')[0]
l10.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l10.innerText
    pos += 1
}
l11 = document.getElementsByClassName('l11')[0]
l11.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l11.innerText
    pos += 1
}
l12 = document.getElementsByClassName('l12')[0]
l12.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l12.innerText
    pos += 1
}
l13 = document.getElementsByClassName('l13')[0]
l13.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l13.innerText
    pos += 1
}
l14 = document.getElementsByClassName('l14')[0]
l14.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l14.innerText
    pos += 1
}
l15 = document.getElementsByClassName('l15')[0]
l15.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l15.innerText
    pos += 1
}
l16 = document.getElementsByClassName('l16')[0]
l16.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l16.innerText
    pos += 1
}
l17 = document.getElementsByClassName('l17')[0]
l17.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l17.innerText
    pos += 1
}
l18 = document.getElementsByClassName('l18')[0]
l18.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l18.innerText
    pos += 1
}
l19 = document.getElementsByClassName('l19')[0]
l19.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l19.innerText
    pos += 1
}
l20 = document.getElementsByClassName('l20')[0]
l20.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l20.innerText
    pos += 1
}
l21 = document.getElementsByClassName('l21')[0]
l21.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l21.innerText
    pos += 1
}
l22 = document.getElementsByClassName('l22')[0]
l22.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l22.innerText
    pos += 1
}
l23 = document.getElementsByClassName('l23')[0]
l23.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l23.innerText
    pos += 1
}
l24 = document.getElementsByClassName('l24')[0]
l24.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l24.innerText
    pos += 1
}
l25 = document.getElementsByClassName('l25')[0]
l25.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l25.innerText
    pos += 1
}
l26 = document.getElementsByClassName('l26')[0]
l26.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l26.innerText
    pos += 1
}
l27 = document.getElementsByClassName('l27')[0]
l27.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l27.innerText
    pos += 1
}
l28 = document.getElementsByClassName('l28')[0]
l28.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l28.innerText
    pos += 1
}
l29 = document.getElementsByClassName('l29')[0]
l29.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l29.innerText
    pos += 1
}
l30 = document.getElementsByClassName('l30')[0]
l30.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l30.innerText
    pos += 1
}
l31 = document.getElementsByClassName('l31')[0]
l31.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l31.innerText
    pos += 1
}
l32 = document.getElementsByClassName('l32')[0]
l32.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos))[0].innerText = l32.innerText
    pos += 1
}
l33 = document.getElementsByClassName('l33')[0]
l33.onclick = function(e) {
    document.getElementsByClassName('b' + po + '-' + (pos - 1))[0].innerText = ''
    pos -= 1
}



l34 = document.getElementsByClassName('l34')[0]
l34.onclick = function(e) {
    if (po == 0 && pos == 6)
{
            word = (document.getElementsByClassName('b0-1')[0].innerText +

                document.getElementsByClassName('b0-2')[0].innerText +

                document.getElementsByClassName('b0-3')[0].innerText +

                document.getElementsByClassName('b0-4')[0].innerText +

                document.getElementsByClassName('b0-5')[0].innerText)
            document.getElementsByClassName('b0-0')[0].innerText = 'СЛОВО ЗАГАДАНО'
            document.getElementsByClassName('b0-0')[0].style.background = '#c9f2c9'




            {
                for (i = 0; i < 5; i++)

                {

                    document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#ffffff';
                    document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText = '';
                }




            }
            po += 1
            pos = 0
        }


if (po > 0 && pos == 6)
{
            if (document.getElementsByClassName('b' + po + '-1')[0].innerText +
                document.getElementsByClassName('b' + po + '-2')[0].innerText +
                document.getElementsByClassName('b' + po + '-3')[0].innerText +
                document.getElementsByClassName('b' + po + '-4')[0].innerText +
                document.getElementsByClassName('b' + po + '-5')[0].innerText == word || po == 6)

            {
                document.getElementsByClassName('final')[0].innerText = 'ЗАГАДАННОЕ СЛОВО - ' + word
                document.getElementsByClassName('b0-0')[0].innerText = 'ЗАГАДАЙ СЛОВО'
                document.getElementsByClassName('b0-0')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-1')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-2')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-3')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-4')[0].style.background = '#e6e6fa'
                document.getElementsByClassName('b0-5')[0].style.background = '#e6e6fa'

            }




            {
                for (let i = 0; i < 5; i++)

                {

                    document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#ededed';



                    if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == word[i])

                        document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#c9f2c9';
                    else if (word.indexOf(document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText) > -1)
                        document.getElementsByClassName('b' + po + '-' + (i + 1))[0].style.background = '#ffed94';

                    for (let l = 1; l < 33; l++) {

                        if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == document.getElementsByClassName('l' + l)[0].innerText &&
                            document.getElementsByClassName('l' + l)[0].style.background == '' &&
                            word.indexOf(document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText) < 0
                        )

                        {
                            

                            document.getElementsByClassName('l' + l)[0].style.background = '#ededed';

                           

                        }



                        if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == document.getElementsByClassName('l' + l)[0].innerText &&
                            document.getElementsByClassName('l' + l)[0].style.background == '' &&
                            document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText != word[i]
                        )

                        {
                            

                            document.getElementsByClassName('l' + l)[0].style.background = '#ffed94';

                            

                        }


                        if (document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == document.getElementsByClassName('l' + l)[0].innerText &&
                            document.getElementsByClassName('b' + po + '-' + (i + 1))[0].innerText == word[i]
                        )

                        {
                           

                            document.getElementsByClassName('l' + l)[0].style.background = '#c9f2c9';

                            

                        }
                    }




                }




            }
            po += 1
            pos = 0
        }
       
    pos += 1
}

var wordd = document.querySelector('.word') // Если добавили класс whats-app-link
wordd.setAttribute('href', 'https://letasm.github.io/wordle/#' + word[0])
//wordd.setAttribute('href', 'https://letasm.github.io/wordle/#' + word[0].charCodeAt(0)+'-' +word[1].charCodeAt(0)+'-'+ word[2].charCodeAt(0)+'-'+ word[3].charCodeAt(0)+'-'+ word[4].charCodeAt(0))
    