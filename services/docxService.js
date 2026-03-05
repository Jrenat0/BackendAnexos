import docxtemplater from 'docxtemplater';
import pizzip from 'pizzip';
import fs from 'fs';
import path from 'path';


export const generateAnexo = (data) => {
    const templatePath = path.join(process.cwd(), 'templates', 'ANEXO2_PLANT_3BLOQ.docx')

    const content = fs.readFileSync(templatePath, 'binary');
    const zip = new pizzip(content);

    const doc = new docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    doc.render(data);

    return doc.getZip().generate({
        type: 'nodebuffer',
        compression: 'DEFLATE',
    });

}  