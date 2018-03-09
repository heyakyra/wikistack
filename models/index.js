const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

const generateSlug = (title) => {
  return title.replace(/[^a-zA-Z0-9 :]/g, "").replace(/ +/g, "_");
}

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("open", "closed")
  }
});

Page.beforeCreate((pageInstance, options) => {
  pageInstance.slug = generateSlug(pageInstance.title);
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    isAlphanumeric: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = {
  db,
  Page,
  User
};
