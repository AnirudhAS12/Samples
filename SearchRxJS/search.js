import {observable} from RxJS;
let userClicksSearchButton = Rx.Observable.fromEvent($("#search-button"),'click')
    .map((event) => {
        return $("#search-box").val();
    });

userClicksSearchButton
    .flatMap((searchTerm) => {
        return Rx.Observable.fromPromise(
            $.get('https://api.github.com/users/' + searchTerm)
        );
    })
    .subscribe((response) => {
        renderUser(
            response.login,
            response.html_url,
            response.avatar_url
        );
    });

function renderUser(login, href, imgSrc) {
    let searchResult = $("#search-result");
    searchResult.show();
    searchResult.attr("href", href);
    $("#search-result__avatar").attr('src', imgSrc);
    $('#search-result__login').text(login);
}