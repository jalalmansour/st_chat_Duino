function getFileTypeIcon(extension) {
            const icons = {
                'txt': 'https://img.icons8.com/?size=100&id=48585&format=png&color=000000',
                'rtf': 'https://img.icons8.com/?size=100&id=alrozKWyr88D&format=png&color=000000',
                'doc': 'https://img.icons8.com/?size=100&id=30464&format=png&color=000000',
                'docx': 'https://img.icons8.com/?size=100&id=117563&format=png&color=000000',
                'pdf': 'https://cdn-icons-png.flaticon.com/512/136/136522.png',
                'odt': 'https://img.icons8.com/?size=100&id=sAolEVcdHUOQ&format=png&color=000000',
                'md': 'https://img.icons8.com/?size=100&id=n86bfH5a2pwD&format=png&color=000000',
                'html': 'https://cdn-icons-png.flaticon.com/512/136/136528.png',
                'htm': 'https://cdn-icons-png.flaticon.com/512/136/136528.png',
                'xml': 'https://img.icons8.com/?size=100&id=hldPIHbULUz9&format=png&color=000000',
                'csv': 'https://img.icons8.com/?size=100&id=107445&format=png&color=000000',
                'tsv': 'https://cdn-icons-png.flaticon.com/512/136/136524.png',
                'json': 'https://img.icons8.com/?size=100&id=DuPGo_P_q_-x&format=png&color=000000',
                'yaml': 'https://cdn-icons-png.flaticon.com/512/136/136539.png',
                'ini': 'https://img.icons8.com/?size=100&id=vLZoUhTegOUx&format=png&color=000000',
                'cfg': 'https://cdn-icons-png.flaticon.com/512/136/136534.png',
                'xls': 'https://img.icons8.com/?size=100&id=13425&format=png&color=000000',
                'xlsx': 'https://img.icons8.com/?size=100&id=144I2HGbcQGj&format=png&color=000000',
                'ods': 'https://cdn-icons-png.flaticon.com/512/136/136534.png',
                'ppt': 'https://img.icons8.com/?size=100&id=19670&format=png&color=000000',
                'pptx': 'https://img.icons8.com/?size=100&id=117557&format=png&color=000000',
                'odp': 'https://cdn-icons-png.flaticon.com/512/136/136533.png',
                'py': 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
                'java': 'https://img.icons8.com/?size=100&id=uKNojs9CytOJ&format=png&color=000000',
                'js': 'https://img.icons8.com/?size=100&id=XEpjPzC3Okps&format=png&color=000000',
                'cpp': 'https://img.icons8.com/?size=100&id=O9DJ5HgMzcFJ&format=png&color=000000',
                'hpp': 'https://cdn-icons-png.flaticon.com/512/136/136541.png',
                'c': 'https://img.icons8.com/?size=100&id=XEpjPzC3Okps&format=png&color=000000',
                'php': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'go': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'swift': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'rb': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'cs': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'ts': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'sql': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'css': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'jpg': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'jpeg': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'png': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'gif': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'bmp': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'tiff': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'webp': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'svg': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'eps': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'ai': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'ico': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'psd': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'raw': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'cr2': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'nef': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'orf': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'arw': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'dng': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'heic': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'ind': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'jxr': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'jp2': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'jpm': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'jpf': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'pbm': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'pgm': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'ppm': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'yuv': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'mp4': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'avi': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'mov': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'wmv': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'flv': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'mkv': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'webm': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'h264': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'h265': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'gifv': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'wav': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'mp3': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'ogg': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'flac': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'aac': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'm4a': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'aiff': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000',
                'wma': 'https://img.icons8.com/?size=100&id=Fbfs8yWDXv3K&format=png&color=000000'
            };
            return icons[extension] || 'https://img.icons8.com/?size=100&id=48690&format=png&color=000000';
        }

function sendValue(value) {
    if (typeof Streamlit !== 'undefined') {
        Streamlit.setComponentValue(value);
    } else {
        console.error('Streamlit not defined.');
    }
}

