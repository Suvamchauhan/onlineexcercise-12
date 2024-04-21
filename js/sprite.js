$(document).ready(function(){
    $(document).on('keydown', function(event) {
        var keyCode = event.code;
        var character = $('#CharacterSprite');
        if (keyCode === 'ArrowUp') {
            moveCharacter(character, 'up');
        } else if (keyCode === 'ArrowDown') {
            moveCharacter(character, 'down');
        } else if (keyCode === 'ArrowRight') {
            moveCharacter(character, 'right');
        } else if (keyCode === 'ArrowLeft') {
            moveCharacter(character, 'left');
        }
    });

    function moveCharacter(character, direction) {
        character.removeClass().addClass("CharacterSprite " + direction);
    }
});
