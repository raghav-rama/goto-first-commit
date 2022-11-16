// Notes
// Change the upper bound the of loop from 100 to anything you like, depending upon the total number of commits of the repo
// If your internet speed is slow, change 2000 to something higher like 4000 or something...
// This code may become obsolete in the future if GitHub changes there HTML code, so contributions are always welcome :)
// Enjoy!

for (i = 0; i < 100; ++i) {
    setTimeout (
        function() {
            if(!document.querySelectorAll(".paginate-container .btn")[1].disabled) {
                document.querySelectorAll(".paginate-container .btn")[1].click()
            }
        }, 2000 * i);
}
