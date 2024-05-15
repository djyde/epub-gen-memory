import type { Chapter, Options } from '../lib';

const date = new Date();
date.setFullYear(2000);

export const optionsAlice: Options = {
  title: "Alice's Adventures in Wonderland",
  author: "Lewis Carroll",
  publisher: "Macmillan & Co.",
  date: date.toString(),
  cover: "http://orig10.deviantart.net/e272/f/2013/255/0/0/alice_in_wonderland_book_cover_by_pannucabaguana-d6m003p.jpg",
  version: 3,
  verbose: true,
};

export const contentAlice: Chapter[] = [
  {
    title: "About the author",
    content: `<p>Charles Lutwidge Dodgson (January 27, 1832 &#x2013; January 14, 1898), better known by the pen name Lewis Carroll, was an English author, mathematician, logician, Anglican clergyman, and photographer. His most famous writings are Alice&apos;s Adventures in Wonderland and its sequel Through the Looking-Glass as well as the poems &quot;The Hunting of the Snark&quot; and &quot;Jabberwocky&quot;, all considered to be within the genre of literary nonsense. His facility at word play, logic, and fantasy has delighted audiences ranging from children to the literary elite. But beyond this, his work has become embedded deeply in modern culture. He has directly influenced many artists. There are societies dedicated to the enjoyment and promotion of his works and the investigation of his life in many parts of the world including North America, Japan, the United Kingdom, and New Zealand. His biography has recently come under much question as a result of what some call the &quot;Carroll Myth.&quot;</p>`,
    url: 'http://www.alice-in-wonderland.net',
    author: 'Charles Lutwidge Dodgson',
    beforeToc: true,
  },
  {
    title: "Down the Rabbit Hole",
    content: `<p>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, &apos;and what is the use of a book,&apos; thought Alice &apos;without pictures or conversations?&apos;</p><p>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</p><p>There was nothing so&#xA0;<i>very</i>&#xA0;remarkable in that; nor did Alice think it so&#xA0;<i>very</i>&#xA0;much out of the way to hear the Rabbit say to itself, &apos;Oh dear! Oh dear! I shall be late!&apos; (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually&#xA0;<i>took a watch out of its waistcoat-pocket</i>, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book1.jpg" alt="Image"/></p><p><b>White Rabbit checking watch</b></p><p>In another moment down went Alice after it, never once considering how in the world she was to get out again.</p><p>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.</p><p>Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled &apos;ORANGE MARMALADE&apos;, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.</p><p>&apos;Well!&apos; thought Alice to herself, &apos;after such a fall as this, I shall think nothing of tumbling down stairs! How brave they&apos;ll all think me at home! Why, I wouldn&apos;t say anything about it, even if I fell off the top of the house!&apos; (Which was very likely true.)</p><p>Down, down, down. Would the fall&#xA0;<i>never</i>&#xA0;come to an end! &apos;I wonder how many miles I&apos;ve fallen by this time?&apos; she said aloud. &apos;I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think&#x2014;&apos; (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a&#xA0;<i>very</i>&#xA0;good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) &apos;&#x2014;yes, that&apos;s about the right distance&#x2014;but then I wonder what Latitude or Longitude I&apos;ve got to?&apos; (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)</p><p>Presently she began again. &apos;I wonder if I shall fall right&#xA0;<i>through</i>&#xA0;the earth! How funny it&apos;ll seem to come out among the people that walk with their heads downward! The Antipathies, I think&#x2014;&apos; (she was rather glad there&#xA0;<i>was</i>&#xA0;no one listening, this time, as it didn&apos;t sound at all the right word) &apos;&#x2014;but I shall have to ask them what the name of the country is, you know. Please, Ma&apos;am, is this New Zealand or Australia?&apos; (and she tried to curtsey as she spoke&#x2014;fancy&#xA0;<i>curtseying</i>&#xA0;as you&apos;re falling through the air! Do you think you could manage it?) &apos;And what an ignorant little girl she&apos;ll think me for asking! No, it&apos;ll never do to ask: perhaps I shall see it written up somewhere.&apos;</p><p>Down, down, down. There was nothing else to do, so Alice soon began talking again. &apos;Dinah&apos;ll miss me very much to-night, I should think!&apos; (Dinah was the cat.) &apos;I hope they&apos;ll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I&apos;m afraid, but you might catch a bat, and that&apos;s very like a mouse, you know. But do cats eat bats, I wonder?&apos; And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, &apos;Do cats eat bats? Do cats eat bats?&apos; and sometimes, &apos;Do bats eat cats?&apos; for, you see, as she couldn&apos;t answer either question, it didn&apos;t much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, &apos;Now, Dinah, tell me the truth: did you ever eat a bat?&apos; when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.</p><p>Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, &apos;Oh my ears and whiskers, how late it&apos;s getting!&apos; She was close behind it when she turned the corner, but the Rabbit was no longer to be seen: she found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof.</p><p>There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again.</p><p>Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice&apos;s first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book2.jpg" alt="Image"/></p><p><b>Alice finding tiny door behind curtain</b></p><p>Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head through the doorway; &apos;and even if my head would go through,&apos; thought poor Alice, &apos;it would be of very little use without my shoulders. Oh, how I wish I could shut up like a telescope! I think I could, if I only knew how to begin.&apos; For, you see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things indeed were really impossible.</p><p>There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it, (&apos;which certainly was not here before,&apos; said Alice,) and round the neck of the bottle was a paper label, with the words &apos;DRINK ME&apos; beautifully printed on it in large letters.</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book3.jpg" alt="Image"/></p><p><b>Alice taking &quot;Drink Me&quot; bottle</b></p><p>It was all very well to say &apos;Drink me,&apos; but the wise little Alice was not going to do&#xA0;<i>that</i>&#xA0;in a hurry. &apos;No, I&apos;ll look first,&apos; she said, &apos;and see whether it&apos;s marked &quot;<i>poison</i>&quot; or not&apos;; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they&#xA0;<i>would</i>&#xA0;not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger&#xA0;<i>very</i>&#xA0;deeply with a knife, it usually bleeds; and she had never forgotten that, if you drink much from a bottle marked &apos;poison,&apos; it is almost certain to disagree with you, sooner or later.</p><p>However, this bottle was&#xA0;<i>not</i>&#xA0;marked &apos;poison,&apos; so Alice ventured to taste it, and finding it very nice, (it had, in fact, a sort of mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered toast,) she very soon finished it off.</p><p><br/></p><p>* * *</p><p><br/></p><p>&apos;What a curious feeling!&apos; said Alice; &apos;I must be shutting up like a telescope.&apos;</p><p>And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; &apos;for it might end, you know,&apos; said Alice to herself, &apos;in my going out altogether, like a candle. I wonder what I should be like then?&apos; And she tried to fancy what the flame of a candle is like after the candle is blown out, for she could not remember ever having seen such a thing.</p><p>After a while, finding that nothing more happened, she decided on going into the garden at once; but, alas for poor Alice! when she got to the door, she found she had forgotten the little golden key, and when she went back to the table for it, she found she could not possibly reach it: she could see it quite plainly through the glass, and she tried her best to climb up one of the legs of the table, but it was too slippery; and when she had tired herself out with trying, the poor little thing sat down and cried.</p><p>&apos;Come, there&apos;s no use in crying like that!&apos; said Alice to herself, rather sharply; &apos;I advise you to leave off this minute!&apos; She generally gave herself very good advice, (though she very seldom followed it), and sometimes she scolded herself so severely as to bring tears into her eyes; and once she remembered trying to box her own ears for having cheated herself in a game of croquet she was playing against herself, for this curious child was very fond of pretending to be two people. &apos;But it&apos;s no use now,&apos; thought poor Alice, &apos;to pretend to be two people! Why, there&apos;s hardly enough of me left to make&#xA0;<i>one</i>&#xA0;respectable person!&apos;</p><p>Soon her eye fell on a little glass box that was lying under the table: she opened it, and found in it a very small cake, on which the words &apos;EAT ME&apos; were beautifully marked in currants. &apos;Well, I&apos;ll eat it,&apos; said Alice, &apos;and if it makes me grow larger, I can reach the key; and if it makes me grow smaller, I can creep under the door; so either way I&apos;ll get into the garden, and I don&apos;t care which happens!&apos;</p><p>She ate a little bit, and said anxiously to herself, &apos;Which way? Which way?&apos;, holding her hand on the top of her head to feel which way it was growing, and she was quite surprised to find that she remained the same size: to be sure, this generally happens when one eats cake, but Alice had got so much into the way of expecting nothing but out-of-the-way things to happen, that it seemed quite dull and stupid for life to go on in the common way.</p><p>So she set to work, and very soon finished off the cake.</p><p><br/></p><p>* * *</p>`,
  },
  {
    title: "The Pool of Tears",
    content: `<p>&apos;Curiouser and curiouser!&apos; cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); &apos;now I&apos;m opening out like the largest telescope that ever was! Good-bye, feet!&apos; (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). &apos;Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I&apos;m sure&#xA0;<i>I</i>&#xA0;shan&apos;t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can;&#x2014;but I must be kind to them,&apos; thought Alice, &apos;or perhaps they won&apos;t walk the way I want to go! Let me see: I&apos;ll give them a new pair of boots every Christmas.&apos;</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book4.jpg" alt="Image"/></p><p><b>Alice stretched tall</b></p><p>And she went on planning to herself how she would manage it. &apos;They must go by the carrier,&apos; she thought; &apos;and how funny it&apos;ll seem, sending presents to one&apos;s own feet! And how odd the directions will look!</p><blockquote><p>Alice&apos;s Right Foot, Esq.</p><p> Hearthrug,</p><p> near The Fender,</p><p> (with Alice&apos;s love). </p></blockquote><p>Oh dear, what nonsense I&apos;m talking!&apos;</p><p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.</p><p>Poor Alice! It was as much as she could do, lying down on one side, to look through into the garden with one eye; but to get through was more hopeless than ever: she sat down and began to cry again.</p><p>&apos;You ought to be ashamed of yourself,&apos; said Alice, &apos;a great girl like you,&apos; (she might well say this), &apos;to go on crying in this way! Stop this moment, I tell you!&apos; But she went on all the same, shedding gallons of tears, until there was a large pool all round her, about four inches deep and reaching half down the hall.</p><p>After a time she heard a little pattering of feet in the distance, and she hastily dried her eyes to see what was coming. It was the White Rabbit returning, splendidly dressed, with a pair of white kid gloves in one hand and a large fan in the other: he came trotting along in a great hurry, muttering to himself as he came, &apos;Oh! the Duchess, the Duchess! Oh! won&apos;t she be savage if I&apos;ve kept her waiting!&apos; Alice felt so desperate that she was ready to ask help of any one; so, when the Rabbit came near her, she began, in a low, timid voice, &apos;If you please, sir&#x2014;&apos; The Rabbit started violently, dropped the white kid gloves and the fan, and skurried away into the darkness as hard as he could go.</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book5.jpg" alt="Image"/></p><p><b>Giant Alice watching Rabbit run away</b></p><p>Alice took up the fan and gloves, and, as the hall was very hot, she kept fanning herself all the time she went on talking: &apos;Dear, dear! How queer everything is to-day! And yesterday things went on just as usual. I wonder if I&apos;ve been changed in the night? Let me think: was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I&apos;m not the same, the next question is, Who in the world am I? Ah,&#xA0;<i>that&apos;s</i>&#xA0;the great puzzle!&apos; And she began thinking over all the children she knew that were of the same age as herself, to see if she could have been changed for any of them.</p><p>&apos;I&apos;m sure I&apos;m not Ada,&apos; she said, &apos;for her hair goes in such long ringlets, and mine doesn&apos;t go in ringlets at all; and I&apos;m sure I can&apos;t be Mabel, for I know all sorts of things, and she, oh! she knows such a very little! Besides,&#xA0;<i>she&apos;s</i>&#xA0;she, and&#xA0;<i>I&apos;m</i>&#xA0;I, and&#x2014;oh dear, how puzzling it all is! I&apos;ll try if I know all the things I used to know. Let me see: four times five is twelve, and four times six is thirteen, and four times seven is&#x2014;oh dear! I shall never get to twenty at that rate! However, the Multiplication Table doesn&apos;t signify: let&apos;s try Geography. London is the capital of Paris, and Paris is the capital of Rome, and Rome&#x2014;no,&#xA0;<i>that&apos;s</i>&#xA0;all wrong, I&apos;m certain! I must have been changed for Mabel! I&apos;ll try and say &quot;<i>How doth the little</i>&#x2014;&quot;&apos; and she crossed her hands on her lap as if she were saying lessons, and began to repeat it, but her voice sounded hoarse and strange, and the words did not come the same as they used to do:&#x2014;</p><blockquote><p>&apos;How doth the little crocodile</p><p>Improve his shining tail,</p><p>And pour the waters of the Nile</p><p>On every golden scale!</p></blockquote><p><br/></p><blockquote><p>&apos;How cheerfully he seems to grin,</p><p>How neatly spread his claws,</p><p>And welcome little fishes in</p><p>With gently smiling jaws!&apos;</p></blockquote><p>&apos;I&apos;m sure those are not the right words,&apos; said poor Alice, and her eyes filled with tears again as she went on, &apos;I must be Mabel after all, and I shall have to go and live in that poky little house, and have next to no toys to play with, and oh! ever so many lessons to learn! No, I&apos;ve made up my mind about it; if I&apos;m Mabel, I&apos;ll stay down here! It&apos;ll be no use their putting their heads down and saying &quot;Come up again, dear!&quot; I shall only look up and say &quot;Who am I then? Tell me that first, and then, if I like being that person, I&apos;ll come up: if not, I&apos;ll stay down here till I&apos;m somebody else&quot;&#x2014;but, oh dear!&apos; cried Alice, with a sudden burst of tears, &apos;I do wish they&#xA0;<i>would</i>&#xA0;put their heads down! I am so&#xA0;<i>very</i>&#xA0;tired of being all alone here!&apos;</p><p>As she said this she looked down at her hands, and was surprised to see that she had put on one of the Rabbit&apos;s little white kid gloves while she was talking. &apos;How&#xA0;<i>can</i>&#xA0;I have done that?&apos; she thought. &apos;I must be growing small again.&apos; She got up and went to the table to measure herself by it, and found that, as nearly as she could guess, she was now about two feet high, and was going on shrinking rapidly: she soon found out that the cause of this was the fan she was holding, and she dropped it hastily, just in time to avoid shrinking away altogether.</p><p>&apos;That&#xA0;<i>was</i>&#xA0;a narrow escape!&apos; said Alice, a good deal frightened at the sudden change, but very glad to find herself still in existence; &apos;and now for the garden!&apos; and she ran with all speed back to the little door: but, alas! the little door was shut again, and the little golden key was lying on the glass table as before, &apos;and things are worse than ever,&apos; thought the poor child, &apos;for I never was so small as this before, never! And I declare it&apos;s too bad, that it is!&apos;</p><p>As she said these words her foot slipped, and in another moment, splash! she was up to her chin in salt water. Her first idea was that she had somehow fallen into the sea, &apos;and in that case I can go back by railway,&apos; she said to herself. (Alice had been to the seaside once in her life, and had come to the general conclusion, that wherever you go to on the English coast you find a number of bathing machines in the sea, some children digging in the sand with wooden spades, then a row of lodging houses, and behind them a railway station.) However, she soon made out that she was in the pool of tears which she had wept when she was nine feet high.</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book6.jpg" alt="Image"/></p><p><b>Alice in pool of tears</b></p><p>&apos;I wish I hadn&apos;t cried so much!&apos; said Alice, as she swam about, trying to find her way out. &apos;I shall be punished for it now, I suppose, by being drowned in my own tears! That <i>will</i>&#xA0;be a queer thing, to be sure! However, everything is queer to-day.&apos;</p><p>Just then she heard something splashing about in the pool a little way off, and she swam nearer to make out what it was: at first she thought it must be a walrus or hippopotamus, but then she remembered how small she was now, and she soon made out that it was only a mouse that had slipped in like herself.</p><p><img src="http://www.alice-in-wonderland.net/wp-content/uploads/1book7.jpg" alt="Image"/></p><p><b>Alice with Mouse in pool of tears</b></p><p>&apos;Would it be of any use, now,&apos; thought Alice, &apos;to speak to this mouse? Everything is so out-of-the-way down here, that I should think very likely it can talk: at any rate, there&apos;s no harm in trying.&apos; So she began: &apos;O Mouse, do you know the way out of this pool? I am very tired of swimming about here, O Mouse!&apos; (Alice thought this must be the right way of speaking to a mouse: she had never done such a thing before, but she remembered having seen in her brother&apos;s Latin Grammar, &apos;A mouse&#x2014;of a mouse&#x2014;to a mouse&#x2014;a mouse&#x2014;O mouse!&apos;) The Mouse looked at her rather inquisitively, and seemed to her to wink with one of its little eyes, but it said nothing.</p><p>&apos;Perhaps it doesn&apos;t understand English,&apos; thought Alice; &apos;I daresay it&apos;s a French mouse, come over with William the Conqueror.&apos; (For, with all her knowledge of history, Alice had no very clear notion how long ago anything had happened.) So she began again: &apos;Ou est ma chatte?&apos; which was the first sentence in her French lesson-book. The Mouse gave a sudden leap out of the water, and seemed to quiver all over with fright. &apos;Oh, I beg your pardon!&apos; cried Alice hastily, afraid that she had hurt the poor animal&apos;s feelings. &apos;I quite forgot you didn&apos;t like cats.&apos;</p><p>&apos;Not like cats!&apos; cried the Mouse, in a shrill, passionate voice. &apos;Would&#xA0;<i>you</i>&#xA0;like cats if you were me?&apos;</p><p>&apos;Well, perhaps not,&apos; said Alice in a soothing tone: &apos;don&apos;t be angry about it. And yet I wish I could show you our cat Dinah: I think you&apos;d take a fancy to cats if you could only see her. She is such a dear quiet thing,&apos; Alice went on, half to herself, as she swam lazily about in the pool, &apos;and she sits purring so nicely by the fire, licking her paws and washing her face&#x2014;and she is such a nice soft thing to nurse&#x2014;and she&apos;s such a capital one for catching mice&#x2014;oh, I beg your pardon!&apos; cried Alice again, for this time the Mouse was bristling all over, and she felt certain it must be really offended. &apos;We won&apos;t talk about her any more if you&apos;d rather not.&apos;</p><p>&apos;We indeed!&apos; cried the Mouse, who was trembling down to the end of his tail. &apos;As if&#xA0;<i>I</i>&#xA0;would talk on such a subject! Our family always&#xA0;<i>hated</i>&#xA0;cats: nasty, low, vulgar things! Don&apos;t let me hear the name again!&apos;</p><p>&apos;I won&apos;t indeed!&apos; said Alice, in a great hurry to change the subject of conversation. &apos;Are you&#x2014;are you fond&#x2014;of&#x2014;of dogs?&apos; The Mouse did not answer, so Alice went on eagerly: &apos;There is such a nice little dog near our house I should like to show you! A little bright-eyed terrier, you know, with oh, such long curly brown hair! And it&apos;ll fetch things when you throw them, and it&apos;ll sit up and beg for its dinner, and all sorts of things&#x2014;I can&apos;t remember half of them&#x2014;and it belongs to a farmer, you know, and he says it&apos;s so useful, it&apos;s worth a hundred pounds! He says it kills all the rats and&#x2014;oh dear!&apos; cried Alice in a sorrowful tone, &apos;I&apos;m afraid I&apos;ve offended it again!&apos; For the Mouse was swimming away from her as hard as it could go, and making quite a commotion in the pool as it went.</p><p>So she called softly after it, &apos;Mouse dear! Do come back again, and we won&apos;t talk about cats or dogs either, if you don&apos;t like them!&apos; When the Mouse heard this, it turned round and swam slowly back to her: its face was quite pale (with passion, Alice thought), and it said in a low trembling voice, &apos;Let us get to the shore, and then I&apos;ll tell you my history, and you&apos;ll understand why it is I hate cats and dogs.&apos;</p><p>It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures. Alice led the way, and the whole party swam to the shore.</p><p><br/></p>`
  },
];
