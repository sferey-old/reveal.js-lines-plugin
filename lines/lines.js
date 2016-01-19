/**
 *
 * Add this javascript library to a reaveal.js presentation by adding it as a
 * dependency in Reveal.initialize.
 *
 * Reveal.initialize({
 *   ....
 *   dependencies: [
 *     ...
 *     {src: 'lib/js/lines.js'}
 *   ]
 * })
 *
 */
// Adding an event listener on slidechanged event to add line numbers to
// code blocks.
Reveal.addEventListener('slidechanged', function(event) {
  // For any code blocks in the current slide with class 'lines'.
  $('code.lines').each(function(){
    if (($(this).html().indexOf('class="line') < 1)) {
      // Get the content of the code block.
      var content = $(this).html();
      // Split the content on new lines "\n".
      content = content.split("\n");
      // Re-join the content with line number spans after the new line.
      content = content.join("\n<span class='line'> </span>");
      // Prefix with a line number for the first line.
      content = '<span class="line"> </span>' + content;
      // Replace the content of the code block with the new content.
      $(this).html(content);
    }
  });
});
