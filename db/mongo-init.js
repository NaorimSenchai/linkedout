db = db.getSiblingDB('linkedout');
db.createCollection('user');
db.createCollection('post');
db.createCollection('comment');
db.createCollection('like');

db.user.insertOne({
  username: "linkedout",
  firstname: "Linked",
  lastname: "Out",
  email: "admin@linkedout.com",
  password: "$2y$10$p4ihm5LiAWoPBv.LKo7F4OMgu2Ud.vUs18fhqb4NAo65EckH35u3m", // "password" (To change right after first login!)
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
});