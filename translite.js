

function translite(string){
    var dictionary = {
        ' ' : '-',
        'й' : 'y',
        'ц' : 'c',
        'у' : 'u',
        'к' : 'k',
        'е' : 'e',
        'н' : 'n',
        'г' : 'g',
        'ш' : 'sh',
        'щ' : 'sh',
        'з' : 'z',
        'х' : 'x',
        'ъ' : 'y',
        'ф' : 'f',
        'ы' : 'i',
        'в' : 'v',
        'а' : 'a',
        'п' : 'p',
        'р' : 'r',
        'о' : 'o',
        'л' : 'l',
        'д' : 'd',
        'ж' : 'j',
        'э' : 'e',
        'я' : 'ya',
        'ч' : 'ch',
        'с' : 's',
        'м' : 'm',
        'и' : 'i',
        'т' : 't',
        'ь' : '',
        'б' : 'b',
        'ю' : 'u',
        'ё' : 'e',
        'Й' : 'y',
        'Ц' : 'c',
        'У' : 'u',
        'К' : 'k',
        'Е' : 'e',
        'Н' : 'n',
        'Г' : 'g',
        'Ш' : 'sh',
        'Щ' : 'sh',
        'З' : 'z',
        'Х' : 'h',
        'Ъ' : 'y',
        'Ф' : 'f',
        'Ы' : 'i',
        'В' : 'v',
        'А' : 'a',
        'П' : 'p',
        'Р' : 'r',
        'О' : 'o',
        'Л' : 'l',
        'Д' : 'd',
        'Ж' : 'j',
        'Э' : 'e',
        'Я' : 'ya',
        'Ч' : 'ch',
        'С' : 's',
        'М' : 'm',
        'И' : 'i',
        'Т' : 't',
        'Ь' : '',
        'Б' : 'b',
        'Ю' : 'u',
        'Ё' : 'e',
        'A' : 'a',
        'B' : 'b',
        'C' : 'c',
        'D' : 'd',
        'E' : 'e',
        'F' : 'f',
        'G' : 'g',
        'H' : 'h',
        'I' : 'i',
        'J' : 'j',
        'K' : 'k',
        'L' : 'l',
        'M' : 'm',
        'N' : 'n',
        'O' : 'o',
        'P' : 'p',
        'Q' : 'q',
        'R' : 'r',
        'S' : 's',
        'T' : 't',
        'U' : 'u',
        'V' : 'v',
        'W' : 'w',
        'X' : 'x',
        'Y' : 'y',
        'Z' : 'x'
    };
    return string.replace(/[\s\S]/g, function(x){
        if( dictionary.hasOwnProperty( x ) )
            return dictionary[ x ];
        return x;
    });
};




jQuery(document).ready(function () {
    $('#title').bind('input', function(){
        $('#url').val(translite($("#title").val()));
    });

});
