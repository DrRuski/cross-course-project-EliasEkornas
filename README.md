# cross-course-project-IlyaMartchenko
cross-course-project-DrRuski created by GitHub Classroom

Day 1 (Start 03.04.22 / 12.00 CET)

I first started of with going through the feedback that i recieved during the MA on the home page  which pointed out several flaws in my code which i had to fix, the the responsiveness of the website was a bit off because of the preset image size with pixels instead of % as well as some of the work i did with grid/flex.

I started by rewriting the homepage entierly with proper grid layout (with this project i try to focus mainly on the <grid> element due to the fact that it is a powerful tool which can work in both dimensions and the fact that it is more complex than flex, so if i can master <grid> then flex will be childs play), image size and other minor placement details. As such i had completed the mobile page in roughly 3-4 hours.

I used <gird> and <grid-area> element(s) on the body to structure the layout of the mobile home page which made placement of everything else very easy, and by using the grid layout the responsiveness of the website has been improved greatly, if there where any flaws it was easier to fix as well.

<Grid> It appears that to make transparent edges for elements i would have to make maybe a <div> element that would work as a <grid> container without any content inside, it would mainly just be there to press the content into the middle? Need further investigation. (I did this with the main-nav were i had <img of logo> followed by 4 buttons, the grid-column structure would then be:
5fr (for the logo) 1fr 1fr 1fr 1fr (for the links) 5fr (no content)).

