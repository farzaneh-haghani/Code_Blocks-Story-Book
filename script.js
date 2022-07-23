var x, y, story, direction, Page_number;

// Describe this function...
function Display(x, y) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (y == 'forward') {
    let element_cover = document.getElementById('cover');
    element_cover.replaceChildren();
    let element_text = document.getElementById('text');
    element_text.innerText = story[0];
    story.push(story.shift());
  } else {
    story.unshift(story.pop());
    if (x == 0) {
      let element_cover2 = document.getElementById('cover');
      let new_img = document.createElement('img');
      new_img.setAttribute("src", 'https://i.pinimg.com/originals/08/a6/42/08a64225dec8074e883a1bb9fe327ebd.jpg');

      element_cover2.appendChild(new_img);
      let element_text2 = document.getElementById('text');
      element_text2.replaceChildren();
    } else {
      let element_text3 = document.getElementById('text');
      element_text3.innerText = story.slice(-1)[0];
    }
  }
}


story = ['New experiences are always good you learn life lessons and learn from your mistakes. Your first day at school is always different depending on where you go. When I was first starting school it was different from usual because I had never been to school and had no idea what to expect.  “It’s too early!” I moan as my Mum removed the covers from my head allowing light to flood into my eyes. My eyes struggle to adjust to the sudden change of light. The blurred colours that are my room mix to make strange shades of colours without names. I eventually found a blur of colours resembling my mum. “Why do I have to get up this early?”', '“Because it’s time for school,” she replied, lifting me out of my bed onto the cold tiled floor of my room. “Go get ready. Your bag is down at the car.”  After my morning routine of brushing my teeth and getting dressed, I went down to the car and found my bag. I put my bag on my back moaning as if it weighed hundreds of kilograms. As I went into the car, the heat of being out in the sun hit me like a brick. The only sound to be heard in the car was the gentle rattling of the engine.', 'After ten to fifteen minutes of driving the rattling of the engine came to a halt as we stopped outside the school. I was unsure about this place the fences had decorations the looked like the ends of the spears while the gates had large padlocks on them. When I reached the gate there was a blast of cold air as the air-conditioning flooded outside into the tropical heat. We walked into a room with about twenty kids with the same blank confused expression that I had.   My mum then asked “Do you like your new school”  “It looks great,” I reply, unsure about this new place.', '“I’ll pick you up when you finish. Just wait outside”  I sat down with the other children and listened to our teacher as she spoke about how fun school was going to be. I looked on the wall and saw colourful paintings from previous classes. The teacher soon had us painting pictures just as bright to replace the ones being taken down. She read the class a story out of a ridiculously large book and let us play for a while with the blocks and other toys. Finally the teacher took us outside to wait for our parents.   At first, I was unsure about pre-school, but i soon came to get ready as fast as I could to get more time to play with my friends. I didn’t know that later on these times and wish I could go back to them. They were my first days of school and some of the best of my life.'];
Page_number = 0;


document.getElementById('back').addEventListener('click', (event) => {
  direction = 'back';
  if (Page_number >= 1) {
    Page_number = (typeof Page_number === 'number' ? Page_number : 0) + -1;
    Display(Page_number, direction);
  }

});

document.getElementById('forward').addEventListener('click', (event) => {
  direction = 'forward';
  if (Page_number < 4) {
    Page_number = (typeof Page_number === 'number' ? Page_number : 0) + 1;
    Display(Page_number, direction);
  }

});
