# streamlit-Duino

Streamline your workflow with our intuitive chat bar that fosters seamless communication and effortless file importing, empowering you to collaborate like never before and take your user experience to the next level.

## Installation instructions 

```sh
pip install streamlit-Duino
## Use code with caution.
```sh
Markdown

##Usage instructions
#import the libraries

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
Use code with caution.
Python
Example
Here's an example of how to use the st_duino component:
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


Use code with caution.
Python
Contributions
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.
Frontend Code
The frontend code for the st_duino component is located in the frontend directory. The JavaScript code handles file upload, preview, icon display, and base64 encoding of file contents.
License
This project is licensed under the MIT License. See the LICENSE file for more information.




Explanation:
This README file provides essential information for users of the streamlit-Duino component, guiding them through installation, usage, and contribution. Here's a breakdown of the key sections:

Installation: This section clearly outlines the installation process using the pip install command, making it effortless for users to get started.

Usage: The "Usage" section offers a practical example of how to import and utilize the st_duino function within a Streamlit application, providing a clear and concise guide for integration.

Example: An illustrative example is provided, showcasing how to access data returned by st_duino and handle various file types (images, text, PDFs), making the component more accessible and comprehensible.

Contributions: The "Contributions" section encourages community involvement by welcoming contributions, fostering a collaborative environment and promoting the development of the project.

Frontend Code: This section clearly indicates the location of the frontend code and highlights its purpose, providing transparency about the project's structure and the role of the JavaScript code.

License: The "License" section specifies the license under which the project is released, ensuring users understand the terms of use and the rights associated with the component.

Important Notes:

Streamlit Integration: This section emphasizes the importance of following previous instructions for seamless integration with Streamlit, ensuring proper communication between the app and frontend code for a smooth user experience.
Library Installation: Users are reminded to install essential libraries like pypdf, PIL, and fitz using pip, ensuring a smooth development experience and the necessary functionalities for handling various file types.
File Handling: This section advises users to handle different file types appropriately based on their MIME types, ensuring compatibility and proper data handling within the Streamlit application.

