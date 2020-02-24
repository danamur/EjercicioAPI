for (var i = 1; i <= 151; i++) {
    $('.image-container').append($('<img>').attr('id', i).attr('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png'))
}
