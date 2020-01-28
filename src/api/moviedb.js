
export function searchMovie(request) {

    return fetch('https://api.themoviedb.org/3/search/movie?query=' + request + '&api_key=64180860b634f1f680af2178ceb6aaa6')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);                    
                }
                
                return response.json()
                
            }            
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });    
}


