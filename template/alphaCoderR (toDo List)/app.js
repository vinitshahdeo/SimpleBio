// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const date = require(__dirname + "/date.js");

const app = express();

let day = date.getdate();

// Setting up ejs
app.set("view engine", "ejs");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("public"));

// Setting up our database
mongoose.connect("mongodb://localhost:27017/toDo_list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false); // Wrote this becoz of some deprection warnings.

const dataSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [1, "The input field should not be blank"],
    },
});
const dailyData = mongoose.model("List", dataSchema);
// Data collection created for default page

const userSchema = new mongoose.Schema({
    name: String,
    points: [dataSchema],
});
const userData = new mongoose.model("Point", userSchema);
// Data collection for different users

// Creating objects for lists collection
const item1 = new dailyData({
    _id: 1,
    item: "To Add click: +",
});
const item2 = new dailyData({
    _id: 2,
    item: "To Delete click the checkbox",
});
const item3 = new dailyData({
    _id: 3,
    item: "Type /urName in url for ur own list",
});

// Saving default data
dailyData.find((err, data) => {
    if (data.length == 0) {
        dailyData.insertMany([item1, item2, item3], (err) => {
            if (err) {
                return;
            } else {
                console.log("Save successful");
            }
        });
    }
});


// Here both the requests are handled for the home route and the users route
app.post("/list", function(req, res) {
    var listName = req.body.add;

    if (listName != day) {
        // enters into users endpoints
        const newItem = {
            item: req.body.point,
        };

        userData.findOne({
                name: listName,
            },
            (err, foundList) => {
                var pointArray = foundList.points;
                pointArray.push(newItem);

                userData.updateOne({
                        name: listName,
                    }, {
                        points: pointArray,
                    },
                    (err) => {
                        if (!err) {
                            console.log(listName + ": Item added");
                        }
                    }
                );
                res.render("ToDo.ejs", {
                    title: listName,
                    newPoint: foundList.points,
                });
            }
        );
    } else {
        // enters into default endpoints
        const newItem = new dailyData({
            item: req.body.point,
        });
        newItem.save();
        dailyData.find((err, data) => {
            if (!err) {
                console.log("New Point added");
            }
            res.redirect("/");
        });
    }
});

// Deleting an item
app.post("/del", (req, res) => {
    var itemMsg = req.body.checkBox;
    var userName = req.body.listName;

    if (userName == day) {
        // enters into default endpoints for deletion
        dailyData.deleteOne({
                item: itemMsg
            },
            (err) => {
                if (!err) {
                    console.log("Item deleted");
                }
            }
        );
        res.redirect("/");
    } else {
        // enters into users endpoints for deletion
        userData.findOneAndUpdate({
                name: userName,
            }, {
                $pull: {
                    points: {
                        item: itemMsg
                    },
                },
            },
            (err, foundList) => {
                if (!err) {
                    console.log(userName + ": Database Updated!");
                    res.redirect("/" + userName);
                }
            }
        );
    }
});


//  Normal List : localhost:5000
app.get("/", (req, res) => {
    dailyData.find((err, data) => {
        res.render("ToDo", {
            title: day,
            newPoint: data,
        });
    });
});

// HAndles get requests from the users ToDo lists
app.get("/:userName", (req, res) => {
    let userName = req.params.userName;
    let UserName = _.capitalize(userName);
    const defaultObj = new userData({
        name: UserName,
        points: [{
            item: "ToDo List",
        }, ],
    });

    userData.findOne({
            name: UserName,
        },
        (err, foundList) => {
            if (!err && !foundList && userName != "favicon.ico") {
                defaultObj.save();
                console.log(UserName + ": Default point created");
                res.render("ToDo.ejs", {
                    title: UserName,
                    newPoint: defaultObj.points,
                });
            } else {
                if (userName != "favicon.ico") {
                    console.log(UserName + ": Default Point exists");
                    userData.findOne({
                            name: UserName,
                        },
                        (err, foundList) => {
                            res.render("ToDo.ejs", {
                                title: UserName,
                                newPoint: foundList.points,
                            });
                        }
                    );
                }
            }
        }
    );
});

app.listen(5000, () => {
    console.log("Server is online at port 5000");
});

/*
    	Coded by @alphaCoderR
	Documentation by :
		@rAwsam
		@gracyashhh
		@Aaron-Junker
*/
