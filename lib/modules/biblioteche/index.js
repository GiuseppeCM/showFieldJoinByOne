module.exports = {
    name: 'biblioteca',
    label: 'Biblioteca',
    pluralLabel: 'Biblioteche',
    addFields: [{
            name: 'title',
            label: 'Titolo',
            type: 'string',
        },
        {
            name: 'description',
            label: 'Descrizione',
            type: 'string',
        },
        {
            name: '_libro',
            withType: 'libro',
            type: 'joinByOneCustom',
            showFields: [{
                forType: "a",
                fields: ['descriptionBiblioteca']
            }]
        },
        {
            name: 'descriptionBiblioteca',
            type: 'string',
            label: 'Descrizione biblioteca'
        }
    ]
};