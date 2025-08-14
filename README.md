# Game Stack - Boardgame Application

## Requirments/Goals

Web Applicaiton to do the following
    -- store user boardgame collections and store in database along with Key game data
    -- utilise Boardgame Geek API (may include second API boardgame atlas API) to display key boardgame stats (rating, playtime, players)
    -- users to search boardgame lists and favorate games. Storing this data in a database
    -- Current top rated Boardgames from BGG
    -- boardgame wishlist from search with price and links to buy

Inital User Stories

As a user, I want to search for board games by name, so that I can add games to my collection.

    Acceptance Criteria
    User can enter a game name into the search field.
    list of games matching that criteria is displayed.
    option to add to collection is displayed and is then added
    Game is stored in the database in the users collection
    Games already in collection "Add to Collection" is repaced with "In collection"

As a user, I want to view my collection, so that I can remove games I no longer own.

    Acceptance Criteria
    User can view a list of owns board games
    each item has the option "Remove from colleciton"
    Once selected, Game is removed from database
    New My Collection is displayed with game removed.

As a user, I want to login to the applciation, so that i can view my unique boardgame colleciton

    Acceptance Criteria
    User has the option to Login visaple on each page
    login page includes fields for usernames and passwords
    both UN and PW are required to press login
    on sucessful login, user is directed to own colleciton
    On failed login, error is displayed
    User remains logged in until session expary or logout
    Logout option visable to user on all pages