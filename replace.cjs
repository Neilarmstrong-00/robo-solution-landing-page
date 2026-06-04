const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('src/**/*.jsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  if (content.includes('→')) {
    content = content.replace(/ →/g, ' <ArrowRight size={16} />');
    content = content.replace(/→/g, '<ArrowRight size={16} />'); // any remaining
    
    if (file !== 'src/components/Icons.jsx') {
        let importPath = '../components/Icons';
        if (file.split('/').length === 2) importPath = './components/Icons';
        else if (file.split('/').length === 4) importPath = '../../components/Icons';
        
        if (!content.includes('import { ArrowRight }')) {
            const lines = content.split('\n');
            let lastImportIdx = -1;
            lines.forEach((l, i) => { if (l.startsWith('import ')) lastImportIdx = i; });
            if (lastImportIdx !== -1) {
                lines.splice(lastImportIdx + 1, 0, `import { ArrowRight } from '${importPath}';`);
            } else {
                lines.unshift(`import { ArrowRight } from '${importPath}';`);
            }
            content = lines.join('\n');
        }
    }
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
