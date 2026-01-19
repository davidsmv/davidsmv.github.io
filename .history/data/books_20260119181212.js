const bookData = [
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/106835.The_Intelligent_Investor" style="float: left; padding-right: 20px"><img border="0" alt="The Intelligent Investor" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409602421l/106835._SX98_.jpg" /></a><a href="https://www.goodreads.com/book/show/106835.The_Intelligent_Investor">The Intelligent Investor</a> by <a href="https://www.goodreads.com/author/show/755.Benjamin_Graham">Benjamin Graham</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/5765764638">5 of 5 stars</a><br /><br />
Excelente libro. Libro muy necesario para cualquiera que desee entrar al mundo de las inversiones, da un panorama muy completo y con herramientas para hacerlo de la mejor manera.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`
    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/370523.Cien_a_os_de_soledad" style="float: left; padding-right: 20px"><img border="0" alt="Cien años de soledad" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347626503l/370523._SY160_.jpg" /></a><a href="https://www.goodreads.com/book/show/370523.Cien_a_os_de_soledad">Cien años de soledad</a> by <a href="https://www.goodreads.com/author/show/13450.Gabriel_Garc_a_M_rquez">Gabriel García Márquez</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/6917179766">5 of 5 stars</a><br /><br />
Esta es mi segunda lectura de este libro; la primera fue en el colegio, cuando era un poco menos maduro que ahora. Hoy lo veo desde una perspectiva distinta y noto cómo la política es tan trascendental en nuestra vida, aunque muchas veces ni siquiera nos damos cuenta de ello. También observo cómo moldea la vida de la mayoría de los personajes, no solo la del coronel. Además, percibo cómo la vida sigue su curso: cada personaje cumple su papel en su momento, y la historia continúa y continúa. Esto me lleva a la reflexión de que, a veces, la vida se trata precisamente de eso: de hacer nuestra parte para que las generaciones futuras sigan construyendo.<br /><br />Lo volveré a leer una tercera vez, sin duda. Es una obra de arte.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>`
    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/1816113.La_vor_gine" style="float: left; padding-right: 20px"><img border="0" alt="La vorágine" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1709505970l/1816113._SY160_.jpg" /></a><a href="https://www.goodreads.com/book/show/1816113.La_vor_gine">La vorágine</a> by <a href="https://www.goodreads.com/author/show/287104.Jos_Eustasio_Rivera">José Eustasio Rivera</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/5474767874">3 of 5 stars</a><br /><br />
Se me hizo complejo de leer y seguir la trama, seguramente no era el momento de mi vida para leerlo, espero darle otra oportunidad más adelante. Sin embargo, destaco la narración de la historia de Clemente Silva, un pasaje corto, pero que me enganchó totalmente, a diferencia de las otras partes siento que esta parte realmente retrata el dolor de los caucheros.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`
    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/142696730-streamlit-for-data-science" style="float: left; padding-right: 20px"><img border="0" alt="Streamlit for Data Science: Create interactive data apps in Python" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1682602164l/142696730._SX98_.jpg" /></a><a href="https://www.goodreads.com/book/show/142696730-streamlit-for-data-science">Streamlit for Data Science: Create interactive data apps in Python</a> by <a href="https://www.goodreads.com/author/show/17577921.Tyler_Richards">Tyler Richards</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/6283426081">4 of 5 stars</a><br /><br />
I have read this book, and I really recommend it to learn the main tools to use Streamlit in the best way. The book covers topics that I will use in real life. However, at the end I would like more success stories of how Streamlit is used in different contexts.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>`

    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/38843442-the-lean-marketplace" style="float: left; padding-right: 20px"><img border="0" alt="The Lean Marketplace: A Practical Guide to Building a Successful Online Marketplace Business" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519794068l/38843442._SX98_.jpg" /></a><a href="https://www.goodreads.com/book/show/38843442-the-lean-marketplace">The Lean Marketplace: A Practical Guide to Building a Successful Online Marketplace Business</a> by <a href="https://www.goodreads.com/author/show/17652392.Juho_Makkonen">Juho Makkonen</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/5934843927">4 of 5 stars</a><br /><br />
This book is an excellent introduction to the world of marketplaces. It covers all the relevant topics, from the opening to the growth of this type of business. In addition, I liked the references to external links, such as articles and news, as they complement and deepen the ideas presented in the book.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/61439040-1984" style="float: left; padding-right: 20px"><img border="0" alt="1984" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX98_.jpg" /></a><a href="https://www.goodreads.com/book/show/61439040-1984">1984</a> by <a href="https://www.goodreads.com/author/show/3706.George_Orwell">George Orwell</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/5909015843">4 of 5 stars</a><br /><br />
After reading 1984, I took a great liking to the book, overall it had a great plot. The development had its good and bad things. It is amazing how the ending ends up changing Winston. Also, there are many of the themes embroidered that can be seen in today's society, although not all of them really I think. Finally, I think it would be a book that I would recommend to anyone.<br />First of all, I liked the plot in general, although it had ups and downs, the good thing was that at the beginning I liked the way it deals with the subject of hierarchies and how this, despite the fact that the book was written more than 50 years ago, still has these same social differences that are so marked in some countries. Additionally, in the development I understood Winston and Julia very well, I liked their ways of being and I understood many of their decisions, after all, these characters were ordinary citizens and although they made some wrong decisions, such as having meetings, these decisions any ordinary person in a situation of this magnitude would take the same. The ending was a bit fast and confusing, however, it is a dystopia, so in the end after watching some analysis on YouTube I can understand it much better. <br />Additionally, the love story really saddened me, I hope I never know what Winston felt in that moment of torture, but the fact that he broke the real love, I think, that he had for Julia in that situation and forever is really shocking, it is incredible how it changed him to such an extent to break the love and to break his belief towards the big brother.<br />On the other hand, many things can be similar to our reality of 2024, and as I already mentioned the hierarchies is something that in the development I liked and that is still applied, I have found after watching many videos that analyze this book, some similarities with our reality. Initially, although I believe that due to the context in which the book was written, it was more a warning of an extreme case of what could happen in totalitarian governments, I really believe that many of the control patterns do not currently exist in the Western world, however there are certain actions that are reflected in the book that currently do happen, for example, the actions of government ministries go very much against the name they have, for example, the ministries of defense, which only attack the population. Another would be the tele-screen, which is very easy to say that it is the cell phone, although it has quite high similarities, you can not say it is entirely the same, a cell phone does not judge you, or tell you what you can or can not do and if you do something wrong will not send it to the authorities, at least for now, but it is something that is with you at all times, just like the tele-screen. Additionally, I feel that many governments and political leaders do brainwash people constantly with the ideologies they want to profess and deepen in the minds of people, and like the children in the book, many people are willing to destroy such a close relationship as long as they persevere with the ideas and ideologies they defend. In conclusion, I believe that there are things that do happen, but not as many as many of the book's analyses make it seem.<br />Finally, I would recommend the book because it makes you reflect on many aspects, although as I mentioned I do not believe as many analyses state that we are already living something like this, if there are some things that we see in our daily lives that reflect many of the atrocities of big brother. Great book and I understand why it is a classic.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/1832117.Satan_s" style="float: left; padding-right: 20px"><img border="0" alt="Satanás" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1277937591l/1832117._SY160_.jpg" /></a><a href="https://www.goodreads.com/book/show/1832117.Satan_s">Satanás</a> by <a href="https://www.goodreads.com/author/show/404007.Mario_Mendoza">Mario Mendoza</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/3367576943">4 of 5 stars</a><br /><br />
Hace poco me adentré en el oscuro y apasionante mundo de "Satanas", de Mario Mendoza, y me sentí curiosamente cautivado por su narrativa. La historia, basada en un horrible suceso de la vida real en Colombia, navega a través de las vidas entrelazadas de sus polifacéticos personajes, cada uno de los cuales alberga sus propios demonios y tragedias interiores. La escritura de Mendoza, descarnada y evocadora, refleja a la perfección la desolación y la desesperación que impregnan la novela, proporcionando una experiencia de lectura desgarradora pero apasionante.<br /><br />Después de escuchar las entrevistas con Mendoza, mi aprecio por el libro se profundizó, ya que la comprensión del contexto y la perspectiva del autor aportaron capas adicionales a la narración. Tanto la exploración psicológica de los personajes, en particular del antagonista, como la crítica social que encierra, destacan como facetas notables de la novela (Para redactar esta reseña, he contado con la ayuda de ChatGPT)
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/40121378-atomic-habits" style="float: left; padding-right: 20px"><img border="0" alt="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378._SX98_.jpg" /></a><a href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</a> by <a href="https://www.goodreads.com/author/show/7327369.James_Clear">James Clear</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/4243419539">5 of 5 stars</a><br /><br />
I liked the book, it is very clear and concise to know what are the steps and what is really important with the habits.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`
    },
    {
        goodreadsHtml: `<a href="https://www.goodreads.com/book/show/52275335-how-to-avoid-a-climate-disaster" style="float: left; padding-right: 20px"><img border="0" alt="How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609355352l/52275335._SX98_.jpg" /></a><a href="https://www.goodreads.com/book/show/52275335-how-to-avoid-a-climate-disaster">How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need</a> by <a href="https://www.goodreads.com/author/show/23470.Bill_Gates">Bill  Gates</a><br/>
My rating: <a href="https://www.goodreads.com/review/show/4308998634">4 of 5 stars</a><br /><br />
How to Avoid a Climate Disaster was a good book that helped me to have a better view of the climate problem. I can understand the key factors that make this problem worse and learned what society and I can do to achieve the goal of zero carbon emissions. I would highly recommend it.
<br/><br/>
<a href="https://www.goodreads.com/review/list/112709167-david-mart-nez">View all my reviews</a>
`
    }
];
