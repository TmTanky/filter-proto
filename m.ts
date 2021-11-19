const data = [{
    "Title": "Blade Runner",
    "Year": "1959",
    "Metascore": "84",
    "Type": "movie",
    "Genre": "romance",
    "Watched": "True",
    "Saved": "True",
},
{
    "Title": "Gladiator",
    "Year": "2000",
    "Metascore": "59",
    "Type": "series",
    "Genre": "action",
    "Watched": "False",
    "Saved": "False",
},
{
    "Title": "Test3",
    "Year": "1969",
    "Metascore": "59",
    "Type": "movie",
    "Genre": "comedy",
    "Watched": "False",
    "Saved": "False",
},
{
    "Title": "ULTIMATE TEST",
    "Year": "1969",
    "Metascore": "59",
    "Type": "imba",
    "Genre": "imba",
    "Watched": "True",
    "Saved": "True",
},
];

const newFilterState = {
    "type": {
        "series": true,
        "imba": true
    },
    "genre": {
        "imba": true
    },
    "watched": {
        "Yes": true
    },
    "saved": {
        "No": true
    }
}
const newData = data.filter((item) => {
    for (const [objectIndex, objectValue] of Object.entries(newFilterState)) {
        for (const [filterIndex, filterValue] of Object.entries(objectValue)) {
            switch (true) {
                case (filterIndex === item.Type): {
                    console.log(item, `with ${filterIndex}**************************************************`)
                    return true;
                }
                case (filterIndex === item.Genre): {
                    console.log(item, `with ${filterIndex}XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
                    return true;
                }
                case (objectIndex === 'watched' && item.Watched === 'True' && filterIndex === 'Yes'): {
                    console.log('watched is true')
                }
                // case (objectIndex === 'saved' && filterIndex === 'Yes'): {
                //     console.log(item, `with ${filterIndex}-----------------------------------------------------`)
                //    return true;
                // }
            }
        }
    }
})
console.log('new data', newData)
