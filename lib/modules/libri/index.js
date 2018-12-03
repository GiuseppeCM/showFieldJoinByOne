module.exports = {
    name: 'libro',
    label: 'Libro',
    pluralLabel: 'Libri',
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
            name: 'tipologia',
            label: 'Tipologia',
            type: 'select',
            choices: [{
                    label: 'Seleziona una scelta',
                    disabled: true
                },
                {
                    label: 'Romanzo',
                    value: 'r',
                },
                {
                    label: 'avventura',
                    value: 'a',
                },
            ]
        }
    ]
};