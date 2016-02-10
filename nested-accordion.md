##What does it do?##

###Interactive Elements:###
_Arrow to left of each section_
This arrow changes color and rotates 45 degrees when its containing box is hovered over. When the section is clicked, the arrow rotates 45 additional degrees and changes color (and stays that way). If you then click on the (now header) of this section, the arrow returns to the original grey horizontal display.

_Section Header_
When a section's header is clicked, a section expands out directly below it AND the page view brings that section's header to the top of the page. In addition to a paragraph of text, there are other expanding headers indented below the paragraph. If the section's header is clicked again, the 'new' section collapses away again.

_Arrows in expanded sections_
This arrow changes color and rotates 45 degrees when its containing box is hovered over.

_Headers in expanded sections_
When one of these section's headers is clicked the page view brings that section's header to the top of the page.

##How does it do it?##
When either one of the main section headers or the headers within the 'expanded' sections are clicked, a new <div> (or possibly <section>) is created. Within the 'main' expanded sections are new <h4> objects.

In order to make these changes, we will need to use the following CSS styles:

color
-webkit-transform:rotate(xdeg)
display: none
