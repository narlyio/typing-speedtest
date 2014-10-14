# c0cc26f:

## FEWD 21 Typing Speed Test


**Topics covered in this walkthrough**

We've gone through this assignment in class so in the first steps so we assume the basic funcionality is implemented. Beyond that:

- Add sentences with increased difficulty.
- Attach onclick handler to a group of buttons and determine which one sent the event.
- Use [jQuery.index()](http://api.jquery.com/index/).
- Validate user input against original sentence prompt.
- Use a form to enable submit by pressing [enter] key.
- Add realtime analysis of typing speed as user types.
- Abstract common logic into resuable functions.

**How to Follow Along**

The tutorial shows step by step code changes. Removed code is red while added code is green.
Navigate the steps by the orange back and forward arrows -- the keyboard arrows work as well.

Test and run the code yourself at any time by downloading the source, then clicking "View File" on the top right 
of the code to copy that file's contents at that given step.

**Code Source**

- [Github](https://github.com/narlyio/typing-speedtest)
- [Download .zip](https://github.com/narlyio/typing-speedtest/archive/master.zip)


# 54c3ac3:

Add completed javascript from in class lessons.

This is the base functionality that uses only one sentence.

# ffcf9a3:

Add increased difficulty sentences.

The easy test should use the first (easiest) sentence by default.

# 47a5de3:

Add a click handler to all buttons by grouping them into a `#difficulty` element.

Now every button is clickable. Additionally, there is no longer an explicit need for ids on each of the buttons.

# 36e1389:

Update `easyTest()` function name to a more appropriate name.

# 3dd3fa3:

Use the index position of the buttons within their parent to determine which prompt to show.

Google thought process: ["jquery get index of element"](http://www.google.com/search?q=jquery+get+index+of+element)

Result: http://api.jquery.com/index/

# bc278f6:

Validate that the user's input matches the given prompt.

We need `promptIndex` in order to know which sentence difficulty to compare to so we need to give it a more global scope.

Note: It is possible to grab the sentence again using `$("#prompt").val()` but this treats the DOM like a database and it is yet another jquery lookup (performance consideration). We have the data in pure javascript (not in the DOM) so we should use that whenever possible.

# 02c7c19:

### Add support for submit by <kbd>enter</kbd> key

After the user is done typing, it's annoying to have to use the cursor to manually click the button.

The easiest way to support a native 'submit event' when the user presses <kbd>enter</kbd> is to wrap the button in a form. Since we really don't want to actually submit the form `e.preventDefault()` is used within the form submit event. Lastly we need to call the `finishTest()` logic.

# 7629996:

### Realtime results

Let's make it even better by providing realtime results as the user types.

As the user types 'keypress' events are emitted. We will listen to this event and display our results.

However, the function `finishTest()` validates the input which will always be false as the user is typing. =/


Google thought process: ["jquery event when user types"](http://www.google.com/search?q=jquery+event+when+user+types)

The results are not spot on but the [first one](http://stackoverflow.com/a/7239269/101940) does point to the `keyup` event (I used the more generic `keypress`).

Always remember to also check/browse the documentation: http://api.jquery.com/category/events/.



# 9a465dc:

To get out of the forced comparison logic within `finishTest()` we need to decouple the typing speed processing logic from the 'finishTest' logic.

Create a more standalone `getTypingSpeedOutput()` function that can be reused.

# cf9cc98:

Process `getTypingSpeedOutput()` on user keypress.

We have realtime results!

