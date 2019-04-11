module.exports = function(sequelize, DataTypes) {
    // Add code here to create a Post model
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    // Create a Sequelize Post model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING.
    var Post = sequelize.define("Post", {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 160]
                }
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            category: {
                type: DataTypes.STRING,
                defaultValue: "Personal"
            }
        }
    });
};
return Post;

};
