const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "image" });
  }

  insert(image) {
    return this.database.query(
      `insert into ${this.table} (name, faction, game, url) values (?,?,?,?)`,
      [image.name, image.faction, image.game, image.url]
    );
  }

  update(image) {
    return this.database.query(
      `update ${this.table} set name = ?, set faction = ?, set game, set url = ?, where id = ?`,
      [image.name, image.faction, image.game, image.url, image.id]
    );
  }
}

module.exports = ImageManager;
