import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor() { }
  //bookdetails
    bookDetails = [
      {
        id:1,
        bookName:"If Nothing Else, Eve, We've Enjoyed the Fruit",
        bookimg : ( "../assets/img/Adam&Eve.jpg"),
        bookDes : "What happens when a kept woman refuses to take her ridatemp and begins thinking for herself? In If Nothing Else, Eve, We've Enjoyed the Fruit; she begins talking to bunches of grapes and cantaloupe that convince her to commit murder. Through her visitations with fruit, the woman learns that a gender war can be reversed by traveling back in time and eradicating the Tree of Knowledge and its villainous apples. The fruit persuade her by telling her four other stories.",
        bookUrl : ("https://www.amazon.com/Nothing-Else-Weve-Enjoyed-Fruit-ebook/dp/B07PZ8Q6RW/ref=sr_1_1?crid=3EFDK9JM73TB4&keywords=elaine+pascale&qid=1655081350&sprefix=elaine+pascale%2Caps%2C215&sr=8-1")
      },
      {
        id:2,
        bookName:"The Blood Lights",
        bookimg:( "../assets/img/BloodLights.png"),
        bookDes : "The Blood Lights are the last thing you’ll see… They victimize all… Jezzie Mitchell is in anguish; with her brother’s murder still on her mind, she’s noticed strange behavior among the girls in the residential treatment center where she works. Is there a connection between the contagion on Cape Cod and the deadly Bahamas vacation that changed her life? Jezzie reaches out to former lover Lou Collins, a scholar who has chased proof of the lights for decades. Will he be able to solve the mystery of the lights in time? Intensely competitive, reporter Bridgette Collins knows the lights are a way to secure fame in her career. And while it’ll put the final nail into the coffin of her ex-husband’s career, she vows to know the secrets of the lights. Even if it means unleashing a world-wide epidemic…",
        bookUrl : "https://www.amazon.com/gp/product/B07DHZ18JD/ref=dbs_a_def_rwt_bibl_vppi_i5"
      },

      {
        id:3,
        bookName:"Anterior Skies",
        bookimg:( "../assets/img/anterior.jpg"),
        bookDes : "Anterior Skies -- paying homage to such pioneers as H.P. Lovecraft, Clark Ashton Smith, and Thomas Ligotti, as well as other associated writer -- is an anthology of the weird and cosmic. You'll find horror, science fiction, and fantasy; uncategorizable, genre-bending abominations; poetry; and other, stranger hybrid works.",
        bookUrl : "https://www.amazon.com/Anterior-Skies-Vol-Genre-Bending-Anthology-ebook/dp/B0C5NB8C59/ref=nodl_?dplnkId=066a66ee-6309-4c57-86f3-84ef504bb22d"
      },
      {
        id:4,
        bookName:"Dracula's Guests",
        bookimg:( "../assets/img/DraculaGuest.jpg"),
        bookDes : "We have, within the pages of this superlative anthology, the most fitting homage to the vampire legend – a selection of tales by some of the very best independent horror authors writing in the genre today, each one with a unique spin on vampires and their deadly ilk.",
        bookUrl : "https://www.amazon.com/gp/product/B0BNNXBBHL/ref=dbs_a_def_rwt_bibl_vppi_i0"
      },

      {
        id:5,
        bookName:"Dancing in the Shadows:A Tribute to Anne Rice",
        bookimg:("../assets/img/Shadows.jpg"),
        bookDes :"A tribute to author Anne Rice, 19 authors show their love to the Queen of Horror with a collection of Gothic tales inspired by her legacy. A charity anthology with all proceeds to benefit the Animal Rescue of New Orleans in honor of Anne Rice, whose fondness for animals was well known. Edited by Elaine Pascale and Rebecca Rowland with a foreword by Lisa Kröger.",
        bookUrl : "https://www.amazon.com/Dancing-Shadows-Tribute-Anne-Rice-ebook/dp/B09YNCL9L4/ref=sr_1_1?crid=2D4ISV22Y0ICF&keywords=Dancing+in+the+Shadows%3A+A+tribute+to+Anne+Rice&qid=1650983055&sprefix=dancing+in+the+shadows+a+tribute+to+anne+ric%2Caps%2C240&sr=8-1&asin=B09YNCL9L4&revisionId=&format=2&depth=1"
      },  
      {
        id:6,
        bookName:"Voices from the Gloom",
        bookimg:( "../assets/img/Gloom.jpg"),
        bookDes : "Voices from the Gloom is an eclectic collection of tales that will echo in your mind, making you question what is real and what isn't. Whether it’s a mail delivery system with terrifying consequences, a sucker bet with an indelible foe, or a cellar full of family secrets – each of twelve stories contained within will leave you breathless and begging for more. Let yourself get lost in the different voices. Let their horrific nature speak to you from the shadows. Let them pull you in and wring the marrow from your soul.",
        bookUrl : "https://www.amazon.com/Voices-Gloom-1-Jon-Olson-ebook/dp/B00GWTUIC8/ref=sr_1_2?crid=3EFDK9JM73TB4&keywords=elaine+pascale&qid=1655081405&sprefix=elaine+pascale%2Caps%2C215&sr=8-2"
      },
      {
        id:7,
        bookName:"Attack! of the B-Movie Monsters: Alien...",
        bookimg:( "../assets/img/AttackBMovie.jpg"),
        bookDes : "We come in peace. Or do they come to serve man?Are they quiet observers, or are they plotting the annihilation of mankind? ATTACK! of the B-Movie Monsters: Alien Encounters Seventeen tales of out of this world thrills and chills!",
        bookUrl : "https://www.amazon.com/gp/product/B01FPYAD48/ref=dbs_a_def_rwt_bibl_vppi_i7"
      },
      {
        id:8,
        bookName:"The Last Diner",
        bookimg:( "../assets/img/LastDiner.jpg"),
        bookDes : "We've all been there; the restaurant or eating establishment that you remember forever because it gave you nightmares or food poisoning. In The Last Diner, Theresa Derwin has collected together nineteen short stories set in or around eateries, where unnamed horrors lurk. From the insatiable appetite in 'All You Can Eat', to a totalitarian city ruler who wants the services of a famous baker; from a diner cook who likes to give his customers the 'special treatment' and a case where curiosity, and the need for a late night burger, killed the cat, these stories will make you laugh, cringe, possibly vomit up your last meal and shudder. From freegan restaurants, to burger joints, diners, five star establishments and the basement of a usurper's palace, you won't forget your meal at 'The Last Diner' in a hurry.",
        bookUrl : "https://www.amazon.com/gp/product/1909573183/ref=dbs_a_def_rwt_bibl_vppi_i11"
      },
      {
        id:9,
        bookName:"Zombies: Shambling Through the Ages",
        bookimg:( "../assets/img/Zombies.jpg"),
        bookDes : "It’s a wonder humanity ever survived into the twenty-first century. Even Neanderthals knew to bury the dead beneath stones to prevent corpses from rising. Ancient civilizations feared slain warriors would return from battlefields, medieval physicians worried that bodies would rise from plague pits, many cultures buried the dead at crossroads to prevent the dead from walking. In Zombies: Shambling Through the Ages, editor Steve Berman has collected stories that reveal the threat of revenants and the living dead is far from recent. From the Bronze Age to World War II, this anthology guides us through millennia of thrills, chills, kills, carnage, horror, and havoc wreaked throughout history by the walking dead.",
        bookUrl : "https://www.amazon.com/gp/product/B00EJQR8NS/ref=dbs_a_def_rwt_bibl_vppi_i10"
      },
      {
        id:10,
        bookName:"The Toilet Zone",
        bookimg:( "../assets/img/ToiletZone.jpg"),
        bookDes : "Compiled and edited by the grand master of 80's schlock horror, Bret McCormick, each one of this collection of 32 terrifying tales is just the perfect length for a visit to the smallest room... At the very boundaries of human imagination dwells one single, solitary place of solitude, of peace and quiet, a place in which your regular human being spends, on average, 10 to 15 minutes - at least once every single day of their lives. Now, consider a typical, everyday reading speed of 200 to 250 words per minute - that means your average visitor has the time to read between 2,500 to 4,000 words, which makes each and every one of these 32 tales of terror - from some of the best contemporary independent authors - within this anthology of horror the perfect, meticulously calculated length. Dare you take a walk to the small room from where inky shadows creep out to smother the light and solitude’s siren call beckons you? Dare you take a quiet, lonely walk into…",
        bookUrl : "https://www.amazon.com/gp/product/B07W8B7JWW/ref=dbs_a_def_rwt_bibl_vppi_i8"
      },
      {
        id:11,
        bookName:"Wicked Women",
        bookimg:( "../assets/img/Wicked.jpg"),
        bookDes : "Dressing in stolen skin, watching the world through silver eyes, or questioning local folk traditions about bodies hanging in trees, these stories and poems from the women of the New England Horror Writers will leave you bleeding with fresh nightmares and hanging on with splitting fingernails to questionable reality. Wander around islands with eldritch secrets, take drug-fueled drives with carnies, and explore the arcane labyrinths trauma builds in one’s mind. But whatever you do, don't think for a moment that anyone is safe from these Wicked Women!",
        bookUrl : "https://www.amazon.com/gp/product/B08P54MDVF/ref=dbs_a_def_rwt_bibl_vppi_i3"
      },
      {
        id:12,
        bookName:"Gen-X",
        bookimg:("../assets/img/X.jpg"),
        bookDes : "Bestselling editor Rebecca Rowland (Unburied: A Collection of Queer Dark Fiction) and Dark Ink Books (Savini, Unmasked: The True Life Story of the World's Most Prolific Cinematic Killer) present a unique anthology of monster, folk, paranormal, and psychological horror as glimpsed through the lens of the latchkey generation. In this assortment of spine-chilling tales, twenty-two voices shine a strobe light on the cultural demons that lurked in the background while they came of age in the heyday of Satanic panic and slasher flicks, milk carton missing and music television, video rentals and riot grrrls. These Gen-X storytellers once stayed out unsupervised until the streetlights came on, and what they brought home with them will terrify you.",
        bookUrl : "https://www.amazon.com/gp/product/B09CP96FDN/ref=dbs_a_def_rwt_bibl_vppi_i1"
      },
      {
        id:13,
        bookName:"Perseus & Medusa",
        bookimg:("../assets/img/Perseus.jpg"),
        bookDes : "If you think you already know Perseus and Medusa, think again. This collection of short stories reinvents the Greek myth in ten radically different ways. One minute you'll be transported to a Communist revolution in 19th century Russia, then the next, you'll find yourself tiptoeing through a graveyard in the Louisiana bayou.  What if Medusa was the victim, not the villain? What would it take for Perseus to fight *for* her instead of against her? What would Perseus think about his glory days when he reached his elder years?",
        bookUrl : "https://www.amazon.com/gp/product/B07X9FB3NF/ref=dbs_a_def_rwt_bibl_vppi_i4"
      },
      {
        id:14,
        bookName:"Expiration Date",
        bookimg:( "../assets/img/Experation.jpg"),
        bookDes : "Modern lives seem littered with expiration dates. Packaging tells us when our food will go bad; when we can expect appliances to cease functioning; when contracts for the internet finish! But as annoying as these small expiration dates are, they fade to nothing compared to the larger events: when a species goes extinct; when a body of water evaporates, or dies because the PH balance alters; when giant icebergs break apart and glaciers melt forever, threatening the ecosystem of this planet.",
        bookUrl : "https://www.amazon.com/gp/product/B00S5JZL2A/ref=dbs_a_def_rwt_bibl_vppi_i6" 
      },
    ]
}
