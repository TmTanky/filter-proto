//@ts-nocheck
export const newMoviesState = (filterState, movies) => {
    const newData = movies.filter((item) => {
        for (const [objectIndex, objectValue] of Object.entries(filterState)) {
            for (const [filterIndex, filterValue] of Object.entries(objectValue)) {
                switch (filterValue === true) {
                    case (filterIndex === item.Type): return true;
                    case (filterIndex === item.Genre): return true;
                    case (filterIndex === item.Year): return true;
                    case (objectIndex === 'watched' && item.Watched === 'True' && filterIndex === 'Yes'):
                    case (objectIndex === 'saved' && item.Saved === 'True' && filterIndex === 'Yes'):
                        return true
                    case (objectIndex === 'watched' && item.Watched === 'False' && filterIndex === 'No'):
                    case (objectIndex === 'saved' && item.Saved === 'False' && filterIndex === 'No'):
                        return true;
                    case (objectIndex === 'metascore' && filterIndex === '< 60' && parseInt(item.Metascore) < 60): return true;
                    case (objectIndex === 'metascore' && filterIndex === '> 90' && parseInt(item.Metascore) > 90): return true;
                    case (objectIndex === 'metascore' && filterIndex === 'Between 60 & 80' && parseInt(item.Metascore) >= 60 && parseInt(item.Metascore) <= 80): return true;
                    case (objectIndex === 'metascore' && filterIndex === 'Between 80 & 90' && parseInt(item.Metascore) >= 80 && parseInt(item.Metascore) <= 90): return true;
                    case (objectIndex === 'metascore' && filterIndex === 'N/A' && item.Metascore === 'N/A'): return true;
                }
            }
        }
    })
    return newData
}