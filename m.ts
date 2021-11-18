const data = [{
    "Title": "Blade Runner",
    "Year": "2000",
    "Metascore": "84",
    "Type": "movie",
    "Genre": "romance",
    "Watched": "True"
},
{
    "Title": "Gladiator",
    "Year": "2000",
    "Metascore": "59",
    "Type": "series",
    "Genre": "action",
    "Watched": "False",
}];

// const newData = data.reduce((previousValue, item, currentIndex) => {
//     const obj = {}
//     const filterState = { 'series': true }
//     const [filterIndex, filterValue] = Object.entries(filterState);
//     for (const [objectIndex, objectValue] of Object.entries(item)) {
//         switch (objectIndex) {
//             case 'Type':
//                 console.log(objectIndex, objectValue)
//                 break;
//             case 'Year':
//                 break;
//             case 'Metascore':
//                 break;
//             default:
//                 obj[objectIndex] = objectValue
//         }
//     }
//     return previousValue.concat([obj])
// }, [])
// console.log('new data', newData)

const newData = data.filter((item) => {
    const filterState = { 'series': true, '1939': true, '< 60': true, "action": true, 'yes': true }
    for (const [objectIndex, objectValue] of Object.entries(filterState)) {
        switch (objectIndex.toLowerCase()) {
            case (item.Type):
                return true;
            case (item.Year):
                return true;
            case (item.Genre):
                return true;
            case (item.Watched): {
                return objectIndex === 'yes' ? true : false;
            }
        }
    }
})
console.log(newData)
// function validateMetascore(metascore: string) {
//     const number = parseInt(metascore);
//     if (number <= 60) return true
//     if (number >= 60 && number <= 80) return true
//     if (number >= 90) return true
// }