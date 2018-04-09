const fs = require('fs');
const path = require('path');
const convertFactory = require('electron-html-to');
const builddir = './build/static/pdf';

if (!fs.existsSync(builddir)){
    fs.mkdirSync(builddir);
}

fs.readFile('./build/index.html', 'utf8', (err, htmlString) => {
  htmlString = htmlString.replace(/href="\/|src="\//g, match => {
    return match.split('/')[0] + `${path.dirname(__dirname)}/build/`;
  });

  const conversion = convertFactory({
    converterPath: convertFactory.converters.PDF,
    allowLocalFilesAccess: true
  });
  conversion({ html: htmlString }, (err, result) => {
    if (err) return console.error(err);
    // console.log(result.numberOfPages);
    // console.log(result.logs);
    result.stream.pipe(fs.createWriteStream(`${builddir}/anywhere.pdf`));
    conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
  });
});