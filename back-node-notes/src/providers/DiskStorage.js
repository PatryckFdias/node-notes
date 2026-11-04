
const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class DiskStorage {
  async saveFile(file) {
    // Garante que o diretorio de uploads exista
    await fs.promises.mkdir(
      uploadConfig.UPLOADS_FOLDER,
      { recursive: true }
    );

    // Move o arquivo temporario para a pasta definitiva
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(
      uploadConfig.UPLOADS_FOLDER,
      file
    );

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorage;