function onRender(event) {
    if (!window.rendered) {
        window.rendered = true;
		const stFrameRoot = document.getElementById('st-frame-root');
		document.body.style.overflow = "hidden";
		addCustomStyles(); 
        document.getElementById('file-upload').addEventListener('change', previewFiles);
        document.getElementById('submit-button').addEventListener('click', submitData);
        document.getElementById('prompt-input').addEventListener('input', function () {
            this.style.height = 'auto';
            if (this.scrollHeight <= parseInt(getComputedStyle(this).maxHeight)) {
                this.style.height = (this.scrollHeight) + 'px';
            } else {
                this.style.height = getComputedStyle(this).maxHeight;
                this.style.overflowY = 'auto';
            }
        });
		document.getElementById('drop-zone').addEventListener('dragover', handleDragOver);
        document.getElementById('drop-zone').addEventListener('drop', handleDrop);
        document.addEventListener('paste', handlePaste);
		
    }
}

// ... (rest of the code)

// Update the submitData function to generate video thumbnails
function submitData() {
    var promptInput = document.getElementById('prompt-input').value.trim();
    var files = document.getElementById('file-upload').files;

    // Clear file input value
    document.getElementById('file-upload').innerHTML = ''; 

    document.getElementById('prompt-input').value = '';
    document.getElementById('uploaded-files').innerHTML = ''; 

    // Reset the color of the submit button
    var submitButton = document.getElementById('submit-button');
    submitButton.style.backgroundColor = '';

    var filesData = []; // Array to store file data

    // Counter for tracking processed files
    var processedCount = 0;

    // If no prompt input and no files, show alert and return
    if (promptInput === '' && files.length === 0) {
        alert('Please enter a prompt or upload at least one file.');
        return;
    }

    console.log('Prompt Input:', promptInput);
    console.log('Uploaded Files:', files);

    // Process files if any are uploaded
    if (files.length > 0) {
        // Loop through each file
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Convert the data URL to base64
                const base64Data = e.target.result.split(',')[1];
                // Get the file extension
                const extension = file.name.split('.').pop().toLowerCase();
                // Get the icon URL
                let iconUrl = getFileTypeIcon(extension); 

                if (file.type.startsWith('image/')) {
                    // Use the image itself as the icon
                    iconUrl = e.target.result; 
                    // Send image data along with other file data
                    filesData.push({
                        name: file.name,
                        // data: base64Data,
                        // icon: iconUrl,
                        // type: file.type
                    });
                } if (file.type.startsWith('video/')) {
                    // Generate thumbnail from video
                    var video = document.createElement('video');
                    video.src = e.target.result;
                    video.addEventListener('loadeddata', function() {
                        // Create a canvas element
                        var canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        var ctx = canvas.getContext('2d');
                        // Draw the first frame of the video on the canvas
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        // Convert the canvas to a data URL
                        var thumbnailUrl = canvas.toDataURL('image/jpeg');
                        // Send the thumbnail URL as the icon
                        filesData.push({
                            name: file.name,
                            data: base64Data,
                            icon: thumbnailUrl,
                            type: file.type
                        });
                        // Send the complete file object to Streamlit
                        sendValue({
                            promptInput: promptInput,
                            files: filesData
                        });
                    });
                } else {
                    // Send all other file types with their original icons
                    filesData.push({
                        name: file.name,
                        data: base64Data,
                        icon: iconUrl,
                        type: file.type
                    });
                    // Send the complete file object to Streamlit
                    sendValue({
                        promptInput: promptInput,
                        files: filesData
                    });
                }
            };
            reader.readAsDataURL(file);
        });
    } else {
        // Send the prompt input to Streamlit if no files are uploaded
        sendValue({
            promptInput: promptInput,
            files: []
        });
    }
}



// ... (rest of the code)



