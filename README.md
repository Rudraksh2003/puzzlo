# puzzlo
This is a web-based puzzle game that allows users to upload their own images, which are then divided into smaller pieces to form a puzzle. Users can drag and drop these pieces into the correct positions to solve the puzzle. The game is implemented entirely in JavaScript, HTML, and CSS, without the need for a backend.

---

## Features

- **Custom Image Upload**: Users can upload their own images to create a unique puzzle.
- **Automatic Image Division**: The uploaded image is divided into smaller pieces (e.g., a 4x4 grid).
- **Drag and Drop Functionality**: Pieces can be dragged and dropped into the puzzle grid.
- **No Backend Required**: The entire game runs in the browser using the HTML5 Drag and Drop API and Canvas API.
- **Prevent Overlapping**: Prevents multiple pieces from being placed on the same grid spot.

---

## Technologies Used

- **HTML5**: Structure and layout of the web page.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Core functionality, including image processing, grid creation, and drag-and-drop logic.
- **Canvas API**: Used to divide the uploaded image into smaller pieces.
- **HTML5 Drag and Drop API**: Enables the interactive drag-and-drop functionality.

---

## How to Use

1. **Open the Game**: Open the `index.html` file in your browser.
2. **Upload an Image**: Use the file input field to upload an image of your choice.
3. **Puzzle Creation**: The uploaded image will be divided into smaller pieces and displayed in a grid.
4. **Play the Puzzle**:
   - Drag pieces from the pool and drop them into the grid.
   - Ensure each piece is placed in the correct spot.
   - Pieces cannot overlap or be placed on already occupied spots.
5. **Win Condition**: Arrange all pieces correctly to complete the puzzle.

---

## Project Structure

```
project-folder/
|-- index.html       # HTML structure of the game
|-- look.css         # Styling for the puzzle game
|-- script.js        # Main JavaScript logic for the game
|-- images/          # Folder for storing uploaded and divided images
```

---

## Key Functions

### 1. **handleImageUpload**
Handles the image upload process, reads the file, and loads the image for further processing.

### 2. **divideImage**
Divides the uploaded image into smaller pieces using the Canvas API and creates draggable pieces.

### 3. **dragStart**
Sets the currently dragged piece and transfers its data.

### 4. **dragOver**
Allows the drop event by preventing the default behavior.

### 5. **dropPiece**
Handles the placement of a piece into a drop zone and ensures no overlapping.

---

## Future Enhancements

1. **Dynamic Grid Sizes**: Allow users to select the grid size (e.g., 3x3, 5x5).
2. **Win Detection**: Automatically detect when the puzzle is solved.
3. **Timer and Score**: Add a timer and scoring system to make the game more competitive.
4. **Mobile Support**: Optimize drag-and-drop functionality for touch devices.

---

## How to Contribute

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

