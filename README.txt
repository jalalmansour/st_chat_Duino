```markdown
# streamlit-Duino

Streamline your workflow with our intuitive chat bar that fosters seamless communication and effortless file importing, empowering you to collaborate like never before and take your user experience to the next level.

## Installation instructions 

```sh
pip install streamlit-Duino
```

## Usage instructions

```python
import streamlit as st

from st_duino import st_duino

def main():
    st.write("## Example")
    value = st_duino()

    # Access the returned data from the JavaScript component
    if value:
        prompt = value["promptInput"]
        files = value["files"]

        # Do something with the prompt and files, like displaying them
        st.write(f"Prompt: {prompt}")
        if files:
            st.write("Uploaded Files:")
            for file in files:
                st.write(f"- {file['name']}")
                if "data" in file:
                    # Check for image
                    if file["name"].lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                        decoded_data = base64.b64decode(file["data"])
                        img = PIL.Image.open(BytesIO(decoded_data))
                        st.image(img, clamp=True)
                    # Check for text
                    elif file["name"].lower().endswith(('.txt', '.csv', '.json', '.md')):
                        decoded_data = base64.b64decode(file["data"]).decode('utf-8')
                        st.markdown(f"## Content of {file['name']}")
                        st.markdown(decoded_data)
                    # Check for PDF 
                    elif file["name"].lower().endswith('.pdf'): 
                        pdf_data = base64.b64decode(file["data"])
                        pdf_doc = fitz.open(stream=BytesIO(pdf_data))
                        st.markdown(f"## Content of {file['name']}")
                        st.markdown(pdf_doc.load_page(0).get_text())
                    else:
                        st.write(f"Download {file['name']}:")
                        st.download_button(
                            label="Download",
                            data=file["data"],
                            file_name=file['name'],
                            mime="application/octet-stream"
                        )

if __name__ == "__main__":
    main()
```

## Example

Here's an example of how to use the `st_duino` component:

```python
import streamlit as st
from st_duino import st_duino

st.title("Streamlit Duino Example")

value = st_duino()

if value:
    prompt = value["promptInput"]
    files = value["files"]

    st.write(f"**Prompt:** {prompt}")

    if files:
        st.write("**Uploaded Files:**")
        for file in files:
            st.write(f"- {file['name']}")
            # ... Handle file content (display images, text, etc.) ...
```

## Contributions

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## Frontend Code

The frontend code for the `st_duino` component is located in the `frontend` directory. The JavaScript code handles file upload, preview, icon display, and base64 encoding of file contents.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

**Explanation:**

* **Installation:** Provides the `pip install` command for installing the component.
* **Usage:** Shows an example of how to import the component and use the `st_duino` function in your Streamlit app.
* **Example:**  Includes a basic example of how to access the data returned by `st_duino` and handle images, text files, and other files.
* **Contributions:** Encourages contributions to the project.
* **Frontend Code:**  Indicates the location of the frontend code and its purpose.
* **License:** Specifies the license under which the project is released.

**Important Notes:**

* **Streamlit Integration:** Make sure to follow the instructions provided in previous responses for correctly setting up the communication between your Streamlit app and the frontend JavaScript code.
* **Library Installation:**  Install the required libraries like `pypdf`, `PIL`, and `fitz` using `pip`.
* **File Handling:**  Remember to handle different file types (images, text, PDFs) appropriately in your Streamlit code based on their MIME types.
```

**I've stylized your README file with Markdown formatting, making it more readable and visually appealing.** 

**Remember:** You'll need to ensure you have the necessary libraries installed (`pypdf`, `PIL`, `fitz`) and that you've correctly integrated the frontend code with your Streamlit app. 

**Also:** Consider adding a screenshot or GIF demonstrating the `st_duino` component in action. This will make your README more engaging and helpful for potential users.