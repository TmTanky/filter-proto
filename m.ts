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
    // return tayo ng isang item lang
    "type": {
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

// const filterState = { 'series': true, 'comedy': true, }
// const filterArray = [...filterState]
// const newData = data.filter((item) => {
//     for (const [filterIndex, filterValue] of Object.entries(filterState)) {
//       console.log(filterIndex, filterValue)
//     }
// })
// console.log(newData);

const newData = data.reduce((previousValue, item, currentIndex) => {
    console.log(previousValue)
    const obj = {}
    for (const [objectIndex, objectValue] of Object.entries(newFilterState)) {
        console.log(item)
        console.log(objectIndex)
        for (const [filterIndex, filterValue] of Object.entries(objectValue)) {
            switch (true) {
                case (filterIndex === item.Type): {
                    console.log(item, 'with series**************************************************')
                    Object.assign(obj, item)
                    break;
                }
                case (filterIndex === item.Genre): {
                    console.log(item, 'with comedyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    Object.assign(obj, item)
                    break;
                }
                case (objectIndex === 'watched' && filterIndex === 'Yes'):
                case (objectIndex === 'saved' && filterIndex === 'Yes'): {
                    console.log(item, 'with Yes-----------------------------------------------------')
                    Object.assign(obj, item)
                    break;
                }
            }
        }

    }
    return [obj]
}, [])

console.log('new data', newData)
