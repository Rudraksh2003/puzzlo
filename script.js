const imageInput = document.getElementById("imageInput");
const puzzleContainer = document.getElementById("puzzleContainer");
const piecesContainer = document.getElementById("piecesContainer");

imageInput.addEventListener("change", handleImageUpload);

let draggedPiece = null;

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function () {
            divideImage(img);
        };
    };

    reader.readAsDataURL(file);
}

function divideImage(image) {
    const rows = 4;
    const cols = 4;
    const pieceWidth = 120;
    const pieceHeight = 120;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = pieceWidth;
    canvas.height = pieceHeight;

    // Clear previous pieces
    piecesContainer.innerHTML = "";
    puzzleContainer.innerHTML = "";

    // Divide the image into smaller parts
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.clearRect(0, 0, pieceWidth, pieceHeight);
            ctx.drawImage(
                image,
                col * pieceWidth,
                row * pieceHeight,
                pieceWidth,
                pieceHeight,
                0,
                0,
                pieceWidth,
                pieceHeight
            );

            const piece = document.createElement("div");
            piece.classList.add("img");
            piece.style.backgroundImage = `url(${canvas.toDataURL()})`;
            piece.style.backgroundSize = `${image.width}px ${image.height}px`;
            piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;

            piece.draggable = true;

            // Add drag and drop functionality
            piece.addEventListener("dragstart", dragStart);
            piece.addEventListener("dragend", dragEnd);

            piecesContainer.appendChild(piece);
        }
    }

    // Add drop zones
    for (let i = 0; i < rows * cols; i++) {
        const dropZone = document.createElement("div");
        dropZone.classList.add("img");
        dropZone.style.background = "transparent";
        dropZone.setAttribute("data-filled", "false"); // Track if the drop zone is filled

        dropZone.addEventListener("dragover", dragOver);
        dropZone.addEventListener("drop", dropPiece);

        puzzleContainer.appendChild(dropZone);
    }
}

function dragStart(e) {
    draggedPiece = e.target;
    e.dataTransfer.setData("text/plain", e.target.style.backgroundImage); // Pass background image data
}

function dragEnd(e) {
    // Reset dragged piece if not placed correctly
    if (draggedPiece && !draggedPiece.parentElement.classList.contains("img")) {
        piecesContainer.appendChild(draggedPiece);
    }
    draggedPiece = null;
}

function dragOver(e) {
    e.preventDefault();
}
function dropPiece(e) {
    e.preventDefault();

    const dropZone = e.target;

    // Check if the drop zone already has a piece
    if (dropZone.getAttribute("data-filled") === "true") {
        // If already filled, return the previous piece to the pool
        const previousBackground = dropZone.style.backgroundImage;

        if (previousBackground) {
            const newPiece = document.createElement("div");
            newPiece.classList.add("img");
            newPiece.style.backgroundImage = previousBackground;
            newPiece.draggable = true;

            // Reattach drag events to the new piece
            newPiece.addEventListener("dragstart", dragStart);
            newPiece.addEventListener("dragend", dragEnd);

            piecesContainer.appendChild(newPiece);
        }
    }

    // Move the dragged piece into the drop zone
    dropZone.style.backgroundImage = draggedPiece.style.backgroundImage;
    dropZone.setAttribute("data-filled", "true");

    // Ensure the dragged piece returns to the pool if needed
    piecesContainer.appendChild(draggedPiece);

    // Remove the dragged piece's background to avoid duplicates
    draggedPiece.style.backgroundImage = "";

    draggedPiece = null; // Reset dragged piece
}