const RandomUrlGen = require("uuid");
const RandomNameGen = require("node-random-name");
const RandomAvatar = require("give-me-an-avatar");

const AVATARSIZE = 256;

const GenerateRandomID = (nmw) => ({
  url: RandomUrlGen.v4(),
  name: RandomNameGen(),
  age: RandomNumber(60, 12),
  avatar: `https://robohash.org/${RandomUrlGen.v4()}.png?set=${nmw}`,
});

const RandomNumber = (max, min) =>
  Math.round(Math.random() * (max - min) + min);

module.exports = GenerateRandomID;
