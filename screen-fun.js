// Pixl.Js LCD display is double-buffered, so before the display we buffer the data.
// https://en.wikipedia.org/wiki/Multiple_buffering

// A simple VT100 terminal emulator.

// screen width and height
Terminal.println("Width: " + g.getWidth());
Terminal.println("Height: " + g.getHeight());

//
// draw centered 32x32 square using lines
//

// upper line
g.drawLine(g.getWidth()/2 - 16, g.getHeight()/2 - 16, g.getWidth()/2 + 16, g.getHeight()/2 - 16);
// left vertical
g.drawLine(g.getWidth()/2 - 16, g.getHeight()/2 - 16, g.getWidth()/2 - 16, g.getHeight()/2 + 16);
// right vertical
g.drawLine(g.getWidth()/2 + 16, g.getHeight()/2 - 16, g.getWidth()/2 + 16, g.getHeight()/2 + 16);
// bottom line
g.drawLine(g.getWidth()/2 - 16, g.getHeight()/2 + 16, g.getWidth()/2 + 16, g.getHeight()/2 + 16);

g.flip();

// same as above but with the drawRect function
g.clear()
g.drawRect(g.getWidth()/2 - 16, g.getHeight()/2 - 16, g.getWidth()/2 + 16, g.getHeight()/2 + 16);
g.flip();

// split the screen in 4
g.clear();

g.drawLine(g.getWidth()/2, 0, g.getWidth()/2, g.getHeight());
g.drawLine(0, g.getHeight()/2, g.getWidth(), g.getHeight()/2);

g.flip();
