// SpeakGoodBye.js
(function() {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker; // <- VERY IMPORTANT!
})();
