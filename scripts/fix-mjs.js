const fs = require('fs');
const path = require('path');

// Diretório onde os arquivos estão localizados
const esmDir = path.resolve(__dirname, '../dist/esm');

// Verifica se o diretório existe
if (!fs.existsSync(esmDir)) {
  console.error(`Diretório não encontrado: ${esmDir}`);
  process.exit(1);
}

// Processa cada arquivo no diretório
fs.readdirSync(esmDir).forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(esmDir, file);
    const newFilePath = filePath.replace('.js', '.mjs');
    
    // Substitui o conteúdo do arquivo
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\.js'/g, '.mjs\'');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Atualizado o conteúdo de: ${filePath}`);

    // Renomeia o arquivo
    fs.renameSync(filePath, newFilePath);
    console.log(`Renomeado: ${filePath} -> ${newFilePath}`);
  }
});
