var data = require("../data/things.json");
const d = JSON.parse(JSON.stringify(data));

const EmojoAPI = {
  getSomeThing: function() {
    return "🇨🇳";
    // return "A";
  },
  getEmojoByWords: function(words) {
    return d[words]
      ? d[words][Math.floor(Math.random() * d[words].length)]
      : "😒";
  }
};
// fetch("./data/things.json")
//   .then(res => res.json())
//   .then(data => {
//     console.log("data:", data);
//   });
export default EmojoAPI;
