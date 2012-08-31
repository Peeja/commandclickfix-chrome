# Command-Click Fix for Chrome

**Makes Command-Click open a new tab on pages that don't do it properly.**

Some sites do funky Javascript things with their links.  A link will point to a
URL, but for whatever reason the page wants to use javascript to bring you to
that URL.  Ordinarily, you don't notice.  You click, and you end up at the
right page.  But it's Javascript handling the click, not your browser's default
link-clicking behavior.

On the Mac, Command-clicking a link opens it in a new tab.  But that's only if
Chrome is handling the click.  If the page's Javascript is trying to be clever,
it won't open a new tab.  It'll act exactly as if you weren't holding down
Command.

You can see this for yourself here:
<http://getglue.com/books/design_of_everyday_things/donald_norman>

Try to Command-click on any of the "Similar" items in the sidebar.  They all
open in the current tab.

If you install this extension and refresh the page, they open in a new tab.
Just like you said they should.

*Disclaimer: This is a little bit of a hack.  It might mess things up a bit,
though I don't expect it to.  If you have any trouble clicking on links,
disable the extension, refresh the page, and see if it helps.  If it does,
please let me know on the support page.*