function previewFiles(event) {
    var files = event.target.files || event.dataTransfer.files; 
    var output = document.getElementById('uploaded-files');
    output.innerHTML = '';
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var div = document.createElement('div');
        div.className = 'flex items-center mr-0.5 ml-0.5 mb-0.5' + (i >= 5 ? ' hidden extra-file' : '');
        var fileName = file.name;
        var extension = fileName.split('.').pop().toLowerCase();
        var iconUrl = getFileTypeIcon(extension);

        // Set initial div content for file preview
        div.innerHTML = `<div class="flex flex-col items-center justify-between mr-0.5 ml-0.5 mb-0.5">
            <img src="${iconUrl}" alt="File Type Icon" class=" w-8 h-8 rounded-lg mb-0.5" />
            <span class="truncate max-w-xs">${truncateText(fileName, 20)}</span>
            <button class="bg-red-500 border-0 p-0 rounded-full text-white cursor-pointer ml-0 h-4 w-4 flex items-center justify-center" onclick="removeFile(this)">×</button></div>`;
        
        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = (function(div, file) {
                return function(e) {
                    // Update div content for image preview
                    div.innerHTML = `<div class="flex flex-col items-center justify-between mr-0.5 ml-0.5 mb-0.5">
                        <img src="${e.target.result}" alt="Uploaded Image" class=" w-12 h-12 rounded-lg mr-1" />   
                        <span class="truncate max-w-xs">${truncateText(file.name, 20)}</span>
                        <button class="bg-red-500 border-0 p-0 rounded-full text-white cursor-pointer ml-0 h-4 w-4 flex items-center justify-center" onclick="removeFile(this)">×</button></div>`;
                };
            })(div, file);
			
            reader.readAsDataURL(file);
        }
		
		
		else if (file.type.startsWith('video/')) {
            var reader = new FileReader();
            reader.onload = (function(div, file) {
                return function(e) {
                    // Update div content for video thumbnail
                    div.innerHTML = `<div class="flex flex-col items-center justify-between mr-0.5 ml-0.5 mb-0.5">
                        <video width="100" height="100" poster="${e.target.result}" controls></video>   
                        <span class="truncate max-w-xs">${truncateText(file.name, 20)}</span>
                        <button class="bg-red-500 border-0 p-0 rounded-full text-white cursor-pointer ml-0 h-4 w-4 flex items-center justify-center" onclick="removeFile(this)">×</button></div>`;
                };
            })(div, file);
            reader.readAsDataURL(file);
        }

        output.appendChild(div);
    }

    if (files.length > 5) {
        document.getElementById('show-more-container').style.display = 'flex';
    }

    // Call updateSubmitButton to check if files are uploaded
    updateSubmitButton();
}




// Add event listeners once the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for file upload input
    document.getElementById('file-upload').addEventListener('change', function () {
        previewFiles();
        updateSubmitButton();
    });

    // Add event listener for prompt input
    document.getElementById('prompt-input').addEventListener('input', function () {
        updateSubmitButton();
    });
});

function updateSubmitButton() {
    const promptInput = document.getElementById('prompt-input').value.trim();
    const files = document.getElementById('file-upload').files;
    const submitButton = document.getElementById('submit-button');

    // Enable submit button if files are uploaded or prompt is entered
    if (promptInput !== '' || files.length > 0) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#00ff00'; // Set background color to green
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = ''; // Remove background color
    }
}



function removeFile(button) {
    var div = button.parentNode;
    div.parentNode.removeChild(div);

    // Get the file upload input
    const fileInput = document.getElementById('file-upload');

    // Get the index of the file to remove based on the button's position
    const fileIndex = Array.from(fileInput.parentNode.children).indexOf(div);

    // Remove the file at the corresponding index
    const files = Array.from(fileInput.files); // Create a copy of the file list
    files.splice(fileIndex, 1); // Remove the file from the copy

    // Reset the file input with the updated file list
    const newFiles = new DataTransfer();
    files.forEach(file => newFiles.items.add(file));
    fileInput.files = newFiles.files; 

    // Update submit button state after removing the file
    updateSubmitButton();
}



// Add event listener to prevent form submission when remove button is clicked
document.querySelectorAll('.extra-file button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
});





function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;
}

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender);
Streamlit.setComponentReady();
// Streamlit.setFrameHeight(300);
Streamlit.setFrameHeight(410);
Streamlit.setFrameWidth(1400);
// Streamlit.setFrameRoot.style.bottom = "0";
stFrameRoot.style.bottom = "0";

function addCustomStyles() {
  // const contentContainer = document.getElementById('content-container');
  // const mainContent = document.getElementById('main-content');
  // const stFrameRoot = document.getElementById('st-frame-root');

  // Style the Streamlit frame
  // stFrameRoot.style.position = "relative"; // Allow relative positioning
  // stFrameRoot.style.bottom = "0"; // Position at the bottom of the viewport
  // stFrameRoot.style.bottom = "0"; // Position at the bottom of the viewport

  // Style the main content area
  // mainContent.style.position = "relative"; // Allow relative positioning
  // mainContent.style.height = "calc(100vh - " + stFrameRoot.offsetHeight + "px)"; // Adjust height to fill remaining space
}