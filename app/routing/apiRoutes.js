app.get("/api/friends", function (req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
 
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  profiles.push(newFriend);

  res.json(newFriend);
});