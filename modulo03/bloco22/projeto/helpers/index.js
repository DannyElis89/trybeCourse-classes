const fs = require('fs').promises;

const readFiles = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');

    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const writeFiles = async (path, content) => {
  try {
    const conteudo = await readFiles(path) || [];

    conteudo.push(content);
    await fs.writeFile(path, JSON.stringify(conteudo));

    return content;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const updateContent = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));

    return content;
  } catch (error) {
    console.log(error.message);

    return null;
  }
};

module.exports = {
  readFiles,
  writeFiles,
  updateContent,
};
